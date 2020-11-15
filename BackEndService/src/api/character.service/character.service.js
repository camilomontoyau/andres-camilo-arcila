import ICharacterService from './character.service.interface.js';
import express from 'express';

export default class CharacterService extends ICharacterService {
    constructor(path, router) {
        super();

        this.path = path;
        this.router = router;
        this.initializeRoutes();
    }

    getRouter() {
        return this.router;
    }

    initializeRoutes() {
        this.router.get(this.path.concat("/allcharacters"), this.findCharacters);
    }

    findCharacters(request, response) {
        response.status(200).json("characters");
    }

    findCharacterById(request, response) {
        
    }

    createCharacter(request, response) {
        
    }

    updateCharacter(request, response) {
        
    }

    deleteCharacter(request, response) {
        
    }
}