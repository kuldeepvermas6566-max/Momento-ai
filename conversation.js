// ======================================
// Momento AI
// Conversation Manager v2.0
// ======================================

const MAX_HISTORY = 50;

export class Conversation {

    constructor(){

        this.history = [];

    }

    add(role,message){

        this.history.push({

            role,

            message,

            time:Date.now()

        });

        if(this.history.length > MAX_HISTORY){

            this.history.shift();

        }

    }

    getHistory(){

        return this.history;

    }

    getLatest(limit = 10){

        return this.history.slice(-limit);

    }

    clear(){

        this.history = [];

    }

}
