
import mongoose, { Document, Model, Schema } from "mongoose"

interface ManagemntDocument extends Document {
  userfullname: string
	userposition: string
	datatime: string
	user_file: string
	createdAt: Date
  updatedAt: Date
}

interface ManagementModel extends Model<ManagemntDocument> { }

const ManagementSchema: Schema<ManagemntDocument> = new Schema < ManagemntDocument > ({
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
		type: String
		
	}

}, { timestamps: true })


const Management: ManagementModel = mongoose.model < ManagemntDocument, ManagementModel> ('Management', ManagementSchema)

export { Management, ManagemntDocument }

