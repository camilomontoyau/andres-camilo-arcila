import express from 'express';
import bodyParser from 'body-parser';
import IService from '../api/service.interface.js';

export default class Application {
    constructor(port, services){
        this.app = express();
        this.port = port;
        this.initializeMiddleware();
        this.initializeServices(services);
    }

    initializeMiddleware(){
        this.app.use(bodyParser.json());
    }

    initializeServices(services){
        services.forEach(service => this.app.use("/", service.getRouter()));
    }

    start(){
        this.app.listen(this.port, () => console.log(`app listening on port ${this.port}`));
    }
}