
import mongoose, { Document, Model, Schema } from "mongoose"

interface CooparitionDocument extends Document {
  news_title: string
  news_data: string
  news_file: string
	datatime:string
  createdAt: Date
  updatedAt: Date
}

interface CooparitionModel extends Model<CooparitionDocument> { }

const CooparitionSchema: Schema<CooparitionDocument> = new Schema < CooparitionDocument > ({

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


const Cooparition: CooparitionModel = mongoose.model < CooparitionDocument, CooparitionModel> ('Cooparition', CooparitionSchema)

export { Cooparition, CooparitionDocument }

