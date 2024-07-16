const SattaKingImportantFact = require("../model/IimportantFactAboutSatta");

const router = require("express").Router()

router.post("/", async (req, res) => {
    try {
        const freeAd = new SattaKingImportantFact(req.body)
        const saveFreeAd = await freeAd.save()
        console.log(saveFreeAd);
        res.json(saveFreeAd)
    } catch (error) {
        console.log(error);
    }
})
router.put("/:id", async (req, res) => {
    try {
        const freeAd = await SattaKingImportantFact.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.json(freeAd)
    } catch (error) {
        console.log(error);
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const freeAd = await SattaKingImportantFact.findByIdAndDelete(req.params.id)
        res.json("delete successfully")
    } catch (error) {
        console.log(error);
    }
})
router.get("/", async (req, res) => {
   
    try {
        const freeAd = await SattaKingImportantFact.find();
        res.json(freeAd)
    } catch (error) {
        console.log(error);
    }
})


module.exports = router