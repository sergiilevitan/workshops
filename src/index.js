console.log('shopping cart')


const cart = {
    items: [],
    getItems() { 
        return this.items;
    },
    add(product) {
        for (const item of this.items) {
            if (product.name === item.name) {
                item.quantity += 1;
                return;
            }
        }
        const newProduct = {
            ...product,
            quantity: 1,
            
        }
        this.items.push(newProduct);
        
        
    },
    remove(productName) { 
        this.items = this.items.filter(item => productName !== item.name);        
    },

    clear() { 
        this.items = [];
    },
    countTotalPrice() {
        return this.items.reduce((acc,item) => acc += item.price * item.quantity, 0)
     },
    increaseQuantity(productName) { 
        for (const item of this.items) {
              if (item.name === productName) {
            item.quantity += 1;
            }         
        }
    },
    decreaseQuantity(productName) {
        
        for (const item of this.items) {
              if (item.name === productName) {
            item.quantity -= 1;
            }         
        }
     },
};

// console.log(cart.items)
// adding product

cart.add({ name: 'iphone', price: 1000});
cart.add({ name: 'xiamo', price: 250, });
cart.add({ name: 'xiamo', price: 250, });
cart.add({ name: 'xiamo', price: 250, });
cart.add({ name: 'samsung', price: 700, } );
cart.add({ name: 'huawei', price: 400, });
cart.add({ name: 'huawei', price: 400, });

console.table(cart.getItems());


console.log(cart.countTotalPrice());

cart.decreaseQuantity('xiamo');

console.table(cart.getItems());