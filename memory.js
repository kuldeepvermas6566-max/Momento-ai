// ======================================
// Momento AI
// Memory Engine v1.0
// ======================================

const STORAGE_KEY = "momento_ai_memory";

export function saveMemory(role,message){

const memory=getMemory();

memory.push({

role,

message,

time:new Date().toISOString()

});

// Last 100 conversations

if(memory.length>100){

memory.shift();

}

localStorage.setItem(

STORAGE_KEY,

JSON.stringify(memory)

);

}

export function getMemory(){

try{

return JSON.parse(

localStorage.getItem(STORAGE_KEY)

)||[];

}

catch{

return[];

}

}

export function clearMemory(){

localStorage.removeItem(

STORAGE_KEY

);

}

export function getLastMessages(limit=10){

const memory=getMemory();

return memory.slice(-limit);

}
