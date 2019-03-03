var list = document.createElement('ul');
var info = document.createElement('p');
var html = document.querySelector('html');
var click = document.querySelector('input[type="button"]');

info.textContent = 'Are you ready ? ';

document.body.appendChild(info);
document.body.appendChild(list);

function test() {
  var listItem = document.createElement('li');
  var listContent = prompt('What content do you want the list item to have?');
  listItem.textContent = listContent;
  list.appendChild(listItem);
}


//listItem.onclick = function(e) {
//    e.stopPropagation();
//    var listContent = prompt('Enter new content for your list item');
//    this.textContent = listContent;
//}

function Get_Buildings(){
    var Httpreq = new XMLHttpRequest(); // a new request
    Httpreq.open("GET","/api/buildings",false);
    Httpreq.send(null);
    console.log(Httpreq.responseText)
    return Httpreq.responseText;
}
