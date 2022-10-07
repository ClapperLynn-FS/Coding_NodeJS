const express = require("express");
const app= express();

//middleware
app.use(express.json())

//default service call(actuator)

app.get('/',(req,res,next) => {
    res.status(200).json({
        message:'Service is up',
    });
});

//cors(week 3 or 4)
app.use("/example",this.router)

app.use((req,res,next) =>{
    const error = new Error("Not Found");
    error.status=404;
    next(error);
})


app.use((error,req,res,next) => {
    res.status(error.status||500).json({
        error: {
            message: error.message,
            status: error.status,
        }
    })
})

module.exports = app;