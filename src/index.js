import { createStore } from "redux";

const add = document.getElementById("add");
const minus = document.getElementById("minus");
const number = documnet.querySelector("span");

number.innerText = 0;

const reducer = (count = 0, action) => {
	switch (action.type) {
		case "Add":
			return count + 1;
		case "Minus":
			return count - 1;
		default:
			return count;
	}
};

const store = createStore(reducer);

const onChange = () => {
	console.log(store);
	number.innerText = store.getState();
};

store.subscribe(onChange);

add.addEventListener("click", () => store.dispatch({ type: "Add" }));
minus.addEventListener("click", () => store.dispatch({ type: "Minus" }));

// let count = 0;

// number.innerText = count;

// const updateText = () => {
// 	number.innerText = count;
// };

// const handleAdd = () => {
// 	count = count + 1;
// 	updateText();
// };

// const handleMinus = () => {
// 	count = count - 1;
// 	updateText();
// };

// add.addEventListener("click", handleAdd);
// minus.addEventListener("click", handleMinus);
