let use=[]
let password=[]

document.getElementById("useName-dk").setAttribute("onclick","dk()")
document.getElementById("login").setAttribute("onclick","login()")
function dk() {
    let useName= document.getElementById("1").value;
    let usePassword= document.getElementById("2").value;
    if ( useName && usePassword){
        use.push(useName);
        password.push(usePassword)
        alert("Thành Công")
    }else {
        alert("vui lòng điền đầy đủ thông tin")
    }
    console.log(use,password)
}
function login() {
    let promi=new Promise(function (tc,tb) {
        let useName= document.getElementById("1").value;
        let usePassword= document.getElementById("2").value;
        if (use.filter(value => value===useName).length && password.filter(value => value===usePassword).length){
            tc("Đăng Nhập Thành Công")
        }else {
            tb("Bạn nhập sai tài Khoản Hoặc Mật Khẩu")
        }
    })
        .then(function (data) {
            alert(data)
            document.getElementById("from-Use").style="display:none";
        })
        .catch(function (data) {
            alert(data)
        })
}
document.getElementById("test-dx").setAttribute("onclick","dx()");
function dx() {
    document.getElementById("from-Use").style="display:flex";
}
