<template>
<body>
    <div class="box">
        <ul class="minbox">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        <ol class="maxbox">
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ol>
    </div>
</body>
</template>

<script>
export default {
  name: 'Magic'
}
</script>

<style lang="stylus" scoped>
*{margin:0; padding: 0; list-style: none;}
body{
    background: url(../../../assets/img/bg.png) 0 0 no-repeat;
    background-size: 100%;
    width 100%
    height 400px
    /*-webkit-perspective: 1000;*/
}
.box{
    width: 200px;height: 200px;margin: 200px auto;position: relative;
    -webkit-transform-style: preserve-3d;
    -webkit-transform: rotateX(13deg);
    -webkit-animation:move 10s linear infinite;
}
.minbox{
    width: 100px;height: 100px;position: absolute;left: 50px;top: 150px;
    -webkit-transform-style: preserve-3d;
}
.minbox li{
    width: 100px;height: 100px;position: absolute;left: 0;top: 0;
}
.minbox li:nth-child(1){
    background: url(../../../assets/img/01.jpg) 0 0 no-repeat;
    -webkit-transform:translateZ(50px);
}
.minbox li:nth-child(2){
    background: url(../../../assets/img/02.jpg) 0 0 no-repeat;
    -webkit-transform: rotateX(90deg) translateZ(50px);
}
.minbox li:nth-child(3){
    background: url(../../../assets/img/03.jpg) 0 0 no-repeat;
    -webkit-transform: rotateX(180deg) translateZ(50px);
}
.minbox li:nth-child(4){
    background: url(../../../assets/img/04.jpg) 0 0 no-repeat;
    -webkit-transform: rotateX(270deg) translateZ(50px);
}
.minbox li:nth-child(5){
    background: url(../../../assets/img/05.jpg) 0 0 no-repeat;
    -webkit-transform: rotateY(90deg) translateZ(50px);
}
.minbox li:nth-child(6){
    background: url(../../../assets/img/06.jpg) 0 0 no-repeat;
    -webkit-transform: rotateY(-90deg) translateZ(50px);
}
.maxbox{
    width: 200px;
    height: 200px;
    position: absolute;
    left: 0;
    top: 100px;
    -webkit-transform-style: preserve-3d;
}
.maxbox li{
    width: 200px;
    height: 200px;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
    opacity: 0.2;
    -webkit-transition: all 1s ease;
}
.maxbox li:nth-child(1){
    -webkit-transform: translateZ(100px);
}
.box:hover ol li:nth-child(1){
    -webkit-transform: translateZ(300px);
}
.maxbox li:nth-child(2){
    -webkit-transform:rotateX(90deg) translateZ(100px);
}
.box:hover ol li:nth-child(2){
    -webkit-transform:rotateX(90deg) translateZ(300px);
}
.maxbox li:nth-child(3){
    -webkit-transform:rotateX(180deg) translateZ(100px);
}
.box:hover ol li:nth-child(3){
    -webkit-transform:rotateX(180deg) translateZ(300px);
}
.maxbox li:nth-child(4){
    -webkit-transform:rotateX(270deg) translateZ(100px);
}
.box:hover ol li:nth-child(4){
    -webkit-transform:rotateX(270deg) translateZ(300px);
}
.maxbox li:nth-child(5){
    -webkit-transform:rotateY(90deg) translateZ(100px);
}
.box:hover ol li:nth-child(5){
    -webkit-transform:rotateY(90deg) translateZ(300px);
}
.maxbox li:nth-child(6){
    -webkit-transform:rotateY(-90deg) translateZ(100px);
}
.box:hover ol li:nth-child(6){
    -webkit-transform:rotateY(-90deg) translateZ(300px);
}
@-webkit-keyframes move{
    0%{-webkit-transform:rotateX(13deg) rotateY(0deg);}
    100%{-webkit-transform:rotateX(13deg) rotateY(360deg);}
}
</style>
