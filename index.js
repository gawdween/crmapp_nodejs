import express from 'express';
import routes from './src/routes/crmRoute';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

const app = express();
const PORT = 4000;

//mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/CRMdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//bodyparser setup
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

routes(app);

app.get('/', (req, res) =>
    res.send(`Node and Express server running on port ${PORT}`)
);

app.listen(PORT, () => 
    console.log(`Your server is running on port ${PORT}`)
)