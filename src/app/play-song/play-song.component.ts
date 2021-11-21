import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cancion } from '../cancion/cancion';

@Component({
  selector: 'app-play-song',
  templateUrl: './play-song.component.html',
  styleUrls: ['./play-song.component.css']
})
export class PlaySongComponent implements OnInit {

  @Input() cancion:Cancion | null = null;
  @Input() valuePlayedTime:number | null = null;
  @Input() audio!: HTMLAudioElement;

  @Output() refreshTimePlayed: EventEmitter<any> = new EventEmitter<any>();

  resetTrack = true;

  constructor() {
  }

  ngOnInit() {
    console.log(`value: ${this.valuePlayedTime}`)
  }

  percentToSeconds(event: any){
    let percentPlayed = event.value,
        duration = this.audio.duration,
        totalSeconds =  (percentPlayed * duration) / 100;
    this.refreshTimePlayed.emit(totalSeconds);
  }

}
