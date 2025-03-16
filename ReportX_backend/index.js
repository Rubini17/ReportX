const express= require('express');
const mdb= require('mongoose');
const dotenv= require('dotenv');
const bcrypt= require('bcrypt');
const jwt= require('jsonwebtoken');
const cors= require('cors');
const app= express();
app.use(cors());
app.use(express.json())
const PORT = 3001;
dotenv.config();

const Signup= require('./models/signupSchema');
const Login= require('./models/loginSchema');
const Report = require('./models/reportSchema');
const Admin= require('./models/adminSchema');
mdb
  .connect(process.env.MONGODB_URL)    
  .then(() => {
    console.log("MDB connection successful");
  })
  .catch((err) => {
    console.log("Error occured,check your connection string", err);
  });

  app.get("/",(req, res) => {
    res.send("<h1>Welcome to Backend Server of ReportX</h1>");
  });

  app.post("/signup",async(req,res)=>{
    try{
      
        const {name,email,password,phone,location}= req.body;
        const hashed= await bcrypt.hash(password,10);
        console.log(req.body);
    const newSignup= new Signup({
        name: name,
        email:email,
        password:hashed,
        phone: phone,
        location: location

    });
    newSignup.save();
    console.log("Signup successful");

    res.status(201).json({message:"Signup Successful",isSignup:true});
}


catch(error){
    console.log(error);
    res.status(400).json({message:"Signup UnSuccessful",isSignup:false});
}
}

);

app.get("/getsignupinfo",async(req,res)=>{
    const signup= await Signup.find();
    console.log(signup);
    res.json("Signup detail fetched")
  })

app.post("/login", async(req,res)=>{
    try{
      const {email,password}= req.body;
      const existLogin = await Signup.findOne({
        email:email
      }  );
    
      if(existLogin)
      {
      const isValidPassword= await bcrypt.compare(password, existLogin.password);
        console.log(isValidPassword);
        if(isValidPassword)
        {
           res.status(200).json({message:"login successful",isLogin:true})
        }
        else{
          res.status(401).json({message:"invalid password",isLogin:false})
        }
        
      }
      else{
        res.status(400).json({message:"User not found , wanna Signup ",isLogin:false})
      }
  
  }
    catch(error){
      console.log(error);
      res.status(500).json({message:"Login Unsuccessful", isLogin:false})
  
    }
    
  
  });

  app.post("/adminlogin", async(req,res)=>{
    try{
      const {email,password}= req.body;
      const existLogin = await Admin.findOne({
        email:email
      }  );
    
      if(existLogin)
      {
      const isValidPassword= (password === existLogin.password);
        console.log(isValidPassword);
        if(isValidPassword)
        {
           res.status(200).json({message:" admin login successful",isAdminLogin:true})
        }
        else{
          res.status(401).json({message:"invalid password",isAdminLogin:false})
        }
        
      }
      else{
        res.status(404).json({message:"User not found , wanna Signup ",isAdminLogin:false})
      }
  
  }
    catch(error){
      console.log(error);
      res.status(500).json({message:"Login Unsuccessful", isAdminLogin:false})
  
    }
    
  
  });

  app.post("/report",async(req,res)=>{
    try{
      
        const {email,issue,location,pincode}= req.body;
        console.log(req.body);
    const newReport= new Report({
   
        email:email,
        issue: issue,
        location: location,
        pincode:pincode

    });
    newReport.save();
    console.log("Reported successfully");

    res.status(201).json({message:"Reported Successfully",isReport:true});
}


catch(error){
    console.log(error);
    res.status(400).json({message:"Report UnSuccessful",isReport:false});
}
}

);
app.get("/adminstatus", async (req, res) => {
  try {
      const reports = await Report.find();
      
      res.status(200).json(reports);
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching reports" });
  }
});

app.get("/status", async (req, res) => {
  try {
      const reports = await Report.find();
      
      res.status(200).json(reports);
  } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Error fetching reports" });
  }
});

app.put("/updatestatus/:id", async (req, res) => {
  try {
      const { id } = req.params;
      const { status } = req.body;

      // Update the status in MongoDB
      const updatedReport = await Report.findByIdAndUpdate(id, { status }, { new: true });

      if (!updatedReport) {
          return res.status(404).json({ message: "Report not found" });
      }

      res.status(200).json({ message: "Status updated successfully", report: updatedReport });
  } catch (error) {
      console.error("Error updating status:", error);
      res.status(500).json({ message: "Internal server error" });
  }
});



  app.listen(PORT, () => {
    console.log("Server started successfully");
  });
  
  