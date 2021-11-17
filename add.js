
var txt=document.getElementById("t1")
var b=document.getElementById("b")


console.log(txt)

b.addEventListener('click',function(){
    var li = document.createElement("li")
    var ul=document.getElementsByClassName("list")
    ul.appendChild(li);
    // var p = document.createElement("p")
     newtext = document.createTextNode(txt.value)
     console.log(newtext)
    // var tt ='afafa'
    li.appendChild(newtext);
    console.log(li)
    // ul.appendChild(li);
    
    
    
    }
    );