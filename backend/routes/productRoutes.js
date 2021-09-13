import express from 'express'
const router = express.Router()
import {
  getProducts,
  getProductBtId,
} from '../controllers/productController.js'

router.route('/').get(getProducts)

router.route('/:id').get(getProductBtId)

export default router
