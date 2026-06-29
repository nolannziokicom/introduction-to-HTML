var MyForm = document.getElementById("MyForm")
var MyInput= document.getElementById("MyInput")
var MyItem = document.getElementById("MyItem")

MyForm.addEventListener("submit", 
    function(event){
        event.preventDefault()
        createItem(MyInput.value)
    }
)


function createItem(inputitems){
    var items = `<li>${inputitems}
    <button onclick = "deleteElement(this)"> Delete </button> </li>`
    MyItem.insertAdjacentHTML("beforeend", items)
    MyInput.value=""
    MyInput.focus()
}

function deleteElement(ElementToDelete){
    ElementToDelete.parentElement.remove()
}


