import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlaylistService {

  playList: Array<{ name: string, author: string, src: string }> = [
    {
      name: "神的随波逐流",
      author: "初音未来",
      src: "../../assets/神的随波逐流.mp3"
    },
    {
      name: "【34只】2018～朝你靠近～",
      author: "",
      src: "../../assets/【34只】2018～朝你靠近～.mp3"
    },
    {
      name: "真结局（变调）",
      author: "宅男的人间冒险",
      src: "../../assets/宅男的人间冒险 - 真结局（变调）.mp3"
    },
    {
      name:"メイデー、メイビーネイビー",
      author:"そらこ",
      src:"../../assets/メイデー、メイビーネイビー.mp3"
    }
  ];



  constructor() { }
}
