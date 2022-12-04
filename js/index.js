// 1、更改鼠标样式
var mouse = document.querySelector('.mouse');
window.addEventListener('mousemove',function(event){    
    mouse.style.left = event.clientX + 5 - mouse.offsetWidth/2 + 'px' ;
    mouse.style.top = event.clientY + 8 -mouse.offsetHeight/2 + 'px';       
})

// 2、返回顶部
window.onload = function() {
    var oTop = document.getElementById("to_top");
// 滚动显示返回顶部
    window.onscroll = function() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop >= 500) {
            oTop.style.display = "flex";
        }
        else {
            oTop.style.display = "none";
        }
    }
    oTop.onclick = function() {
        document.documentElement.scrollTop = document.body.scrollTop = 0;
    }
}

// 3、表单校验
//1. 验证手机号是否符合规则
//获取手机号的输入框
var  tel = document.querySelector("body > div.header_down > div.field > fieldset > div.item.item_account > input[type=text]");
//1.2 绑定onblur事件  》》》 当元素失去焦点时发生此事件
tel.onblur =judgeUserName;
function judgeUserName(){
    //1.3 获取用户在tel输入框中输入的信息，排除掉空白字符
    var telValue = tel.value.trim();
    //1.4 判断tel的值是否符合规则
    var flag = telValue.length ==11 ;
    if (!flag){
        alert("请输入正确的手机号");
    }
    return flag;
}

// JSON部分

var xmlhttp;
if (window.XMLHttpRequest) {
    //  IE7+, Firefox, Chrome, Opera, Safari 浏览器执行代码
    xmlhttp = new XMLHttpRequest();
} else {
    // IE6, IE5 浏览器执行代码
    xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
}
xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
        //xmlhttp.responseText;
        let jarr = JSON.parse(xmlhttp.responseText);
        for (i in jarr) {
            if (i == "left_pictures_json") {
                for (j of jarr[i]) {
                    var left_pictures = document.querySelector(".left_pictures ul");
                    var nli = document.createElement("li");
                    for (let k = 0; k < jarr[i].length; k++) {
                        nli.innerHTML = `
                        <div>
                            <img src="${j.pic}" alt="">
                        </div><a href="#">${j.link_content}</a>
                        <span>${j.span}</span>
                        `;
                    }
                    left_pictures.appendChild(nli);
                }
            }
            else if (i == "section_time_json") {
                for (j of jarr[i]) {
                    var section_time = document.querySelector(".section_time_2 ul");
                    var nli = document.createElement("li");
                    for (let k = 0; k < jarr[i].length; k++) {
                        nli.innerHTML = `
                        <img src="${j.pic}" alt="">
                        <a href="#">${j.link_content}</a>
                        <span>${j.span}</span>
                    `;
                    }
                    section_time.appendChild(nli);
                }
            }
            else if (i == "section_movie_top_json") {
                for (j of jarr[i]) {
                    var section_movie_top = document.querySelector(".section_movie_2 .movie_top ul");
                    var nli = document.createElement("li");
                    for (let k = 0; k < jarr[i].length; k++) {
                        nli.innerHTML = `
                        <a href="#" class="tag_movie"><img src="${j.pic}" alt=""></a>
                        <div><a href="#">${j.link_content}</a></div>
                    `;
                    }
                    section_movie_top.appendChild(nli);
                }
            }
            else {//i == "section_movie_down_json"
                for (j of jarr[i]) {
                    var section_movie_down = document.querySelector(".section_movie_2 .movie_down ul");
                    var nli = document.createElement("li");
                    for (let k = 0; k < jarr[i].length; k++) {
                        nli.innerHTML = `
                        <a href="#" class="tag_movie"><img src="${j.pic}" alt=""></a>
                        <div><a href="#">${j.link_content}</a></div>
                    `;
                    }
                    section_movie_down.appendChild(nli);
                }
            }
        }
    }
}
xmlhttp.open("GET", "../data/index.json", true);
xmlhttp.send();

// JSON部分













