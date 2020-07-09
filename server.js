const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const db = require("./app/models");

const app = express();

let whitelis = [
    'http://localhost:8081'
];

let corsOption = {
    origin: function(origin, callback){
        if (whitelis.indexOf(origin) !== 1|| !origin) {
            callback(null, true);
        } else {
            callback(new Error('Not Allow by CORS'))
        }
    }
}

app.use(cors(corsOption));

// parse request application/json
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

// sync database
db.sequelize.sync();

app.get('/', (req, res) => {
     res.json({
         message: "Welcome to ExMysql"
     });
});

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`);
});