
import mongoose, { Document, Model, Schema } from "mongoose"

interface SliderDocument extends Document {
  slider_title: string
  slider_data: string
  slider_file: string
	datatime:string
  createdAt: Date
  updatedAt: Date
}

interface SliderModel extends Model<SliderDocument> { }

const sliderSchema: Schema<SliderDocument> = new Schema < SliderDocument > ({

  slider_title: {
    type: String,
    required: true,
  },
  slider_data: {
    type: String,
    required: true,
  },
  slider_file: {
    type: String,
    required: true,
  },
  datatime: {
    type: String,
    required: true,
  },

}, { timestamps: true })


const Slider: SliderModel = mongoose.model < SliderDocument, SliderModel> ('Slider', sliderSchema)

export { Slider, SliderDocument }

