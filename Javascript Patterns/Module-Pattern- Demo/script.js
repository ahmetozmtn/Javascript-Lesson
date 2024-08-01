const products = [
    { name: "Iphone 12", price: 1000 },
    { name: "Iphone 13", price: 1000 },
    { name: "Iphone 14", price: 1000 },
];

let ProductController = (function (data) {
    let collections = data || [];

    const addProduct = (product) => {
        collections.push(product);
    };

    const removeProduct = (product) => {
        let index = collections.indexOf(product);
        if (index >= 0) {
            collections.splice(index, 1);
        }
    };

    const getProduct = (product) => {
        return collections;
    };

    return {
        addProduct,
        removeProduct,
        getProduct,
    };
})(products);

ProductController.addProduct(products[0]);
ProductController.addProduct(products[1]);

ProductController.removeProduct(products[0]);
ProductController.addProduct(products[2]);

console.log(ProductController.getProduct());

// Module Extenting

let extended = (function (module) {
    module.sayHello = () => {
        console.log("Hello");
    };

    return module;
})(ProductController || {});

extended.sayHello();
console.log(extended.getProduct());
