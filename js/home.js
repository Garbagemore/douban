// 6、写日记
// 点击分享输入框，弹出写日记的界面
var write_dir = document.querySelector(".left_dir input");
write_dir.addEventListener('click', function () {
  document.querySelector(".left .left_dir .item").style.display = "block";
})
// 7、点击发布，发布日记
var dirary = document.getElementById("isay-cont").value;
var send_dirary = document.querySelector(".left_dir .send_dir");
var dirary_parent = document.getElementsByClassName("left")[0];
send_dirary.addEventListener('click', function () {
  var ndiv = document.createElement("div");
  ndiv.innerHTML = `<div class="pinglun"> <img src="../images/cat.png" alt="头像" />
        <div class="neirong">
            <h1>Darkness.的日记</h1>
            <div class="gray">
                <div class="article">
                    <p><a href="#">1怪力八面体-胡夫金子塔</a></p>
                    <p>${dirary}</p>
                    <div class="like"><i></i>喜欢</div>
                </div>
                <div class="picture"> <img src="../images/p2501771830.webp" alt="文章" /> </div>
            </div>
            <p class="time">来自热门精选</p>
        </div>
    </div>`;
  dirary_parent.appendChild(ndiv);
})
