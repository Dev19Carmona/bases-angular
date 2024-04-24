import { Component, Input } from '@angular/core';
import { Character } from '../../interfaces';

@Component({
    selector: 'app-list-dbz',
    templateUrl: 'list.component.html'
})

export class ListDbzComponent{
    @Input()
    public characterList: Character[] = [
      {
        name: 'Vegeta',
        power: 9500
      },
    ]
}
