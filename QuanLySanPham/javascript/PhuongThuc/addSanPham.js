// tạo 1 mảng chứa các đối tượng của class

// thêm sản phẩm class
function addSpPhone(name, price, brand, quantity, color, ram, links) {
    name = document.getElementById("value_name").value;
    price = document.getElementById("value_price").value;
    brand = document.getElementById("value_brand").value;
    quantity = document.getElementById("value_quantity").value;
    color = document.getElementById("value_color").value;
    ram = document.getElementById("value_ram").value;
    links = document.getElementById("value_links").value;
    // if (name !=="undef")
    //gọi đối tượng con Phone và gán giá trị
    if (name === "" && price === "" && brand === "" && quantity === "" && color === "" && ram === "" && links === "") {
        alert("vui long nhập đủ thông tin sản phẩm ")
    } else {
        const object = new Phone(name, price, brand, quantity, color, ram, links);
        object.addSp(array, object);
        if (array.length > 0)
            document.getElementById("toi4").innerHTML = ""
        document.getElementById("show_list_sp").style = "display: flex";
        showPhone();
    }
}

let BLOCK_DISPLAY = " display: flex";

function addSpComputer(name, price, brand, quantity, color, ram, vga, hardDrive, links) {
    name = document.getElementById("value_name").value;
    price = document.getElementById("value_price").value;
    brand = document.getElementById("value_brand").value;
    quantity = document.getElementById("value_quantity").value;
    color = document.getElementById("value_color").value;
    ram = document.getElementById("value_ram").value;
    vga = document.getElementById("value_vga").value;
    hardDrive = document.getElementById("value_hardDrive").value;
    links = document.getElementById("value_links").value;
    // if (name !=="undef")
    //gọi đối tượng con Phone và gán giá trị
    if (name === "" && price === "" && brand === "" && quantity === "" && color === "" && ram === "" && links === "" && vga === "" && hardDrive === "") {
        alert("vui long nhập đủ thông tin sản phẩm ")
    } else {
        const object = new Computer(name, price, brand, quantity, color, ram, vga, hardDrive, links);
        object.addSp(array, object);
        if (array.length > 0)
            document.getElementById("toi4").innerHTML = ""
        document.getElementById("show_list_sp").style = " display: flex";
        showCompute();
    }
}

function addSpRefrigeration(name, price, brand, quantity, links, weight, coolCompartment, capacity) {
    name = document.getElementById("value_name").value;
    price = document.getElementById("value_price").value;
    brand = document.getElementById("value_brand").value;
    quantity = document.getElementById("value_quantity").value;
    weight = document.getElementById("value_weight").value;
    coolCompartment = document.getElementById("value_coolCompartment").value;
    capacity = document.getElementById("value_capacity").value;
    links = document.getElementById("value_links").value;
    // if (name !=="undef")
    //gọi đối tượng con Phone và gán giá trị
    if (name === "" && price === "" && brand === "" && quantity === "" && weight === "" && links === "" && coolCompartment === "" && capacity === "") {
        alert("vui long nhập đủ thông tin sản phẩm ")
    } else {
        const object = new Refrigeration(name, price, brand, quantity, links, weight, coolCompartment, capacity);
        object.addSp(array, object);
        if (array.length > 0)
            document.getElementById("toi4").innerHTML = ""
        document.getElementById("show_list_sp").style = " display: flex";
        showRefrigeration();
        console.log(array)
    }
}

function addSpElectronicClock(name, price, brand, quantity, color, weight, links) {
    name = document.getElementById("value_name").value;
    price = document.getElementById("value_price").value;
    brand = document.getElementById("value_brand").value;
    quantity = document.getElementById("value_quantity").value;
    color = document.getElementById("value_color").value;
    weight = document.getElementById("value_weight").value;
    links = document.getElementById("value_links").value;
    // if (name !=="undef")
    //gọi đối tượng con Phone và gán giá trị
    if (name === "" && price === "" && brand === "" && quantity === "" && weight === "" && links === "") {
        alert("vui long nhập đủ thông tin sản phẩm ")
    } else {
        const object = new ElectronicClock(name, price, brand, quantity, links, weight, color);
        object.addSp(array, object);
        if (array.length > 0)
            document.getElementById("toi4").innerHTML = ""
        document.getElementById("show_list_sp").style = " display: flex";
        showElectronicClock();
        console.log(array)
    }
}

function addSpAccessory(name, price, brand, quantity, links) {
    name = document.getElementById("value_name").value;
    price = document.getElementById("value_price").value;
    brand = document.getElementById("value_brand").value;
    quantity = document.getElementById("value_quantity").value;
    links = document.getElementById("value_links").value;
    // if (name !=="undef")
    //gọi đối tượng con Phone và gán giá trị
    if (name === "" && price === "" && brand === "" && quantity === "" && links === "") {
        alert("vui long nhập đủ thông tin sản phẩm ")
    } else {
        const object = new Accessory(name, price, brand, quantity, links);
        object.addSp(array, object);
        if (array.length > 0)
        document.getElementById("toi4").innerHTML = ""
        document.getElementById("show_list_sp").style = " display: flex";
        showAccessory();
        console.log(array)
    }
}
function addSpOther(name, price, brand, quantity,weight, links) {
    name = document.getElementById("value_name").value;
    price = document.getElementById("value_price").value;
    brand = document.getElementById("value_brand").value;
    weight = document.getElementById("value_brand").value;
    quantity = document.getElementById("value_quantity").value;
    links = document.getElementById("value_links").value;
    // if (name !=="undef")
    //gọi đối tượng con Phone và gán giá trị
    if (name === "" && price === "" && brand === "" && quantity === "" && links === ""&& weight==="") {
        alert("vui long nhập đủ thông tin sản phẩm ")
    } else {
        const object = new Other(name, price, brand, quantity, links, weight);
        object.addSp(array, object);
        if (array.length > 0)
            document.getElementById("toi4").innerHTML = ""
        document.getElementById("show_list_sp").style = " display: flex";
        showOther();
        console.log(array)
    }
}



