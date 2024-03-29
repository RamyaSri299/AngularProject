import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  menuVariable:boolean=false;
  menu_icon_Variable:boolean=false;
  OpenMenu(){
    this.menuVariable = !this.menuVariable;
    this.menu_icon_Variable= !this.menu_icon_Variable
  }
}
