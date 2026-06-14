const express = require("express");
const cors = require("cors");
const fs = require("fs");

const app = express();

app.use(cors());
app.use(express.json());

const PIN = "1234";

app.post("/login", (req, res) => {

    if (req.body.pin === PIN) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.get("/entries", (req, res) => {

    const data =
        JSON.parse(
            fs.readFileSync("entries.json")
        );

    res.json(data);
});

app.post("/entries", (req, res) => {

    let data =
        JSON.parse(
            fs.readFileSync("entries.json")
        );

    data.push(req.body);

    fs.writeFileSync(
        "entries.json",
        JSON.stringify(data, null, 2)
    );

    res.json({
        message: "Saved"
    });
});

app.listen(5000, () => {
    console.log(
        "Server running on port 5000"
    );
});