import mongoose, { Model } from 'mongoose';
import attemptSchema from '../schemas/attempt.schema'

const Attempt = mongoose.model('Attempt', attemptSchema);

export default Attempt;