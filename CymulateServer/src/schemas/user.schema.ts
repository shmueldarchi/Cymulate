import  { Schema } from 'mongoose';

const userSchema = new Schema({
  email: String,
  content: String,
  status: String
});

export default userSchema;