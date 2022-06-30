
var num=0;
var colors=["rgb(10, 120, 10)","rgb(20, 120, 20)","rgb(30, 120, 30)","rgb(40, 120, 40)","rgb(50, 120, 50)","rgb(60, 120, 60)","rgb(70, 120, 70)","rgb(80, 120, 80)","rgb(90, 120, 90)","rgb(100, 120, 100)","rgb(110, 120, 110)","rgb(120, 120, 120)","rgb(130, 120, 130)","rgb(140, 120, 140)","rgb(150, 120, 150)","rgb(160, 120, 160)","rgb(170, 120, 170)","rgb(180, 120, 180)","rgb(190, 120, 190)","rgb(200, 120, 200)","rgb(210, 120, 210)","rgb(220, 120, 220)","rgb(230, 120, 230)","rgb(240, 120, 240)","rgb(250, 120, 250)"]
function displayDate(){
    
    const date=new Date();
 
    var hrs=document.getElementById("hrs");
    var min=document.getElementById("min");
    var sec=document.getElementById("sec");
    
    document.title=date.getHours()+":"+date.getMinutes()+":"+date.getSeconds();
    var hour=date.getHours();
    hrs.innerHTML=hour;
    min.innerHTML=date.getMinutes();
    sec.innerHTML=date.getSeconds();
    
    var secc=document.getElementById("sec");
    secc.style.background=colors[num];
    
    num+=1;
    
    if (num>24){
        num=0;
    }
 

}



function greetbox(){
    const date1=new Date();
    var hour=date1.getHours();
    var person = prompt("Please enter your name", "Amit Verma");
    let name;
    setTimeout(prmpt, 2000);
    function prmpt(){
        return person="SDSD";
    }
    if (person == null || person == "") {
        
    name = "";
    } else {
     
    name = person;
    }
    var greetdiv=document.getElementById("greet");
   
    if (hour<12){
        greetdiv.innerHTML="Good Morning "+name+" !";
    }

    else if(hour<18){
        greetdiv.innerHTML="Good Afternoon "+name+" !";
    }
    else{
        greetdiv.innerHTML="Good Afternoon "+name+" !";
    }

}


//greetbox();


async function abc(){
    await setInterval(displayDate,1000);
    await greetbox();
}
abc();