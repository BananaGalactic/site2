const Product = require('../models/product.model');

// Create a new product
exports.product_create = (req, res, next) => {
    let product = new Product({
            name: req.body.name,
            price: req.body.price      
        });

    // check if no one exists already in BDD
    Product.findOne({'name': req.body.name})
    .then((item) => {
        if(item == null) {
            product.save()
            .then(()=> res.status(201).json({message: 'Objet créé !', desc: 'item : ' + req.body.name + ', price: ' + req.body.price}))
            .catch(err => {console.log(err);res.status(400).json({ message: "error" });});
        } else {
            res.status(423).json({
                message: 'Le produit ' + req.body.name + ' existe déjà.',
                desc: 'Merci de donner un autre nom à votre produit'
            });
        }
    })
    .catch(err => {
        console.log(err);
        res.status(400).json({message: 'error'});
    });
};


// Get product details
exports.product_details = (req, res, next) => {
    Product.findById(req.params.id)
    .then((item) => {res.send(product)})
    .catch(err => res.status(400).json({ err }))
};

//push an update of the product by finding him by Id
exports.product_update = (req, res, next) => {
    Product.findByIdAndUpdate(req.params.id, {$set: req.body})
    .then((product) => {
        res.status(201).json({message: 'Product updated.'});
    })
    .catch(err => res.status(400).json({ err }));
        
};

//Delete a product with a specified Id
exports.product_delete = function(req, res, next) {
    Product.deleteOne({_id: req.params.id})
    .then(() => res.status(200).json({ message: "Deleted"}))
    .catch(error => res.status(400).json({ error }));

};

//return a list with all products
exports.get_all_products = function (req, res, next) {
    Product.find()
    .then(products => res.status(200).json(products))
    .catch(error => res.status(400).json({ error }));
};