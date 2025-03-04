const mdb= require('mongoose');
const adminSchema= mdb.Schema({
    name: String,
    email: String,
    password: String,
    location: String,
    phone: Number,

})
const admin_schema= mdb.model('admin', adminSchema);
module.exports= admin_schema;