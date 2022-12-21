import  { Schema } from 'mongoose';

const attemptSchema = new Schema({
  email: String,
  content: String,
  status: String
});

export default attemptSchema;