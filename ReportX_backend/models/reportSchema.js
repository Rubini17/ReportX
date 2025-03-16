const mdb= require('mongoose');
const reportSchema= mdb.Schema({
    email: String,
    issue: String,
    location: String,
    pincode: Number,
    status: { type: String, default: "Pending" },

})

const report_schema = mdb.model("report", reportSchema);
module.exports= report_schema;