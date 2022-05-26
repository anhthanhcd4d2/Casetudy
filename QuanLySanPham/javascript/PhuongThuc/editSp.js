//input value edit
// function  editSpPhone(index){
//        let data =
//            `<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">
//         <tr>
//         <td>TÊN SAN PHAM</td>
//         <td>GIÁ SAN PHAM</td>
//         <td>NHAN HIỆU</td>
//         <td>SỐ LƯỢNG</td>
//         <td> MÀU SẮC </td>
//         <td> RAM </td>
//         <td> LINK GIỚI THIỆU </td>
//         <td>Sửa Sản Phẩm </td>
//         <td> Kết Thúc</td>
//         </tr>`
//         for (let i = 0; i < array.length; i++) {
//             let id=index*1
//             if (array[i] instanceof Phone) {
//             let {_name, _price, _brand, _quantity, _color, _ram, _links} = array[i];
//             if (i===id){
//                 data+='<tr>'+
//         '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
//         '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
//         '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
//         '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
//         '<td><input type="text" id="edit_color" placeholder='+_color+'></td>'+
//         '<td><input type="text" id="edit_ram" placeholder='+_ram+'></td>'+
//         '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
//         '<td > <button onclick="delete1(this.id); showPhone()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
//         '<td >'+'<button onclick="setSpPhone(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
//         '</tr>'
//                continue;
//             }
//             data += '<tr>' +
//                 '<td>' + _name + '</td>' +
//                 '<td>' + _price + '</td>' +
//                 '<td>' + _brand + '</td>' +
//                 '<td>' + _quantity + '</td>' +
//                 '<td>' + _color + '</td>' +
//                 '<td>' + _ram + '</td>' +
//                 '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
//                 '</tr>'
//         }
//     }
//         data+='</table>'
//     document.getElementById("show_list_sp").innerHTML = data;
// }
// function  editSpCompute(index){
//     let data = `<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">
//         <tr>
//         <td>TÊN SAN PHAM</td>
//         <td>GIÁ SAN PHAM</td>
//         <td>NHAN HIỆU</td>
//         <td>SỐ LƯỢNG</td>
//         <td> MÀU SẮC </td>
//         <td> RAM </td>
//         <td> VGA </td>
//         <td>  Ô Cứng </td>
//         <td>LINK GIỚI THIỆU </td>
//         <td>Xóa Sp </td>
//         <td> Kết Thúc</td>
//         </tr>`
//     for (let i = 0; i < array.length; i++) {
//         let id=index*1
//         if (array[i] instanceof Computer) {
//             const {_name, _price, _brand, _quantity, _color, _ram, _vga, _hardDrive, _links} = array[i];
//             if (i===id){
//                 data+=
//                     '<tr>'+
//                     '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
//                     '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
//                     '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
//                     '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
//                     '<td><input type="text" id="edit_color" placeholder='+_color+'></td>'+
//                     '<td><input type="text" id="edit_ram" placeholder='+_ram+'></td>'+
//                     '<td><input type="text" id="edit_vga" placeholder='+_vga+'></td>'+
//                     '<td><input type="text" id="edit_hardDrive" placeholder='+_hardDrive+'></td>'+
//                     '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
//                     '<td > <button onclick="delete1(this.id); showCompute()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
//                     '<td >'+'<button onclick="setSpCompute(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
//                     '</tr>'
//                 continue;
//             }
//             data += '<tr>' +
//                 '<td>' + _name + '</td>' +
//                 '<td>' + _price + '</td>' +
//                 '<td>' + _brand + '</td>' +
//                 '<td>' + _quantity + '</td>' +
//                 '<td>' + _color + '</td>' +
//                 '<td>' + _ram + '</td>' +
//                 '<td>' + _vga + '</td>' +
//                 '<td>' + _hardDrive + '</td>' +
//                 '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
//                 '</tr>'
//         }
//     }
//     document.getElementById("show_list_sp").innerHTML = data;
// }
// function  editSpRefrigeration(index){
//     let data = `<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">
//         <tr>
//         <td>TÊN SAN PHAM</td>
//         <td>GIÁ SAN PHAM</td>
//         <td>NHAN HIỆU</td>
//         <td>SỐ LƯỢNG</td>
//         <td>TRỌNG LƯỢNG </td>
//         <td> Số Ngăn Mát </td>
//         <td> Dung Tích </td>
//         <td> LINK GIỚI THIỆU </td>
//         <td> Xóa Sp </td>
//         <td> Kết Thúc</td>
//         </tr>`
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] instanceof Refrigeration) {
//             let id=index*1;
//             const {_name, _price, _brand, _quantity, _links, _weight, _coolCompertment, _capacity,} = array[i];
//             if (i===id){
//                 data+=
//                     '<tr>'+
//                     '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
//                     '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
//                     '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
//                     '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
//                     '<td><input type="text" id="edit_weight" placeholder='+_weight+'></td>'+
//                     '<td><input type="text" id="edit_coolCompertment" placeholder='+_coolCompertment+'></td>'+
//                     '<td><input type="text" id="edit_capacity" placeholder='+_capacity+'></td>'+
//                     '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
//                     '<td > <button onclick="delete1(this.id); showRefrigeration()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
//                     '<td >'+'<button onclick="setSpRefrigeration(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
//                     '</tr>'
//                 continue;
//             }
//             data += '<tr>' +
//                 '<td>' + _name + '</td>' +
//                 '<td>' + _price + '</td>' +
//                 '<td>' + _brand + '</td>' +
//                 '<td>' + _quantity + '</td>' +
//                 '<td>' + _weight + '</td>' +
//                 '<td>' + _coolCompertment + '</td>' +
//                 '<td>' + _capacity + '</td>' +
//                 '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
//                 '</tr>'
//         }
//     }
//
//     document.getElementById("show_list_sp").innerHTML = data;
// }
// function  editSpElectronicClock(index){
//     let data = `<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">
//         <tr>
//         <td>TÊN SAN PHAM</td>
//         <td>GIÁ SAN PHAM</td>
//         <td>NHAN HIỆU</td>
//         <td>SỐ LƯỢNG</td>
//         <td> MÀU SẮC </td>
//         <td> Khối Lượng </td>
//         <td> LINK GIỚI THIỆU </td>
//         <td> Xóa Sp </td>
//         <td> Kết Thúc</td>
//         </tr>`
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] instanceof ElectronicClock) {
//             let id=index*1;
//             const {_name, _price, _brand, _quantity, _color, _weight, _links} = array[i];
//             if (i===id){
//                 data+=
//                     '<tr>'+
//                     '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
//                     '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
//                     '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
//                     '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
//                     '<td><input type="text" id="edit_color" placeholder='+_color+'></td>'+
//                     '<td><input type="text" id="edit_weight" placeholder='+_weight+'></td>'+
//                     '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
//                     '<td > <button onclick="delete1(this.id); showElectronicClock()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
//                     '<td >'+'<button onclick="setSpElectronicClock(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
//                     '</tr>'
//                 continue;
//             }
//             data += '<tr>' +
//                 '<td>' + _name + '</td>' +
//                 '<td>' + _price + '</td>' +
//                 '<td>' + _brand + '</td>' +
//                 '<td>' + _quantity + '</td>' +
//                 '<td>' + _color + '</td>' +
//                 '<td>' + _weight + '</td>' +
//                 '<td >' + '<button>' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
//                 '</tr>'
//         }
//     }
//     document.getElementById("show_list_sp").innerHTML = data;
// }
// function  editSpAccessory(index){
//     let data = `<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">
//         <tr>
//         <td>TÊN SAN PHAM</td>
//         <td>GIÁ SAN PHAM</td>
//         <td>NHAN HIỆU</td>
//         <td>SỐ LƯỢNG</td>
//         <td> LINK GIỚI THIỆU </td>
//         <td> Xóa Sp </td>
//         <td> Kết Thúc</td>
//         </tr>`
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] instanceof Accessory) {
//             const {_name, _price, _brand, _quantity , _links} = array[i];
//             let id=index*1
//             if (i===id){
//                 data+='<tr>'+
//                     '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
//                     '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
//                     '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
//                     '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
//                     '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
//                     '<td > <button onclick="delete1(this.id); showAccessory()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
//                     '<td >'+'<button onclick="setSpAccessory(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
//                     '</tr>'
//                 continue;
//             }
//             data += '<tr>' +
//                 '<td>' + _name + '</td>' +
//                 '<td>' + _price + '</td>' +
//                 '<td>' + _brand + '</td>' +
//                 '<td>' + _quantity + '</td>' +
//                 '<td >' + '<button id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
//                 '</tr>'
//         }
//     }
//     document.getElementById("show_list_sp").innerHTML = data;
// }
// function  editSpOther(index){
//     let data = `<table id="showSp" border="1px" cellspacing="1px" cellpadding="1px">
//         <tr>
//         <td>TÊN SAN PHAM</td>
//         <td>GIÁ SAN PHAM</td>
//         <td>NHAN HIỆU</td>
//         <td>SỐ LƯỢNG</td>
//         <td> Trọng Lượng </td>
//         <td> LINK GIỚI THIỆU </td>
//         <td> Qoay Lại </td>
//         <td> Kết Thúc</td>
//         </tr>`
//     for (let i = 0; i < array.length; i++) {
//         if (array[i] instanceof Other) {
//             let id=index*1;
//             const {_name, _price, _brand, _quantity, _weight, _links} = array[i];
//             if (i===id){
//                 data+='<tr>'+
//                     '<td><input required type="text" id="edit_name" placeholder='+_name+'></td>'+
//                     '<td><input required type="text" id="edit_price" placeholder='+_price+'></td>'+
//                     '<td><input required type="text" id="edit_brand" placeholder='+_brand+'></td>'+
//                     '<td><input type="text" id="edit_quantity" placeholder='+_quantity+'></td>'+
//                     '<td><input type="text" id="edit_weight" placeholder='+_weight+'></td>'+
//                     '<td><input  type="text" id="edit_links" placeholder='+_links+'></td>'+
//                     '<td > <button onclick=" delete1(this.id); showOther()"  id="'+i+'" > Xóa Sản Phẩm </button></td>'+
//                     '<td >'+'<button onclick="setSpOther(this.id)" id="'+i+'" >'+ 'Xong' + '</button>'+'</td>' +
//                     '</tr>'
//                 continue;
//             }
//             data += '<tr>' +
//                 '<td>' + _name + '</td>' +
//                 '<td>' + _price + '</td>' +
//                 '<td>' + _brand + '</td>' +
//                 '<td>' + _quantity + '</td>' +
//                 '<td>' + _weight + '</td>' +
//                 '<td >' + '<button  id="' + i + '" >' + '<a href="' + _links + '">' + 'Links Sản Phẩm' + '</a>' + '</button>' + '</td>' +
//                 '</tr>'
//         }
//     }
//     document.getElementById("show_list_sp").innerHTML = data;
// }
// set value edit
function setSpPhone(index){
    let a=document.getElementById("edit_name").value;
    let b=document.getElementById("edit_price").value;
    let c=document.getElementById("edit_brand").value;
    let d=document.getElementById("edit_quantity").value;
    let e=document.getElementById("edit_color").value;
    let f=document.getElementById("edit_ram").value;
    let g=document.getElementById("edit_links").value;
    if (a===""){
        a=array[index]._name;
    }
    if (b===""){
        b=array[index].getprice();
    }
    if (c===""){
        c=array[index].getbrand();
    }
    if (d===""){
        d=array[index].getquantity();
    }
    if (e===""){
        e=array[index].getcolor();
    }
    if (f===""){
        f=array[index].getram();
    }
    if (g===""){
        g=array[index].getlinks();
    }
    array[index].setname(a);
    array[index].setprice(b);
    array[index].setbrand(c);
    array[index].setquantity(d);
    array[index].setcolor(e);
    array[index].setram(f);
    array[index].setlinks(g);
    showPhone();
}
function setSpCompute(index){
    let a=document.getElementById("edit_name").value;
    let b=document.getElementById("edit_price").value;
    let c=document.getElementById("edit_brand").value;
    let d=document.getElementById("edit_quantity").value;
    let e=document.getElementById("edit_color").value;
    let f=document.getElementById("edit_ram").value;
    let g=document.getElementById("edit_vga").value;
    let h=document.getElementById("edit_hardDrive").value;
    let m=document.getElementById("edit_links").value;

    if (a===""){
        a=array[index].getname();
    }
    if (b===""){
        b=array[index].getprice();
    }
    if (c===""){
        c=array[index].getbrand();
    }
    if (d===""){
        d=array[index].getquantity();
    }
    if (e===""){
        e=array[index].getcolor();
    }
    if (f===""){
        f=array[index].getram();
    }
    if (g===""){
        g=array[index].getvga();
    }
    if (h===""){
        h=array[index].gethardDrive();
    }
    if (m===""){
        m=array[index].getlinks();
    }
    array[index].setname(a);
    array[index].setprice(b);
    array[index].setbrand(c);
    array[index].setquantity(d);
    array[index].setcolor(e);
    array[index].setram(f);
    array[index].setlinks(m);
    array[index].setvga(g);
    array[index].sethardDrive(h);
   showCompute();
}
function setSpRefrigeration(index){
    let a=document.getElementById("edit_name").value;
    let b=document.getElementById("edit_price").value;
    let c=document.getElementById("edit_brand").value;
    let d=document.getElementById("edit_quantity").value;
    let e=document.getElementById("edit_weight").value;
    let f=document.getElementById("edit_coolCompertment").value;
    let g=document.getElementById("edit_capacity").value;
    let m=document.getElementById("edit_links").value;
    if (a===""){
        a=array[index].getname();
    }
    if (b===""){
        b=array[index].getprice();
    }
    if (c===""){
        c=array[index].getbrand();
    }
    if (d===""){
        d=array[index].getquantity();
    }
    if (e===""){
        e=array[index].getweight();
    }
    if (f===""){
        f=array[index].getcoolCompertment();
    }
    if (g===""){
        g=array[index].getcapacity();
    }
    if (m===""){
        m=array[index].getlinks();
    }
    array[index].setname(a);
    array[index].setprice(b);
    array[index].setbrand(c);
    array[index].setquantity(d);
    array[index].setweight(e);
    array[index].setcoolCompertment(f);
    array[index].setlinks(m);
    array[index].setcapacity(g);
    showRefrigeration();
}
function setSpElectronicClock(index){
    let a=document.getElementById("edit_name").value;
    let b=document.getElementById("edit_price").value;
    let c=document.getElementById("edit_brand").value;
    let d=document.getElementById("edit_quantity").value;
    let e=document.getElementById("edit_weight").value;
    let f=document.getElementById("edit_color").value;
    let m=document.getElementById("edit_links").value;

    if (a===""){
        a=array[index].getname();
    }
    if (b===""){
        b=array[index].getprice();
    }
    if (c===""){
        c=array[index].getbrand();
    }
    if (d===""){
        d=array[index].getquantity();
    }
    if (e===""){
        e=array[index].getweight();
    }
    if (f===""){
        f=array[index].getcolor();
    }
    if (m===""){
        m=array[index].getlinks();
    }
    array[index].setname(a);
    array[index].setprice(b);
    array[index].setbrand(c);
    array[index].setquantity(d);
    array[index].setweight(e);
    array[index].setcolor(f);
    array[index].setlinks(m);
    showElectronicClock();
}
function setSpAccessory(index){
    let a=document.getElementById("edit_name").value;
    let b=document.getElementById("edit_price").value;
    let c=document.getElementById("edit_brand").value;
    let d=document.getElementById("edit_quantity").value;
    let m=document.getElementById("edit_links").value;
    if (a===""){
        a=array[index].getname();
    }
    if (b===""){
        b=array[index].getprice();
    }
    if (c===""){
        c=array[index].getbrand();
    }

    if (d===""){
        d=array[index].getquantity();
    }
    if (m===""){
        m=array[index].getlinks();
    }
    array[index].setname(a);
    array[index].setprice(b);
    array[index].setbrand(c);
    array[index].setquantity(d);
    array[index].setlinks(m);
    showAccessory();
}
function setSpOther(index){
    let a=document.getElementById("edit_name").value;
    let b=document.getElementById("edit_price").value;
    let c=document.getElementById("edit_brand").value;
    let d=document.getElementById("edit_quantity").value;
    let e=document.getElementById("edit_weight").value;
    let m=document.getElementById("edit_links").value;
    if (a===""){
        a=array[index].getname();
    }
    if (b===""){
        b=array[index].getprice();
    }
    if (c===""){
        c=array[index].getbrand();
    }
    if (e===""){
        e=array[index].getweight();
    }
    if (d===""){
        d=array[index].getquantity();
    }
    if (m===""){
        m=array[index].getlinks();
    }
    array[index].setname(a);
    array[index].setprice(b);
    array[index].setbrand(c);
    array[index].setweight(e);
    array[index].setquantity(d);
    array[index].setlinks(m);
    showOther();
}







