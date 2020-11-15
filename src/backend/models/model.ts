import bcrypt from 'bcrypt';
import mongoose, { Document, Schema } from 'mongoose';

export interface User extends Document {
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  isValidPassword(password: string): boolean;
}

const UserSchema: Schema = new Schema({
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: false },
  firstname: { type: String, required: false, unique: false },
  lastname: { type: String, required: false, unique: false },
});

UserSchema.pre<User>('save', async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.method('isValidPassword', async function (password): Promise<boolean> {
  return await bcrypt.compare(password, this.password);
});

// Export the model and return your User interface
export default mongoose.model<User>('User', UserSchema);
