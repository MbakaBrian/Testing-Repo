import {
  getCart,
  updateCart,
  mergeCart,
  deleteProduct,
} from "../services/cart.service.js";

export const getCartHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const cart = await getCart(id);
    res.status(200).json(cart);
  } catch (error) {
    next(error);
  }
};

export const updateCartHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    const updatedCart = await updateCart(
      id,
      req.body.product,
      req.body.quantity
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    next(error);
  }
};

export const mergeCartHandler = async (req, res, next) => {
  try {
    console.log("body", req.body)
    console.log('Merging cart', req.params.id, req.body);
    const id = req.params.id;
    const updatedCart = await mergeCart(id, req.body);
    console.log('Cart merged', updatedCart);
    res.status(200).json(updatedCart);
  } catch (error) {
    console.error('Error merging cart', error);
    next(error);
  }
};

export const deleteProductHandler = async (req, res, next) => {
  try {
    const id = req.params.id;
    console.log(req.body);
    const deletedProduct = await deleteProduct(id, req.body.product);
    res.status(200).json(deletedProduct);
  } catch (error) {
    next(error);
  }
};
