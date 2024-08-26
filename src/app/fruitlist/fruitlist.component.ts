import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from './singlefruit/singlefruit.component';
import { FruitdataService } from '../fruitdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrls: ['./fruitlist.component.scss']  // styleUrls ist korrekt
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitdataService);

  fontColorGood = 'green';
  fontColorBad = 'red';

  addComment(comment: string, index: number) {
    this.fruitlistdata.addCommentToFruit(comment, index);
  }
}
