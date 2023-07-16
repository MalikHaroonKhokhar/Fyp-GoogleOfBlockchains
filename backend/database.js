const express = require('express');
const mongoose = require('mongoose');
const app = express();
const cors=require("cors");


// Connect to MongoDB
mongoose.connect('mongodb+srv://login:Astatine73@cluster0.azdpyjz.mongodb.net/GoogleOfBlockchains?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Failed to connect to MongoDB:', error);
  });

// Define a schema and model for your data
const dataSchema = new mongoose.Schema({

  data: Object,
});

const DataModel = mongoose.model('Data', dataSchema);

// API endpoint to store data
app.post('/api/data', (req, res) => {
  const data  = req.body;
  const newData = new DataModel(data );
  newData.save()
    .then(() => {
      console.log(`Data stored successfully`);
      res.sendStatus(200);
    })
    .catch((error) => {
      console.error(`Failed to store data ':`, error);
      res.sendStatus(500);
    });
});

// Start the server

app.use(express.json())
app.use(cors())
app.listen(8000, () => {
  console.log('Server listening on port 8000');
});
