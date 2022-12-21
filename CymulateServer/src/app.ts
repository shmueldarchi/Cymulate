import express from 'express';
import userRoutes from "./routes/user.routes";
import mailRoutes from "./routes/mail.routes";
import mongoose from 'mongoose';
import { mongodb } from './config';
const app = express();

app.use(userRoutes);
app.use(mailRoutes);
mongoose.set('strictQuery', true);
mongoose.connect(mongodb.uri);
mongoose.connection.once('open',function(){
    console.log('Database connected Successfully');
}).on('error',function(err){
    console.log('Error', err);
})

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});