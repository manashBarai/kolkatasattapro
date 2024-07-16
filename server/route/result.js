const SattaKingRecordChartjs = require("../model/SattaKingRecordChartjs");
const createError = require("../util/creatError");


const router = require("express").Router()

router.post("/", async (req, res, next) => {
    const { year, month, resultList } = req.body;
    console.log(year, month, resultList);
    function dateToMilliseconds(day, month, year) {
        const dateString = `${year}-${month}-${day}`;
        const date = new Date(dateString);
        date.setHours(0, 0, 0, 0);
        const indianTimeString = date.toLocaleString("en-US", { timeZone: "Asia/Kolkata" });
        const indianDate = new Date(indianTimeString);
        return indianDate.getTime();
    }

    try {
        if (!resultList || resultList.length === 0) {
            return createError(400, "Result list is required");
        }

        const requiredKeys = [
            'day', 'delhiLuckyBazar', 'disawer', 'faridabad',
            'gaziyabad', 'kolkataKing', 'gali', 'delhiBazar', 'shreeGanesh'
        ];

        const hasRequiredKeys = requiredKeys.every(key => key in resultList[0]);
        if (!hasRequiredKeys) {
            return next(createError(405, "File does not match with expected headings"));
        }
        // DateTime
        for (const result of resultList) {
            const { day } = result;
            result.DateTime = dateToMilliseconds(day, month, year);
        }

        const result = await SattaKingRecordChartjs.findOne({ year: year, month: month }).select("_id");

        if (result) {
            await SattaKingRecordChartjs.findByIdAndUpdate(result._id, { $push: { resultList: { $each: resultList } } });
        } else {
            const newRecord = new SattaKingRecordChartjs({ year, month, resultList });
            await newRecord.save();
            console.log(newRecord);
        }

        res.status(200).send("Record updated successfully");

    } catch (error) {
        console.error(error);
        next(createError(500, "Internal Server Error"));
    }
});


router.get("/", async (req, res) => {

    const year = req.query.year;
    const month = parseInt(req.query.month)
    let page = parseInt(req.query.page) || 1;
    let limit = parseInt(req.query.limit) || 10;
    let skip = (page - 1) * limit;

    
    try {
        if (req.query.year && req.query.month) {
            const chart = await SattaKingRecordChartjs.findOne({ year: year, month: month });
           
            res.json(chart);
        } else {
            const chart = await SattaKingRecordChartjs.find().sort({ updatedAt: -1 }).select('-statusHistory -Comment')
                .skip(skip)
                .limit(limit)
                .exec();
            res.json(chart);
        }

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.delete("/:id", async (req, res) => {

   try {
        await SattaKingRecordChartjs.findByIdAndDelete(req.params.id)
    res.json("success Fully Deleted")
   } catch (error) {
    console.log(error);
    
   } 

    
   
});


module.exports = router