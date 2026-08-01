// ======================================
// Momento AI
// Response Optimizer
// ======================================

export class Optimizer{

    optimize(response){

        response = response.trim();

        response = response.replace(/\s+/g," ");

        return response;

    }

}
