// ======================================
// Momento AI Chat Controller v2.0
// ======================================

import { askAI } from "./ai.js";

const chatArea = document.getElementById("chatArea");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");

// ----------------------------
// Create Message
// ----------------------------

function createMessage(role, text) {

    const msg = document.createElement("div");

    msg.className = "message " + role;

    msg.innerHTML = formatMessage(text);

    chatArea.appendChild(msg);

    chatArea.scrollTop = chatArea.scrollHeight;

}

// ----------------------------
// Basic Markdown
// ----------------------------

function formatMessage(text){

    return text

    .replace(/\n/g,"<br>")

    .replace(/\*\*(.*?)\*\*/g,"<b>$1</b>")

    .replace(/`(.*?)`/g,"<code>$1</code>");

}

// ----------------------------
// Typing Indicator
// ----------------------------

function showTyping(){

    const typing=document.createElement("div");

    typing.className="message ai";

    typing.id="typing";

    typing.innerHTML="Thinking<span>.</span><span>.</span><span>.</span>";

    chatArea.appendChild(typing);

    chatArea.scrollTop=chatArea.scrollHeight;

}

function removeTyping(){

    const t=document.getElementById("typing");

    if(t) t.remove();

}

// ----------------------------
// Send Message
// ----------------------------

async function sendMessage(){

    const message=input.value.trim();

    if(message==="") return;

    createMessage("user",message);

    input.value="";

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

            "Internal AI Error."

        );

        console.error(error);

    }

}

// ----------------------------
// Events
// ----------------------------

sendBtn.onclick=sendMessage;

input.addEventListener("keydown",(e)=>{

    if(e.key==="Enter"){

        sendMessage();

    }

});

console.log("Momento AI Ready");
