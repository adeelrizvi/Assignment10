var list1=document.getElementById('list');


function additem(){

    var toodo_item=document.getElementById('todo');
    
    var list_item=document.createElement('li');
    var text_item=document.createTextNode(toodo_item.value);
      
    list_item.appendChild(text_item);

    var dlbtn=document.createElement('button');
    var dltxt=document.createTextNode('Delete');
    dlbtn.setAttribute('class','btn1')
    dlbtn.setAttribute('onclick','dlitem(this)')
    dlbtn.appendChild(dltxt);
  

    var editbtn=document.createElement('button');
    var edittxt=document.createTextNode('Edit');
    editbtn.setAttribute('class','btn1')
    
  
    editbtn.setAttribute('onclick','edititem(this)')
    editbtn.appendChild(edittxt);



    list_item.appendChild(dlbtn);
    list_item.appendChild(editbtn);
  
    list1.appendChild(list_item);
    toodo_item.value="";


}
function dlitem(k){
    k.parentNode.remove();}

    function edititem(k){
        var val=k.parentNode.firstChild.nodeValue;
        var editpr=prompt("Enter edit value",val);
        k.parentNode.firstChild.nodeValue=editpr;
    }

function deleteitem(){
    list.innerHTML="";
}

