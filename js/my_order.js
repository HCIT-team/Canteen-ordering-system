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
    this.console.log(aData);
    var oCar = document.getElementById("means");
    for (var j = 0;j<100; j++) {
        strJson = localStorage.getItem("allMean" + j);
        if (strJson == null) {
            continue;
        }

        var oTopMean = this.document.getElementById("topMean");

        var oMeans = document.createElement("div");
        oMeans.className = "means";
        oTopMean.appendChild(oMeans);
        var oMeanWrap = document.createElement("div");
        oMeanWrap.className = "mean-wrap";
        oMeans.appendChild(oMeanWrap);
        var oMeanBlock = document.createElement("div");
        oMeanBlock.className = "mean-block";
        oMeanWrap.appendChild(oMeanBlock);

        var oHeadRowHid = document.createElement("div");
        oHeadRowHid.className = "head_row hid";
        oHeadRowHid.innerHTML += '<div class="img left">图片</div><div class="name left">商品名称</div><div class="price left">单价</div><div class="number left">数量</div><div class="subtotal left">小计</div>';
        oMeanBlock.appendChild(oHeadRowHid);

        //var oRowHid = document.createElement("div");
        //oRowHid.className = "row hid";
        //oMeanBlock.appendChild(oRowHid);




        strJsonArr = strJson.split("{");
        var numPrice = 0;
        for (var i = 1; i < strJsonArr.length; i++) {

            rawJson = JSON.parse('{' + strJsonArr[i]);

            var index = 0;
            this.console.log(aData.length);
            this.console.log(rawJson.name);
            for (; index < aData.length; index++) {
                if (aData[index].proName.replace(/\s*/g, "") == rawJson.name) break;
            }
            this.console.log("index" + index);
            var data = aData[index];
            var oDiv = document.createElement("div");
            this.console.log(data);
            oDiv.className = "row hid";
            oDiv.innerHTML += '<div class="img left"><img src="./' + data.imgUrl + '" width="80" height="80"></div>';
            oDiv.innerHTML += '<div class="name left"><span>' + data.proName + "</span></div>";
            oDiv.innerHTML += '<div class="price left"><span>' + data.proPrice + "</span></div>";
            oDiv.innerHTML += '<div class="number left"><span>' + rawJson.num + '</span></div>';
            var a = (rawJson.num) * (aData[index].proPrice);
            numPrice += a;
            oDiv.innerHTML += '<div class="subtotal left"><span>' + a + '</span></div>';
            oMeanBlock.appendChild(oDiv);


        }

        var oDiv = document.createElement("div");
        oDiv.className = "bottom-mean";
        oDiv.id="delBut"+j;
        oDiv.innerHTML += '<div class="mean-date">' + '订单日期：'+rawJson.data + '</div>';
        oDiv.innerHTML += '<ul class="mean-actions"><button class="complain">删除订单</button></ul></div>';
        oDiv.innerHTML += '<div class="mean-sum">' + '订单总价：'+numPrice + '</div>';
        

        oMeanBlock.appendChild(oDiv);



        var delBtn = document.getElementById("delBut"+j);
        this.console.log("del:"+delBtn);
        delBtn.onclick = function () {
            console.log(this.id);
            var result = confirm("确定删除吗?");
            if (result) {
                localStorage.removeItem("allMean"+this.id[6]);
                alert("删除成功");
                window.location.reload();
            }
            
            
        }


    }

}