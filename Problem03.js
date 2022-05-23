function alertFunction(){
    alert("Hello World")
}
function decor(alertFunction,ml){
   return function(){
       setTimeout(alertFunction,ml) 
   }   
}
alertFunction=decor(alertFunction,5000)
alertFunction()