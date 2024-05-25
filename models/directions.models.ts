
import mongoose, { Document, Model, Schema } from "mongoose"

interface DirectionsDocument extends Document {
  directions_name: string
  directions_data: string
	datatime:string
  createdAt: Date
  updatedAt: Date
}

interface DirectionsModel extends Model<DirectionsDocument> { }

const DirectionsSchema: Schema<DirectionsDocument> = new Schema < DirectionsDocument > ({

  directions_name: {
    type: String,
    required: true,
  },
  directions_data: {
    type: String,
    required: true,
  },
  datatime: {
    type: String,
    required: true,
  },

}, { timestamps: true })


const Directions: DirectionsModel = mongoose.model < DirectionsDocument, DirectionsModel> ('Directions', DirectionsSchema)

export { Directions, DirectionsDocument }

