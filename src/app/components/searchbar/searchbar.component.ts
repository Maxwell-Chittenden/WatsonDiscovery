import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Config } from '../../classes/config'

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.css']
})
export class SearchbarComponent implements OnInit {

  config: Config
  str: String

  constructor(private apiService: ApiService) { }

  ngOnInit(): void {
  }

  myTest(): void {
    this.apiService.getData().subscribe((response: Config) => this.config = {
      data: response.data,
    })
    this.str = JSON.stringify(this.config.data)
  }
}
