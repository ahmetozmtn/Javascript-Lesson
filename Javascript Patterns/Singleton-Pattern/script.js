// // Singleton Pattern

// let singleton = (function () {
//     let instance;
//     const createInstance = () => {
//         return {
//             randomNumber: Math.random(),
//         };
//     };

//     return {
//         getInstance: () => {
//             if (!instance) {
//                 instance = createInstance();
//             }
//             return instance;
//         },
//     };
// })();

// const instance1 = singleton.getInstance();
// const instance2 = singleton.getInstance();

// console.log(instance1.randomNumber, instance2.randomNumber);

let singleton = (function () {
    let instance;

    function ProductController() {
        const products = [
            { name: "Product 1", price: 100 },
            { name: "Product 2", price: 100 },
            { name: "Product 3", price: 100 },
        ];

        const add = (product) => {
            products.push(product);
        };

        const get = () => {
            return products;
        };

        return {
            add,
            get,
        };
    }

    return {
        getInstance: () => {
            if (!instance) {
                instance = new ProductController();
            }
            return instance;
        },
    };
})();

const productController1 = singleton.getInstance();
const productController2 = singleton.getInstance();

productController1.add({ name: "Product 4", price: 100 });
console.log(productController2.get());
console.log(productController1.get());
