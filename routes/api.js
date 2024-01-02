import express from 'express'
import * as apiController from '../controllers/apiController.js'

const router = express.Router()

const initApiRoutes = (app) => {
    router.get('/user/read/course', apiController.handleGetAllCourses)
    router.post('/user/create/course', apiController.handleCreateNewCourse)
    router.put('/user/edit/course/:id', apiController.handleEditCourse)
    router.delete('/user/delete/course/:id', apiController.handleDeleteCourse)
    router.get('/user/read/detail/course/:id', apiController.handleGetCourseById)

    return app.use('/', router)
}

export default initApiRoutes