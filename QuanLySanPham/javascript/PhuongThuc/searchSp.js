function searchSpPhone(){
    name = document.getElementById("value_name").value;
    price = document.getElementById("value_price").value;
    brand = document.getElementById("value_brand").value;
    quantity = document.getElementById("value_quantity").value;
    color = document.getElementById("value_color").value;
    ram = document.getElementById("value_ram").value;
    links = document.getElementById("value_links").value;
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Phone){
            const {_name, _price, _brand, _quantity, _color, _ram, _links} = array[i];
            if (name === "" && price === "" && brand === "" && quantity === "" && color === "" && ram === "" && links === "") {
                    showPhone();
                    alert("Không Có Sản Phẩm Hiển Thị")
            }
            }
    }

}