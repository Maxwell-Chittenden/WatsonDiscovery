import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  allData: JSON[]
  length: number = 0
  pageIndex: number = 0
  pageSize: number = 5
  lowValue: number = 0
  highValue: number = this.pageSize

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  getPaginatorData(event) {
    if (event.pageIndex === this.pageIndex + 1) {
      this.lowValue = this.lowValue + this.pageSize
      this.highValue = this.highValue + this.pageSize
    }
    else if (event.pageIndex === this.pageIndex - 1) {
      this.lowValue = this.lowValue - this.pageSize
      this.highValue = this.highValue - this.pageSize
    }
    this.pageIndex = event.pageIndex;
  }

  mySearch(value: String): void {
    this.apiService.apiCall(value).then(response => {
      console.log(response.results)
      this.length = response.results.length
      this.allData = response.results
    })
  }
}
