const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
app.use(cors());
app.use(bodyParser.json());

const port = 3001;
var RegUsername = '' , regEmail = '', regPass = '';
var logUsrname = '', logEmail = '', logPass = '';
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
    console.log('logUsrname is -', logUsrname);
    res.send({
        name: logUsrname
    })
})

app.post('/signin',async (req, res) => {
    console.log(req.body);
    const { username, email, password } = req.body;
    RegUsername = username;
    regEmail = email;
    regPass = password;
    const newUser = new User({ username, email, password });
    try {
        await newUser.save();
        res.status(201).send('User registered');
        console.log("registered");
    } catch (err) {
        res.status(500).send('Error registering user');
    }
});

app.post('/Login',async (req, res)=>{
    logEmail = 'No user';
    logPass = '';
    logUsrname = '';
    console.log('req is',req.body);
    const credentials = req.body;
    console.log('credentials', credentials);
    const query = {email:credentials.loginID};
    const record = await User.findOne(query).exec();
    console.log('record - ', record);
    if(record != null){
        logEmail = record.email;
        logPass = record.password;
        logUsrname = record.username;
        if(logEmail === credentials.loginID && logPass === credentials.loginPass){
            console.log("successfully logged in to", logEmail);
            res.status(200).json({ success: true, message: 'Login successful' });
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
    console.log(req.body);
    const Usremail = req.body;
    const query = {email:Usremail};
    const record = await User.findOne(query).exec();
    const userName = record.email;
    if(record!=null){
        res.send({
            name: userName
        })
    }
    else
        console.log('invalid email')
})


app.listen(port, () => {
console.log(`Journally is listening on port ${port}`)
});