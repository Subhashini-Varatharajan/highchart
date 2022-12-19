import { Component } from '@angular/core';

@Component({
  selector: 'app-aside-menu',
  templateUrl: './aside-menu.component.html',
  styleUrls: ['./aside-menu.component.css']
})
export class AsideMenuComponent {
  hoverfcn() {
    const body = document.getElementsByTagName('body')[0];
    body.classList.add('openAside');
  }
  mout(){
        const body = document.getElementsByTagName('body')[0];
        body.classList.remove('openAside');

  }
}
