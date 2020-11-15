import express from 'express';

import Application from './app/application.js';
import CharacterService from './api/character.service/character.service.js';

class Main {
    constructor(port){
        this.port = port;
        
        const router = express.Router();

        const services = [new CharacterService("/characters", router)];
        this.application = new Application(this.port, services);
    }
    start(){
        this.application.start();
    }
}

(() => new Main(3000).start())();