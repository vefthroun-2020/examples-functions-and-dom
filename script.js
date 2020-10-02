function say() {
  console.log("saying something");
}

// Call function say many times
// say();
// say();
// say();
// say();
// say();
// say();
// say();
// say();

// Arrays 101
// Array Indexes    0         1          2
// const fruits = ["apple", "orange", "grapes"];
// console.log(fruits[2]); // Outputs grapes

function showMessageA() {
  // const messageDiv = getByClass('message') // Not right
  const messageDivs = document.getElementsByClassName("message"); // Right

  // messageDivs contains all divs with the class message
  // console.log(messageDivs[0]);
  // console.log(messageDivs[1]);
  // console.log(messageDivs[2]);

  // Get only the first item of the collection
  const messageA = messageDivs[0];

  // Log the HTML of the message A
  // console.log(messageA.innerHTML);

  // Overwrite contents of the messageA element
  messageA.innerHTML = "Something";

  // Overwrite contents of the messageA element (again)
  messageA.innerHTML = "Something else";
}

// Call showMessageA function
showMessageA();

function showMessageB() {
  // Get an element which has the class message
  // and is the second child on its parent
  const messageB = document.querySelector(".message:nth-child(2)");

  // console.log(messageB);

  // Overwrite the contents of the element messageB
  messageB.innerHTML = "I am happy because it's Friday";
}

// Call showMessageB function
showMessageB();

function showMessageC() {
  // Get an element which has a class message-c
  const messageC = document.querySelector(".message-c");

  // Overwrite its contents
  messageC.innerHTML = "It's Friday";
}

// Call showMessageC function
showMessageC();
