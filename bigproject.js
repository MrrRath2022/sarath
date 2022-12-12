
document,addEventListener("DOMContentLoaded",()=>{
  var i=1;
  fetch('djson.json')
  .then((response) => response.json())
  .then(json =>{
    json.forEach(tast => {
      var get=document.createElement('li');
      get.setAttribute("onclick",`appe(${tast.sta})`);
      get.innerHTML+=`
      <i class="${tast.logo}"></i> ${tast.name}
      <div class="al" id="${tast.id}">
          ${tast.ta}
      </div>
  </li>              
  
  `
      document.getElementById('dfile').appendChild(get);
    });
  
   });
  fetch('task.json')
      .then((response) => response.json())
      .then(json =>{
        json.forEach(tast => {
          var get=document.createElement('li');
          get.setAttribute("class","no-border");
          get.innerHTML+=`
          <input type="checkbox" name="" id=""> <label for="">${tast.name}<i class="fa-regular fa-star"></i></label><br>
     
         <span class="left">${tast.time}</span>
         <span class="right">${tast.ti}</span>                 
     
     `
  
          document.getElementById('dul').appendChild(get);
         
          
        });
       var dad=    document.getElementsByClassName('right').length;
      document.getElementById('task').innerHTML=dad;
       });
        let search=document.querySelector(".ser input[type='search']");

        search.addEventListener('keyup',function(e){
          let se=e.target.value;
          
          var val=document.getElementById('sea');
          document.getElementById('dul').innerHTML=" ";
          fetch('task.json')
          .then((response) => response.json())
          .then(json =>{
            json.forEach(tast => {
              var get=document.createElement('li');
              get.setAttribute("class","no-border");
              if((tast["name"].toUpperCase()).includes(se.toUpperCase())){
                 get.innerHTML+=`
              <input type="checkbox" name="" id=""> <label for="">${tast.name}<i class="fa-regular fa-star"></i></label><br>
             <span class="left">${tast.time}</span>
             <span class="right">${tast.ta}</span>                 
         
         `

              document.getElementById('dul').appendChild(get);
              }
            });
           var dad=    document.getElementsByClassName('right').length;
          document.getElementById('task').innerHTML=dad;
          if(dad<=0){
            document.getElementById('non').style.display="block";
            
          }
          if(dad>0){
            document.getElementById('non').style.display="none";
            
          }
           });
            
        });
          
});
fetch('djson.json')
  .then((response) => response.json())
  .then(json =>{
    json.forEach(tast => {
      var get=document.createElement('option');
      get.setAttribute("value",`${tast.sta}`);
      get.innerHTML+=`
      ${tast.name}            
  
  `
      document.getElementById('dis').appendChild(get);
    });
  
   });
 
 
function en(){
    var d=new Date;
 var x=d.toLocaleTimeString()
    var datap=document.getElementById('data').value;
    var ggt=document.createElement('li');
  var ddp=  document.getElementById('dis').value;
  fetch('task.json')
  .then((response) => response.json())
  .then(json =>{
    json.forEach(tast => {
     if(Number(tast.sta)==ddp) {
       ggt.setAttribute("class","no-border");
    ggt.innerHTML=`
    <input type="checkbox" name="" id=""> <label for="">${datap}<i class="fa-regular fa-star"></i></label><br>

    <span class="left">${x}</span>
    <span class="right">${tast.ti}</span>
    `
     }             
  
  
      
    });
  
   });
   
    document.getElementById('dul').appendChild(ggt);
    document.getElementById('data').value="";
}
var input = document.getElementById("data");
input.addEventListener("keyup", function(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        en();
         
      var  dataget=document.getElementsByClassName('no-border').length;
        document.getElementById('task').innerHTML=dataget;
    }
});
//Given add catagory
// let ca=document.querySelector('.cat');
// ca.addEventListenere("click",function(e){
// let newd=document.createElement('li');
// newd.innerHTML=`
// <i class="fa-regular fa-star"></i>Important
//                 <div class="al">
//                     8
//                 </div>
// `
// document.getElementById('dfile').appendChild(newd);
// });
document.getElementById('dd').addEventListener("click",function(){
  let newd=document.createElement('li');
   newd.setAttribute("onclick","appe()");

  newd.innerHTML=`  <i class="fa-regular fa-star"></i>
  <input type="text" name="">
                  <div class="al">
                      8
                  </div>
  `
  
  document.getElementById('dfile').appendChild(newd);
});
function appe(sta){
  document.getElementById('dul').innerHTML=" ";
  fetch('task.json')
  
      .then((response) => response.json())
      .then(json =>{
        json.forEach(tast => {
          if(tast.sta==sta){

          
          var get=document.createElement('li');
          get.setAttribute("class","no-border");
          get.innerHTML+=`
          <input type="checkbox" name="" id=""> <label for="">${tast.name}<i class="fa-regular fa-star"></i></label><br>
     
         <span class="left">${tast.time}</span>
         <span class="right">${tast.ti}</span>                 
     
     `
  
          document.getElementById('dul').appendChild(get);
         }
          
        });
       var dad=    document.getElementsByClassName('right').length;
      document.getElementById('task').innerHTML=dad;
       });
   
}

 


 
 



 