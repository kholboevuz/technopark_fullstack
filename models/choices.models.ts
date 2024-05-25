
import mongoose, { Document, Model, Schema } from "mongoose"

interface ChoicesDocument extends Document {
  choices_name: string
  choices_data: string
  choices_file: string
	datatime:String
  createdAt: Date
  updatedAt: Date
	choices_starttime:String
	choices_endtime:String
}

interface ChoicesModel extends Model<ChoicesDocument> { }

const ChoicesSchema: Schema<ChoicesDocument> = new Schema < ChoicesDocument > ({

  choices_name: {
    type: String,
    required: true,
  },
  choices_data: {
    type: String,
    required: true,
  },
  choices_file: {
    type: String,
    required: true,
  },
	choices_starttime:{
		type: String,
		required: true
	},
	choices_endtime:{
		type: String,
		required: true
	},
	datatime: {
		type: String,
		
	}

}, { timestamps: true })


const Choices: ChoicesModel = mongoose.model < ChoicesDocument, ChoicesModel> ('Choices', ChoicesSchema)

export { Choices, ChoicesDocument }

