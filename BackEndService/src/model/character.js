export default class Character {
    constructor() {
        this.id = 0;
        this.name = "";
        this.gender = "";
        this.birthYear = "";
        this.height = 0;
        this.mass = 0;
        this.eyeColor = "";
        this.hairColor = "";
        this.skinColor = "";
    }

    get getId() {
        return this.id;
    }

    set setId(id) {
        this.id = id;
    }

    get getName() {
        return this.name;
    }

    set setName(name) {
        this.name = name;
    }

    get getGender() {
        return this.gender;
    }

    set setGender(gender) {
        this.gender = gender
    }

    get getBirthYear() {
        return this.birthYear;
    }

    set setBirthYear(birthYear) {
        this.birthYear = birthYear;
    }

    get getHeight() {
        return this.height;
    }

    set setHeight(height) {
        this.height = height;
    }

    get getMass() {
        return this.mass;
    }

    set setMass(mass) {
        this.mass = mass;
    }

    get getEyeColor() {
        return this.eyeColor;
    }

    set setEyeColor(eyeColor) {
        this.eyeColor = eyeColor;
    }

    get getHairColor() {
        return this.hairColor;
    }

    set setHairColor(hairColor) {
        this.hairColor = hairColor;
    }

    get getSkinColor() {
        return this.skinColor;
    }

    set setSkinColor(skinColor) {
        this.skinColor = skinColor;
    }

    //Builder design pattern
    build() {
        return this;
    }
    
    withId(id){
        this.setId = id;
        return this;
    }

    withName(name){
        this.setName = name;
        return this;
    }

    withGender(gender){
        this.setGender = gender;
        return this
    }

    withBirthYear(birthYear){
        this.setBirthYear = birthYear;
        return this
    }

    withHeight(height){
        this.setHeight = height;
        return this
    }

    withMass(mass){
        this.setMass = mass;
        return this
    }

    withEyeColor(eyeColor){
        this.setEyeColor = eyeColor;
        return this
    }

    withHairColor(hairColor){
        this.setHairColor = hairColor;
        return this
    }
    
    withSkinColor(skinColor){
        this.setSkinColor = skinColor;
        return this
    }
}