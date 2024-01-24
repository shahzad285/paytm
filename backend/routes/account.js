const express = require('express');
const router = express.Router();
const zod = require("zod");
const {  Account } = require("../db");
const jwt = require("jsonwebtoken");
const { JWT_SECRET } = require("../config");
const { authMiddleware } = require('../middleware');

const accountTransfer = zod.object({
    to: zod.string(),
    amount: zod.number()
});

router.get("/balance", authMiddleware, async (req, res) => {

    var account =await Account.findOne({ userId: req.userId });

    if (account == null || account == undefined) {
        res.status(404).send('Account not found');
    }
    res.json({
        balance: account.balance
    })

})

router.get("/transfer", authMiddleware, async (req, res) => {

    const session = await mongoose.startSession();
    session.startTransaction();

    try {
        let account = Account.find({ userId: req.userId });
        let recieverAccount = Account.find({ userId: req.body.to });

        if (account == null || account == undefined) {
            res.status(400).send(' Sender account not found');
            await session.abortTransaction();
            session.endSession();
        }
        if (recieverAccount == null || recieverAccount == undefined) {
            res.status(400).send(' Reciever account not found');
            await session.abortTransaction();
            session.endSession();
        }
        if (account.balance - amount <= 0) {
            res.status(400).send('Insufficient amount');
            await session.abortTransaction();
            session.endSession();
        }
              

    } catch (err) {
        res.status(500).send('Something went wrong');
        await session.abortTransaction();
        session.endSession();
    }
})

module.exports = router;