
function showPhone(index) {
    let data = `<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">
        <tr>
        <td>TÊN SAN PHAM</td> 
        <td>GIÁ SAN PHAM</td> 
        <td>NHAN HIỆU</td> 
        <td>SỐ LƯỢNG</td> 
        <td> MÀU SẮC </td>
        <td> RAM </td>
        <td> XÓA SẢN PHẨM  </td>
        <td> SỬA SẢN PHẨM </td>
        <td> LINK GIỚI THIỆU </td>
        </tr>`
    for (let i = 0; i < array.length; i++) {
        let id=index*1
        const {_name, _price, _brand, _quantity, _color, _ram, _links} = array[i];
        if (array[i] instanceof Phone) {
            if (i===id){
                data+=           `
        <tr>
        <td>TÊN SAN PHAM</td>
        <td>GIÁ SAN PHAM</td>
        <td>NHAN HIỆU</td>
        <td>SỐ LƯỢNG</td>
        <td> MÀU SẮC </td>
        <td> RAM </td>
        <td> LINK GIỚI THIỆU </td>
        <td>Sửa Sản Phẩm </td>
        <td> Kết Thúc</td>
        </tr>`+
                    '<tr>'+
                    '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
                    '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
                    '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
                    '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
                    '<td><input type="text" id="edit_color" placeholder='+_color+'></td>'+
                    '<td><input type="text" id="edit_ram" placeholder='+_ram+'></td>'+
                    '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
                    '<td > <button onclick="delete1(this.id); showPhone()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
                    '<td >'+'<button onclick="setSpPhone(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
                    '</tr>'
                continue;
            }
            data += '<tr>' +
                '<td>' + _name + '</td>' +
                '<td>' + _price + '</td>' +
                '<td>' + _brand + '</td>' +
                '<td>' + _quantity + '</td>' +
                '<td>' + _color + '</td>' +
                '<td>' + _ram + '</td>' +
                '<td >' + '<button onclick="delete1(this.id); showPhone()" id="' + i + '" >' + 'xoa san pham' + '</button>' + '</td>' +
                '<td >' + '<button onclick="showPhone(this.id)" id="' + i + '" >' + 'Sửa Sản Phẩm' + '</button>' + '</td>' +
                '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
                '</tr>'
        }
    }
    data+= '</table>'
    document.getElementById("show_list_sp").innerHTML = data;
}

function showCompute(index) {
    let data = '<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">' +
        "<tr>" +
        "<td>TÊN SAN PHAM</td>" +
        "<td>GIÁ SAN PHAM</td>" +
        "<td>NHAN HIỆU</td>" +
        "<td>SỐ LƯỢNG</td>" +
        "<td> MÀU SẮC </td>" +
        "<td> RAM </td>" +
        "<td> VGA  </td>" +
        "<td> ổ Cứng  </td>" +
        "<td> Xóa SảN Phẩm </td>" +

        "</tr>"
    for (let i = 0; i < array.length; i++) {
        let id=index*1
        const {_name, _price, _brand, _quantity, _color, _ram, _vga, _hardDrive, _links} = array[i];
        if (array[i] instanceof Computer) {
            if (i===id){
                data+=`
        <tr>
        <td>TÊN SAN PHAM</td>
        <td>GIÁ SAN PHAM</td>
        <td>NHAN HIỆU</td>
        <td>SỐ LƯỢNG</td>
        <td> MÀU SẮC </td>
        <td> RAM </td>
        <td> VGA </td>
        <td>  Ô Cứng </td>
        <td>LINK GIỚI THIỆU </td>
        <td>Xóa Sp </td>
        <td> Kết Thúc</td>
        </tr>`+
                    '<tr>'+
                    '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
                    '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
                    '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
                    '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
                    '<td><input type="text" id="edit_color" placeholder='+_color+'></td>'+
                    '<td><input type="text" id="edit_ram" placeholder='+_ram+'></td>'+
                    '<td><input type="text" id="edit_vga" placeholder='+_vga+'></td>'+
                    '<td><input type="text" id="edit_hardDrive" placeholder='+_hardDrive+'></td>'+
                    '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
                    '<td > <button onclick="delete1(this.id); showCompute()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
                    '<td >'+'<button onclick="setSpCompute(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
                    '</tr>'
                continue;
            }
            data += '<tr>' +
                '<td>' + _name + '</td>' +
                '<td>' + _price + '</td>' +
                '<td>' + _brand + '</td>' +
                '<td>' + _quantity + '</td>' +
                '<td>' + _color + '</td>' +
                '<td>' + _ram + '</td>' +
                '<td >' + '<button onclick="delete1(this.id); showCompute()" id="' + i + '" >' + 'xoa san pham' + '</button>' + '</td>' +
                '<td >' + '<button onclick="showCompute(this.id)" id="' + i + '" >' + 'Sửa Sản Phẩm' + '</button>' + '</td>' +
                '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
                '</tr>'
        }
    }
    data += "</table>"
    document.getElementById("show_list_sp").innerHTML = data;
}

