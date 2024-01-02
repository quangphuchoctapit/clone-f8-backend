import mongoose from 'mongoose';

const CourseSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        detail: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: false
        },
        price: {
            type: String,
            required: false
        },
        total_member: {
            type: Number,
            required: false
        },
        sub_image: {
            type: String,
            required: false
        },
        is_pro: {
            type: Boolean,
            required: false
        },
    },
    {
        timeStamps: true
    }
)

export const Course = mongoose.model('course', CourseSchema)