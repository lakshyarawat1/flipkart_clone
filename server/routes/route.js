import express from 'express'
import { userSignUp, userLogin, getCurrentUser } from '../controller/userController.js'
import { getProducts,  getProductById } from '../controller/productController.js'

const router = express.Router()

router.post('/signup', userSignUp)

router.post('/login', userLogin)

router.get('/products', async (req, res) => {
    const products = await getProducts()
    res.json(products)
})

router.get('/get-user', getCurrentUser)

router.get('/product/:id', getProductById)

export default router