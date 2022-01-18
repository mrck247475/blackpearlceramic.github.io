const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();

const cons = require('consolidate');
const mongoose = require('mongoose');
const bodyparser = require('body-parser');


main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://localhost/visitcontact', { useNewUrlParser: true });
}
const port = 80;
// visitcontact schema

let visitcontactSchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    psw: String
});
//Inquiry schema
let inquirySchema = new mongoose.Schema({
    fullname: String,
    phone: String,
    email: String,
    state: String,
    city: String,
    Pincode: String
});


const visitcontact  = mongoose.model('visitcontact ',visitcontactSchema );
const inquiry  = mongoose.model('inquiry ',inquirySchema );



// EXPRESS SPECIFIC STUFF
app.use('/static', express.static('static'));// For serving static files
app.use(express.urlencoded());

// PUG / html SPECIFIC STUFF
app.engine('html', cons.swig);
app.set('view engine', 'html'); // Set the template engine as pug/html
app.set('views', path.join(__dirname, 'views')); // Set the views directory

// ENDPOINTS
app.get('/', (req, res) => {

    res.status(200).render('index.html');
})

app.get('/services-container', (req, res) => {
    res.status(200).render('services-container.html');

})
app.get('/services-container2', (req, res) => {
    res.status(200).render('services-container2.html');

})
app.get('/contact', (req, res) => {
    res.status(200).render('contact.html');

})
app.post('/', (req, res) => {
    var myData = new visitcontact (req.body);
    myData.save().then(()=>{
        res.status(200).render('index.html')
      
    }).catch(()=>{
        res.status(400).send('Register  Unsuccessful')
    })

})
app.post('/contact', (req, res) => {
    var myData2 = new inquiry (req.body);
    myData2.save().then(()=>{
        res.status(200).render('contact.html')
      
    }).catch(()=>{
        res.status(400).send('Register  Unsuccessful')
    })

})



// START THE SERVER
app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});

