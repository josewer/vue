export class Producto {

    constructor ( name , amount , price) {
        this.id = crypto.randomUUID();
        this.name = name;
        this.amount = amount;
        this.price = price;
        this.total = amount * price;
    }
}