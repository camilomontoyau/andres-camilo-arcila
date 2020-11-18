import express from 'express';

import Application from './app/application.js';
import CharacterService from './api/character.service/character.service.js';
import CharacterController from './controller/character.controller/character.controller.js';
import CharacterDataController from './data.controller/persistence/character.data.controller/character.data.controller.js';

class Main {
    constructor(port) {
        this.port = port;

        const router = express.Router();

        const characterDataController = new CharacterDataController();
        const services = [new CharacterService("/characters", router, new CharacterController(characterDataController))];
        this.application = new Application(this.port, services);
    }

    start = () => {
        this.application.start();
    }
}

(() => new Main(5000).start())();