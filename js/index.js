window.onload = function () {
    var aData = [{
            "imgUrl": "img/03-car-01.png",
            "proName": " 土豆烧牛肉 ",
            "proPrice": "15",
            "proComm": "1"
        },
        {
            "imgUrl": "img/03-car-02.png",
            "proName": " 凉拌猪蹄 ",
            "proPrice": "9.9",
            "proComm": "9.7"
        },
        {
            "imgUrl": "img/03-car-03.png",
            "proName": " 鲜虾鱼极面 ",
            "proPrice": "6",
            "proComm": "1.3"
        },
        {
            "imgUrl": "img/03-car-04.png",
            "proName": " 皮蛋瘦肉粥 ",
            "proPrice": "5",
            "proComm": "1.1"
        },
        {
            "imgUrl": "img/03-car-05.png",
            "proName": "凉拌芦笋  ",
            "proPrice": "4.5",
            "proComm": "0.3"
        },
        {
            "imgUrl": "img/03-car-06.png",
            "proName": " 乐山甜皮鸭  ",
            "proPrice": "19.9",
            "proComm": "3.3"
        },
        {
            "imgUrl": "img/03-car-07.png",
            "proName": " 芦笋鸡蛋面",
            "proPrice": "7",
            "proComm": "1.2"
        },
        {
            "imgUrl": "img/03-car-08.png",
            "proName": "  萝卜清炖蝴蝶排 ",
            "proPrice": "11",
            "proComm": "0.6"
        },
        {
            "imgUrl": "img/03-car-09.png",
            "proName": "  蛋包饭  ",
            "proPrice": "11",
            "proComm": "0.3"
        },
        {
            "imgUrl": "img/03-car-10.png",
            "proName": " 日式豚骨面 ",
            "proPrice": "9.9",
            "proComm": "7.2"
        }
    ];
    var oBox = document.getElementById("box");
    var oCar = document.getElementById("car");
    var oUl = document.getElementsByTagName("ul")[0];
    var myDate = new Date();
    for (var i = 0; i < aData.length; i++) {
        var oLi = document.createElement("li");
        oLi.className = "foodLi";
        var data = aData[i];

        oLi.innerHTML += '<div class="pro_img"><img src="' + data["imgUrl"] + '" width="150" height="150"></div>';
        oLi.innerHTML += '<h3 class="pro_name"><a href="#">' + data["proName"] + '</a></h3>';
        oLi.innerHTML += '<p class="pro_price">' + data["proPrice"] + '元</p>';
        oLi.innerHTML += '<p class="pro_rank">' + data["proComm"] + '百人好评</p>';
        oLi.innerHTML += '<div class="add_btn">加入购物车</div>';
        oUl.appendChild(oLi);

    }
    var aBtn = getClass(oBox, "add_btn"); //获取box下的所有添加购物车按钮
    var number = 0; //初始化商品数量
    for (var i = 0; i < aBtn.length; i++) {
        number++;
        aBtn[i].index = i;
        aBtn[i].onclick = function () {
            var oDiv = document.createElement("div");
            var data = aData[this.index];
            oDiv.className = "row hid";
            oDiv.innerHTML += '<div class="check left"> <i class="i_check i_acity" id="i_check" onclick="i_check()" >√</i></div>';
            oDiv.innerHTML += '<div class="img left"><img src="' + data["imgUrl"] + '" width="80" height="80"></div>';
            oDiv.innerHTML += '<div class="name left"><span>' + data["proName"] + '</span></div>';
            oDiv.innerHTML += '<div class="price left"><span>' + data["proPrice"] + '元</span></div>';
            oDiv.innerHTML += ' <div class="item_count_i"><div class="num_count"><div class="count_d">-</div><div class="c_num">1</div><div class="count_i">+</div></div> </div>'
            oDiv.innerHTML += '<div class="subtotal left"><span>' + data["proPrice"] + '元</span></div>'
            oDiv.innerHTML += '<div class="ctrl left"><a href="javascript:;">×</a></div>';
            oCar.appendChild(oDiv);
            getAmount();
            var flag = true;
            var check = oDiv.firstChild.getElementsByTagName("i")[0];
            check.onclick = function () {
                // 
                if (check.className == "i_check i_acity") {
                    check.classList.remove("i_acity");

                } else {
                    check.classList.add("i_acity");
                }
                getAmount();
            }
            var delBtn = oDiv.lastChild.getElementsByTagName("a")[0];
            delBtn.onclick = function () {
                var result = confirm("确定删除吗?");
                if (result) {
                    oCar.removeChild(oDiv);
                    number--;
                    getAmount();
                }
            }
            var i_btn = document.getElementsByClassName("count_i");
            for (var k = 0; k < i_btn.length; k++) {
                i_btn[k].onclick = function () {
                    bt = this;
                    //获取小计节点
                    at = this.parentElement.parentElement.nextElementSibling;
                    //获取单价节点
                    pt = this.parentElement.parentElement.previousElementSibling;
                    //获取数量值
                    node = bt.parentNode.childNodes[1];

                    num = node.innerText;
                    num = parseInt(num);
                    num++;
                    node.innerText = num;
                    //获取单价
                    price = pt.innerText;
                    price = price.substring(0, price.length - 1);
                    //计算小计值
                    at.innerText = price * num + "元";
                    //计算总计值
                    getAmount();
                }
            }
            //获取所有的数量减号按钮
            var d_btn = document.getElementsByClassName("count_d");
            for (k = 0; k < i_btn.length; k++) {
                d_btn[k].onclick = function () {
                    bt = this;
                    //获取小计节点
                    at = this.parentElement.parentElement.nextElementSibling;
                    //获取单价节点
                    pt = this.parentElement.parentElement.previousElementSibling;
                    //获取c_num节点
                    node = bt.parentNode.childNodes[1];
                    num = node.innerText;
                    num = parseInt(num);
                    if (num > 1) {
                        num--;
                    }
                    node.innerText = num;
                    //获取单价
                    price = pt.innerText;
                    price = price.substring(0, price.length - 1);
                    //计算小计值		
                    at.innerText = price * num + "元";
                    //计算总计值
                    getAmount();
                }
            }

            delBtn.onclick = function () {
                var result = confirm("确定删除吗?");
                if (result) {
                    oCar.removeChild(oDiv);
                    number--;
                    getAmount();
                }
            }


            var subBtn = document.getElementById("pay");
            subBtn.onclick = function () {
                flag = 0;
                var j = 0;
                var count = 0;
                for (var j = 0;; j++) {
                    allMean = "allMean" + j;
                    if (localStorage.getItem(allMean) == undefined) {
                        break;
                    }
                }
                for (var i = 0; i < document.getElementsByClassName("row").length; i++) {
                    var flag1 = document.getElementsByClassName("row")[i].getElementsByTagName("i")[0].classList.length;
                    if (flag1 == 1) continue;
                    temp_content = document.getElementsByClassName("row")[i].outerText.split("\n");
                    var temp_content2 = {
                        name: temp_content[1],
                        price: temp_content[2],
                        num: temp_content[4],
                        data: myDate.toLocaleString()
                    };
                    temp_contentStr = JSON.stringify(temp_content2);



                    if (localStorage.getItem(allMean) == undefined) {
                        localStorage.setItem(allMean, temp_contentStr);
                    } else {
                        temp_str = localStorage.getItem(allMean);

                        temp_str += temp_contentStr;

                        localStorage.setItem(allMean, temp_str);
                    }
                    count++;
                }
                if (count == 0) {
                    alert("您没有选项任何菜品！");
                } else {

                    window.location.reload();
                    alert("订单提交成功，请前往“我的订单查看”");
                }
            }


        }
    }

}

