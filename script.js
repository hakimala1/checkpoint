var btn=document.getElementsByClassName('btn-plus')
var prix=document.getElementsByClassName('prix')

var s=0;
console.log(btn)
for(let i = 0; i < btn.length; i++){  
let num =Number(prix[i].innerHTML)
var som =Number(document.getElementById("s").innerHTML)
btn[i].addEventListener('click',function(){

btn[i].nextElementSibling.innerHTML ++
prix[i].innerHTML= Number(prix[i].innerHTML)+ num
som+=num
document.getElementById("s").innerHTML = som
 console.log(num)
//  document.getElementById("s").innerHTML = som + num
//  alert(num)
//  prix[i].innerHTML = num
//  num = prix[i].value
// prix[i].innerHTML +=Number(prix[i].value)
//  alert(prix[i].innerHTML)
}

)}

var minus_btn=document.getElementsByClassName('btn-moin')
for (let i = 0; i < minus_btn.length; i++) {
    let num =Number(prix[i].innerHTML)
    var som =Number(document.getElementById("s").innerHTML)
    minus_btn[i].addEventListener("click", function () {
      if (minus_btn[i].previousElementSibling.innerHTML > 0 && prix[i].innerHTML > num){
        minus_btn[i].previousElementSibling.innerHTML--;
        prix[i].innerHTML= Number(prix[i].innerHTML)- num
        som-=num
        document.getElementById("s").innerHTML = som
        //  document.getElementById("s").innerHTML = som - num 
    }
    });
  }


  var x = document.getElementById("f");
   var som =Number(document.getElementById("s").innerHTML)
   for (let i = 0; i < prix.length; i++) {
        som+=Number(prix[i].innerHTML)
        document.getElementById("s").innerHTML = som
  } 

 var sup=document.getElementsByClassName('remove')


var index, table = document.getElementById('table');
console.log(table.rows.length)
var t = table.getElementsByTagName('tr')
var c = null
for(let i = 0; i < t.length; i++){
    c=t[i].getElementsByTagName('td')
    for (var n=0; n<c.length;n++)
    {      let p = c[n].getElementsByClassName('prix')
        
             for (var m=0; m<p.length;m++)   {
                console.log(p[m].innerHTML);
                c[3].onclick=function() { 
                var conf = confirm("Voulez-vous supprimer ce produit ?");
                if(conf === true)
                {
                 table.deleteRow(this.parentElement.rowIndex) 
                 som-=Number(p[m].innerHTML)  
                 console.log(som)
                 document.getElementById("s").innerHTML = som
                 console.log(table.rows.length)
                 
                }}
                
            }
             
    }
}
// var aaa = Number(table.rows.length)

    var like=document.querySelectorAll('.like')
    for(let i = 0; i < like.length; i++){  
        like[i].addEventListener('click',function(){
        like[i].classList.toggle("like-color");
        
        }
        
        );}


        var creation=document.getElementById('create')
        console.log(creation)

             creation.addEventListener('click',function() {
               var itm = document.getElementsByClassName("ligne");
               var cln = itm[1].cloneNode(true);
               document.getElementById("table").appendChild(cln);
               
                som+=Number(prix[0].innerHTML)
                document.getElementById("s").innerHTML = som
          
           });
        // ala.addEventListener("click", function() {
        //     document.getElementById("demo").innerHTML = "Hello World";
        //   });

  


