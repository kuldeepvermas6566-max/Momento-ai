// ======================================
// Momento AI
// Learning Engine v1.0
// ======================================

export class LearningEngine{

    constructor(){

        this.data=[];

    }

    learn(question,answer){

        this.data.push({

            question,

            answer,

            time:Date.now()

        });

    }

    search(question){

        return this.data.find(

            item=>item.question===question

        );

    }

    all(){

        return this.data;

    }

    clear(){

        this.data=[];

    }

}
