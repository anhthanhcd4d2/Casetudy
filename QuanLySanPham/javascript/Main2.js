//hiển thị bảng nhập sản phẩm
function showNewSpPhone(id) {
    document.getElementById("input_vlue").style = "display: flex;"
    document.getElementById("show_list_sp").style = " display: flex";
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Phone) {
            count++;
            console.log(count)
            break;
        }
    }
    if (count === 1) {
        showPhone();
    } else {
        document.getElementById("show_list_sp").style = " display: none";
    }
    data = `<table id="addSp" border="1px" cellpadding="1px" cellspacing=" 1px">
    <thead>
            <th>
                <td> 
                    ten san pham
                </td>
            </th>
            <th>
                <td> 
                    Gia san pham
                </td>
            </th>
            <th>
                <td> 
                    Nhãn hiệu sản phẩm
                </td>
            </th>
            <th>
                <td> 
                   so luong san pham
                </td>
            </th>
            <th>
                <td> 
                   Màu sản phẩm
                </td>
            </th>
            <th>
                <td> 
                   Bộ Nhớ Ram
                </td>
            </th>
            <th>
                <td> 
                  Links Sản Phẩm
                </td>
            </th>
            <th>
                <td> 
                            <button onclick="addSpPhone()"  type="button">them san pham</button>
   
                </td>
            </th>
                                    <th>
                <td> 
                            <button onclick="searchSpPhone()"  type="button">Tìm Kiếm</button>
   
                </td>
            </th>

    </thead>
    <tbody>
            <th>
                <td> 
                    <input required type="text" id="value_name">
                </td>
            </th>
            <th>
                 <td> 
                        <input required type="text" id="value_price">
                 </td>
            </th>
            <th>
                  <td> 
                        <input required type="text" id="value_brand">
                  </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_quantity">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_color">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_ram">
                 </td>
            </th>
            <th>
                 <td> 
                        <input  type="text" id="value_links">
                 </td>
            </th>
            <th>
                 <td> 
                       <button   type="reset"> Riset</button>
                 </td>
            </th>
    </tbody>
</table>`
    let check = document.getElementById(id).value;
    if (check === "false") {
        document.getElementById("input_vlue").innerHTML = data;
    }
    checkOnOff(id);
}

function showNewSpComputer(id) {
    document.getElementById("input_vlue").style = "display: flex;"
    document.getElementById("show_list_sp").style = " display: flex";
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Computer) {
            count++;
            break;
        }
    }
    if (count === 1) {
        showCompute();
    } else {
        document.getElementById("show_list_sp").style = " display: none";
    }
    // if (a === 1) {
    data = `<table id="addSp" border="1px" cellpadding="1px" cellspacing=" 1px">
    <thead>
            <th>
                <td> 
                    Tên Sản Phẩm
                </td>
            </th>
            <th>
                <td> 
                    Gía Sản Phẩm
                </td>
            </th>
            <th>
                <td> 
                    Nhãn Hiệu
                </td>
            </th>
            <th>
                <td> 
                   Số Lượng
                </td>
            </th>
            <th>
                <td> 
                   Màu Sắc
                </td>
            </th>
            <th>
                <td> 
                   Bộ Nhớ Ram
                </td>
            </th>
            <th>
                <td> 
                   VGA
                </td>
            </th>
            <th>
                <td> 
                   Ô Cứng
                </td>
            </th>
            <th>
                <td> 
                  Links Sản Phẩm
                </td>
            </th>
            <th>
                <td> 
                            <button onclick="addSpComputer()"  type="button">them san pham</button>
   
                </td>
            </th>


    </thead>
    <tbody>
            <th>
                <td> 
                    <input required type="text" id="value_name">
                </td>
            </th>
            <th>
                 <td> 
                        <input required type="text" id="value_price">
                 </td>
            </th>
            <th>
                  <td> 
                        <input required type="text" id="value_brand">
                  </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_quantity">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_color">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_ram">
                 </td>
            </th>
                        <th>
                 <td> 
                        <input type="text" id="value_vga">
                 </td>
            </th>
                        <th>
                 <td> 
                        <input type="text" id="value_hardDrive">
                 </td>
            </th>
            <th>
                 <td> 
                        <input  type="text" id="value_links">
                 </td>
            </th>
            <th>
                 <td> 
                       <button   type="reset"> Riset</button>
                 </td>
            </th>
    </tbody>
</table>`

    let check = document.getElementById(id).value;
    if (check === "false") {
        document.getElementById("input_vlue").innerHTML = data;
    }
    checkOnOff(id);
}

