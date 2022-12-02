const mongoose = require('mongoose')
let schema = new mongoose.Schema({
place:{
    type: String,
    required : true,

},
guests:{
    type: Number,
    required : true,

},

leave:{
    type: Date,
    required : true,

},
comeback:{
    type: Date,
    required : true,

}
})

let entry = new mongoose.model("booking",schema)

// add user 
/*
let add = ()=> {
    let ent = new entry ({
        place : 'Lucknow',
        guests : 5,
        leave : '1/12/2022',
        comeback : '3/2/2022'
    })

    ent.save()
}
*/
module.exports = entry