// ======================================
// Momento AI
// Decision Engine v2.0
// ======================================

export class DecisionEngine{

    choose(intent,message){

        message = message.toLowerCase();

        if(

            message.includes("search") ||

            message.includes("find") ||

            message.includes("google")

        ){

            return "internet";

        }

        if(

            message.includes("remember") ||

            message.includes("memory")

        ){

            return "memory";

        }

        const knownIntents = ["greeting","name","creator","bye","coding","ai"];

        if(

            knownIntents.includes(intent)

        ){

            return "knowledge";

        }

        return "reasoning";

    }

}
