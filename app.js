const express = require('express');
const cors = require('cors');

const app = express();
app.use(express.json())
app.use(cors());

//const userRouter = require('./Routes/userRoute');

app.post('/api/user', (req,res)=>{
    const {email, name} = req.body;
    const db = req.app.get('db');
    const query = `INSERT INTO users (email, name) VALUES (?, ?)`;
    db.query(query, [email, name], (error, results) => {
        if (error) {
            console.error('Error executing SQL query:', error);
            res.status(500).json({ error: 'Internal server error' });
        } else {
            console.log('User added successfully');
            res.status(200).json({ message: 'User added successfully' });
        }
    });
} );

module.exports = app;