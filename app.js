const express=require('express')

const app=express()

app.get("/", (req, res) => {
    res.send({
        "Message": "Welcome!"
    })
});

app.get("/health", (req, res) => {
    res.send({
        "Message": "Healthy"
    })
});

app.listen(3000, () => {
    console.log("Server is Running")
});

