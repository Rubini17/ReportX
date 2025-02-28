const mdb= require('mongoose');
const reportSchema= mdb.Schema({
    email: String,
    issue: String,
    location: String,
    pincode: Number

})

const report_schema = mdb.model("report", reportSchema);
module.exports= report_schema;