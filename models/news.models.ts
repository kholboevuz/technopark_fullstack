
import mongoose, { Document, Model, Schema } from "mongoose"

interface NewsDocument extends Document {
  news_title: string
  news_data: string
  news_file: string
	datatime:string
  createdAt: Date
  updatedAt: Date
}

interface NewsModel extends Model<NewsDocument> { }

const NewsSchema: Schema<NewsDocument> = new Schema < NewsDocument > ({

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


const News: NewsModel = mongoose.model < NewsDocument, NewsModel> ('News', NewsSchema)

export { News, NewsDocument }

