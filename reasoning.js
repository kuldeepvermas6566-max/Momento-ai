// ======================================
// Momento AI
// Reasoning Engine v1.0
// ======================================

export function think(message){

message=message.toLowerCase();

if(message.includes("why")){

return "Based on available information and logical reasoning, there can be multiple possible explanations.";

}

if(message.includes("how")){

return "I can explain it step by step. Please tell me the topic in more detail.";

}

return "I am still learning. My knowledge will continue to improve.";

}
