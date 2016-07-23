$(document).ready(function () {
  new Image().src="img/cartHover.png";
  new Image().src="img/weixinHover.png";
  new Image().src="img/weiboHover.png";
  new Image().src="img/2dCodeHover.png";

  var index=0;
  var picWidth=$(".pic-link").width();
  var olWidth=$(".ol").width();
  $(".rightArr").css("margin-left",picWidth-$(".rightArr").width());
  $(".ol").css("margin-left",(picWidth-olWidth)/2);
  $(".rightArr").click(function () {
    if(index>=4){}
    else {
      index++;
      $(".ol .l").eq(index).addClass("active").siblings().removeClass("active");
      $(".swipe-wrap").animate({"marginLeft":"-="+picWidth+"px"});
    }
  });
  $(".leftArr").click(function () {
    if(index<=0){}
    else {
      index--;
      $(".ol .l").eq(index).addClass("active").siblings().removeClass("active");
      $(".swipe-wrap").animate({"marginLeft":"+="+picWidth+"px"});
    }
  });
  var windowWidtd=$(window).width();
  if(windowWidtd>1000){
    $(".swipe-box").mouseenter(function(){
      $(".leftArr").css("display","block");
      $(".rightArr").css("display","block");
    }).mouseleave(function () {
      $(".leftArr").css("display","none");
      $(".rightArr").css("display","none");
    });
  }
  else {
  }

  $(".ol .l").click(function () {
    var thisIndex=$(this).index();
    var distance=thisIndex-index;
    $(".swipe-wrap").animate({"marginLeft":"-="+distance*picWidth+"px"});
    index=thisIndex;
    $(this).addClass("active").siblings().removeClass("active");
  });
  $(".ol .l").eq(0).trigger("click");
  setInterval(autoSwitch,5000);
  var flag=true;
  function autoSwitch() {
    switch (flag) {
      case true:$(".rightArr").trigger("click");break;
      case false:$(".leftArr").trigger("click");break;
    }
    if(index==0){
      flag=true;
    }
    if(index==4){
      flag=false;
    }
  }
  if(document.getElementsByClassName("swipe-box")[0]){
    var swipe=document.getElementsByClassName("swipe-box")[0];
    var startX,endX;
    swipe.addEventListener("touchstart",function(e){
        e.preventDefault();
        startX=e.touches[0].clientX;
        // console.log(startX);
    },false);
    swipe.addEventListener("touchmove",function(e){
        e.preventDefault;
        endX=e.changedTouches[0].clientX;
    },false);
    swipe.addEventListener("touchend",function(e){
      var moveDistance=endX-startX;
      if(moveDistance<0&&Math.abs(moveDistance)>50){
        swipe.removeEventListener("touchmove",true);
        $(".rightArr").trigger("click");
      }
      if(moveDistance>0&&Math.abs(moveDistance)>50){
      swipe.removeEventListener("touchmove",true);
        $(".leftArr").trigger("click");
      }
    });

  }

});
