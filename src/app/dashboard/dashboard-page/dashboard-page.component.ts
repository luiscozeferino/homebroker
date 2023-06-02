import { Component, OnInit } from '@angular/core';
import Stock from 'src/app/shared/models/stock-model';
import { DashboardService } from '../dashboard.service';
import { async } from 'rxjs';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.css']
})
export class DashboardPageComponent implements OnInit {

  stocks: Stock[] = [];

  constructor(private dashboardService: DashboardService) { }

  //aqui e o inicio
  ngOnInit(): void {
    this.fetchStocks();
  }
   async fetchStocks(): Promise<void> {
    this.stocks = await this.dashboardService.getStock();
    console.log(this.stocks);

   }

}
