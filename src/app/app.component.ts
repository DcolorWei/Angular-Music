import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'ngmusic';

  constructor() { }

  openSearch(){}

  sidestatus = true;
  moveSide() {
    //切换侧边栏状态
    if (this.sidestatus) {
      document.getElementById('layer')!.style.setProperty('background-color', 'rgba(0, 0, 0, 0.3)')
      document.getElementById('layer')!.style.setProperty('z-index', '10')
      document.getElementById('side')!.style.transform = 'translate(200px,0)';
    } else {
      document.getElementById('layer')!.style.setProperty('background-color', 'rgba(0, 0, 0, 0)')
      document.getElementById('layer')!.style.setProperty('z-index', '-10')
      document.getElementById('side')!.style.transform = 'translate(-200px,0)';
    }
    this.sidestatus = !this.sidestatus;
  }
}
