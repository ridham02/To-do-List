var addTaskInputCard = document.querySelector("#addTask");
var taskContainerData = document.querySelector("#newTaskContainer");
var ItemContainerData = document.querySelector("#newItemContainer");
var closeInputBox = document.querySelector("#closeTaskInput");
var closeitemBox = document.querySelector("#closeItemInput")
var addTaskNow = document.querySelector("#addTaskNow");
var taskInput = document.getElementById("taskInput");
var itemInput = document.getElementById("itemInput");
var cardContainer = document.getElementById("cardContainer");
var addItemBtn = document.getElementById("addItemNow");
let countTask=1;

var current_card = "";

addTaskInputCard.addEventListener("click", function () {
        console.log("button clicked");
        showTask();
    })

closeInputBox.addEventListener("click", function(){
    hideTask();
})
closeitemBox.addEventListener("click", function(){
    closeAddItem();
})




function hideTask(){
    taskContainerData.style.visibility = "hidden";
}
function showTask(){
    taskContainerData.style.visibility = "visible";
}


function showItem(){
    ItemContainerData.style.visibility = "visible";
}
function closeAddItem() {
    
    itemInput.value="";
    ItemContainerData.style.visibility = "hidden";
    // addItemBtn.parentElement.innerHTML=
    // `<button id="addItemNow" class="rec-button">+ Add Item</button>`
    // addItemBtn = document.getElementById("addItemNow");
}



function addItem(){
    var card = current_card;
    var currentTask = card.parentElement;
    var itemContainer = currentTask.getElementsByClassName("inputCheckBoxes")[0];
    console.log(itemContainer);
    var item = document.createElement("div");
    var itemInput = document.getElementById("itemInput");
    var res =itemInput.value;
    itemInput.value="";
    item.className="item";

    var itemContent = `
        
        <label class="checkbox_container" >${res}
        <input type="checkbox" >
        <span class="checkmark"></span>
        </label>`
    item.innerHTML = itemContent;
    itemContainer.appendChild(item);

    closeAddItem();

}

addItemBtn.addEventListener("click", function(){
    console.log("add Item clicked");
    addItem();
    itemInput.value ="";
});


function OpenAddItem(cardHeading){
    showItem();
   current_card = cardHeading;
}

addTaskNow.addEventListener("click",function(){
    if(countTask==1){
        var NoTasks = document.getElementById("NoTasks");
        NoTasks.remove();
    }
    let TaskHeading = taskInput.value;
    let card = document.createElement("div");
    card.className="cards"
    let cardContent = `
        <div class="cardHeading">
        <p>${TaskHeading}</p>
        </div>
        <div class="inputCheckBoxes" class="CheckBoxes">

        </div>`

    card.innerHTML=cardContent;
    cardContainer.appendChild(card);
    countTask++;
    taskInput.value="";
    

    var cardHeading = card.querySelector(".cardHeading");
    cardHeading.addEventListener("click",()=>OpenAddItem(cardHeading));
    hideTask();
    
})
