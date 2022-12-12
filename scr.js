var name1= document.getElementById("name");
var pass= document.getElementById("Password");
var eye1 =document.querySelector(".eye1");
var eye11 =document.querySelector(".eye11");
var eye22 =document.querySelector(".eye22");
var eye2 =document.querySelector(".eye2");
var btn =document.querySelector(".btn");
var mouth=document.querySelector(".mouth");
var messages=document.querySelector(".messages");
var errors=[];

var errorsAll=document.querySelectorAll(".selected");

btn.onclick =function(e){
    e.preventDefault();
    if( name1.value=='' | pass.value=='' ){

        for(i=0;i<errorsAll.length;i++){
            errorsAll[i].style.display="block";
        }
        errors.push("The UserName And Password Can Not Emoty!!");
    }

    else if (name1.value.length > 10){
        errors.push("The UserName Can Not Be Larger Than 10");
    }
    else if (pass.value.length < 10){
        errors.push("The Password Is Short");
    }
    

    for(i=0;i<errors.length;i++){

        var el1=document.createElement("div");
        el1.className="message";
        var textel=document.createTextNode(errors[i]);

        messages.appendChild(el1);
        el1.appendChild(textel);

    }

    if(errors.length >0){
            mouth.style.borderBottom="1px solid transparent";
            mouth.style.borderTop="2px solid black";
            mouth.style.top="80%";

            setTimeout(function(){
                window.location.reload();

            },3000);
    }else{
            mouth.style.borderBottom="2px solid black";
            mouth.style.borderTop="1px solid transparent";
            mouth.style.top="50%";
    
    }        
}







name1.onfocus =function(){


    eye11.style.top="9px";
    eye22.style.top="9px";

    eye1.style.backgroundColor="black";
    eye11.style.display="block";

    
    eye2.style.backgroundColor="black";
    eye22.style.display="block";

   
    
    
}

pass.onfocus =function(){
  
    eye1.style.borderBottom="2px solid black";
    eye1.style.backgroundColor="transparent";
    eye11.style.display="none";  
}

pass.oninput =function(){
   
        eye2.style.borderBottom="2px solid black";
        eye2.style.backgroundColor="transparent";
        eye22.style.display="none";
        
}

pass.onblur =function(){

    if(pass.value.length==0){
        eye1.style.backgroundColor="black";
        eye11.style.display="block";

        eye2.style.backgroundColor="black";
        eye22.style.display="block";


    }
    

}


name1.oninput =function(){
    console.log(name1.value.length);
    console.log(name1.value);

    


    if(name1.value.length == 3){
        
        eye11.style.left="1px";
        eye22.style.left="1px";
    }
    else if (name1.value.length == 6){
        
        eye11.style.left="2px";
        eye22.style.left="2px";
    } 

    else if (name1.value.length == 10){
        
        eye11.style.left="3px";
        eye22.style.left="3px";
    }
    else if (name1.value.length == 15){
        
        eye11.style.left="4px";
        eye22.style.left="4px";
    }
    else if (name1.value.length == 20){
        
        eye11.style.left="5px";
        eye22.style.left="5px";
    }
    else if (name1.value.length == 22){
        
        eye11.style.left="5px";
        eye22.style.left="5px";
    }
    else if (name1.value.length > 25){
        
        eye11.style.left="10px";
        eye22.style.left="10px";
    }
   

}