// json原代码
        // left_pictures,第一处json

        // var left_pictures_json = [
        //     {
        //         pic:"../images/p2561571312.webp",
        //         link_content:"一些兔子 ",
        //         span:"72张照片"
        //     },
        //     {
        //         pic:"../images/p2633074055.webp",
        //         link_content:"维特根斯坦小剧场 ",
        //         span:"36张照片"
        //     },
        //     {
        //         pic:"../images/p2635061707.webp",
        //         link_content:"寻找麒麟",
        //         span:"52张照片"
        //     },
        //     {
        //         pic:"../images/p2868172035.webp",
        //         link_content:"乐队的夏天",
        //         span:"8张照片"
        //     }
        // ]
        // var left_pictures = document.querySelector(".left_pictures ul");
        // console.log(left_pictures_json);
        // console.log(typeof(left_pictures_json));
        // left_pictures_json.forEach(function(v,i){
        //     var nli = document.createElement("li");
        //     nli.innerHTML = `
        //         <div>
        //             <img src="${v.pic}" alt="">
        //         </div><a href="#">${v.link_content}</a>
        //         <span>${v.span}</span>
        //     `;
        //     left_pictures.appendChild(nli);
        // });
        // section_time,第二处json
        // var section_time_json = [
        //     {
        //         pic:"../images/f90e218a-b8aa-11e7-9cc5-0242ac110021.jpg",
        //         link_content:"52倍人生——戴锦华大师电影课",
        //         span:"音频专栏"
        //     },
        //     {
        //         pic:"../images/5d4dd498-5676-11e7-bb3d-0242ac11002d.jpg",
        //         link_content:"吃个宋代冰淇淋——随孟晖女史重觅古代生活",
        //         span:"图文专栏"
        //     },
        //     {
        //         pic:"../images/044bb4c8-7688-11e7-b63f-0242ac110028.jpg",
        //         link_content:"笔落惊风雨——你不可不知的中国三大名画",
        //         span:"音频专栏"
        //     },
        //     {
        //         pic:"../images/54d34448-1dea-11e7-afa9-0242ac11002c.jpg",
        //         link_content:"拍张好照片——10分钟搞定旅行摄影",
        //         span:"音频专栏"
        //     },
        //     {
        //         pic:"../images/6db31128-39dd-11e7-895e-0242ac110016.png",
        //         link_content:"以乐语教国子——叶嘉莹古诗词吟诵课",
        //         span:"音频专栏"
        //     },
        //     {
        //         pic:"../images/7bea8578-3f69-11e7-8261-0242ac11001b.png",
        //         link_content:"不寻常世界——5部世界经典恐怖电影",
        //         span:"图文专栏"
        //     },
        //     {
        //         pic:"../images/95667170-874d-11e7-a14f-0242ac110020.png",
        //         link_content:"白先勇细说红楼梦——从小说角度重解“红楼”",
        //         span:"音频专栏"
        //     },
        //     {
        //         pic:"../images/abd3c3ec-922c-11e7-8a20-0242ac11000c.png",
        //         link_content:"古今——杨照史记百讲",
        //         span:"音频专栏"
        //     },
        //     {
        //         pic:"../images/acd0bdc0-9922-11e7-8e6d-0242ac11001a.png",
        //         link_content:"回到原典——细节里的中国美术史",
        //         span:"音频专栏"
        //     },
        //     {
        //         pic:"../images/c3ab871e-2401-11e7-9fe8-0242ac110046.png",
        //         link_content:"醒来——北岛和朋友们的诗歌课",
        //         span:"音频专栏"
        //     }
        // ]
        // var section_time = document.querySelector(".section_time_2 ul");
        // section_time_json.forEach(function(v,i){
        //     var nli = document.createElement("li");
        //     nli.innerHTML = `
        //         <img src="${v.pic}" alt="">
        //         <a href="#">${v.link_content}</a>
        //         <span>${v.span}</span>
        //     `;
        //     section_time.appendChild(nli);
        // });
        // section_movie,第三处json
        // var section_movie_top_json = [
        //     {
        //         pic:"../images/tmp1805.png",
        //         link_content:"《如是》第十二期丨如是：这是我的路，你的呢？",
        //     },
        //     {
        //         pic:"../images/tmp2B8E.png",
        //         link_content:"《如是》第十一期丨王珮瑜：撕裂的生活很痛，但我喜欢",
        //     },
        //     {
        //         pic:"../images/tmp3582.png",
        //         link_content:"《如是》第十期｜西川：凡是能够使我获得再生之感的东西，都是诗意",
        //     }
        // ]
        // var section_movie_down_json = [
        //     {
        //         pic:"../images/450.webp",
        //         link_content:" 爱的二八定律·热播  甜！杨幂许凯氛围感抱抱 ",
        //     },
        //     {
        //         pic:"../images/451.webp",
        //         link_content:"在你的冬夜里闪耀   口碑必看！乔欣治愈爱情 ",
        //     },
        //     {
        //         pic:"../images/452.webp",
        //         link_content:" 大博弈  秦昊万茜玩转商界丛林法则 ",
        //     }
        // ]
        // var section_movie_top = document.querySelector(".section_movie_2 .movie_top ul");
        // var section_movie_down = document.querySelector(".section_movie_2 .movie_down ul");
        // section_movie_top_json.forEach(function(v,i){
        //     var nli = document.createElement("li");
        //     nli.innerHTML = `
        //         <a href="#" class="tag_movie"><img src="${v.pic}" alt=""></a>
        //         <div><a href="#">${v.link_content}</a></div>
        //     `;
        //     section_movie_top.appendChild(nli);
        // });
        // section_movie_down_json.forEach(function(v,i){
        //     var nli = document.createElement("li");
        //     nli.innerHTML = `
        //         <a href="#" class="tag_movie"><img src="${v.pic}" alt=""></a>
        //         <div><a href="#">${v.link_content}</a></div>
        //     `;
        //     section_movie_down.appendChild(nli);
        // });