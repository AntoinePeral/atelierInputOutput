import { Component } from '@angular/core';
import { ButtonComponent } from "../../component/button/button.component";
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [ButtonComponent, CommonModule],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent {
  popUp: boolean = false;
  hiddenPopup : boolean = false;
  dataFromChild : string = '';

  greenCustomStyle ={
    'background-color': 'green',
    'color': 'white',
    'border-radius': '50px'
  }
  redCustomStyle ={
    'background-color': 'red',
    'color': 'white',
    'border': 'none',
  }
  orangeCustomStyle ={
    'background-color': 'orange',
    'color': 'white'
  }
  purpleCustomStyle ={
    'background-color': 'purple',
    'color': 'white',
    'border': '1px solid purple',
  }
  transparentCustomStyle ={
    'background-color': ' transparent',
    'border': '1px solid grey',
    'border-radius': '1.2em 0 0 0'
  }
    
  //  Avec des propriété en dur passer dans un ngstyle 'background-color': redColor
  // Style
  greenColor: string = 'green';
  redColor: string = 'red';
  orangeColor: string = 'orange';
  transparentColor: string = 'transparent';
  purpleColor: string = 'purple';
  borderRadius: string = '50px';
  fontColorWhite: string = 'white';
  // Names
  name1: string = 'Bouton 1'
  name2: string = 'Bouton 2'
  name3: string = 'Bouton 3'
  name4: string = 'Bouton 4'
  name5: string = 'Bouton 5'

  // avec un tableau d'objet
  buttonStyles = [
    { 'name': 'Bouton 1','background-color': 'orange', 'color': '#ffffff', 'font-size': '16px', 'padding': '10px 20px' },
    { 'name': 'Bouton 2','background-color': 'green', 'color': '#ffffff', 'font-size': '16px', 'padding': '10px 20px' },
    { 'name': 'Bouton 3','background-color': 'transparent', 'color': '#000000', 'font-size': '16px', 'padding': '10px 20px', 'border': '10px solid red' },
    { 'name': 'Bouton 4','background-color': 'blue', 'color': '#ffffff', 'font-size': '16px', 'padding': '10px 20px' },
    { 'name': 'Bouton 5','background-color': 'red', 'color': '#ffffff', 'font-size': '16px', 'padding': '10px 20px' }
  ];


  dataReceiveFromChild (data: any){
    this.hiddenPopup = false; // S'assurer qu'elle n'est pas cachée
    this.popUp = true;
    this.dataFromChild = data;
    console.log('Data reçue : ', data);
    setTimeout(()=>{
        this.hiddenPopup= true;
    },5000)

    setTimeout(()=>{
      this.popUp = false;
    },6000)
  }
}
