import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character }                              from "../../interfaces/character.interface";

@Component( {
    selector: 'app-dbz-list',
    templateUrl: './list.component.html',
    styleUrls: ['./list.component.css'],
} )
export class ListComponent {
    @Output()
    onDeleteByID: EventEmitter<string> = new EventEmitter<string>();

    @Input()
    public characterList: Character[] = [{ name: 'Trunks', power: 10 }]

    emitIdCharacter( id: string ): void {
        this.onDeleteByID.emit( id )
    }
}
