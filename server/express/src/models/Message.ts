import mongoose, { Document, Schema } from 'mongoose';

export interface IMessage extends Document {
  _id: mongoose.Types.ObjectId;
  chatId: mongoose.Types.ObjectId;
  sender: 'user' | 'assistant';
  content: string;
  metadata: Record<string, any>;
  createdAt: Date;
}

const messageSchema = new Schema<IMessage>(
  {
    chatId: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
      required: true,
    },

    sender: {
      type: String,
      enum: ['user', 'assistant'],
      required: true,
    },

    content: {
      type: String,
      required: true,
    },

    metadata: {
      type: Schema.Types.Mixed,
      default: {},
    },
  },
  {
    timestamps: { createdAt: true, updatedAt: false },
  }
);

export default mongoose.model<IMessage>('Message', messageSchema);
