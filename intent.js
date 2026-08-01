// ======================================
// Momento AI
// Intent Detection v1.0
// ======================================

export function detectIntent(message){

message = message.toLowerCase().trim();

// Greeting

if(
message.includes("hi") ||
message.includes("hello") ||
message.includes("hey")
){

return "greeting";

}

// Name

if(
message.includes("your name") ||
message.includes("name")
){

return "name";

}

// Time

if(
message.includes("time")
){

return "time";

}

// Date

if(
message.includes("date")
){

return "date";

}

// Creator

if(
message.includes("creator") ||
message.includes("who made you")
){

return "creator";

}

// Goodbye

if(
message.includes("bye")
){

return "bye";

}

// Coding

if(
message.includes("html") ||
message.includes("css") ||
message.includes("javascript") ||
message.includes("js")
){

return "coding";

}

// AI

if(
message.includes("ai") ||
message.includes("artificial intelligence")
){

return "ai";

}

// Default

return "question";

}
