import {Pokemon} from "../src/models";

describe('Test Pokemon', () => {

    let pikachu: Pokemon;
    let magicarpe: Pokemon;

    beforeEach(() => {
        pikachu = new Pokemon({
            name: "Pikachu",
            hp: 100,
            attackPower: 55,
            speed: 90,
            attackList: [
                {
                    name: "Eclair",
                    power: 0.40
                },
                {
                    name: "Étincelle",
                    power: 0.65
                },
                {
                    name: "Fatal Foudre",
                    power: 0.110
                }
            ]
        });
        magicarpe = new Pokemon({
            name: "Magicarpe",
            hp: 100,
            attackPower: 10,
            speed: 80,
            attackList: [
                {
                    name: "Trempette",
                    power: 0
                },
                {
                    name: "Charge",
                    power: 0.40
                },
                {
                    name: "Fléau",
                    power: 0
                }
            ]
        });
    })

    test('Attack Order', () => {
        expect(pikachu.attackOrder(magicarpe)).toEqual("Pikachu attaque en premier");
        expect(magicarpe.attackOrder(pikachu)).toEqual("Pikachu attaque en premier");
    });

    test('Attack', () => {
        pikachu.attack(magicarpe, 0);
        magicarpe.attack(pikachu, 1);
        expect(pikachu.hp).toEqual(96);
        expect(magicarpe.hp).toEqual(78);

        magicarpe.hp = 10;
        expect(pikachu.attack(magicarpe, Math.floor(Math.random() * pikachu.attackList.length))).toEqual("Magicarpe est KO");
        expect(magicarpe.hp).toEqual(0);
    });
});