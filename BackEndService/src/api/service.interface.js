// import {Router} from 'express'

export default class IService {
    constructor() {
        if (this.constructor == IService) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    getRouter = () => {
        throw new Error("Method must be implemented.")
    }
}