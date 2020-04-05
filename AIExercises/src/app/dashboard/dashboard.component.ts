import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { Chart } from 'chart.js';
import { StatusModel } from '../_models/StatusModel';
@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {
  Stats: StatusModel = new StatusModel();
  loading: boolean;
  TestsHomeworksOverTime = [];
  GradeDistribution = [];
  AverageTimeSpentPerTest = [];
  SatisfactionOfStudents = [];
  ngAfterViewInit(): void {
  }
  ngOnInit() {
    //this.loading = true;
    setTimeout(() => {
      this.Stats.HomeworkNeedsCorrectionCount = 10;
      this.Stats.StudentsRegisteredCount = 20;
      this.Stats.TestsNeedCorrectionCount = 30;
      this.TestsHomeworksOverTime = new Chart('TestsHomeworksOverTime', {
        type: 'line',
        data: {
          labels: [new Date(2020, 4, 3), new Date(2020, 4, 4), new Date(2020, 4, 5)],
          datasets: [
            {
              label: "Worksheets",
              backgroundColor: "#3e95cd",
              data: [20, 30, 40]
            }, {
              label: "Exercises",
              backgroundColor: "#8e5ea2",
              data: [10, 40, 20]
            }
          ]
        },

        options: {
          scales: {
            xAxes: [{
              type: 'time',
              time: {
                displayFormats: {
                  day: 'MMM YYYY'
                }
              }
            }]
          },
          maintainAspectRatio: false,
          responsive: true,


        }
      });
      this.GradeDistribution = new Chart('GradeDistribution', {
        type: 'bar',
        data: {
          labels: ["1", "2", "3", "4", "5", "6"],
          datasets: [
            {
              label: "Grade 5",
              backgroundColor: "#3e95cd",
              data: [10, 20, 30, 40, 50, 60]
            }, {
              label: "Grade 6",
              backgroundColor: "#8e5ea2",
              data: [20, 10, 15, 30, 20, 30]
            },
            {
              label: "Grade 7",
              backgroundColor: "#36ebcd",
              data: [40, 30, 20, 10, 60, 20]
            },
            {
              label: "Grade 8",
              backgroundColor: "#d9eb36",
              data: [30, 50, 40, 70, 80, 10]
            }, {
              label: "Grade 9",
              backgroundColor: "#eb3636",
              data: [40, 30, 80, 10, 25, 55]
            }
          ]
        },
        options: {
          legend: {
            position: 'right'
          }
        }
      });
      this.AverageTimeSpentPerTest = new Chart('AverageTimeSpentPerTest', {
        type: 'doughnut',
        data: {
          labels: ["Math test", "English test"],
          datasets: [
            {
              data: [100, 120],
              backgroundColor: [
                "#FF6384",
                "#36A2EB"
              ],
            }
          ]
        },
        options: {
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI
        }
      });
      this.SatisfactionOfStudents = new Chart('SatisfactionOfStudents', {
        type: 'doughnut',
        data: {
          labels: ["Corrected", "Pending"],
          datasets: [
            {
              backgroundColor: [
                "#00FF00",
                "#ff1a00",
              ],
              data: [8, 10]
            }
          ]
        },
        options: {
          rotation: 1 * Math.PI,
          circumference: 1 * Math.PI
        }
      });
      this.loading = false;
    }, 300);

  }

}
