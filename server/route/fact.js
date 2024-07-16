const FreeAd = require("../model/freeFreeSattaKingBlank");
const Fact = require("../model/sattaFact");

const router = require("express").Router()

router.post("/", async (req, res) => {

    try {
        const freeAd = new Fact(req.body)
        const saveFreeAd = await freeAd.save()

        res.json(saveFreeAd)
    } catch (error) {
        console.log(error);
    }



})
router.put("/:id", async (req, res) => {
    try {
        const update = await Fact.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.json(update)


      
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
        const fact = await Fact.find(query).sort({ updatedAt: -1 });
        res.json(fact)
    } catch (error) {
        console.log(error);
    }
})
router.delete("/:id", async (req, res) => {

    try {
        const fact = await Fact.findByIdAndDelete(req.params.id);
        res.json("Delete Successfully")
    } catch (error) {
        console.log(error);
    }
})
module.exports = router