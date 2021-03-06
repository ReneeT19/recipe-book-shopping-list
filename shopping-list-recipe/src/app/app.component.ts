import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth/auth/auth.service';
import { LoggingService } from './logging.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authService: AuthService,
    private loggingService: LoggingService){}
  // loadedFeature = 'recipe';
  ngOnInit() {
    this.authService.autoLogin();
    this.loggingService.printLog('Hello from AppComponent ngOninit');
  }
  // onNavigate(feature: string) {
  //   this.loadedFeature = feature;
  // }
}
