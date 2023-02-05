import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  speedRightValue: number = 0;
  speedLeftValue: number = 0;
  selectedCommand: Command;
  commands: Command[];
  server: string = "";
  serverTestedSuccess: boolean = false;

  constructor() {
    this.commands = [
      { name: 'Forward', code: 'Forward'},
      { name: 'Reverse', code: 'Reverse'},
      { name: 'Turn', code: 'Turn'},
      { name: 'Rotate', code: 'Rotate'}
    ];
    this.selectedCommand = this.commands[0];
  }

  ngOnInit() {
  }

  testServer() {
    this.serverTestedSuccess = true;
  }

  onServerChange() {
    this.serverTestedSuccess = false;
  }

}

interface Command {
  name: string,
  code: string
}
