import { Component, EventEmitter, Output } from '@angular/core';
import { Character }                       from "../../interfaces/character.interface";
import { v4 as uuidv4 }                    from 'uuid';

@Component( {
    selector: 'app-dbz-add-character',
    templateUrl: './add-character.component.html',
    styleUrls: ['./add-character.component.css'],
} )
export class AddCharacterComponent {

    @Output()
    onNewCharacter: EventEmitter<Character> = new EventEmitter<Character>();

    public character: Character = {
        name: '',
        power: 0,
    }

    emitCharater(): void {
        if ( this.character.name.trim().length === 0 ) return;
        this.onNewCharacter.emit( { id: uuidv4(), ...this.character } );
        this.character = {
            name: '',
            power: 0,
        };
    }
}