function getClass(oBox, tagname) {
    var aTag = oBox.getElementsByTagName("*");
    var aBox = [];
    for (var i = 0; i < aTag.length; i++) {
        if (aTag[i].className == tagname) {
            aBox.push(aTag[i]);
        }
    }
    return aBox;
}


var index = false;

function checkAll() {
    var choose = document.getElementById("car").getElementsByTagName("i");
    // 
    if (choose.length != 1) {
        for (i = 1; i < choose.length; i++) {
            if (!index) {
                choose[0].classList.add("i_acity2")
                choose[i].classList.add("i_acity");
            } else {
                choose[i].classList.remove("i_acity");
                choose[0].classList.remove("i_acity2")
            }
        }
        index = !index;
    }
    getAmount();
}

//进行价格合计
function getAmount() {
    // 
    ns = document.getElementsByClassName("i_acity");

    sum = 0;
    //选中框
    document.getElementById("price_num").innerText = sum;
    for (y = 0; y < ns.length; y++) {
        //小计
        amount_info = ns[y].parentElement.parentElement.lastElementChild.previousElementSibling;
        num = parseInt(amount_info.innerText);
        sum += num;
        document.getElementById("price_num").innerText = sum;
    }
}

var imgnum = 0;
var imgnum2 = 0;

function changeurl(line) {
    var imgurl = ["img/img2.png", "img/img3.png", "img/img4.png", "img/img5.png", "img/img6.png", "img/img7.png"];
    var nameurl = ["水果", "蔬菜什锦", "大包子", "小笼包", "面条", "炒面"]
    if (line == 1) {
        document.getElementById("img1.1").src = imgurl[imgnum];
        document.getElementById("name1.1").innerText = nameurl[imgnum];
        document.getElementById("img1.2").src = imgurl[imgnum + 1];
        document.getElementById("name1.2").innerText = nameurl[imgnum + 1];
        document.getElementById("img1.3").src = imgurl[imgnum + 2];
        document.getElementById("name1.3").innerText = nameurl[imgnum + 2];
        imgnum = ((imgnum + 1) % 2) * 3;
    }
    if (line == 2) {
        document.getElementById("img2.1").src = imgurl[imgnum2];
        document.getElementById("name2.1").innerText = nameurl[imgnum2];
        document.getElementById("img2.2").src = imgurl[imgnum2 + 1];
        document.getElementById("name2.2").innerText = nameurl[imgnum2 + 1];
        document.getElementById("img2.3").src = imgurl[imgnum2 + 2];
        document.getElementById("name2.3").innerText = nameurl[imgnum2 + 2];
        imgnum2 = ((imgnum2 + 1) % 2) * 3;
    }
}

function getDate() {

    var myDate = new Date();

    //获取当前年
    var year = myDate.getFullYear();

    //获取当前月
    var month = myDate.getMonth() + 1;

    //获取当前日
    var date = myDate.getDate();
    var h = myDate.getHours(); //获取当前小时数(0-23)
    var m = myDate.getMinutes(); //获取当前分钟数(0-59)
    var s = myDate.getSeconds();

    //获取当前时间

    var now = year + '-' + conver(month) + "-" + conver(date) + " " + conver(h) + ':' + conver(m) + ":" + conver(s);

}