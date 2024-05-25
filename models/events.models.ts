
import mongoose, { Document, Model, Schema } from "mongoose"

interface EventsDocument extends Document {
  events_name: string
  events_data: string
  events_file: string
	datatime:String
  createdAt: Date
  updatedAt: Date
	events_starttime:String
	events_endtime:String
}

interface EventsModel extends Model<EventsDocument> { }

const EventsSchema: Schema<EventsDocument> = new Schema < EventsDocument > ({

  events_name: {
    type: String,
    required: true,
  },
  events_data: {
    type: String,
    required: true,
  },
  events_file: {
    type: String,
    required: true,
  },
	events_starttime:{
		type: String,
		required: true
	},
	events_endtime:{
		type: String,
		required: true
	},
	datatime: {
		type: String,
		
	}

}, { timestamps: true })


const Events: EventsModel = mongoose.model < EventsDocument, EventsModel> ('Events', EventsSchema)

export { Events, EventsDocument }

