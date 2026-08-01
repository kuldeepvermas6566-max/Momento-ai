// ======================================
// Momento AI
// Context Manager
// ======================================

export class ContextManager{

    constructor(){

        this.context = "";

    }

    set(text){

        this.context = text;

    }

    get(){

        return this.context;

    }

    clear(){

        this.context = "";

    }

}
