// basic server structure
// const express = require('express'); //is the way to import dependency or package or third party 

// const app = express();
// const PORT = process.env.PORT || 3001;

// // sending a response to frontend or clientside
// app.get('/',(req, res)=>{
//     res.send('<h1>Welcome to EJS</h1>');
// });

// app.get('/about',(req, res)=>{
//     res.send('<h1>We are web developers</h1>');
// });

// app.get('/services',(req, res)=>{
//     res.send('<h1>We render different services such as coding of javascript</h1> <br><h3>We also train children from age 10 upwards............</h3>');
// });

// app.listen(PORT, ()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// });

// challenge area 
// built the basic backend server with the following routes
// '/'
// '/booking'
// '/payment'
// '/features'
// '/contact'
// startup your express server -> npm start or npm run dev


// basic server structure
// const express = require('express'); //is the way to import dependency or package or third party 

// const app = express();
// const PORT = process.env.PORT || 3001;

// // sending a response to frontend or clientside
// app.get('/',(req, res)=>{
//     res.send('<h1>Welcome to the best relaxation center with the best facilities.</h1> <br> <h3>At Continetal lounge and suites come relax and have fun while stress-free....</h3>');
// });

// app.get('/booking',(req, res)=>{
//     res.send('<h2>You can make reservations and bookings at affordable prices.</h2> <br> <p>You can book our resilient and well-secured hotel rooms,bars and swimming pool at your pace</p>');
// });

// app.get('/payment',(req, res)=>{
//     res.send('<h2>We accept payments in cash, credit cards and online payments </h2> <br><h3>We also accept immediate transfers from bank.</h3>');
// });

// app.get('/features',(req, res)=>{
//     res.send('<p>We have different features ranging from top to low depending on your choice. we will help you make clarifications in case there is any confusion or mishap.</p> <br> <ul> <li>Junior suites</li> <br> <li>Deluxe suites</li> <br> <li>Executive suites</li> <br> <b>and more....</b> </ul>');
// });

// app.get('/contact',(req, res)=>{
//     res.send('<h2>WE ARE AVAILABLE 24HOURS</h2> <br> <b>Address:Plot 52, Kofo Abayomi Street, Victoria Island, Lagos, Nigeria. <br> Email:info@thelagoscontinental.com <br> Phone:+234 805 236 667 <br> <p>You can come in contact with us on our social media platforms; <br> Instagram:@thelagoscontinental <br> facebook:@thelagoscontinental <br> twitter:@TheLCHotel. <br> THE LAGOS CONTINENTAL HOTEL © 2021</b></p>');
// });

// app.listen(PORT, ()=>{
//     console.log(`server is running at http://localhost:${PORT}`);
// });

 const express = require('express'); //is the way to import dependency or package or third party 
 const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3001;

// setup the template engine
app.set('view engine', 'ejs');

app.use(express.static('public'));
// app.use(express.urlencoded({extended: true}));  // it enables sending data from clientside to backend
app.use(bodyParser.urlencoded({extended: true}));

let pINames = ['c', 'c++', 'java', 'python'];

// sending a response to frontend or clientside
app.get('/',(req, res)=>{
    // res.status(200).send('<h1>Welcome to EJS</h1>');
    res.status(200).render('index', {pageTitle: 'Home Page', proNames: pINames});
});

// getting data from frontend and insert it onto pINames array of string
app.post ('/', (req, res)=>{
    const pIName = req.body.pIName;
    pINames.push(pIName);
    // console.log(pIName);
    // res.status(201).send('data is created');
    res.redirect('/');
});
app.get('/contact',(req, res)=>{
    res.status(200).render('contact', {pageTitle: 'Contact Page'});
});

app.listen(PORT, ()=>{
        console.log(`server is running at http://localhost:${PORT}`);
    });