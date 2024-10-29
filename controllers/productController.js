import productModel from "../models/productModel.js";
import fs from "fs";
import slugify from "slugify";

// Create product
export const createProductController = async (req, res) => {
   try {
      const { name, slug, description, price, category, quantity, shipping } = req.fields;
      const { photo } = req.files;

      // Validation
      switch(true) {
        case !name:
            return res.status(500).send({ error: "Name is required" });
        case !description:
            return res.status(500).send({ error: "Description is required" });
        case !price:
            return res.status(500).send({ error: "Price is required" });
        case !category:
            return res.status(500).send({ error: "Category is required" });
        case !quantity:
            return res.status(500).send({ error: "Quantity is required" });
        case photo && photo.size > 1000000:
            return res.status(500).send({ error: "Photo should be less than 1MB" });
      }

      const products = new productModel({ ...req.fields, slug: slugify(name) });
      if (photo) {
        products.photo.data = fs.readFileSync(photo.path);
        products.photo.contentType = photo.type;
      }
      await products.save();
      res.status(201).send({
        success: true,
        message: "Product created successfully",
        products,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
        success: false,
        error,
        message: 'Error in creating product'
      });
   }
};

// Get all products
export const getProductController = async (req, res) => {
   try {
      const product = await productModel
         .find({})
         .populate('category')
         .select("-photo")
         .limit(15)
         .sort({ createdAt: -1 });
      res.status(200).send({
         success: true,
         Totalcount: product.length,
         message: "All products",
         product,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: 'Error in getting products',
         error: error.message
      });
   }
};

// Get single product by slug
export const getSingleProductController = async (req, res) => {
   try {
      const product = await productModel
         .findOne({ slug: req.params.slug })
         .select("-photo")
         .populate("category");
      res.status(200).send({
         success: true,
         message: 'Single product fetched',
         product
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: 'Error while getting single product',
         error,
      });
   }
};

// Get product by ID (new controller method)
export const getProductByIdController = async (req, res) => {
   try {
      const product = await productModel.findById(req.params.productId);
      if (!product) {
         return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
   } catch (error) {
      console.log(error);
      res.status(500).json({ message: 'Server error', error });
   }
};

// Get photo
export const productPhotoController = async (req, res) => {
   try {
      const product = await productModel.findById(req.params.pid).select("photo");
      if (product.photo.data) {
         res.set('Content-Type', product.photo.contentType);
         return res.status(200).send(product.photo.data);
      }
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: 'Error while getting photo',
         error,
      });
   }
};

// Delete product
export const deleteProductController = async (req, res) => {
   try {
      await productModel.findByIdAndDelete(req.params.pid).select("-photo");
      res.status(200).send({
         success: true,
         message: 'Product deleted successfully'
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         message: 'Error while deleting product',
         error,
      });
   }
};

// Update product
export const updateProductController = async (req, res) => {
   try {
      const { name, slug, description, price, category, quantity, shipping } = req.fields;
      const { photo } = req.files;

      // Validation
      switch (true) {
         case !name:
            return res.status(500).send({ error: "Name is required" });
         case !description:
            return res.status(500).send({ error: "Description is required" });
         case !price:
            return res.status(500).send({ error: "Price is required" });
         case !category:
            return res.status(500).send({ error: "Category is required" });
         case !quantity:
            return res.status(500).send({ error: "Quantity is required" });
         case photo && photo.size > 1000000:
            return res.status(500).send({ error: "Photo should be less than 1MB" });
      }

      const products = await productModel.findByIdAndUpdate(
         req.params.pid,
         { ...req.fields, slug: slugify(name) },
         { new: true }
      );
      if (photo) {
         products.photo.data = fs.readFileSync(photo.path);
         products.photo.contentType = photo.type;
      }
      await products.save();
      res.status(201).send({
         success: true,
         message: "Product updated successfully",
         products,
      });
   } catch (error) {
      console.log(error);
      res.status(500).send({
         success: false,
         error,
         message: 'Error in updating product'
      });
   }
}; 