var li =document.createElement('li');
li.textContent = 'アイテム';
document.getElementById('list').appendChild(li);

for(var i=1; i<10; i++){
  var li = document.createElement('li');
  li.textContent = i + '回目';
  document.getElementById('list').appendChild(li);
}
