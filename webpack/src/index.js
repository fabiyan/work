import css from './test.css';
import index from './test.scss';
// import $ from 'jquery';//若没用jQuery，则不需要引,若有
// new webpack.ProvidePlugin({
//     $:'jquery'
// })，也不需要引，会自动检测有无jQuery语法，
// ，自动是否添加jQuery包，会使上线的包体积变小
let a=10;
console.log(a);
var oDiv1=document.querySelector('#div1');
oDiv1.innerHTML='hello motherfucker';
oDiv1.style.color="yellow";
let xx=666;
$('#div2').css('color','orange');