$(function(){
  
  $.getJSON('images/json.json',function(images){
    $('.wrap img').eq(0).attr('src',images.zhubao[0].img);
    $('.wrap img').eq(1).attr('src',images.zhubao[1].img);
    $('.wrap img').eq(2).attr('src',images.zhubao[2].img);
    $('.wrap img').eq(3).attr('src',images.zhubao[3].img);
    $('.wrap img').eq(4).attr('src',images.zhubao[4].img); 
    $('.wrap img').eq(5).attr('src',images.zhubao[5].img); 
    $('.jewelrychild-div img').eq(0).attr('src',images.zhubao[6].img);
    $('.jewelrychild-div img').eq(1).attr('src',images.zhubao[7].img);
    $('.jewelrychild-div img').eq(2).attr('src',images.zhubao[8].img); 
    $('.jewelrychild-div img').eq(3).attr('src',images.zhubao[9].img);  
    $('.jewelrychild-div img').eq(4).attr('src',images.zhubao[10].img); 
    $('.jewelrychild-div img').eq(5).attr('src',images.zhubao[11].img); 
    $('.jewelrychild-div img').eq(6).attr('src',images.zhubao[12].img); 
    $('.jewelrychild-div img').eq(7).attr('src',images.zhubao[13].img); 
    $('.jewelrychild-div img').eq(8).attr('src',images.zhubao[14].img); 
    $('.jewelrychild-div img').eq(9).attr('src',images.zhubao[15].img); 
    $('.jewelrychild-div img').eq(10).attr('src',images.zhubao[15].img); 
    $('.jewelrychild-div img').eq(11).attr('src',images.zhubao[16].img); 
    $('.jewelrychild-div img').eq(12).attr('src',images.zhubao[17].img); 
    $('.jewelrychild-div img').eq(13).attr('src',images.zhubao[18].img); 
    $('.jewelrychild-div img').eq(14).attr('src',images.zhubao[19].img); 
    $('.jewelrychild-div img').eq(15).attr('src',images.zhubao[20].img); 
    })

$('.animate').mouseover(function(){
        var classes= $(this).attr('class');
        $(this).attr('class', 'animate');
        var indicator = $(this);
        setTimeout(function(){ 
            $(indicator).addClass(classes);
        }, 20);
    });
    
    $('.denglu-input1').blur(function(){
        var reg=/[\u4e00-\u9fa5]/g;
        var a=$('.denglu-input1').val();
        if (a==''){
            $('.username-span').html('用户名：<span class="red">不能为空</span>')
        }else if(reg.test(a)){
            $('.username-span').html('用户名：<span class="blue">成功</span>')
        }else{
            $('.username-span').html('用户名：<span class="blue">只能为汉字</span>')
   }    
})

$('.addressp').blur(function(){
    regpEXP=/^1[3|4|5|8][0-9]\d{4,8}$/i;
        var aa=$('.addressp').val();
        if (aa==''){
            $('.labelp').html('电话：<span class="red">不能为空</span>')
        }else if( regpEXP.test(aa)){
            $('.labelp').html('电话：<span class="blue">成功</span>')
    }else{
            $('.labelp').html('电话：<span class="blue">只能为11位数字</span>')
        }
})

    $(".denglu-input2").blur(function(){  
                reg1=/^[\@A-Za-z0-9\!\#\$\%\^\&\*\.\~]{6,22}$/;
                var b=$('.denglu-input2').val();  
               if (b==''){
            $('.password-span2').html('密码：<span ">不能为空</span>')
        }else if(reg1.test(b)){
            $('.password-span2').html('密码：<span ">成功</span>')
        } else{
            $('.password-span2').html('格式有误：<span">请输入6~12位的数字、字母或特殊字符！</span>')
   } 
                
            })




     $(".denglu-input3").blur(function(){  
                var pwd1=$('.denglu-input2').val(); 
                var pwd2=$('.denglu-input3').val();
                if(pwd2==''){                      
                       $('.password-span3').html('确认密码：<span ">不能为空</span>')
                }else if(pwd1!=pwd2){
                    $('.password-span3').html("两次密码输入不一致！")
                }else{
            $('.password-span3').html('确认密码：<span">成功</span>')
   }    
            }) 
$('.news-child img').mouseenter(function(){
    $(this).animate({'border-radius':'0%'},500)
    })
$('.news-child img').mouseleave(function(){
    $(this).animate({'border-radius':'20%'},500)
    })

})
// window.onload=function(){
//     function initMap(){
//         createMap();//创建地图
//         setMapEvent();//设置地图事件
//         addMapControl();//向地图添加控件
//     }
    
//     //创建地图函数：
//     function createMap(){
//         var map = new BMap.Map("dituContent");//在百度地图容器中创建一个地图
//         var point = new BMap.Point(117.605555,40.769262);//定义一个中心点坐标
//         map.centerAndZoom(point,8);//设定地图的中心点和坐标并将地图显示在地图容器中
//         window.map = map;//将map变量存储在全局
//     }
    
//     //地图事件设置函数：
//     function setMapEvent(){
//         map.enableDragging();//启用地图拖拽事件，默认启用(可不写)
//         map.enableScrollWheelZoom();//启用地图滚轮放大缩小
//         map.enableDoubleClickZoom();//启用鼠标双击放大，默认启用(可不写)
//         map.enableKeyboard();//启用键盘上下左右键移动地图
//     }
    
//     //地图控件添加函数：
//     function addMapControl(){
//         //向地图中添加缩放控件
//   var ctrl_nav = new BMap.NavigationControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,type:BMAP_NAVIGATION_CONTROL_SMALL});
//   map.addControl(ctrl_nav);
//         //向地图中添加缩略图控件
//   var ctrl_ove = new BMap.OverviewMapControl({anchor:BMAP_ANCHOR_BOTTOM_RIGHT,isOpen:0});
//   map.addControl(ctrl_ove);
//         //向地图中添加比例尺控件
//   var ctrl_sca = new BMap.ScaleControl({anchor:BMAP_ANCHOR_BOTTOM_LEFT});
//   map.addControl(ctrl_sca);
//     }
    
    
//     initMap();//创建和初始化地图
// }