function showNewSpRefrigeration(id) {
    document.getElementById("input_vlue").style = "display: flex;"
    document.getElementById("show_list_sp").style = " display: flex";
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Refrigeration) {
            count++;
            break;
        }
    }
    if (count === 1) {
        showCompute();
    } else {
        document.getElementById("show_list_sp").style = " display: none";
    }
        data = `<table id="addSp" border="1px" cellpadding="1px" cellspacing=" 1px">
    <thead>
            <th>
                <td> 
                    ten san pham
                </td>
            </th>
            <th>
                <td> 
                    Gia san pham
                </td>
            </th>
            <th>
                <td> 
                    Nhãn hiệu sản phẩm
                </td>
            </th>
            <th>
                <td> 
                   so luong san pham
                </td>
            </th>
            <th>
                <td> 
                   Trọng Lượng
                </td>
            </th>
            <th>
                <td> 
                  Số Ngăn Mạng
                </td>
            </th>
                        <th>
                <td> 
                  Dung Tích
                </td>
            </th>
            <th>
                <td> 
                  Links Sản Phẩm
                </td>
            </th>
            <th>
                <td> 
                        <button onclick="addSpRefrigeration()"  type="button">them san pham</button>
                </td>
            </th>

    </thead>
    <tbody>
            <th>
                <td> 
                        <input required type="text" id="value_name">
                </td>
            </th>
            <th>
                 <td> 
                        <input required type="text" id="value_price">
                 </td>
            </th>
            <th>
                  <td> 
                        <input required type="text" id="value_brand">
                  </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_quantity">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_weight">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_coolCompartment">
                 </td>
            </th> 
            <th>
                 <td> 
                        <input type="text" id="value_capacity">
                 </td>
            </th>
            <th>
                 <td> 
                        <input  type="text" id="value_links">
                 </td>
            </th>
            <th>
                 <td> 
                       <button   type="reset"> Riset</button>
                 </td>
            </th>
    </tbody>
</table>`
        document.getElementById("input_vlue").innerHTML = data;

    let check = document.getElementById(id).value;
    if (check === "false") {
        document.getElementById("input_vlue").innerHTML = data;
    }
    checkOnOff(id);
}

function showNewSpElectronicClock(id) {
    document.getElementById("input_vlue").style = "display: flex;"
    document.getElementById("show_list_sp").style = " display: flex";
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof ElectronicClock) {
            count++;
            break;

        }
    }
    if (count === 1) {
        showElectronicClock();
    } else {
        document.getElementById("show_list_sp").style = " display: none";
    }


        data = `<table id="addSp" border="1px" cellpadding="1px" cellspacing=" 1px">
    <thead>
            <th>
                <td> 
                    ten san pham
                </td>
            </th>
            <th>
                <td> 
                    Gia san pham
                </td>
            </th>
            <th>
                <td> 
                    Nhãn hiệu sản phẩm
                </td>
            </th>
            <th>
                <td> 
                   so luong san pham
                </td>
            </th>
            <th>
                <td> 
                   trọng lượng
                </td>
            </th>
            <th>
                <td> 
                   màu sản phẩm
                </td>
            </th>
            <th>
                <td> 
                  Links Sản Phẩm
                </td>
            </th>
            <th>
                <td> 
                            <button onclick="addSpElectronicClock()"  type="button">them san pham</button>
   
                </td>
            </th>

    </thead>
    <tbody>
            <th>
                <td> 
                    <input required type="text" id="value_name">
                </td>
            </th>
            <th>
                 <td> 
                        <input required type="text" id="value_price">
                 </td>
            </th>
            <th>
                  <td> 
                        <input required type="text" id="value_brand">
                  </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_quantity">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_color">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_weight">
                 </td>
            </th>
            <th>
                 <td> 
                        <input  type="text" id="value_links">
                 </td>
            </th>
            <th>
                 <td> 
                       <button   type="reset"> Riset</button>
                 </td>
            </th>
    </tbody>
</table>`
        document.getElementById("input_vlue").innerHTML = data;

    let check = document.getElementById(id).value;
    if (check === "false") {
        document.getElementById("input_vlue").innerHTML = data;
    }
    checkOnOff(id);
}

