const FreeAd = require("../model/freeFreeSattaKingBlank");

const router = require("express").Router()

router.post("/", async (req, res) => {

    try {
        const freeAd = new FreeAd(req.body)
        const saveFreeAd = await freeAd.save()
        res.json(saveFreeAd)
    } catch (error) {
        console.log(error);
    }



})
router.put("/:id", async (req, res) => {
    try {
        const freeAd = await FreeAd.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.json(freeAd)
    } catch (error) {
        console.log(error);
    }
})
router.delete("/:id", async (req, res) => {

    try {
        const freeAd = await FreeAd.findByIdAndDelete(req.params.id)
        res.json("Delete Successfully")
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
        const freeAd = await FreeAd.find(query)
        res.json(freeAd)
    } catch (error) {
        console.log(error);
    }
})
module.exports = router