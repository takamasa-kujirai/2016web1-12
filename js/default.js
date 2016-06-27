var li =document.createElement('li');
li.textContent = 'アイテム';
document.getElementById('list').appendChild(li);

document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').number.value);
  //return false;
};

var Number=number;
var message;

for(var i=1; i<number; i++){
  var li = document.createElement('li');
  if(i%3 === 0){
    document.getElementById('Fizz');
  }else if(i%5 === 0){
    document.getElementById('Buzz');
  }else{
  li.textContent = i + '回目';
  document.getElementById('list').appendChild(li);
    
  }
}
