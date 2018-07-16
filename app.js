//Original Code

// let article = document.querySelector("#messages");

// let words = ["Hello" , "Hi", "Hey there", "What's up", "Howdy"]

// for (let i = 0; i < words.length; i++) {
//     let section = document.createElement('section');
//     section.className = "message";
//     section.textContent = words[i];
//     article.appendChild(section);
// }

//Refactored with .createDocumentFragment();
const fragment = document.createDocumentFragment();

let words = ["Hello" , "Hi", "Hey there", "What's up", "Howdy"]

for (let i = 0; i < words.length; i++) {
    let section = document.createElement('section');
    section.className = "message";
    section.textContent = words[i];
    fragment.appendChild(section);
}

document.querySelector("#messages").appendChild(fragment);