const mongoose = require('mongoose');


dbUrl = process.env.DATABASE

mongoose.connect(dbUrl,{
useNewUrlParser: true,
useUnifiedTopology: true
},  (err) => {
    if (!err) {
      console.log("DB connected succesfully");
    } else {
      console.log("DB not connected");
    }
  })


