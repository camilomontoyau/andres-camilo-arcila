import ICharacterController from './character.controller.interface.js';

export default class CharacterController extends ICharacterController {
    constructor(characterDataController) {
        super();

        this.characterDataController = characterDataController;
    }

    findCharacters = (request, response) => {
        this.characterDataController.findAll()
            .then((data) => {
                response.status(200).json(data);
            })
            .catch((error) => {
                console.log(error);
                response.status(503).json("ERROR: the server is currently unable to handle the request");
            });
    }

    findCharacterById = (request, response) => {
        response.status(200).json("characters");
    }

    createCharacter = (request, response) => {
        response.status(200).json("characters");
    }

    updateCharacter = (request, response) => {
        response.status(200).json("characters");
    }

    deleteCharacter = (request, response) => {
        response.status(200).json("characters");
    }
}