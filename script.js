let items = document.getElementsByClassName("item")
let firstBox = document.getElementById("firstBox")
let secondBox = document.getElementById("secondBox")

for (item of items){
    item.addEventListener("dragstart", function(event) {
        let selected = event.target
        secondBox.addEventListener("dragover", function(event){
            event.preventDefault()
        })
        secondBox.addEventListener("drop", function(event){
            secondBox.appendChild(selected)
            selected = null
        })

        firstBox.addEventListener("dragover", function(event){
            event.preventDefault()
        
        })
        firstBox.addEventListener("drop", function(event){
            firstBox.appendChild(selected)
            selected = null
        })
    })
}
