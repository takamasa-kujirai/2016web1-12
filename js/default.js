var li =document.createElement('li');
li.textContent = 'アイテム';
document.getElementById('list').appendChild(li);

document.getElementById('form').onsubmit = function(){
  window.alert(document.getElementById('form').number.value);
};

for(var i=1; i<number; i++){
  var li = document.createElement('li');
  li.textContent = i + '回目';
  document.getElementById('list').appendChild(li);
}
