// ======================================
// Momento AI
// Knowledge Base v1.0
// ======================================

const knowledge={

greeting:
"Hello! I am Momento AI. How can I help you today?",

name:
"My name is Momento AI.",

creator:
"I was created by Kuldeep Verma.",

bye:
"Goodbye! Have a great day.",

coding:
"I can help you with HTML, CSS, JavaScript and programming.",

ai:
"Artificial Intelligence enables computers to understand, learn and solve problems."

};

export function searchKnowledge(message,intent){

if(knowledge[intent]){

return knowledge[intent];

}

return null;

}
