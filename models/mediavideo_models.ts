
import mongoose, { Document, Model, Schema } from "mongoose"

interface MediaVideoDocument extends Document {
  news_title: string
  news_data: string
  news_link: string
	datatime:string
  createdAt: Date
  updatedAt: Date
}

interface MediaVideoModel extends Model<MediaVideoDocument> { }

const MediaVideoSchema: Schema<MediaVideoDocument> = new Schema < MediaVideoDocument > ({

  news_title: {
    type: String,
    required: true,
  },
  news_data: {
    type: String,
    required: true,
  },
  news_link: {
    type: String,
    required: true,
  },
  datatime: {
    type: String,
    required: true,
  },

}, { timestamps: true })


const MediaVideo: MediaVideoModel = mongoose.model < MediaVideoDocument, MediaVideoModel> ('MediaVideo', MediaVideoSchema)

export { MediaVideo, MediaVideoDocument }

