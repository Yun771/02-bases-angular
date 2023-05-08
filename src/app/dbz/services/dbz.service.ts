import { Injectable }   from '@angular/core';
import { Character }    from "../interfaces/character.interface";
import { v4 as uuidv4 } from "uuid";

@Injectable( {
    providedIn: 'root',
} )
export class DbzService {

    public characters: Character[] = [
        {
            id: uuidv4(),
            name: 'Krillin',
            power: 1000,
        },
        {
            id: uuidv4(),
            name: 'Goku',
            power: 9500,
        },
        {
            id: uuidv4(),
            name: 'Vegeta',
            power: 7500,
        },
    ];

    addCharacter( character: Character ): void {
        console.log( 'Main' )
        console.log( character )
        this.characters.push( character );
    }

    onDeleteCharacter( id: string ): void {
        this.characters = this.characters.filter( ( character: Character ): boolean => character.id !== id );
    }
}
