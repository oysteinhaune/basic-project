import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})

export class ServersComponent implements OnInit {
  allowNewServer = false;
  allowResetUserName = false;
  serverCreated = false;
  serverCreationStatus = 'No server was created!';
  serverName = 'Testserver';
  userName = '';
  serverStatus: string = 'offline';
  serverId = 0;
  servers = ['Testserver', 'Testserver 2'];
  textDetails = false;
  buttonClicks = [];
  buttonClickIndex = 0;

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000)

    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  ngOnInit(): void {
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName)
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
  }

  onResetUserName() {
    this.userName = '';
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

  onUpdateUserName(event: Event) {
    this.userName = (<HTMLInputElement>event.target).value;
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  onDisplayDetails() {
    this.buttonClicks.push(this.buttonClickIndex += 1)
    this.textDetails ? this.textDetails = false: this.textDetails = true;
  }

  getBackgroundColor(buttonClickIndex) {
    return buttonClickIndex >= 5 ? 'blue': 'white';
  }
}
