const User = require("../model/user")
const jwt=require("jsonwebtoken")
const createError = require("../util/creatError")
const router = require("express").Router()

router.post("/", async (req, res) => {


    try {
        const user = new User(req.body)
        const saveUser = await user.save()
        res.json(saveUser)
    } catch (error) {
        console.log(error);
    }



})

router.post("/login", async (req, res) => {

    const { email, password } = req.body
    try {
        const user = await User.findOne({ email });
        if (!user) {
            return next(createError(404, "User not found"));
        }
        if (user.password !== password) {
            return next(createError(405, "Password invalid"));

        }
        const token = jwt.sign({ id: user._id, userMail: user.email }, process.env.jWT_SECRET);

        res.status(200).json({

            fullName: user.fullName,
            role:user.role,
            email: user.email,
            id: user._id,
            token: `Bearer ${token}`,
        });

    } catch (error) {
        console.log(error);
    }



})
module.exports=router