function showRefrigeration(index) {
    let data = '<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">' +
        "<tr>" +
        "<td>TÊN SAN PHAM</td>" +
        "<td>GIÁ SAN PHAM</td>" +
        "<td>NHAN HIỆU</td>" +
        "<td>SỐ LƯỢNG</td>" +
        "<td>TRỌNG LƯỢNG </td>" +
        "<td> Số Ngăn Mát </td>" +
        "<td> Dung Tích </td>" +
        "<td> XÓA SẢN PHẨM  </td>" +
        "<td> SỬA SẢN PHẨM </td>" +
        "<td> LINK GIỚI THIỆU </td>" +
        "</tr>"
    for (let i = 0; i < array.length; i++) {
        let id=index*1
        const {_name, _price, _brand, _quantity, _links, _weight, _coolCompertment, _capacity,} = array[i];
        if (array[i] instanceof Refrigeration) {
            if (i===id){
                data+=`
       <tr>
        <td>TÊN SAN PHAM</td>
        <td>GIÁ SAN PHAM</td>
        <td>NHAN HIỆU</td>
        <td>SỐ LƯỢNG</td>
        <td>TRỌNG LƯỢNG </td>
        <td> Số Ngăn Mát </td>
        <td> Dung Tích </td>
        <td> LINK GIỚI THIỆU </td>
        <td> Xóa Sp </td>
        <td> Kết Thúc</td>
        </tr>`+
                    '<tr>'+
                    '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
                    '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
                    '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
                    '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
                    '<td><input type="text" id="edit_weight" placeholder='+_weight+'></td>'+
                    '<td><input type="text" id="edit_coolCompertment" placeholder='+_coolCompertment+'></td>'+
                    '<td><input type="text" id="edit_capacity" placeholder='+_capacity+'></td>'+
                    '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
                    '<td > <button onclick="delete1(this.id); showRefrigeration()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
                    '<td >'+'<button onclick="setSpRefrigeration(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
                    '</tr>'
                continue;
            }
            data += '<tr>' +
                '<td>' + _name + '</td>' +
                '<td>' + _price + '</td>' +
                '<td>' + _brand + '</td>' +
                '<td>' + _quantity + '</td>' +
                '<td>' + _weight + '</td>' +
                '<td>' + _coolCompertment + '</td>' +
                '<td>' + _capacity + '</td>' +
                '<td >' + '<button onclick="delete1(this.id); showRefrigeration()" id="' + i + '" >' + 'xoa san pham' + '</button>' + '</td>' +
                '<td >' + '<button onclick="showRefrigeration(this.id)" id="' + i + '" >' + 'Sửa Sản Phẩm' + '</button>' + '</td>' +
                '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
                '</tr>'
        }
    }
    data += "</table>"
    document.getElementById("show_list_sp").innerHTML = data;
}
function showElectronicClock(index) {
    data = '<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">' +
        "<tr>" +
        "<td>TÊN SAN PHAM</td>" +
        "<td>GIÁ SAN PHAM</td>" +
        "<td>NHAN HIỆU</td>" +
        "<td>SỐ LƯỢNG</td>" +
        "<td> MÀU SẮC </td>" +
        "<td> Khối Lượng </td>" +
        "<td> XÓA SẢN PHẨM  </td>" +
        "<td> SỬA SẢN PHẨM </td>" +
        "<td> LINK GIỚI THIỆU </td>" +
        "</tr>"
    for (let i = 0; i < array.length; i++) {
        let id=index*1;
        if (array[i] instanceof ElectronicClock){
            const {_name, _price, _brand, _quantity, _color, _weight, _links} = array[i];
        if (i===id){
            data+=
                `<tr>
                    <td>TÊN SAN PHAM</td>
                    <td>GIÁ SAN PHAM</td>
                    <td>NHAN HIỆU</td>
                    <td>SỐ LƯỢNG</td>
                    <td> MÀU SẮC </td>
                    <td> Khối Lượng </td>
                    <td> LINK GIỚI THIỆU </td>
                    <td> Xóa Sp </td>
                    <td> Kết Thúc</td>
                </tr>+
                </tr>`+
                '<tr>'+
                '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
                '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
                '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
                '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
                '<td><input type="text" id="edit_color" placeholder='+_color+'></td>'+
                '<td><input type="text" id="edit_weight" placeholder='+_weight+'></td>'+
                '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
                '<td > <button onclick="delete1(this.id); showElectronicClock()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
                '<td >'+'<button onclick="setSpElectronicClock(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
                '</tr>'
            continue;
        }
        data += '<tr>' +
            '<td>' + _name + '</td>' +
            '<td>' + _price + '</td>' +
            '<td>' + _brand + '</td>' +
            '<td>' + _quantity + '</td>' +
            '<td>' + _color + '</td>' +
            '<td>' + _weight + '</td>' +
            '<td >' + '<button onclick="delete1(this.id); showElectronicClock()" id="' + i + '" >' + 'xoa san pham' + '</button>' + '</td>' +
            '<td >' + '<button onclick="showElectronicClock(this.id)" id="' + i + '" >' + 'Sửa Sản Phẩm' + '</button>' + '</td>' +
            '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +            '</tr>'
        }
    }
    data += "</table>"
    document.getElementById("show_list_sp").innerHTML = data;
}
function showAccessory(index) {
    data = '<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">' +
        "<tr>" +
        "<td>TÊN SAN PHAM</td>" +
        "<td>GIÁ SAN PHAM</td>" +
        "<td>NHAN HIỆU</td>" +
        "<td>SỐ LƯỢNG</td>" +
        "<td> XÓA SẢN PHẨM  </td>" +
        "<td> SỬA SẢN PHẨM </td>" +
        "<td> LINK GIỚI THIỆU </td>" +
        "</tr>"
    for (let i = 0; i < array.length; i++) {
        const {_name, _price, _brand, _quantity , _links} = array[i];
        let id=index*1
        if (array[i] instanceof Accessory) {
            if (i===id){
                data+=
                   `<tr>
                        <td>TÊN SAN PHAM</td>
                        <td>GIÁ SAN PHAM</td>
                        <td>NHAN HIỆU</td>
                        <td>SỐ LƯỢNG</td>
                        <td> LINK GIỚI THIỆU </td>
                        <td> Xóa Sp </td>
                        <td> Kết Thúc</td>
                    </tr>`+
                    '<tr>'+
                    '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
                    '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
                    '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
                    '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
                    '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
                    '<td > <button onclick="delete1(this.id); showAccessory()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
                    '<td >'+'<button onclick="setSpAccessory(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
                    '</tr>'
                continue;
            }
            data += '<tr>' +
                '<td>' + _name + '</td>' +
                '<td>' + _price + '</td>' +
                '<td>' + _brand + '</td>' +
                '<td>' + _quantity + '</td>' +
                '<td >' + '<button onclick="delete1(this.id); showAccessory()" id="' + i + '" >' + 'xoa san pham' + '</button>' + '</td>' +
                '<td >' + '<button onclick="showAccessory(this.id)" id="' + i + '" >' + 'Sửa Sản Phẩm' + '</button>' + '</td>' +
                '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +                '</tr>'

        }
    }
    data += "</table>"
    document.getElementById("show_list_sp").innerHTML = data;
}
function showOther(index) {
    data = '<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">' +
        "<tr>" +
        "<td>TÊN SAN PHAM</td>" +
        "<td>GIÁ SAN PHAM</td>" +
        "<td>NHAN HIỆU</td>" +
        "<td>SỐ LƯỢNG</td>" +
        "<td> Trọng Lượng </td>" +
        "<td> XÓA SẢN PHẨM  </td>" +
        "<td> SỬA SẢN PHẨM </td>" +
        "<td> LINK GIỚI THIỆU </td>" +
        "</tr>"
     for (let i = 0; i < array.length; i++)  {
         let id=index*1
         if (array[i] instanceof Other) {
             const {_name, _price, _brand, _quantity, _weight, _links} = array[i];
             if (i===id){
                 data+=
                 `<td>TÊN SAN PHAM</td>
                 <td>GIÁ SAN PHAM</td>
                 <td>NHAN HIỆU</td>
                 <td>SỐ LƯỢNG</td>
                 <td> Trọng Lượng </td>
                 <td> LINK GIỚI THIỆU </td>
                 <td> Qoay Lại </td>
                 <td> Kết Thúc</td>
             </tr>`+
                     '<tr>'+
                     '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
                     '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
                     '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
                     '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
                     '<td><input type="text" id="edit_weight" placeholder='+_weight+'></td>'+
                     '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
                     '<td > <button onclick="delete1(this.id); showOther()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
                     '<td >'+'<button onclick="setSpOther(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
                     '</tr>'
                 continue;
             }
             data += '<tr>' +
                 '<td>' + _name + '</td>' +
                 '<td>' + _price + '</td>' +
                 '<td>' + _brand + '</td>' +
                 '<td>' + _quantity + '</td>' +
                 '<td>' + _weight + '</td>' +
                 '<td >' + '<button onclick="delete1(this.id); showOther()" id="' + i + '" >' + 'xoa san pham' + '</button>' + '</td>' +
                 '<td >' + '<button onclick="showOther(this.id)" id="' + i + '" >' + 'Sửa Sản Phẩm' + '</button>' + '</td>' +
                 '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +                '</tr>'

         }
    }
    data += "</table>"
    document.getElementById("show_list_sp").innerHTML = data;
}
