const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

const port = 3001;
// var RegUsername = '' , regEmail = '', regPass = '';
 //var logUsrname = '', logEmail = '', logPass = '';
const uri = "mongodb+srv://samyakjain0826:samyak@cluster1.ew3syhw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1";
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const db = mongoose.connection;
console.log('database loaded - ', db);

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
    console.log('Connected to MongoDB');
});

const userSchema = new mongoose.Schema({
        username: String,
        email: String,
        password: String,
});
    
const User = mongoose.model('User', userSchema);

app.get('/', (req, res) => {
    // console.log('logUsrname is -', logUsrname);
    // res.send({
    //     name: logUsrname
    // })
})

app.post('/signin',async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    const RegUsername = username;
    const regEmail = email;
    const regPass = password;
    if(username.length===0 || email.length ===0 || password.length === 0)  return res.status(402).send('Error registering user');
    const query = {email:regEmail};
    const record = await User.findOne(query).exec();
    console.log("record"+record);
    if(record==null){
        const newUser = new User({ username, email, password });
        try {
            await newUser.save();
            res.status(201).send('User registered');
        } catch (err) {
            res.status(500).send('Error registering user');
        }
    }
    else{
        return res.status(401).json({success: false, message: 'Invalid email or password' });
    }
    
});

app.post('/Login',async (req, res)=>{
    const credentials = req.body;
    console.log('credentials', credentials);
    const query = {email:credentials.loginID};
    const record = await User.findOne(query).exec();
    if(record != null){
        const logEmail = record.email;
        const logPass = record.password;
        const logUsrname = record.username;
        if(logEmail === credentials.loginID && logPass === credentials.loginPass){
            console.log("successfully logged in to", logEmail);
            res.status(200).json({ success: true, message: 'Login successful', userName: logUsrname });
        }
        else {
            console.log("login failed into", logEmail);
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }
    }
    else {
        console.log("login failed into", logEmail);
        return res.status(401).json({ success: false, message: 'Invalid email or password' });
    }
});

app.get('/profile', async (req,res) => {     
})


app.listen(port, () => {
console.log(`Journally is listening on port ${port}`)
});