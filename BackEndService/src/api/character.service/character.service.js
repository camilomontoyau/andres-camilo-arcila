import ICharacterService from './character.service.interface.js';

import CharacterController from '../../controller/character.controller/character.controller.js';

export default class CharacterService extends ICharacterService {
    constructor(path, router, characterController) {
        super();

        this.path = path;
        this.router = router;
        this.characterController = characterController;
        this.initializeRoutes();
    }

    getRouter = () => {
        return this.router;
    }

    initializeRoutes = () => {
        this.router.get(this.path.concat("/all"), this.findCharacters);
        this.router.get(this.path.concat("/id/:id"), this.findCharacterById);
        this.router.post(this.path.concat(""), this.createCharacter);
        this.router.put(this.path.concat(""), this.updateCharacter);
        this.router.delete(this.path.concat("/id/:id"), this.deleteCharacter);
    }

    findCharacters = (request, response) => {
        this.characterController.findCharacters(request, response);
    }

    findCharacterById = (request, response) => {
        this.characterController.findCharacterById(request, response);
    }

    createCharacter = (request, response) => {
        this.characterController.createCharacter(request, response);
    }

    updateCharacter = (request, response) => {
        this.characterController.updateCharacter(request, response);
    }

    deleteCharacter = (request, response) => {
        this.characterController.deleteCharacter(request, response);
    }
}