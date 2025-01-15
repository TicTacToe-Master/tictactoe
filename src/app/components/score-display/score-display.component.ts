import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-score-display',
  templateUrl: './score-display.component.html',
  styleUrls: ['./score-display.component.css']
})
export class ScoreDisplayComponent {
  @Input() userPlayerPoint: number=0; // Score du joueur
  @Input() computerPlayerPoint: number =0; // Score de l'ordinateur
}
