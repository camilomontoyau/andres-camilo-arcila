import pgPromise from 'pg-promise';

import ICharacterDataController from "./character.data.controller.interface.js";

export default class CharacterDataController extends ICharacterDataController {
    constructor() {
        super();

        this.pgPromise = pgPromise();
        this.database = this.pgPromise("postgres://postgres:root@localhost:5432/star-wars");
    }

    findAll = async () => {
        return await this.database.one("SELECT * FROM character")
    }

    findById = (id) => {
    }

    create = (data) => {
    }

    update = (data) => {
    }

    deleteById = (id) => {
    }
}