// xóa phần tử của mảng nếu 0 có phần tử sẽ hiện " khong có sản phẩm
function delete1(index){
    let size=array.length
    if (size>1) {
        array.splice(index, 1);
    }else {
        if (size ===1) {
            document.getElementById("toi4").innerHTML="Không Có Sản Phẩm Hiển Thị";
            array.splice(index, 1);
            document.getElementById("show_list_sp").style = " display: none";
        }
    }
}