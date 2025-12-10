import mongoose, { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  _id: mongoose.Types.ObjectId;
  name: string;
  email: string;
  googleId?: string;
  imageUrl?: string;
  createdAt: Date;
  chats: mongoose.Types.ObjectId[];
  documents: mongoose.Types.ObjectId[];
}

const userSchema = new Schema<IUser>({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  googleId: { type: String, unique: true, sparse: true },
  imageUrl: { type: String },
  createdAt: { type: Date, default: Date.now },
  chats: [{ type: Schema.Types.ObjectId, ref: 'Chat' }],
  documents: [{ type: Schema.Types.ObjectId, ref: 'Document' }],
});

const User = mongoose.model<IUser>('User', userSchema);

export default User;
