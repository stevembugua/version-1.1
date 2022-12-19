function filter(){
    
    var input = document.getElementById('search');
    var filterValue = input.value.toUpperCase();
    var unorderedlist = document.getElementById('menu');
    var list = unorderedlist.getElementsByTagName('li');

    for(let i=0;i<list.length;i++){
        var a = document.getElementsByTagName('a')[0];
        if(a.innerHTML.toUpperCase().indexOf(filterValue) > -1){
            list[i].style.display ="";
        }else{
            list[i].style.display ="none";
        }
    }
}