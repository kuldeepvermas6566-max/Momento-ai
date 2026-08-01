// ======================================
// Momento AI
// Planning Engine
// ======================================

export class Planner{

    createGoal(goal){

        return{

            goal,

            status:"created",

            steps:[]

        };

    }

    addStep(plan,step){

        plan.steps.push(step);

        return plan;

    }

}
