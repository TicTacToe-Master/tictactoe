import { Component, EventEmitter, Output  } from '@angular/core';

@Component({
  selector: 'app-choose-xo',
  templateUrl: './choose-xo.component.html',
  styleUrls: ['./choose-xo.component.css']
})
export class ChooseXOComponent {

  choiceXO : string | null = null; // The user chooses X or O to play with
  errorChoiceEmpty : boolean = false; // Check if the user made a choice
  @Output() userChoice = new EventEmitter<string>(); // Sends the data to the game component

  // Sets the choiceXO value based on the selected button
  selectedChoice(choice : string){
    this.choiceXO = choice;
    this.errorChoiceEmpty = false;
  }

  // Emits the value when the user clicks on the play button, to be received in the game component
  sendUserChoise(){
    if (this.choiceXO != null){
      this.userChoice.emit(this.choiceXO);
    }else{
      this.errorChoiceEmpty = true;
    }
  }
}
