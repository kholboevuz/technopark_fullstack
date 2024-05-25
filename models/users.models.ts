import bcrypt from 'bcryptjs'
import mongoose, { Document, Model, Schema } from "mongoose"

interface UserDocument extends Document {
  fullname: string
  phonenumber: number
  password: string
  tokens:string
  position:string
  status:number
  createdAt: Date
  updatedAt: Date
  matchPassword: (enteredPassword: string) => Promise<boolean>
}

interface UserModel extends Model<UserDocument> { }

const userSchema: Schema<UserDocument> = new Schema < UserDocument > ({
  fullname: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    required: true,
  },
  phonenumber: {
    type: Number,
    required: true,
    unique: true,
  },
  tokens: {
    type: String,
    required: true,
  },
  status: {
    type: Number,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
}, { timestamps: true })

userSchema.pre < UserDocument > ('save', async function (next) {
  if (!this.isModified('password')) {
    return next()
  }

  const salt = await bcrypt.genSalt(10)
  this.password = await bcrypt.hash(this.password, salt)
  return next()
})

userSchema.methods.matchPassword = async function (enteredPassword: string): Promise<boolean> {
  return await bcrypt.compare(enteredPassword, this.password)
}

const User: UserModel = mongoose.model < UserDocument, UserModel> ('User', userSchema)

export { User, UserDocument }

