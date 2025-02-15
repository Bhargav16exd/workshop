import Router from 'express';
import { createUser, loginUser, logout } from '../controllers/user.controller.js';
import { adminMiddleware, authMiddleware } from '../middlewares/auth.middleware.js';
import { getAuditLogs } from '../controllers/audit.controller.js';


const router = Router()


// Public Endpoints
//router.route('/signup').post(createUser)
router.route('/login' ).post(loginUser )


// Private Endpoints
router.route('/logout').get(authMiddleware,logout)


//Admin Routes
// router.route('/logs' ).get (authMiddleware,adminMiddleware,getAuditLogs)





export default router