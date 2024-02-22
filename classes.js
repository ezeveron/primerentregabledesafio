

class ProductManager {

    constructor() {
        this.products=[]
    }

    getproducts(){
        return this.products
    }

    addproducts(title,description,price,thumbnail,code,stock){
        const products= {
            id:this.getProductoById(),
            title,
            description,
            price,
            thumbnail,
            code:this.valueCode(),
            stock,
        }

        this.products.push(products)
    }

    getProductoById(){
        if (this.products.length === 0) return 1

        return this.products[this.products.length - 1].id + 1;
    }

    valueCode(){
        if (this.products.filter(products => products.code === products.code)){
            return "Code Repetido"
        }
    }
}


const agregarProductos =new ProductManager();
console.log(agregarProductos.getproducts());

agregarProductos.addproducts(1,"Joya","joya de casares",15000,"",1,25)
agregarProductos.addproducts(2,"Cogante","Colgante Plata",10000,"",2,10)

console.log(agregarProductos.getproducts());