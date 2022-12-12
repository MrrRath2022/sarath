let taskUl = document.querySelector(".tack-list ul");
let cate = document.querySelector(".category ul");
document.addEventListener("DOMContentLoaded", () => {
      fetch("Task.json")
        .then(response => response.json())
        .then((json) => {
            json.forEach(Task=>{
              let LI = document.createElement('LI');
              LI.innerHTML=generaTask(Task);
              taskUl.appendChild(LI);
        });
      });
      // Catagory
      fetch("Categorie.json")
        .then(response => response.json())
        .then((json) => {
            json.forEach(Categorie=>{
              let LI = document.createElement('LI');
              LI.innerHTML= generaCatagoey(Categorie);
              cate.appendChild(LI);
        });
      });

});
 // Search
 let searchDOm = document.querySelector(".nav-left .serch input[type='text']");
 searchDOm.addEventListener("keyup", function(e){
  Textsearch = e.target.value;
  taskUl.innerHTML = ""; 
  fetch("Task.json")
  .then(response => {
    return response.json();
  })
  .then((json) => {
      json.forEach(Task=>{
      LI = document.createElement('LI');
        // console.log(Task["name"].includes( Textsearch));
      if(Task["name"].includes( Textsearch)){
        LI.innerHTML=generaTask(Task);
        taskUl.appendChild(LI);
      }
  });
});

  
 });
 // add
let btnAddNewTask = document.querySelector(".add");
    btnAddNewTask.addEventListener("click", function (e){
    btnAddNewTask.innerHTML = "";
    let inputTaskName = document.createElement("input");
    let inputTaskCheck = document.createElement("input");
    inputTaskCheck.setAttribute("type", "checkbox");
    inputTaskName.setAttribute("type","text");
    inputTaskName.setAttribute("placeholder","Enter new tassk name..")
   
    btnAddNewTask.appendChild(inputTaskCheck);
    btnAddNewTask.appendChild(inputTaskName);
    inputTaskName.focus();
    inputTaskName.addEventListener("keyup", function(e){
      if(e.key == "Enter"){
        const currentDate = "07-Des-2022";
        let new_task_name = e.target.value;
        let task = {
                  name:new_task_name,
                  catagory: "N/a",
                  create_at: currentDate,
        };
        let LI  = document.createElement("LI");
        LI.innerHTML = generaTask(task);
        taskUl.appendChild(LI);
        inputTaskName.value = "";
      }

    });
  
 });
    
function generaTask(Task){
         let li = `
                       <div class="tasks">
                            <input type="checkbox" name="game">
                            <label for="">${Task.name}</label>
                        </div>
                        <div class="desc">
                            <span>${Task.catagory}</span>
                            <span>${Task.create_at}</span>
                        </div>
                 `;
               
       return li;
};
// Fellter Category

   function fill(name){
     taskUl.innerHTML = ""; 
     fetch("Task.json")
     .then(response => {
       return response.json();
     })
     .then((json) => {
         json.forEach(Task=>{
         if(name == "all"){
           LI = document.createElement('LI');
           LI.innerHTML=generaTask(Task);
           taskUl.appendChild(LI);
         }
         if(Task.catagory == name){
            LI = document.createElement('LI');
            LI.innerHTML=generaTask(Task);
            taskUl.appendChild(LI);
         }
     });
   });
 };

 // add Category
 let add_category = document.querySelector(".add-category");
     add_category.addEventListener("click", function(e){

      let LI = document.createElement('LI');
      LI.innerHTML = `
                         <span class="material-symbols-outlined">home</span>
                         <input type="text" name="" id="">
                     `;
      cate.appendChild(LI);
      add_categoryInput = LI.querySelector("input");
      add_categoryInput.focus();
     });

// json category
function generaCatagoey(Categorie){
         let li = `
                  <span class="${Categorie.logo}">${Categorie.spa}</span>
                  <span>${Categorie.cat}</span>
                  
         `;
         return li;
};

