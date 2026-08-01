// ======================================
// Momento AI
// AI Engine v1.0
// ======================================

import { processMessage } from "./brain.js";

console.log("Momento AI Engine Loaded");

export async function askAI(message){

    try{

        message = message.trim();

        if(message === ""){

            return "Please enter a message.";

        }

        const reply = await processMessage(message);

        return reply;

    }

    catch(error){

        console.error("AI Error :", error);

        return "Sorry, an internal AI error occurred.";

    }

}
