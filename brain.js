// ======================================
// Momento AI Brain v2.0
// ======================================

import { detectIntent } from "./intent.js";
import { searchKnowledge } from "./knowledge.js";
import { think } from "./reasoning.js";
import { saveMemory } from "./memory.js";
import { createResponse } from "./response.js";

import { Conversation } from "./conversation.js";
import { DecisionEngine } from "./decision.js";
import { Optimizer } from "./optimizer.js";
import { ContextManager } from "./context.js";
import { LearningEngine } from "./learning.js";

const conversation = new Conversation();
const decision = new DecisionEngine();
const optimizer = new Optimizer();
const context = new ContextManager();
const learning = new LearningEngine();

export async function processMessage(message){

    // Save User Message
    saveMemory("user", message);

    // Conversation History
    conversation.add("user", message);

    // Context
    context.set(message);

    // Intent
    const intent = detectIntent(message);

    // Decision
    const route = decision.choose(intent, message);

    let result = "";

    switch(route){

        case "knowledge":

            result = searchKnowledge(message, intent);

            break;

        case "memory":

            result = "I remember our previous conversation.";

            break;

        case "internet":

            result = "Internet module is not connected yet.";

            break;

        default:

            result = think(message);

    }

    if(!result){

        result = "I'm still learning.";

    }

    // Learn

    learning.learn(message, result);

    // Response

    let reply = createResponse(result, intent);

    // Optimize

    reply = optimizer.optimize(reply);

    // Save AI

    saveMemory("assistant", reply);

    conversation.add("assistant", reply);

    return reply;

}
