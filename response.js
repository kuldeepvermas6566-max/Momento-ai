// ======================================
// Momento AI
// Response Generator v1.0
// ======================================

export function createResponse(answer,intent){

switch(intent){

case "time":

return "🕒 Current Time : " +

new Date().toLocaleTimeString();

case "date":

return "📅 Today's Date : " +

new Date().toLocaleDateString();

default:

return answer;

}

}
