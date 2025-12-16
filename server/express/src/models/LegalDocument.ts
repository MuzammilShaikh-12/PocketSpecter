import mongoose, { Document as MDocument, Schema } from 'mongoose';

export interface ILegalDocument extends MDocument {
  _id: mongoose.Types.ObjectId;
  userId: mongoose.Types.ObjectId;
  chatId?: mongoose.Types.ObjectId;

  templateType: string; // FIR, RTI, Notice, Agreement
  title: string;

  formData: Record<string, any>; // USER PROVIDED DATA
  status: 'draft' | 'completed' | 'submitted';

  createdAt: Date;
  updatedAt: Date;
}

const legalDocumentSchema = new Schema<ILegalDocument>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },

    chatId: {
      type: Schema.Types.ObjectId,
      ref: 'Chat',
    },

    templateType: {
      type: String,
      required: true,
      index: true,
    },

    title: {
      type: String,
      required: true,
    },

    formData: {
      type: Schema.Types.Mixed,
      default: {},
    },

    status: {
      type: String,
      enum: ['draft', 'completed', 'submitted'],
      default: 'draft',
    },
  },
  { timestamps: true }
);

export default mongoose.model<ILegalDocument>('Document', legalDocumentSchema);
