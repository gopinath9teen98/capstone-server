const jwt = require("jsonwebtoken");

const User = require("../model/dataSchema");

const Authenticate = async (req, res, next) => {
  try {
    const token = req.cookies.jwtoken;
    console.log("---authenticate---",token)
    const verifyToken = jwt.verify(token, process.env.SECRET_KEY);
    
    const rootUser = await User.findOne({
      _id: verifyToken._id 
    });
    const allUser = await User.find({ role: "User" });

    const userData = [rootUser];
    console.log(userData,"--userData--")
    const allUserData = [...allUser];
    console.log(allUserData,"---userData---")

console.log(rootUser.role,"--role--")
    if (rootUser.role === "admin") {
      console.log("admin")
      res.json(allUserData);
      console.log(allUserData)
    } else if (rootUser.role === "User") {
      console.log("user")
      res.json(userData);
    }

    if (!rootUser) {
      throw new Error("user not found");
      
    }

    next();
  } catch (err) {
    console.log("catch");
    res.status(401).json("user is not authenticated");
    console.log(err, "jwt error error =>");
  }
};

module.exports = Authenticate;
