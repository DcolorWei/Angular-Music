import { Component, OnInit } from '@angular/core';

import { PlaylistService } from '../playlist.service'
@Component({
  selector: 'app-sidemenu',
  templateUrl: './sidemenu.component.html',
  styleUrls: ['./sidemenu.component.css']
})
export class SidemenuComponent implements OnInit {

  playList: Array<{ name: string, author: string, src: string }> = [];
  constructor(private playlistService: PlaylistService) { }
  ngOnInit(): void {
    this.playList = this.playlistService.playList;
  }
}
