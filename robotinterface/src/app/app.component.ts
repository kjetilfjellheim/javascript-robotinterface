import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  selectedCommand: COMMAND;
  commands: Command[];
  server: string = "";
  serverTestedSuccess: boolean = false;
  speedRightTrack: number = 0;
  speedLeftTrack: number = 0;
  speedSynchronized = true;
  dirTime: string = "Time";
  maxRoll: number = 0;
  maxPitch: number = 0;

  constructor() {
    this.commands = [
      { name: 'Forward/Reverse', code: COMMAND.FORWARD_REVERSE },
      { name: 'Turn/Rotate', code: COMMAND.TURN_ROTATE }
    ];
    this.selectedCommand = COMMAND.FORWARD_REVERSE;
  }

  ngOnInit() {
  }

  testServer() {
    this.serverTestedSuccess = true;
  }

  onServerChange() {
    this.serverTestedSuccess = false;
  }

  onCommandChange() {
    if (COMMAND.FORWARD_REVERSE === this.selectedCommand) {
      this.speedSynchronized = true;
      this.speedLeftTrack = this.speedRightTrack;
      this.dirTime = "Time";
    } else {
      this.speedSynchronized = false;
    }
  }

  onSpeedChange(val: number) {
    if (this.speedSynchronized) {
      this.speedLeftTrack = val;
      this.speedRightTrack = val;
    }
  }

}

interface Command {
  name: string,
  code: COMMAND
}

enum COMMAND {
  FORWARD_REVERSE,
  TURN_ROTATE
}
