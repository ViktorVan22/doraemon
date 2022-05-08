const string = `
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  *::after,
  *::before {
    box-sizing: border-box;
  }
  ul,
  ol {
    list-style: none;
  }
  
  /* z-index管理 */
  .head {
    z-index: 50;
  }
  .body {
    z-index: 30;
  }
  .necklace {
    z-index: 25;
  }
  .bell {
    z-index: 26;
  }
  .belly {
    z-index: 20;
  }
  .arm{
    z-index: 21;
  }
  .hands{
    z-index: 22;
  }
  .feet{
    z-index: 19;
  }
  /* 不重要的z-index */
  .flight-vehicle > .base {
    z-index: 5;
  }
  .flight-vehicle > .cap {
    z-index: 5;
  }
  .flight-vehicle > .wing {
    z-index: 3;
  }
  
  #wrapper {
    background: rgb(212, 236, 249);
    width: 100vw;
    /* height: 100%; */
    position: relative;
  }
  /* 我来组成头部 */
  .head {
    border: 2px solid black;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    position: relative;
    background: #35a1c9;
  }
  .head {
    display: flex;
    justify-content: center;
    align-items: center;
    left: 50%;
    margin-left: -100px;
    top: 100px;
  }
  /* 我来组成脸部 */
  .face {
    border: 2px solid black;
    width: 170px;
    height: 170px;
    border-radius: 50%;
    position: absolute;
    background: white;
  }
  /* 我来组成眼睛 */
  .eye {
    border: 1px solid black;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    position: absolute;
    background: white;
    top: 15px;
  }
  .eye.left {
    right: 50%;
    margin-left: 24px;
  }
  .eye.right {
    left: 50%;
    margin-right: 24px;
  }
  /* 我来组成瞳孔 */
  .eye.left > .pupil {
    content: "";
    display: block;
    width: 14px;
    height: 21px;
    position: relative;
    background: black;
    border-radius: 48% 48% 48% 48%;
    top: 13.5px;
    left: 28px;
  }
  .eye.right > .pupil {
    content: "";
    display: block;
    width: 14px;
    height: 21px;
    position: relative;
    background: black;
    border-radius: 48% 48% 48% 48%;
    top: 13.5px;
    left: 5px;
  }
  /* 我来组成瞳仁 */
  .pupil::before {
    content: "";
    display: block;
    width: 6px;
    height: 9px;
    background: white;
    border-radius: 48% 48% 48% 48%;
    position: relative;
    /* 近似居中放置 */
    top: 6px;
    left: 4px;
  }
  /* 我来组成鼻子 */
  .nose {
    border: 1px solid black;
    width: 34px;
    height: 34px;
    position: relative;
    border-radius: 50%;
    background: rgb(177, 23, 53);
    top: -26px;
  }
  .nose > .lunar {
    border: 1px solid #fff;
    width: 10px;
    height: 10px;
    position: absolute;
    background: white;
    border-radius: 50%;
    top: 6px;
    left: 8px;
  }
  /* 我来组成嘴巴 */
  .mouth {
    width: 140px;
    height: 70px;
    background: #b11635;
    position: absolute;
    top: 103px;
    border-radius: 140px 140px 0 0;
    transform: rotate(180deg);
    overflow: hidden;
  }
  /* 我来组成舌头 */
  .mouth > .tongue {
    /* border: 1px solid black; */
    width: 55px;
    height: 55px;
    border-radius: 50%;
    position: absolute;
    background: rgb(202, 37, 51);
    top: 15px;
    overflow: hidden;
  }
  .mouth > .tongue.left {
    left: 50%;
    top: -10px;
    left: 65px;
  }
  .mouth > .tongue.right {
    right: 50%;
    top: -10px;
    right: 65px;
  }
  /* 我来组成胡子 */
  .moustache {
    background: black;
    width: 2px;
    height: 14.8px;
    position: absolute;
    left: 50%;
    margin-left: -1px;
    bottom: 47.4%;
  }
  /* 我来组成脸颊 */
  .cheek {
    width: 167px;
    height: 200px;
    position: absolute;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    top: 47px;
  }
  li {
    width: 60px;
    height: 2px;
    margin: 14px 0;
    background: black;
  }
  .leftCheek > .b1 {
    transform: rotate(20deg);
  }
  .leftCheek > .b3 {
    transform: rotate(-10deg);
  }
  .rightCheek > .b1_ {
    transform: rotate(-20deg);
  }
  .rightCheek > .b3_ {
    transform: rotate(10deg);
  }
  /* /* 我来组成竹蜻蜓！ */
  .flight-vehicle {
    background: rgb(186, 143, 39);
  }
  .flight-vehicle > .base {
    width: 7px;
    height: 30px;
    position: absolute;
    top: -31px;
    left: 50%;
    margin-left: -3.5px;
    background: rgb(186, 143, 39);
    border: 2px solid black;
  }
  .flight-vehicle > .cap {
    width: 20px;
    height: 10px;
    background: rgb(186, 143, 39);
    border: 2px solid black;
    position: absolute;
    border-radius: 100px 100px 0 0;
    left: 50%;
    margin-left: -10px;
    top: -31px;
  }
  .flight-vehicle > .wing {
    width: 100px;
    height: 5px;
    border: 2px solid #555;
    position: absolute;
    background: #bd8d22;
    border-radius: 5px;
    left: 50%;
    margin-left: -50px;
    top: -25px;
  }
  .flight-vehicle > .wing > .leftWing {
  }
  .flight-vehicle > .wing > .rightWing {
  }
  /* 我来组成躯干 */
  
  .necklace {
    width: 100px;
    height: 50px;
    background: #a1172e;
    border-radius: 100px/50px;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 260px;
  }
  .bell {
    width: 35px;
    height: 35px;
    background: #f19629;
    border: 2px solid black;
    border-radius: 50%;
    position: absolute;
    left: 50%;
    margin-left: -17.5px;
    top: 300px;
  }
  .bell > .hole {
    width: 8px;
    height: 8px;
    background: black;
    border-radius: 50%;
    position: relative;
    top: 60%;
    left: 50%;
    margin-left: -4px;
    /* margin: auto; */
  }
  .belly {
    width: 150px;
    height: 150px;
    border-radius: 50%;
    border: 2px solid black;
    background: #35a1c9;
    position: absolute;
    left: 50%;
    margin-left: -75px;
    top: 230px;
  }
  .belly > .inside {
    width: 100px;
    height: 60px;
    background: #fff;
    border-radius: 60%;
    position: absolute;
    left: 50%;
    margin-left: -50px;
    top: 65px;
  }
  .belly > .magicPocket {
    width: 60px;
    height: 30px;
    border: 2px solid black;
    background: #fff;
    border-radius: 0 0 100px 100px;
    position: absolute;
    left: 50%;
    margin-left: -30px;
    top: 88px;
  }
  .arm {
    width: 280px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    left: 50%;
    margin-left: -140px;
    top: 225px;
  }
  .arm > .leftArm {
    width: 100px;
    height: 50px;
    border: 2px solid black;
    background: #35a1c9;
    transform: rotate(45deg);
    border-radius: 120px / 65px;
  }
  .arm > .rightArm {
    width: 100px;
    height: 50px;
    border: 2px solid black;
    background: #35a1c9;
    transform: rotate(-45deg);
    border-radius: 120px / 65px;
  }
  .hands {
    width: 300px;
    left: 50%;
    margin-left: -150px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 160px;
  }
  .leftHand {
    width: 75px;
    height: 75px;
    border: 2px solid black;
    background: #fff;
    border-radius: 50%;
  }
  .rightHand {
    width: 75px;
    height: 75px;
    border: 2px solid black;
    background: #fff;
    border-radius: 50%;
  }
  .feet {
    width: 120px;
    left: 50%;
    margin-left: -60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: absolute;
    top: 320px;
  }
  .leftFoot {
    width: 60px;
    height: 90px;
    border: 2px solid black;
    background: #fff;
    border-radius: 50px/75px;
  }
  .rightFoot {
    width: 60px;
    height: 90px;
    border: 2px solid black;
    background: #fff;
    border-radius: 50px/75px;
  }

  /*已经到底了！*/
  /*这个哆啦A梦送给你！*/
  `;
export default string;
