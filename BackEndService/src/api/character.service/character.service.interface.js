import IService from "../service.interface.js";

export default class ICharacterService extends IService{
    constructor(){
        super();
        if(this.constructor == ICharacterService){
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    getRouter() {
        throw new Error("Method must be implemented.")
    }

    findCharacters(request, response) {
        throw new Error("Method must be implemented.")
    }

    findCharacterById(request, response) {
        throw new Error("Method must be implemented.")
    }

    createCharacter(request, response) {
        throw new Error("Method must be implemented.")
    }

    updateCharacter(request, response) {
        throw new Error("Method must be implemented.")
    }

    deleteCharacter(request, response) {
        throw new Error("Method must be implemented.")
    }
}