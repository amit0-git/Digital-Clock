

function displayDate(){
    const date=new Date();
 
    var hrs=document.getElementById("hrs");
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    document.title=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();

    hrs.innerHTML=date.getHours();
    min.innerHTML=date.getMinutes();
    sec.innerHTML=date.getSeconds();
 

}

setInterval(displayDate,1000);