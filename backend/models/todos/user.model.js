import mongoose from 'mongoose'

const userSchema = new mongoose.Schema(
    {
        username: {
            type: String,
            require: true,
            lowercase: true,
            unique: true
        },
        email: {
            type: String,
            require: true,
            lowercase: true,
            unique: true
        },
        password: {
            type: String,
            require: true,
        },
    },
    { timestamps: true } //mongoose has inbulit timestamps that has methods linke createdAt() and updatedAt()
)

export const User = mongoose.model("User", userSchema)