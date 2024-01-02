import { Course } from "../models/Course.js"


const handleGetAllCourses = async () => {
    try {
        const courses = await Course.find({})
        if (courses) {
            return {
                EM: 'ok get all courses',
                EC: 0,
                DT: courses,
                count: courses.length
            }
        }
        return {
            EM: 'no result',
            EC: -2,
            DT: [],
            count: 0
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'error in api service',
            EC: -1,
            DT: []
        }
    }
}

const handleGetCourseById = async (id) => {
    try {
        const course = await Course.findById(id)
        if (course) {
            return {
                EM: `ok get id ${id}`,
                EC: 0,
                DT: course
            }
        }
        return {
            EM: 'no result',
            EC: -2,
            DT: [],
            count: 0
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'error in api service',
            EC: -1,
            DT: []
        }
    }
}

const handleCreateNewCourse = async (data) => {
    try {
        if (!data.name || !data.detail || !data.description) {
            return {
                EC: -3,
                EM: 'missing: !data.name || !data.detail || !data.description'
            }
        }
        const newCourse = {
            name: data.name,
            detail: data.detail,
            description: data.description,
            image: data?.image,
            is_pro: data?.is_pro,
            price: data?.price,
            sub_image: data?.sub_image,
        }
        const course = await Course.create(newCourse)
        if (course) {
            return {
                EM: 'ok successfully created new course',
                EC: 0,
                DT: course
            }
        }
        return {
            EM: 'cannot create',
            EC: -1,
            DT: [],
            count: 0
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'error in api service',
            EC: -2,
            DT: []
        }
    }
}

const handleEditCourse = async (id, dataCourse) => {
    try {
        if (!dataCourse.name || !dataCourse.detail || !dataCourse.description) {
            return {
                EC: -3,
                EM: 'missing: !dataCourse.name || !dataCourse.detail || !dataCourse.description'
            }
        }
        const updatedCourse = {
            name: dataCourse.name,
            detail: dataCourse.detail,
            description: dataCourse.description
        }
        const course = await Course.findByIdAndUpdate(id, updatedCourse)
        if (course) {
            return {
                EM: 'ok successfully updated new course',
                EC: 0,
                DT: course
            }
        }
        return {
            EM: 'cannot update',
            EC: -1,
            DT: [],
            count: 0
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'error in api service',
            EC: -2,
            DT: []
        }
    }
}

const handleDeleteCourse = async (id) => {
    try {
        const course = await Course.findByIdAndDelete(id)
        if (course) {
            return {
                EM: 'ok successfully delete new course',
                EC: 0
            }
        }
        return {
            EM: 'cannot delete',
            EC: -1,
            DT: [],
            count: 0
        }
    } catch (e) {
        console.log(e)
        return {
            EM: 'error in api service',
            EC: -2,
            DT: []
        }
    }
}

export {
    handleGetAllCourses,
    handleCreateNewCourse,
    handleGetCourseById,
    handleEditCourse,
    handleDeleteCourse
}