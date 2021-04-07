"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var models_1 = require("./models");
var pikachu = new models_1.Pokemon({
    name: "Pikachu",
    speed: 90
});
var magicarpe = new models_1.Pokemon({
    name: "Magicarpe",
    speed: 80
});
pikachu.attackOrder(magicarpe);
