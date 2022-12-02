let express = require ("express")
let path = require("path")
let connectdb = require("./connection/connectDb.js")
const entry = require("./model/model.js")
const add = require("./model/model.js")
let model= require("./model/model.js")
let app = express()
// app.use(express.static('public'));
app.use(express.urlencoded({ extended : true}))
connectdb()
add()

// let myfile = path.join(__dirname, "index.html")
app.use(express.static (path.join(__dirname, "public")))

app.get("/", (req,res)=>{
res.sendFile(path.join(__dirname, "index.html")
)
})

app.get("/gallery", (req,res)=>{
    res.sendFile(path.join(__dirname, "gallery.html"))
})


app.get("/destination", (req,res)=>{
    res.sendFile(path.join(__dirname, "destination.html"))
})
app.get("*",(req,res)=>{
    res.sendFile(path.join(__dirname,"../public", "error.html"));

});
       
app.get("/gallery",)

app.post("/index", (req, res) => {
    let placename = req.body.name
    let nguests = req.body.guests
    let arrivalDate = req.body.arrivalDate
    let leavingDate = req.body.leavingDate

    let ent = new entry({
        place : placename,
        guests : nguests,
        leave : arrivalDate,
        comeback : leavingDate
    })

    ent.save()
    res.sendFile(path.join(__dirname, "index.html"))
})
   



app.listen("3000", ()=>{
 
console.log('connected to the server')
console.log(__dirname)
let file = path.join(__dirname, "school.html")
console.log(file)
})