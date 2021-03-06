import { Component, EventEmitter, Input, Output } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { LoggingService } from '../shared/logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent {
  @Input() account: {name: string, status: string};
  @Input() id: number;
  // @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService,
              private accountsService: AccountsService) {}
  
  onSetTo(status: string) {
    //inject service instead of emit and output
    // this.statusChanged.emit({id: this.id, newStatus: status});
    this.accountsService.updateStatus(this.id, status);
    // comment out the line below to practice injecting the loggingservice into accountservice
    // this.loggingService.logStatusChange(status);

    this.accountsService.statusUpdated.emit(status);
  }
}
