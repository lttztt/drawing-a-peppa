let code = `
#peiqi{
  display: inline-block;
  width: 300px;
  height: 400px;
  position: relative;
  margin-top: 200px;
  left: 100px;
  transform: scale(1.5);
}
.abs{
  position: absolute;
}
.head{
  width: 95px;
  height: 100px;
  border-radius: 50% 44% 50% 50%;
  border: 2px solid #f6a3c4;
  background: #ffbddb;
  left: 50%;
  top: 15%;
  transform: translateX(-50%);
  z-index: 5;
}

.head::before,.head::after{
  content: '';
  position: absolute;
}

.head::before{
  width: 130px;
  height: 50px;
  border: 2px solid #f6a3c4;
  transform: rotate(16deg);
  top: -9px;
  left: -41px;
  border-radius: 200px 210px 80px 100px;
  background: #ffbddb;
}
.head::after{
  width: 86px;
  height: 54px;
  /*background: #ffbddb;*/
  transform: rotate(18deg);
  top: 1px;
  right: 2px;
  border-radius: 10px 40px 30px 0;
  background-color: #ffbddb;
}

/* 鼻子: nose 嘴巴: mouse 耳朵: ear 尾巴: tail*/
.head .nose{
  width: 26px;
  height: 45px;
  border: 2px solid #f6a3c4;
  left: -38px;
  top: -20px;
  border-radius: 50% 60%;
  transform: rotate(45deg);
}
.nose::after,.nose::before{
  content: '';
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #e47b9c;
  position: absolute;
}

.nose:before{
  left: 2px;
  top: 19px;
}
.nose:after{
  right: 5px;
  top: 10px;
}

.ear{
  width: 18px;
  height: 40px;
  border: 2px solid #f6a3c4;
  background: #ffbddb;
  transform: rotate(20deg);
  z-index: -1;
}
.ear-left{
  top: -35px;
  left: 30px;
  border-radius: 50% / 35% 40% 50% 50%;
}
.ear-right{
  right: 15px;
  top: -26px;
  border-radius: 50% / 40% 40% 50% 50%;
}


.eye{
  width: 14px;
  height: 14px;
  border: 2px solid #f6a3c4;
  border-radius: 50%;
  background: #fff;
  z-index: 9;
}
.eye::after{
  content: '';
  position: absolute;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #000;
  left: 0;
  top: 1px
}
.eye-left{
  left: 16px;
  top: -5px;
}
.eye-right{
  right: 40px;
  top: 2px;
}
.mouse{
  width: 40px;
  height: 30px;
  border: 4px solid #dd5b80;
  border-radius: 50% 60%;
  background: #000;
  z-index: 10;
  bottom: 20px;
  left: 15px;
  transform: rotate(10deg)
}
.mouse::after{
  content: '';
  width: 48px;
  height: 28px;
  position: absolute;
  color: #dd5b80;
  background: #ffbddb;
  border-bottom: 4px solid;
  border-radius: 50% 60%;
  top: -8px;
  left: -4px;
}

.face{
  width: 25px;
  height: 30px;
  background: #ffa4d0;
  border-radius: 50%;
  z-index: 10;
  right: 6px;
  top: 30px;
  transform: rotate(20deg);
}

#peiqi .body{
  width: 120px;
  height: 100px;
  background: #f8694f;
  bottom: 165px;
  left: 50%;
  border: 3px solid #ef4c2f;
  transform: translateX(-50%);
  z-index: 1;
  border-radius: 50% / 100%  100% 0 0;
}

.hand{
  width: 6px;
  height: 45px;
  background: #ffc4e2;
  border-radius: 50% / 100% 50% 50% 50%;
  z-index: -2;
}
.hand::after,.hand::before{
  content: '';
  position: absolute;
}

.hand-left{
  transform: rotate(55deg);
  left: -13px;
  top: 30px
}
.hand-left::before{
  width: 15px;
  height: 5px;
  left: 0;
  top: 30px;
  background: #ffc4e2;
  border-radius: 50% / 100% 50% 60% 30%;
  transform: rotate(50deg);
}
.hand-left::after{
  width: 15px;
  height: 5px;
  left: -10px;
  top: 32px;
  background: #ffc4e2;
  border-radius: 50% / 100% 50% 60% 30%;
  transform: rotate(-50deg);
}

.hand-right{
  transform: rotate(-60deg);
  right: -11px;
  top: 21px;
}

.hand-right::before{
  width: 15px;
  height: 5px;
  left: 0;
  top: 30px;
  background: #ffc4e2;
  border-radius: 50% / 100% 50% 60% 30%;
  transform: rotate(50deg);
}
.hand-right::after{
  width: 15px;
  height: 5px;
  left: -10px;
  top: 32px;
  background: #ffc4e2;
  border-radius: 50% / 100% 50% 60% 30%;
  transform: rotate(-50deg);
}
.tail{
  width: 8px;
  height: 4px;
  background-color: transparent;
  border: 4px solid #ffc3e0;
  border-radius: 50%;
  top: 74px;
  right: -22px;
  transform: rotate(90deg)
}
.tail::after,.tail::before{
  content: '';
  position: absolute;
  width: 12px;
  height: 3px;
  background: #ffc3e0;
  border-radius: 50% / 100% 0 0 100%;
}
.tail::after{
  left: 4px;
  top: 6px;
  transform: rotate(-90deg);
}
.tail::before{
  right: -4px;
  top: -8px;
  transform: rotate(60deg);
}

.leg{
  width: 6px;
  height: 30px;
  background: #ffc3df;
  bottom: 135px;
}
.leg::after{
  content: '';
  position: absolute;
  width: 26px;
  height: 8px;
  background: #000;
  bottom: -4px;
  right: 0;
  border-radius: 60% 100% 60% 60%;
}
.leg-left{
  left: 125px;
}
.leg-right{
  right: 125px;
}
`;

$(function(){
  function writeCode(prefix, code){
    let duration = 10;
    let styleTag = $('#styleTag');
    let codeContainer = $('#code');
    let n = 0;
    let timer = setTimeout(function run(){
      n += 1;
      codeContainer.html(Prism.highlight(prefix + code.substring(0, n), Prism.languages.css))
      styleTag.html(code.substring(0, n));
      let scrollHeight = codeContainer.prop("scrollHeight");
      // console.log(codeContainer.scrollTop());

      $('#code-wrapper').scrollTop(scrollHeight);
      if (n < code.length){
        id = setTimeout(run, duration);
      } else {
        window.clearTimeout(timer);
      }
    }, duration)
  }


  writeCode('', code);
});