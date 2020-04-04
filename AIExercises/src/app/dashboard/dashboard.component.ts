import { Component, OnInit } from '@angular/core';
import { Chart } from 'chart.js';
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  ngOnInit(){

}
  /*testsHomeworksOverTime = new Chart('canvas', {
    type: 'line',
    data: {
      labels: "test1",
      datasets: [
        {
          data: [1,2,3],
          borderColor: "#3cba9f",
          fill: false
        },
        {
          data: [1, 2, 3],
          borderColor: "#ffcc00",
          fill: false
        },
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: true
        }],
        yAxes: [{
          display: true
        }],
      }
    }
  });*/
}