function showNewSpAccessory(id) {
    document.getElementById("input_vlue").style = "display: flex;"
    document.getElementById("show_list_sp").style = " display: flex";
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Accessory) {
            count++;
            break;
        }
    }
    if (count === 1) {
        showAccessory();
    } else {
        document.getElementById("show_list_sp").style = " display: none";
    }

        data = `<table id="addSp" border="1px" cellpadding="1px" cellspacing=" 1px">
    <thead>
            <th>
                <td> 
                    ten san pham
                </td>
            </th>
            <th>
                <td> 
                    Gia san pham
                </td>
            </th>
            <th>
                <td> 
                    Nhãn hiệu sản phẩm
                </td>
            </th>
            <th>
                <td> 
                   so luong san pham
                </td>
            </th>
            <th>
                <td> 
                  Links Sản Phẩm
                </td>
            </th>
            <th>
                <td> 
                            <button onclick="addSpAccessory()"  type="button">them san pham</button>
   
                </td>
            </th>

    </thead>
    <tbody>
            <th>
                <td> 
                    <input required type="text" id="value_name">
                </td>
            </th>
            <th>
                 <td> 
                        <input required type="text" id="value_price">
                 </td>
            </th>
            <th>
                  <td> 
                        <input required type="text" id="value_brand">
                  </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_quantity">
                 </td>
            </th>
            <th>
                 <td> 
                        <input  type="text" id="value_links">
                 </td>
            </th>
            <th>
                 <td> 
                       <button   type="reset"> Riset</button>
                 </td>
            </th>
    </tbody>
</table>`
        document.getElementById("input_vlue").innerHTML = data;

    let check = document.getElementById(id).value;
    if (check === "false") {
        document.getElementById("input_vlue").innerHTML = data;
    }
    checkOnOff(id);
}

function showNewSpOther(id) {
    document.getElementById("input_vlue").style = "display: flex;"
    document.getElementById("show_list_sp").style = " display: flex";
    let count = 0
    for (let i = 0; i < array.length; i++) {
        if (array[i] instanceof Other) {
            count++;
            console.log(count)
            break;
        }
    }
    if (count ===1) {
        showOther();
    }else {
        document.getElementById("show_list_sp").style = " display: none";
    }
        data = `<table id="addSp" border="1px" cellpadding="1px" cellspacing=" 1px">
    <thead>
            <th>
                <td> 
                    ten san pham
                </td>
            </th>
            <th>
                <td> 
                    Gia san pham
                </td>
            </th>
            <th>
                <td> 
                    Nhãn hiệu sản phẩm
                </td>
            </th>
            <th>
                <td> 
                   so luong san pham
                </td>
            </th>
            <th>
                <td> 
                   Trọng Lượng
                </td>
            </th>
            <th>
                <td> 
                  Links Sản Phẩm
                </td>
            </th>
            <th>
                <td> 
                        <button onclick="addSpOther()"  type="button">them san pham</button>
                </td>
            </th>

    </thead>
    <tbody>
            <th>
                <td> 
                        <input required type="text" id="value_name">
                </td>
            </th>
            <th>
                 <td> 
                        <input required type="text" id="value_price">
                 </td>
            </th>
            <th>
                  <td> 
                        <input required type="text" id="value_brand">
                  </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_quantity">
                 </td>
            </th>
            <th>
                 <td> 
                        <input type="text" id="value_weight">
                 </td>
            </th>
            <th>
                 <td> 
                        <input  type="text" id="value_links">
                 </td>
            </th>
            <th>
                 <td> 
                       <button   type="reset">Riset</button>
                 </td>
            </th>
    </tbody>
</table>`
        document.getElementById("input_vlue").innerHTML = data;

    let check = document.getElementById(id).value;
    if (check === "false") {
        document.getElementById("input_vlue").innerHTML = data;
    }
    checkOnOff(id);
}

function checkOnOff(id) {
    let check = document.getElementById(id).value;
    let a1 = document.getElementById("x2").id;
    let b1 = document.getElementById("x1").id;
    let c1 = document.getElementById("x").id;
    let d1 = document.getElementById("x3").id;
    let e1 = document.getElementById("x4").id;
    let f1 = document.getElementById("x5").id;
    let array1 = [a1, b1, c1, d1, e1, f1];
    if (check === "false") {
        document.getElementById(id).value = "true";
        for (let i = 0; i < array1.length; i++) {
            if (array1[i] !== id) {
                let id1=array1[i];
                document.getElementById(id1).value="false";
            }
        }
    } else {
        document.getElementById("input_vlue").style = "display: none;";
        document.getElementById("show_list_sp").style = " display: none";
        document.getElementById(id).value = "false";
    }
}



