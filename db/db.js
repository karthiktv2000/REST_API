const mongoose=require('mongoose');
const url="mongodb://localhost:27017/FirstdataBase";
mongoose.connect(url,{ useNewUrlParser: true })