
import mongoose, { Document, Model, Schema } from "mongoose"

interface CompanyDocument extends Document {
  company_data: string
	company_commitment: string
	datatime: string
	createdAt: Date
  updatedAt: Date
}

interface CompanyModel extends Model<CompanyDocument> { }

const CompanySchema: Schema<CompanyDocument> = new Schema < CompanyDocument > ({
	company_data:{
		type:String,
		required: true
	},

  company_commitment:{
		type: String,
		required: true
	},
	datatime: {
		type: String,
		
	}

}, { timestamps: true })


const Company: CompanyModel = mongoose.model < CompanyDocument, CompanyModel> ('Company', CompanySchema)

export { Company, CompanyDocument }

