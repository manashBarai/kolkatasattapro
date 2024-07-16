const Notice = require("../model/NoticeBoard");

const router = require("express").Router()

router.post("/", async (req, res) => {

    try {
        const freeAd = new Notice(req.body)
        const saveFreeAd = await freeAd.save()
        res.json(saveFreeAd)
    } catch (error) {
        console.log(error);
    }



})
router.put("/:id", async (req, res) => {

    try {
        const update = await Notice.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.json(update)
    } catch (error) {
        console.log(error);
    }
})
router.delete("/:id", async (req, res) => {

    try {
        const update = await Notice.findByIdAndDelete(req.params.id)
        res.json("delete successfully")
    } catch (error) {
        console.log(error);
    }
})
router.get("/", async (req, res) => {
    const {admin}=req.query;
    let query;
    if (admin==='1') query={}
    else query={validation:true}
    try {
        const getNotice = await Notice.find(query)
        res.json(getNotice)
    } catch (error) {
        console.log(error);
    }
})

module.exports = router