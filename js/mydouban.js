// 8、当页面宽度达到800，隐藏右边
window.onresize = function(){
    var clientwidth = document.documentElement.clientWidth || document.body.clientWidth;
    var obj = document.querySelector(".right");
    if(clientwidth < 800){
        obj.style.display = "none";
    }
    else{
        obj.style.display = "block";
    }
}
