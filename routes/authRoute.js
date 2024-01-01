import express from "express";
import {
    forgotPasswordController,
    getAllOrdersController,
    getAllUsersController,
    getOrdersController,
    loginController,
    orderStatusController,
    registerController,
    testController,
    updateProfileController
}
    from "../controllers/authController.js"
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router();

// routing
//Register Route || POST
router.post('/register', registerController);

// Register with google || POST


//LOGIN Route || POST
router.post('/login', loginController)

//Forgot  password || Postx
router.post('/forgot-password', forgotPasswordController);


//route for category


//test route
router.get('/test', requireSignIn, isAdmin, testController)

//Protected Route user || GET

router.get("/user-auth", requireSignIn, (req, res) => {
    res.status(200).send({ ok: true });
})
//Protected Route Admin || GET

router.get("/admin-auth", requireSignIn,isAdmin, (req, res) => {
    res.status(200).send({ ok: true });
})

router.put('/profile' , requireSignIn , updateProfileController);

router.get('/orders' , requireSignIn , getOrdersController);

router.get("/all-orders", requireSignIn, isAdmin, getAllOrdersController);

router.get("/all-users",requireSignIn,isAdmin, getAllUsersController)


// order status update
router.put(
    "/order-status/:orderId",
    requireSignIn,
    isAdmin,
    orderStatusController
  );







export default router