const body = document.body;

const div1 = document.createElement("div");
div1.className = "background";
div1.style.backgroundImage = 'url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRONxhyFqX51VEX1yeguOTw_BkV1xsdBxHFzQ&s")';
div1.style.backgroundRepeat = "no-repeat"
div1.style.height = "100vh";
div1.style.backgroundSize = "cover";
body.appendChild(div1);

const h1 = document.createElement("h1");
h1.className = "heading";
h1.innerText = "Chat";
h1.style.color = "#ffffff";
h1.style.backgroundColor = "#323f4b";
h1.style.fontSize = "20px";
h1.style.textAlign = "center";
h1.style.fontFamily = "Roboto";
h1.style.fontWeight = "bold";
h1.style.padding = "14px";
div1.appendChild(h1);


const div2 = document.createElement("div");
div2.className = "whole";
div2.style.padding = "14px";
div2.style.color = "#ffffff";
div2.style.fontFamily = "Roboto";
div2.style.fontSize = "12px";
div1.appendChild(div2);


const p1 = document.createElement("p");
p1.className = "text-sent";
p1.innerText = "Hello, how are you?";
p1.style.backgroundColor = "#47a3f3";
p1.style.padding = "12px";
p1.style.borderTopLeftRadius = "12px";
p1.style.borderTopRightRadius = "12px";
p1.style.borderBottomLeftRadius = "12px";
p1.style.textAlign = "right";
div2.appendChild(p1);

const p2 = document.createElement("p");
p2.className = "text-rec";
p2.innerText = "Hi Varakumar, I am good, How are you?";
p2.style.backgroundColor = "#52606d";
p2.style.padding = "12px";
p2.style.borderTopLeftRadius = "12px";
p2.style.borderTopRightRadius = "12px";
p2.style.borderBottomRightRadius = "12px";
p2.style.textAlign = "left";
div2.appendChild(p2);

const p3 = document.createElement("p");
p3.className = "text-sent";
p3.innerText = "I'm fine. I am learning HTML and CSS.";
p3.style.backgroundColor = "#47a3f3";
p3.style.padding = "12px";
p3.style.borderTopLeftRadius = "12px";
p3.style.borderTopRightRadius = "12px";
p3.style.borderBottomLeftRadius = "12px";
p3.style.textAlign = "roght";
div2.appendChild(p3);

const p4 = document.createElement("p");
p4.className = "text-rec";
p4.innerText = "HTML and CSS?";
p4.style.backgroundColor = "#52606d";
p4.style.padding = "12px";
p4.style.borderTopLeftRadius = "12px";
p4.style.borderTopRightRadius = "12px";
p4.style.borderBottomRightRadius = "12px";
p4.style.textAlign = "left";
div2.appendChild(p4);

const p5 = document.createElement("p");
p5.className = "text-sent";
p5.innerText = "Yes, by doing projects parallelly, I am learning it.";
p5.style.backgroundColor = "#47a3f3";
p5.style.padding = "12px";
p5.style.borderTopLeftRadius = "12px";
p5.style.borderTopRightRadius = "12px";
p5.style.borderBottomLeftRadius = "12px";
p5.style.textAlign = "right";
div2.appendChild(p5);

const p6 = document.createElement("p");
p6.className = "text-rec";
p6.innerText = "Awesome, can you tell how you are learning it?";
p6.style.backgroundColor = "#52606d";
p6.style.padding = "12px";
p6.style.borderTopLeftRadius = "12px";
p6.style.borderTopRightRadius = "12px";
p6.style.borderBottomRightRadius = "12px";
p6.style.textAlign = "left";
div2.appendChild(p6);

const p7 = document.createElement("p");
p7.className = "text-sent";
p7.innerText = "Can I call you?";
p7.style.backgroundColor = "#47a3f3";
p7.style.padding = "12px";
p7.style.borderTopLeftRadius = "12px";
p7.style.borderTopRightRadius = "12px";
p7.style.borderBottomLeftRadius = "12px";
p7.style.textAlign = "right";
div2.appendChild(p7);
