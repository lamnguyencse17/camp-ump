import express from "express";
// import { signInController } from "../../controllers/Auth";

const router = express.Router();

router.post("/", (req, res) => {
    return res.send("OK");
});

module.exports = router;