import * as apiService from '../service/apiService.js'

const handleGetAllCourses = async (req, res) => {
    try {
        let data = await apiService.handleGetAllCourses()
        return res.status(200).json({
            DT: data.DT,
            EM: 'ok',
            EC: 0
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            EM: 'error in api controller',
            EC: 1
        })
    }
}

const handleCreateNewCourse = async (req, res) => {
    try {
        let data = await apiService.handleCreateNewCourse(req.body)
        return res.status(200).json({
            DT: data.DT,
            EM: data.EM,
            EC: data.EC
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            EM: 'error in api controller',
            EC: 1
        })
    }
}

const handleGetCourseById = async (req, res) => {
    try {
        let data = await apiService.handleGetCourseById(req.params.id)
        return res.status(200).json({
            DT: data.DT,
            EM: data.EM,
            EC: data.EC
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            EM: 'error in api controller',
            EC: 1
        })
    }
}

const handleEditCourse = async (req, res) => {
    try {
        let data = await apiService.handleEditCourse(req.params.id, req.body)
        return res.status(200).json({
            DT: data.DT,
            EM: data.EM,
            EC: data.EC
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            EM: 'error in api controller',
            EC: 1
        })
    }
}

const handleDeleteCourse = async (req, res) => {
    try {
        let data = await apiService.handleDeleteCourse(req.params.id)
        return res.status(200).json({
            EM: data.EM,
            EC: data.EC
        })
    } catch (e) {
        console.log(e)
        return res.status(200).json({
            EM: 'error in api controller',
            EC: 1
        })
    }
}

export {
    handleGetAllCourses,
    handleCreateNewCourse,
    handleGetCourseById,
    handleEditCourse,
    handleDeleteCourse
}