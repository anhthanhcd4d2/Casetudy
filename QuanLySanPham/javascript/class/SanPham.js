// lớp sản phẩm
class  SanPham{
    constructor(name,price,brand,quantity,links) {
        this._name=name;

        if (price>"1000"){
        this._price=price
        } else {
            this._price = 1000
        }
        this._brand = brand;
        if (quantity>0){
        this._quantity=quantity
        } else{
            this._quantity=1;
        }
        this._array=[]
        this._links = links;
    }
    getArraySp(){
        return this._array
    }

    getlinks() {
        return this._links;
    }

    setlinks(value) {
        this._links = value;
    }

    getname() {
        return this._name;
    }

    setname(value) {
        this._name = value;
    }

    getprice() {
        return this._price;
    }

    setprice(value) {
        if (value>1000){
            this._price=value;
        } else {
            this._price=1000;
        }
        }
    getbrand(){
        return this._brand;
    }

    setbrand(value) {
        this._brand = value;
    }

    getquantity() {
        return this._quantity;
    }

    setquantity(value) {
        if (value>0) {
            this._quantity = value;
        }
        else {
            this._quantity=1;
        }
    }
    addSp(){};
}

// lớp  con Phone
class Phone extends SanPham{
    constructor(name,price,brand,quantity,color,ram,links) {
        super(name,price,brand,quantity,links);
        this._color=color;
        this._ram=ram;
    }
    getcolor() {
        return this._color;
    }

    setcolor(value) {
        this._color = value;
    }

    getram() {
        return this._ram;
    }

    setram(value) {
        this._ram = value;
    }
    addSp(array, objcet) {
        array.push(objcet);
    }
}

// lớp con Compute
class Computer extends SanPham{
    constructor(name,price,brand,quantity,color,ram,vga,hardDrive,links) {
        super(name,price,brand,quantity,links);
        this._color = color;
        this._ram = ram;
        this._vga = vga;
        this._hardDrive = hardDrive;
    }

    getcolor() {
        return this._color;
    }

    setcolor(value) {
        this._color = value;
    }

    getram() {
        return this._ram;
    }

    setram(value) {
        this._ram = value;
    }

    getvga() {
        return this._vga;
    }

    setvga(value) {
        this._vga = value;
    }

    gethardDrive() {
        return this._hardDrive;
    }

    sethardDrive(value) {
        this._hardDrive = value;
    }
    addSp(array,objcet) {
        array.push(objcet);
    }
}

//lớp con Điện lạnh
class Refrigeration extends SanPham{
    constructor(name,price,brand,quantity,links,weight,coolCompertment,capacity) {
        super(name,price,brand,quantity,links);
        this._weight = weight;
        this._coolCompertment = coolCompertment;
        this._capacity = capacity;
    }
    getweight() {
        return this._weight;
    }

    setweight(value) {
        this._weight = value;
    }

    getcoolCompertment() {
        return this._coolCompertment;
    }

    setcoolCompertment(value) {
        this._coolCompertment = value;
    }

    getcapacity() {
        return this._capacity;
    }

    setcapacity(value) {
        this._capacity = value;
    }
    addSp(array,objcet) {
        array.push(objcet);
    }
}

//lớp con Đồng Hồ Điện Tử
class ElectronicClock extends SanPham{
    constructor(name,price,brand,quantity,links,weight,color) {
        super(name,price,brand,quantity,links);
        this._weight = weight;
        this._color = color;
    }

    getweight() {
        return this._weight;
    }

    setweight(value) {
        this._weight = value;
    }

    getcolor() {
        return this._color;
    }

    setcolor(value) {
        this._color = value;
    }

    addSp(array,objcet) {
        array.push(objcet);
    }
}

//lớp con Phụ Kiện
class Accessory extends SanPham{
    constructor(name,price,brand,quantity,links) {
        super(name,price,brand,quantity,links);
    }
    addSp(array,objcet) {
        array.push(objcet);
    }
}

//lớp con Khac

class Other extends SanPham{
    constructor(name,price,brand,quantity,links,weight) {
        super(name,price,brand,quantity,links);
        this._weight = weight;
    }
    getweight() {
        return this._weight;
    }
    setweight(value) {
        this._weight = value;
    }
    addSp(array,objcet) {
        array.push(objcet);
    }
}
let array=[];


