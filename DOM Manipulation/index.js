// console.log(document.documentElement);
// console.log(document.body);
// console.log(document.head);

// // childerns

// console.log(document.body.childNodes);
// console.log(document.body.children);
// console.log(document.body.firstChild);
// console.log(document.body.lastChild);

// console.log(document.body.firstElementChild);
// console.log(document.body.lastElementChild);


// siblings

// const divTag = document.body.children[0];
// console.log(divTag.nextElementSibling);// we can use previousSiblings too


//table
// const tableTag = document.body.children[2];
// console.log(tableTag.tBodies[0].rows[2].cells[1].style = "background-color:yellow;");

// id search
// para.style = "color:turquoise;"

// const htag = document.getElementById("headingWala");
// htag.style.backgroundColor = "aqua"

// // class Search

// const trTag = document.getElementsByClassName("byClass");
// const tdTag = document.getElementsByClassName("byClass");
// console.log(tdTag.length);

// for (let i = 0; i < tdTag.length; i++) {
//     tdTag[i].style.backgroundColor = "#18181b";
//     tdTag[i].style.color = "#efefef";
// }



// // tagName Search
// const tagName = document.getElementsByTagName("li");
// for (let i = 0; i < tagName.length; i++) {
//     tagName[i].style.backgroundColor = "yellow";
// }


// query selector this are static
const someTd = document.querySelectorAll(".listItem")
console.log(someTd);
const someTr = document.querySelectorAll("ul>li:last-child")
console.log(someTr[0].textContent);
