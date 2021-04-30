export interface AttackProps {
    name: string;
    power: number;
}

export interface PokemonProps{
    name: string;
    hp: number;
    attackPower: number;
    speed: number;
    attackList: AttackProps[]
}

export class Pokemon implements PokemonProps{

    name: string;
    hp: number;
    attackPower: number;
    speed: number;
    attackList: AttackProps[];

    constructor(props: PokemonProps) {
        this.name = props.name;
        this.hp = props.hp;
        this.attackPower = props.attackPower;
        this.speed = props.speed;
        this.attackList = props.attackList;
    }

    attackOrder(pokemon: Pokemon): string {
        if (this.speed >= pokemon.speed) {
            return this.name + " attaque en premier";
        } else {
            return pokemon.name + " attaque en premier";
        }
    }

    attack(pokemon: Pokemon, ability: number): string {
        if (pokemon.hp <= 0) {
            return pokemon.name + " est KO";
        } else {
            pokemon.hp -= this.attackPower * this.attackList[ability].power;
            if (pokemon.hp < 0) {
                pokemon.hp = 0;
                return pokemon.name + " est KO";
            }
            return this.name + " attaque " + this.attackList[ability].name;
        }
    }
}