var li =document.createElement('li');
li.textContent = 'アイテム';
document.getElementById('list').appendChild(li);

document.getElementById('form').onsubmit = function(){
//window.alert(document.getElementById('form').number.value);
  //return false;
  
};


var message;
var Number=document.getElementById('form').number.value;
for(var i=1; i<Number; i++){
  var li = document.createElement('li');
  if(i%3 === 0){
    li.textContent = 'Fizz';
  }else if(i%5 === 0){
    li.textContent = 'Buzz';
  }else{
  li.textContent = i + '回目';
  }
  document.getElementById('list').appendChild(li);
}
