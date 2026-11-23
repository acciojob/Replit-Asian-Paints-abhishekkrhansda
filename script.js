//your JS code here. If required.
let item = document.querySelectorAll(".grid-item")

let changeColorBtn = document.querySelector("#change_button")
let resetBtn = document.querySelector("#Reset")

let num = document.querySelector("#block_id");
let col = document.querySelector("#colour_id");

changeColorBtn.addEventListener("click", () => {

	let number = Number(num.value)
    let color = col.value

	item.forEach(items =>{
		items.style.backgroundColor = "transparent";
	})

	let selectedItem = document.getElementById(number);

	if (selectedItem && number >= 1 && number <= 9) {
        selectedItem.style.backgroundColor = color;
    }
})

resetBtn.addEventListener("click" , () => {
	item.forEach(items =>{
		items.style.backgroundColor = "transparent";
	})

	num.value = ""
	col.value = ""
})