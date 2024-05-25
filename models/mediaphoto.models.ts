
import mongoose, { Document, Model, Schema } from "mongoose"

interface MediaPhotoDocument extends Document {
  news_title: string
  news_data: string
  news_file: string
	datatime:string
  createdAt: Date
  updatedAt: Date
}

interface MediaPhotoModel extends Model<MediaPhotoDocument> { }

const MediaPhotoSchema: Schema<MediaPhotoDocument> = new Schema < MediaPhotoDocument > ({

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


const MediaPhoto: MediaPhotoModel = mongoose.model < MediaPhotoDocument, MediaPhotoModel> ('MediaPhoto', MediaPhotoSchema)

export { MediaPhoto, MediaPhotoDocument }

