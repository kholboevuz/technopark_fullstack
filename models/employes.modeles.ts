
import mongoose, { Document, Model, Schema } from "mongoose"

interface EmployesDocument extends Document {
  userfullname: string
	userposition: string
	datatime: string
	user_file: string
	createdAt: Date
  updatedAt: Date
}

interface EmploysModel extends Model<EmployesDocument> { }

const EmploysSchema: Schema<EmployesDocument> = new Schema < EmployesDocument > ({
	userfullname:{
		type:String,
		required: true
	},

  userposition:{
		type: String,
		required: true
	},
	user_file:{
		type: String,
		requires: true
	},
	datatime: {
		type: String,
		
	}

}, { timestamps: true })


const Employs: EmploysModel = mongoose.model < EmployesDocument, EmploysModel> ('Employs', EmploysSchema)

export { EmployesDocument, Employs }

