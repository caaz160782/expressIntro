const express =require('express');
const {faker} =require('@faker-js/faker');
const router =express.Router();


router.get('/',(req,res)=>{
    const {size} =req.query;
    const limit = size || 20;
    const products =[];
    for (let index=0; index <limit; index++){
        products.push({
            id:faker.commerce.isbn(),
            name:faker.commerce.productName(),
            product:faker.commerce.product(),
            price:parseInt(faker.commerce.price(),10),
            image:faker.image.url()
        })
    }
    res.json(products);
});

router.get('/filter',(req,res)=>{
    res.send("yo soy un filter");
});

router.get('/:id',(req,res)=>{
    const {id} =req.params
    res.json({
        id,
        producto:"gansito",
        precio:25
      });
});

module.exports=router;