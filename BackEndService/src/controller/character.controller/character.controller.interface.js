export default class ICharacterController {
    constructor() {
        if (this.constructor == ICharacterController) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    findCharacters = (request, response) => {
        throw new Error("Method must be implemented.")
    }

    findCharacterById = (request, response) => {
        throw new Error("Method must be implemented.")
    }

    createCharacter = (request, response) => {
        throw new Error("Method must be implemented.")
    }

    updateCharacter = (request, response) => {
        throw new Error("Method must be implemented.")
    }

    deleteCharacter = (request, response) => {
        throw new Error("Method must be implemented.")
    }
}