(function (){
    var ctx1 = document.getElementById('chart1').getContext('2d');
    var ctx2 = document.getElementById('chart2').getContext('2d');
    var ctx3 = document.getElementById('chart3').getContext('2d');
    var type1 = 'horizontalBar';
    var type2 = 'radar';
    var type3 = 'pie';
    var data1 = {
        labels:['菜品1','菜品2','菜品3','菜品4'],
        datasets:[
        {
            label: "菜品销量",
            backgroundColor:[
                'skyblue',
                'yellow',
                'red',
            ],

            data: [80,65, 59,34]
        },
        
        ]
    };
    var data2 = {
        labels: ["面食", "小炒", "谷物粗粮", "炒菜", "冒菜", "铁板烧", "饮品"],
        datasets: [
            {
                label: "早餐",
                backgroundColor : "skyblue",
                
                data: [65, 59, 90, 81, 56, 55, 40]
            },
            {
                label: "中餐",
                backgroundColor: 'pink',
            
                data: [28, 48, 40, 19, 96, 27, 100]
            },
            {
                label: "晚餐",
                backgroundColor: "lightyellow",   
                data: [34, 43, 40, 19, 66, 27, 100]
            }
        
        ]
    };
    var data3 = {
        labels: ['0-5','6-10','11-15','16-20'],
        datasets:[
            {
                data:[36,65,54,23],
                backgroundColor:['green','gray','pink','skyblue']
            }
        ]
    }


    var chart1 = new Chart(ctx1,{
        type:type1,
        data:data1,
        options: {
            legend:{display:false},
            scales:{
                xAxes:[{
                    ticks:{
                        suggestedMin:0,
                        suggestedMax:100,
                        stepSize:10,
                        callback:function(value,index,values){
                            return value + '份';

                        },
                    }                            
                }]

            },
            title: {
                display:true,
                text:'销量排行',
                fontColor:'lightred',
                fontSize:'20'
            }
    
    
        }
    }

    );

    var chart2 = new Chart(ctx2,{
        type:type2,
        data:data2,
        options: {
          
            title: {
                display:true,
                text:'销售一览',
                fontColor:'lightred',
                fontSize:'20'
            }
    
    
        }
    }

    );
            
    var chart3 = new Chart(ctx3,{
        type:type3,
        data:data3,
        options: {
            title: {
                display:true,
                text:'价格区间销量排行',
                fontColor:'lightred',
                fontSize:'20'
            }
    
    
        }
    }

    
    );


})();