var li =document.createElement('li');
li.textContent = 'アイテム';
document.getElementById('list').appendChild(li);

//document.getElementById('form').onsubmit = function(){
//window.alert(document.getElementById('form').number.value);
  //return false;
//};
var Number = parseInt(window.prompt('数を入力してください。フォームは飾りです'));

var message;
//var Number=document.getElementById('form').number.value;

for(var i=1; i<Number+1; i++){
  var li = document.createElement('li');
  if(i%15 === 0){
    li.textContent = 'Fizz Buzz';
  }else if(i%3 === 0){
    li.textContent = 'Fizz';
  }else if(i%5 === 0){
    li.textContent = 'Buzz';
  }else{
  li.textContent = i + '回目';
  }
  document.getElementById('list').appendChild(li);
}
