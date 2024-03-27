document.getElementById('add').addEventListener('click',func);

function func(){
    var str1=document.getElementById('bar1').value;
    var str2=document.getElementById('bar2').value;
    if(str1!=null && str2!=null){
        ans=str1+"("+str2+")";
        var listitem=document.createElement('li');
        listitem.textContent=ans;
        document.querySelector('#list').appendChild(listitem);
        document.getElementById('bar1').value='';
        document.getElementById('bar2').value='';
    }

}

document.getElementById('clear').addEventListener('click',eraselist);

function eraselist(){
    var ul = document.getElementById('list');
    while (ul.firstChild) {
        ul.removeChild(ul.firstChild);
    }
}