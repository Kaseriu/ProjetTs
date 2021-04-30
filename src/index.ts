import {Pokemon} from "./models";

async function main(): Promise<void> {
    const pikachu = new Pokemon({
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

    const magicarpe = new Pokemon({
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

    const winner = await pikachu.combat(magicarpe);
    console.log(winner.name + " a gagner le combat !");
}
main();