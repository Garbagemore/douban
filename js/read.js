// 5、点击触发事件
// 获取所有的button按钮
window.onload = function() {
    // 进入就加载方法
    tabClick(); //切换方法
}
function tabClick() {
    var tab = document.querySelectorAll(".tags span"); // 获取tab所有 li
    var cont = document.querySelectorAll(".book_center_top > div") //获取content所有 li
    if (tab && cont) { //严格模式 取到tab 和 cont 之后再进行其他
        for (var i = 0; i < tab.length; i++) { //给每一个tab添加点监听点击事件
            addHover(i);
        }
        //添加点击监听
        function addHover(i) {
            tab[i].addEventListener('click', function() { //点击切换
                // tab[i].addEventListener('mouseover', function() {//悬浮切换
                setTabClass(i);
                setContClass(i)
            });
        }
        // 切换按钮和内容的事件
        function setTabClass(num) {
            // 移出所有的active名称
            for (var i = 0; i < tab.length; i++) {
                tab[i].classList.remove("active");
            }
            // 点击的哪个给哪个添加active效果
            tab[num].classList.add("active");
            if(num>0){
                cont[0].style.display = "none";
                cont[1].style.display = "flex";
            }
            else{
                cont[0].style.display = "flex";
                cont[1].style.display = "none";
            }
        }
    }
}
