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
        const id = request.params.id
        this.characterDataController.findById(id)
            .then((data) => {
                response.status(200).json(data);
            })
            .catch((error) => {
                this.handleError(error, response);
            });
    }

    createCharacter = (request, response) => {
        const data = request.body
        this.characterDataController.create(data)
            .then((data) => {
                response.status(200).json(data);
            })
            .catch((error) => {
                console.log(error);
                this.handleError(error, response);
            });
    }

    updateCharacter = (request, response) => {
        response.status(200).json("characters");
    }

    deleteCharacter = (request, response) => {
        response.status(200).json("characters");
    }

    handleError = (error, response) => {
        const errorCode = error.code;
        if (errorCode === "ECONNREFUSED") {
            console.log(error);
            response.status(503).json("ERROR: the server is currently unable to handle the request");
        }
        else {
            response.status(400).json(error.message);
        }
    }
}