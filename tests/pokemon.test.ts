import {Pokemon} from "../src/models";

describe('Test Pokemon', () => {

    const pikachu = new Pokemon({
        name: "Pikachu",
        speed: 90
    });

    const magicarpe = new Pokemon({
        name: "Magicarpe",
        speed: 80
    });

    test('Attack Order', () => {
        expect(pikachu.attackOrder(magicarpe)).toEqual(console.log("Pikachu attaque en premier"));
        expect(magicarpe.attackOrder(pikachu)).toEqual(console.log("Pikachu attaque en premier"));
    });
});