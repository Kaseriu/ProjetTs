export interface PokemonProps {
    name: string;
}

export class Pokemon implements PokemonProps{
    name: string;

    constructor(props: PokemonProps) {
        this.name = props.name;
    }
}