import mongoose, { Document, Schema } from 'mongoose';

export interface IChat extends Document {
  _id: mongoose.Types.ObjectId;
  title: string;
  userId: mongoose.Types.ObjectId;
  messages: mongoose.Types.ObjectId[];
  documents: mongoose.Types.ObjectId[];
  contextMemory: Record<string, any>;
  createdAt: Date;
  updatedAt: Date;
}

const chatSchema = new Schema<IChat>(
  {
    title: { type: String, required: true },

    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    messages: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Message',
      },
    ],

    documents: [
      {
        type: Schema.Types.ObjectId,
        ref: 'Document',
      },
    ],

    contextMemory: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  { timestamps: true }
);

export default mongoose.model<IChat>('Chat', chatSchema);
