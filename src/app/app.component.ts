import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'App';
  serverElements = [{type: 'server', name: 'TestServer', content: 'Just a test!'}];
  isOdd = false;
  currentNumber = 0;
  loadFeature = 'recipe';

  onServerAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onBlueprintAdded(serverData: {serverName: string, serverContent: string}) {
    this.serverElements.push({
      type: 'blueprint',
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  onChangeFirst(){
    this.serverElements[0].name = 'Changed';
  }

  onDestroyFirst(){
    this.serverElements.splice(0, 1);
  }

  onNumberEmitted(number: number){
    this.currentNumber = number;
    this.isOdd = number % 2 === 0;
  }

  onNavigate(feature: string) {
    this.loadFeature = feature;
  }
}
