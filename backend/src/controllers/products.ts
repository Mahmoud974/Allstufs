import express from "express";
import { createProduct, getProduct } from "../db/products";


export const getAllProducts = async (req: express.Request, res: express.Response) => {
    try{
        const products = await getProduct()
        !products && res.status(404).json({message: 'Pas de tableau'}).end() 
        res.status(200).json({message: 'Création de tableau', products}).end()
    }
    catch(err:unknown){
        console.log(err)
        res.status(500).json({message: 'Server Error'})
    }
}

export const addProduct = async (req: any, res: express.Response) => {
  const { title, price, city, img, date, description, category } = req.body;
console.log(req.body);
console.log(req.file);

  try {
    // Vérifiez si des champs obligatoires sont manquants
    if (!title || !price || !city || !img  || !description || !category) {
      res.status(400).json({ message: 'Tous les champs sont obligatoires' });
    } else {
      // Ajoutez le produit
      const addItem = await createProduct(req.body);

      // Récupérez tous les produits après l'ajout
      const products = await getProduct();

    res.status(200).json({ message: 'Annonce créée', addItem });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Erreur serveur' });
  }
};
