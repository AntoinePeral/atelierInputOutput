import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() customStyle!: {[key:string]: string};
  @Input() givenColor!: string;
  @Input() fontColor!: string;
  @Input() borderGiven! : string;
  @Input() nameGiven! : string;
  @Input() style!: {[key:string]: string |undefined};

  @Output() dataEmitFromChild: EventEmitter<string> = new  EventEmitter();

  sendDataToParent(){
    this.dataEmitFromChild.emit(`Le bouton ${this.nameGiven} a été cliqué`)
  }

}
