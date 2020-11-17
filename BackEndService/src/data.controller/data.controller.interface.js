export default class IDataController {
    constructor() {
        if (this.constructor == IDataController) {
            throw new Error("Abstract classes can't be instantiated.");
        }
    }

    findAll = () => {
        throw new Error("Method must be implemented.")
    }

    findById = (id) => {
        throw new Error("Method must be implemented.")
    }

    create = (data) => {
        throw new Error("Method must be implemented.")
    }

    update = (data) => {
        throw new Error("Method must be implemented.")
    }

    deleteById = (id) => {
        throw new Error("Method must be implemented.")
    }
}