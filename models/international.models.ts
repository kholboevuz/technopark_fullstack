
import mongoose, { Document, Model, Schema } from "mongoose"

interface InternationalDocument extends Document {
  news_title: string
  news_data: string
  news_file: string
	datatime:string
  createdAt: Date
  updatedAt: Date
}

interface InternationalModel extends Model<InternationalDocument> { }

const InternationalSchema: Schema<InternationalDocument> = new Schema < InternationalDocument > ({

  news_title: {
    type: String,
    required: true,
  },
  news_data: {
    type: String,
    required: true,
  },
  news_file: {
    type: String,
    required: true,
  },
  datatime: {
    type: String,
    required: true,
  },

}, { timestamps: true })


const International: InternationalModel = mongoose.model < InternationalDocument, InternationalModel> ('International', InternationalSchema)

export { International, InternationalDocument }

