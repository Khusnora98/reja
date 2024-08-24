console.log("FrontEnd JS procceed");
function itemTemplate(item) {
    return ` <li li
    class="list-group-item list-group-item-info d-flex align-items-center justify-content-between">
    <span class="item-text">${item.reja}</span>
    <div>
      <button
        data-id="${item._id}"
        class="edit-me btn-secondary btn-sm mr-1">
        O'zgartirish
      </button>
      <button
      data-id="${item._id}"
        class="delete-me btn btn-danger btn-sm">
        O'chirish
      </button>
    </div>
  </li>`;
}
let createField = document.getElementById("create-field");

document.getElementById("create-form").addEventListener("submit", function(e) {
    e.preventDefault();

    axios
    .post("/create-item",{reja: createField.value})
    .then((response) => {
        document.getElementById("item-list").insertAdjacentHTML("beforeend",itemTemplete(data.data));
        createField.value = "";
        createField.focus();
    })
    .catch((err) => {
        console.log("Please try again!");
    });
    
});
document.addEventListener("click",function(e){
//Delete bilan ishlash
console.log(e.target);
if(e.target.classList.contains("delete-me")){
   //alert("you pressed the delete button!") ;
   if(confirm("Are you sure you want to delete?!")){
axios
.post("/delete-item", {id: e.target.getAttribute("data-id") })
.then((respose) => {
    console.log(respose.data);
    e.target.parentELement.parentElement.remove();
})
.catch((err) => {
    console.log("Please try again!");
});

   /*{
    alert("your answer  is *yes ");
   }else{
    alert("your answer  is *no ");
   }*/
   
}
}
//Edit bilan ishlash
if(e.target.classList.contains("edit-me")){
    alert("you pressed the edit button")};
});