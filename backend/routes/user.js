const express = require('express');
const router = express.Router();
const zod = require("zod");
const { User,Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require('../middleware');

const signupBody = zod.object({
    username: zod.string().email(),
    password: zod.string().min(6),
    firstname: zod.string().max(50),
    lastname: zod.string().max(50)
});


const signinBody = zod.object({
    username: zod.string().email(),
    password: zod.string()
});

const updateuserBody = zod.object({
    firstName: zod.string().optional(),
    lastName: zod.string().optional(),
    password: zod.string().optional()
});

router.post("/signup", async (req, res) => {
    const { success } = signupBody.safeParse(req.body)
    if (!success) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
        return res.status(411).json({
            message: "Email already taken / Incorrect inputs"
        })
    }

    const user = await User.create({
        userName: req.body.username,
        password: req.body.password,
        firstName: req.body.firstname,
        lastName: req.body.lastname
    });

    const userId = user._id;

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })


    const token = jwt.sign({ userId: userId }, JWT_SECRET);
    res.json({
        message: "User created successfully",
        token: token
    });
})

router.post("/signin", async (req, res) => {
    const { success } = signinBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }

    const existingUser = await User.findOne({ userName: req.body.username, password: req.body.password });
    if (existingUser) {
        const token = jwt.sign({ userId: existingUser._id }, JWT_SECRET);
        res.json({
            message: "Loggedin successfully",
            token: token
        });
    }
    else {
        res.status(411).json({ message: "Error while logging in" });
    }
})

router.put("/", authMiddleware, async (req, res) => {
    const { success } = updateuserBody.safeParse(req.body);
    if (!success) {
        return res.status(411).json({
            message: "Incorrect inputs"
        })
    }
   
    await User.updateOne(req.body,{id:req.userId})

    res.json({message:"Updated successfully"})
    
})

router.get("/bulk", authMiddleware, async (req, res) => {
    
    let filter = req.query.filter || "";
    const users = await User.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
        }, {
            lastName: {
                "$regex": filter
            }
        }]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
    
})

module.exports = router;