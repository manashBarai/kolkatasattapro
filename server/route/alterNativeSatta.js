const SattaKingAlterNative = require("../model/alterNativeSattaKing");

const router = require("express").Router()

router.post("/", async (req, res) => {
    try {
        const freeAd = new SattaKingAlterNative(req.body)
        const saveFreeAd = await freeAd.save()
     
        res.json(saveFreeAd)
    } catch (error) {
        console.log(error);
    }
})
router.put("/:id", async (req, res) => {
    try {
        const freeAd = await SattaKingAlterNative.findByIdAndUpdate(req.params.id,{$set:req.body},{new:true})
        res.json(freeAd)
    } catch (error) {
        console.log(error);
    }
})
router.delete("/:id", async (req, res) => {
    try {
        const freeAd = await SattaKingAlterNative.findByIdAndDelete(req.params.id)
        res.json("delete successfully")
    } catch (error) {
        console.log(error);
    }
})
router.get("/", async (req, res) => {
   
    try {
        const freeAd = await SattaKingAlterNative.find();
        res.json(freeAd)
    } catch (error) {
        console.log(error);
    }
})


module.exports = router