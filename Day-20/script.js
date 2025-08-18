// // let a1=document.createElement("h1");
// // let a2=document.createElement("div");
// // a1.innerText="this is an para";
// // document.body.appendChild(a2);
// // document.body.lastElementChild.appendChild(a1);
// // let a3=document.createElement("p");
// // a1.innerText="this is an para";
// // document.body.lastElementChild.appendChild(a3);
// // let a4=document.createElement("p");
// // document.body.lastElementChild.appendChild(a4);
// // document.body.lastElementChild.removeChild(a4);
// // let a5=document.getElementsByTagName('p');
// // document.body.removeChild(a5[1]);

// document.querySelector("h1").innerHTMLML='<b>This is an header<b>';

let para=document.getElementsByName("p");

para[0].innerHTML='<b>This is an header</b>';
para[1].textContent='<b>This is an para</b>';
para[2].style.color='red';
para[4].style.backgroundColor='blue';
para[4].style.color='white';
para[5].classList.add('pa1');
para[3].classList.remove('pa1');