export interface PokemonProps {
    name: string;
    speed: number;
}

export class Pokemon implements PokemonProps{

    name: string;
    speed: number;
    
    constructor(props: PokemonProps) {
        this.name = props.name;
        this.speed = props.speed;
    }

    attackOrder(pokemon: Pokemon) {
        if (this.speed >= pokemon.speed) {
            console.log(this.name + " attaque en premier");
        } else {
            console.log(pokemon.name + " attaque en premier");
        }
    }
}