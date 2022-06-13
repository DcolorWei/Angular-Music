import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  constructor() { }

  indexMenu = [
    { name: "个人信息", icon: '../assets/icon/self.png' },
    { name: "今日推荐", icon: '../assets/icon/recommend.png' },
    { name: "我的喜欢", icon: '../assets/icon/like.png' },
    { name: "播放记录", icon: '../assets/icon/history.png' },
  ]

  ngOnInit(): void {

  }


}
