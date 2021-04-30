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

    private _name: string;
    hp: number;
    attackPower: number;
    speed: number;
    attackList: AttackProps[];

    constructor(props: PokemonProps) {
        this._name = props.name;
        this.hp = props.hp;
        this.attackPower = props.attackPower;
        this.speed = props.speed;
        this.attackList = props.attackList;
    }

    get name(): string {
        return this._name;
    }

    attackOrder(pokemon: Pokemon): boolean {
        if (this.speed >= pokemon.speed) {
            console.log(this._name + " attaque en premier\n");
            return true;
        } else {
            console.log(pokemon._name + " attaque en premier\n");
            return false;
        }
    }

    attack(pokemon: Pokemon, ability: number): string {
        if (pokemon.hp <= 0) {
            return pokemon._name + " est KO";
        } else {
            pokemon.hp -= this.attackPower * this.attackList[ability].power;
            if (pokemon.hp < 0) {
                console.log(this._name + " attaque " + this.attackList[ability].name);
                pokemon.hp = 0;
                return pokemon._name + " est KO\n";
            }
            return this._name + " attaque " + this.attackList[ability].name;
        }
    }

    async combat(defPokemon: Pokemon): Promise<Pokemon> {
        let firstToAtk = this.attackOrder(defPokemon);
        while (this.hp !== 0 && defPokemon.hp !== 0) {
            if (firstToAtk) {
                console.log(this.attack(defPokemon, Math.floor(Math.random() * this.attackList.length)));
                if (defPokemon.hp > 0) {
                    console.log(defPokemon._name + " hp : " + defPokemon.hp + "\n");
                }
                firstToAtk = false;
            } else {
                console.log(defPokemon.attack(this, Math.floor(Math.random() * defPokemon.attackList.length)));
                if (this.hp > 0) {
                    console.log(this._name + " hp : " + this.hp + "\n");
                }
                firstToAtk = true;
            }
            // await this.delay(1000);
        }

        if (defPokemon.hp == 0) {
            return this;
        } else {
            return defPokemon;
        }
    }

    delay(ms: number) {
        return new Promise( resolve => setTimeout(resolve, ms) );
    }
}
