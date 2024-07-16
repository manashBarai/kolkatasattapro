const SattaKingRecordChartjs = require("../model/SattaKingRecordChartjs");
const createError = require("../util/creatError");


const router = require("express").Router()

router.post("/", async (req, res, next) => {
    const { year, month, resultList } = req.body;
   

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
            return next(createError(400, "Result list is required"));
        }

        const requiredKeys = [
            'day', 'delhiLuckyBazar', 'disawer', 'faridabad',
            'gaziyabad', 'kolkataKing', 'gali', 'delhiBazar', 'shreeGanesh'
        ];
        
        const firstResultKeys = Object.keys(resultList[0]);
        
        const hasRequiredKeys = requiredKeys.some(requiredKey =>
            firstResultKeys.some(resultKey =>
                resultKey.includes(requiredKey)
            )
        );
        
        if (!hasRequiredKeys) {
            return next(createError(405, "File does not match with expected headings"));
        }

        // Add DateTime to each result
        for (const result of resultList) {
            const { day } = result;
            result.DateTime = dateToMilliseconds(day, month, year);
        }

        const existingRecord = await SattaKingRecordChartjs.findOne({ year: year, month: month }).exec();
           
        if (existingRecord) {
            for (const newResult of resultList) {
                const existingDayResult = existingRecord.resultList.find(result => result.day === newResult.day);
                
                if (existingDayResult) {
                    // Update existing day result fields that are not blank in newResult
                    
                    Object.keys(newResult).forEach(key => {
                        if (newResult[key] !== "" && newResult[key]!==null) {
                          
                            existingDayResult[key] = newResult[key];
                        }
                    });
                } else {
                    // Add new result for a new day
                    existingRecord.resultList.push(newResult);
                }
            }
            await existingRecord.save();
        } else {
            // No existing record for the year and month, create a new one
            const newRecord = new SattaKingRecordChartjs({ year, month, resultList });
            await newRecord.save();
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

router.get("/fullYear", async (req, res) => {

    const year = req.query.year;
    
    try {
       
        const chart = await SattaKingRecordChartjs.find({year:year})
      
        res.json(chart)

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Internal Server Error" });
    }
});


router.get("/currentTDate", async (req, res) => {
    try {
        const currentDate = new Date(); // Get the current date
        const currentMonth = currentDate.getMonth() + 1; // Get the current month (adjusting as getMonth() returns 0-based index)
        const currentDay = currentDate.getDate(); // Get the current day of the month

        // Find all records for the current month
        const currentMonthRecords = await SattaKingRecordChartjs.find({ year: '2024', month: currentMonth });

        if (!currentMonthRecords || currentMonthRecords.length === 0) {
            // If no records found for the current month, return pending
            res.json({ status: 'pending', message: 'No records found for the current month' });
            return;
        }

        let currentDayResult = null;

        // Iterate through each record and find the result for the current day
        for (const record of currentMonthRecords) {
            currentDayResult = record.resultList.find(result => result.day === currentDay);
            if (currentDayResult) {
                break; // Exit loop if result found for the current day
            }
        }

        if (!currentDayResult) {
            // If no result found for the current day in any record, return pending
            res.json({ status: 'pending', message: `No result found for day ${currentDay}` });
        } else {
            // Return the result for the current day
            res.json({ status: 'success', result: currentDayResult });
        }
    } catch (error) {
        console.error(error);
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