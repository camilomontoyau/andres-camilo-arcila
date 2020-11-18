import { databaseConfig } from '../../../../config.js';

import pgPromise from 'pg-promise';

import ICharacterDataController from "./character.data.controller.interface.js";

export default class CharacterDataController extends ICharacterDataController {
    constructor() {
        super();

        this.database = pgPromise()(`postgres://${databaseConfig.USER}:${databaseConfig.PASSWORD}@${databaseConfig.HOST}:${databaseConfig.PORT}/${databaseConfig.DATABASE}`);
    }

    findAll = async () => {
        return await this.database.any("SELECT * FROM character");
    }

    findById = async (id) => {
        return await this.database.one("SELECT * FROM character WHERE id_character = $1", [id]);
    }

    create = async (data) => {
        let query = "";
        let keysString = "";
        let valuesString = "";
        let commaFlag = true;

        for (let key in data) {
            if (commaFlag) {
                keysString = keysString.concat(`${key}`);
                valuesString = valuesString.concat(`\${${key}}`);
                commaFlag = false;
            } else {
                keysString = keysString.concat(`,${key}`);
                valuesString = valuesString.concat(`,\${${key}}`);
            }
        }

        query = `INSERT INTO character(${keysString}) `
            + `VALUES (${valuesString}) RETURNING *`;

        return await this.database.one(query, data);
    }

    update = async (data) => {
        let query = "";
        let valuesString = "";
        let commaFlag = true;

        for (let key in data) {
            if (commaFlag) {
                valuesString = valuesString.concat(`${key} = \${${key}}`);
                commaFlag = false;
            } else {
                valuesString = valuesString.concat(`,${key} = \${${key}}`);
            }
        }

        query = `UPDATE character `
            + `SET ${valuesString} `
            + `WHERE id_character=${data.id_character} RETURNING *`;
        console.log(query);
        return await this.database.one(query, data);
    }

    deleteById = async (id) => {
    }
}