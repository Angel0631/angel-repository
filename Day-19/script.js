// // // document.querySelector("p").innerHTML="This is a modified paragraph.";
// // // document.querySelector("p").textContent=" to the DOM Manipulation Example";

// // document.getElementsByTagName("p")[0].innerHTML="This is a modified paragraph with <strong>bold text</strong>";
// // document.getElementsById("para").innerHTML="This is a modified paragraph by id";
// // document.document.getElementsByClassName("pa")[0].innerHTML="This is a modified paragraph by class";
// // document.document.getElementsByClassName("pa")[1].innerHTML="This is another modified paragraph by class";

// let para1=document.querySelector("p");
// para1.textContent="This is a modified paragraph by querySelector";

let newPara=document.createElement("p");
newPara.innerHTML="I'm new here!";
document.body.appendChild(newPara);
document.body.removeChild(newPara);