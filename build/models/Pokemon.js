"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pokemon = void 0;
var Pokemon = /** @class */ (function () {
    function Pokemon(props) {
        this.name = props.name;
        this.speed = props.speed;
    }
    Pokemon.prototype.attackOrder = function (pokemon) {
        if (this.speed >= pokemon.speed) {
            console.log(this.name + " attaque en premier");
        }
        else {
            console.log(pokemon.name + " attaque en premier");
        }
    };
    return Pokemon;
}());
exports.Pokemon = Pokemon;
