let bikes = ["Hero", "Honda", "Bajaj", "Suzuki", "Yamaha"];
let person = {
    name: "Rahul",
    age: 25,
    gender: "Male",
};
let todos = [{
        todo: "Attending CCBP sessions",
        todoStatus: "Completed",
    },
    {
        todo: "Completing practice sets",
        todoStatus: "Not Completed",
    },
    {
        todo: "Asking doubts",
        todoStatus: "Completed",
    },
];

let jsonContainerEl = document.getElementById("jsonContainer");
let valuesToStringfy = [bikes, person, todos];

function createAndAppendValue(stringifiedValue) {
    let valueContainer = document.createElement("div");
    valueContainer.classList.add("container");
    jsonContainerEl.appendChild(valueContainer);

    let valueEl = document.createElement("span");
    valueEl.textContent = stringifiedValue;
    valueEl.classList.add("value");
    valueContainer.appendChild(valueEl);
}

function convertToJSONString(value) {
    let stringifiedValue = JSON.stringify(value);
    createAndAppendValue(stringifiedValue);
}

for (let value of valuesToStringfy) {
    convertToJSONString(value);
}