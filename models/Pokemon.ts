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
}