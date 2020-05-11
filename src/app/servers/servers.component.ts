import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = 'No server created';
  serverName='';
  serverCreated = false;
  servers = ['Server1', 'Server2'];

  constructor() { 
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000)
  }

  ngOnInit(): void {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
    this.serverCreated = true;
  }

  onUpdateServerName(event: any){
      this.serverName =  event.target.value;
  }
}
