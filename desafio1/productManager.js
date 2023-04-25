class ProductManager {
    constructor() {
        this.products = []
        this.index = 0;
    }

    getProducts = () => {
        return this.products
    }

    getProductById = (id) => {
        const product = this.products.find(product => product.code === id);
        if (!product) {
            console.log("Producto no encontrado");
        }
        return product
    }

    getProducts = () => {
        return this.products;
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        this.index++
        const id = this.index
        const product = { id, title, description, price, thumbnail, code, stock }
        // Realizar validacion de no repetir el code
        const existe = this.products.some(product => product.code === code)
        if (existe) {
            return console.log('El codigo ya fue ingresado, por favor ingresa el codigo correcto');
        }
        // Validar q todas las validaciones sean obligatorias
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            return console.log('Faltan datos');
        }
        this.products.push(product)
    }
}

const manager = new ProductManager()

manager.addProduct('Folclore en el agua', 'El mejor festival de la zona', 1500, 'imgOFF', 'abc1234', 2000)
manager.addProduct('Duki', 'Concierto de trap', 3000, 'imgOFF', 'duko123', 5000)
manager.addProduct('Richie Hawtin', 'El mejor dj de todos', 6500, 'imgOFF', 'richie1234', 5000)
manager.getProducts()

const products = manager.getProducts();
console.log(products);

const product = manager.getProductById(1234);
console.log(product);

const productNotFound = manager.getProductById(15);
console.log(productNotFound);


console.log(manager.products);