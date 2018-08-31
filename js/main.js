var $btns=$('.speed>button');
$('.speed>button:nth-child(2)').addClass('active');
var time=10;
for(var i=0;i<3;i++){
  $btns.eq(i).on('click',function(e){
    $(e.currentTarget).addClass('active')
    .siblings('.active').removeClass('active');
    var index=$(e.currentTarget).index();
    if(index===0){
      time=50;
    }else if(index===1){
      time=10;
    }else if(index===2){
      time=1;
    }
  })
}

var n=0;
var id=setTimeout(function run(){
	code.innerHTML=Prism.highlight(text.substring(0,n), Prism.languages.css);
	codewrite.innerHTML=text.substring(0,n);
	code.scrollTop=code.scrollHeight;
	n+=1;
	if(n<text.length){
		id=setTimeout(run,time);
	}
},time);

var text=`
/*
*您好，我是胡杰
*今天我给大家画一个小黄人
*首先准备一个背景
*/

.huaban{
  height: 100vh;
  width: 50%;
  background-color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center{
  width: 240px;
  height: 335px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

/*先画小黄人的身体部分*/
.body{
  width: 200px;
  height: 300px;
  border: 8px solid #000;
  border-radius: 100px 100px 50px 50px;
  background-color: #F9D946;
  position: relative;
  overflow: hidden;
}

/*小黄人的眼睛*/
.eye{
  height: 78px;
  width: 78px;
  border: 8px solid #000;
  border-radius: 50%;
  position: absolute;
  top: 50px;
  background-color: #FEFFFA;
  display: flex;
  justify-content: center;
  align-items: center;
}
.eye.left{
  right: 49%;
}
.eye.right{
  left: 49%;
}
.eye.left::after{
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background-color: #000;
  position: absolute;
  left:-24px;
  top: 20px
}
.eye.right::after{
  content: "";
  display: block;
  width: 20px;
  height: 20px;
  background-color: #000;
  position: absolute;
  right:-24px;
  top: 20px
}
.eyeball.left,.eyeball.right{
  height: 28px;
  width: 28px;
  border-radius: 50%;
  background-color: #000;
}
.eyeball.left::after,
.eyeball.right::after{
  content: "";
  display: block;
  height: 12px;
  width: 12px;
  border-radius: 50%;
  background-color: #FDFDFD;
  position: absolute;
  right: 20px;
  top: 20px;
}

/*然后是小黄人的嘴*/
.mouth{
  width: 60px;
  height: 20px;
  border: 4px solid #000;
  background-color: #FEFFF9;
  border-bottom-right-radius: 30px 20px;
  border-bottom-left-radius: 30px 20px;
  position: absolute;
  top: 145px;
  right: 50px;
  transform: rotate(-10deg);
}

/*接下来是小黄人的背带裤*/
.pants{
  width: 200px;
  height: 115px;
  border: 8px solid #000;
  position: absolute;
  bottom: -8px;
  left: -8px;
  border-top: none;
}
.pants1{
  width: 200px;
  height: 55px;
  border: 8px solid #000;
  background-color: #2074A0;
  position: absolute;
  bottom: -8px;
  left: -8px;
}
.pants2{
  width: 142px;
  height: 70px;
  border: 8px solid #000;
  background-color: #2074A0;
  border-bottom:none;
  position: absolute;
  left: 23px;
  top: -2px;
  z-index: 1;
}
.pants1::after{
  content: "";
  display: block;
  height: 12px;
  width: 50px;
  border: 3px solid #000;
  background-color: #2074A0;
  position: absolute;
  top: -73px;
  left: -15px;
  transform: rotate(25deg);
  z-index: 2;
}
.pants1::before{
  content: "";
  display: block;
  height: 12px;
  width: 50px;
  border: 3px solid #000;
  background-color: #2074A0;
  position: absolute;
  top: -73px;
  right: -15px;
  transform: rotate(-25deg);
  z-index: 2;
}
.bag{
  width: 60px;
  height: 50px;
  border: 6px solid #000;
  border-radius: 0 0 28px 28px;
  position: absolute;
  right: 50%;
  transform: translateX(50%);
  top: 25px;
  z-index: 2;
}
.bag::after{
  content: "";
  display: block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: -23px;
  left: -42px;
}
.bag::before{
  content: "";
  display: block;
  height: 8px;
  width: 8px;
  border-radius: 50%;
  background-color: #000;
  position: absolute;
  top: -23px;
  right: -42px;
}

/*小黄人的脚*/
.foot{
  width: 53px;
  height: 30px;
  background-color: #000;
  position: absolute;
  bottom: -12px;
}
.foot.right{
  border-radius: 30px 0 10px 20px;
  left: 65px;
}
.foot.left{
  border-radius: 0 30px 20px 10px;
  right: 65px;
}
.foot.right::after{
  content: "";
  display: block;
  width: 16px;
  height: 6px;
  background-color: #fff;
}
.foot.left::after{
  content: "";
  display: block;
  width: 16px;
  height: 6px;
  background-color: #fff;
  margin-left: 37px;
}

/*现在来画小黄人的头发*/
.hair{
  position: absolute;
  left: 38px;
  top: -5px;
  width: 75px;
  height: 60px;
  border-top: 8px solid #000;
  transform: rotate(35deg);
  border-radius: 50%;
}
.hair::after{
  position: absolute;
  left: 6px;
  top: -19px;
  content: "";
  display: block;
  width: 75px;
  height: 60px;
  border-top: 8px solid #000;
  transform: rotate(35deg);  
  border-radius: 50%; 
}
.hair::before{
  content: "";
  display: block;
  position: absolute;
  left: 60px;
  top: -54px;
  width: 75px;
  height: 60px;
  border-top: 8px solid #000;
  transform: rotate(-75deg);
  border-radius: 50%;
}

/*最后是手*/
.hands{
  width: 80px;
  height: 80px;
  border: 6px solid #000;
  transform: rotate(40deg);
  position: absolute;
  background: #f9d946;
  border-radius: 30px;
  top: 190px;
  z-index: -1;
}
.hands.left{
  left: 0px;
}
.hands.right{
  right: 0px;
}
.hands.left::after{
  width: 6px;
  border: 3px solid #000;
  position: absolute;
  content: '';
  transform: rotate(90deg);
  bottom: 19px;
  left: 9px;
}
.hands.right::after{
  width: 6px;
  border: 3px solid #000;
  position: absolute;
  content: '';
  bottom: 49px;
  right: 13px;
}

/*大功告成，小黄人画完了。*/
/*感谢您的观赏。*/
`;