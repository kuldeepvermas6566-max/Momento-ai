// ======================================
// Momento AI
// Chat UI Controller v1.0
// ======================================

import { askAI } from "./ai.js";

const chatArea = document.getElementById("chatArea");

const input = document.getElementById("userInput");

const sendBtn = document.getElementById("sendBtn");

function createMessage(role,text){

const div=document.createElement("div");

div.className=`message ${role}`;

div.textContent=text;

chatArea.appendChild(div);

chatArea.scrollTop=chatArea.scrollHeight;

}

function showTyping(){

const typing=document.createElement("div");

typing.className="message ai";

typing.id="typing";

typing.innerHTML="Momento AI is thinking...";

chatArea.appendChild(typing);

chatArea.scrollTop=chatArea.scrollHeight;

}

function removeTyping(){

const typing=document.getElementById("typing");

if(typing){

typing.remove();

}

}
// ======================================
// Send Message
// ======================================

async function sendMessage(){

const message=input.value.trim();

if(message==="") return;

// User Message

createMessage("user",message);

input.value="";

// AI Typing

showTyping();

try{

const reply=await askAI(message);

removeTyping();

createMessage("ai",reply);

}

catch(error){

removeTyping();

createMessage(

"ai",

"Sorry! Something went wrong."

);

console.error(error);

}

}

// ======================================
// Events
// ======================================

sendBtn.addEventListener(

"click",

sendMessage

);

input.addEventListener(

"keydown",

(e)=>{

if(e.key==="Enter"){

sendMessage();

}

}

);

// ======================================
// Welcome
// ======================================

console.log(

"Momento AI Chat Ready"

);
