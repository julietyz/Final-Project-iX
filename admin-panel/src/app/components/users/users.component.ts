import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ChartType } from 'chart.js';
import { MultiDataSet, Label } from 'ng2-charts';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

  users: any;


  // Doughnut
  public doughnutChartLabels: Label[] = ['Family Vacation', 'Buisiness', 'Friend Group Getaway', 'Honeymoon'];
  public doughnutChartData: MultiDataSet = [
    [350, 450, 100, 50],
    //[50, 150, 120],
    //[250, 130, 70],
  ];
  public doughnutChartType: ChartType = 'doughnut';


  constructor(
    private userService: UserService
  ) {/* 
    this.users = [
      {
        name: 'Byron',
        lastName: 'de Villiers',
        email: 'byron@mail.com',
        cellPhone: 828073593
      },
      {
        name: 'John',
        lastName: 'Doe',
        email: 'john@mail.com',
        cellPhone: 746541230
      },
      {
        name: 'Jeff',
        lastName: 'Briggs',
        email: 'jess@mail.com',
        cellPhone: 471234567
      }
    ]; */

  }

  ngOnInit() {

    this.userService.getAllUsersBackend().then(res=>{
      this.users = res;
      console.log(res);
    }).catch(err => {console.log(err)})
  }

  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

}
