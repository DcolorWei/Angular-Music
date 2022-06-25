import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { PlaylistService } from "../playlist.service"
@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.css'],
})

export class PlayerComponent implements OnInit, OnChanges {

  constructor(private playlistService: PlaylistService) { }
  playStatus: boolean = false;

  songList = this.playlistService.playList;

  songIndex: number = 0;

  song: HTMLAudioElement = document.getElementById('audio') as HTMLAudioElement;
  currentPrecentage: number = 0;

  playBtnSrc = "../../assets/icon/play.png"

  changePlayerStatus(): void {
    if (!this.playStatus) {
      // console.log(document.getElementById('playBtn'))
      (document.getElementById('audio') as HTMLAudioElement)!.play();
      this.playBtnSrc = "../../assets/icon/pause.png";
    }
    else {
      (document.getElementById('audio') as HTMLAudioElement)!.pause();
      this.playBtnSrc = "../../assets/icon/play.png"
    }
    this.playStatus = !this.playStatus;
  }

  changeSong(next: boolean): void {
    if (next) {
      if (this.songIndex == this.songList.length - 1) {
        this.songIndex = 0;
      } else {
        this.songIndex++;
      }
    } else {
      if (this.songIndex == 0) {
        this.songIndex = this.songList.length - 1;
      } else {
        this.songIndex--;
      }
    }
    (document.getElementById('audio') as HTMLAudioElement)!.load();
    (document.getElementById('audio') as HTMLAudioElement)!.addEventListener('canplay', () => {
      if (!this.playStatus) this.changePlayerStatus();
      (document.getElementById('audio') as HTMLAudioElement)!.play();
    })
  }

  addProcessListener(): void {
    document.getElementById('audio')!.addEventListener('timeupdate', (event) => {
      const currentTime = (document.getElementById('audio') as HTMLAudioElement)!.currentTime;
      const duration = (document.getElementById('audio') as HTMLAudioElement)!.duration;
      this.currentPrecentage = currentTime / duration * 100;

      if (currentTime == duration) {
        this.changeSong(true);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes)
  }
  ngOnInit(): void {
    this.addProcessListener();
  }

}
