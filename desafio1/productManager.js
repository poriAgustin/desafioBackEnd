class ProductManager {
    constructor() {
        this.products = []
        this.index = 0;
        this.path = 'products.json'
    }

    async generateId(){
        let products = await this.getProducts()
        return products.length + 1
    }

    getProducts = () => {
        return this.products
    }

    addProduct = (title, description, price, thumbnail, code, stock) => {
        // Realizar validacion de no repetir el code
        this.index++
        const id = this.index
        const product = { id, title, description, price, thumbnail, code, stock }
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

    async updateProduct(id, product){
        let products = await this.getProducts()
        let indice = products.findIndex(product => product.id === id)
        if (indice !== -1) {
            products[indice].title = product.title
            products[indice].description = product.description
            products[indice].price = product.price
            products[indice].code = product.code
            products[indice].stock = product.stock
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products))
        return console.log(`Producto actualizado`);
    }

    async deleteProduct(id){
        let products = await this.getProducts()
        let indice = products.findIndex(product => product.id === id)
        if (indice !== -1) {
            products.splice(indice, 1)
        }
        await fs.promises.writeFile(this.path, JSON.stringify(products))
        return console.log(`Producto Eliminado`);
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

manager.deleteProduct(1)

console.log(manager.products);
