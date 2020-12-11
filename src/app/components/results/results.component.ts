import { Component, OnInit } from '@angular/core';
import { Injectable } from '@angular/core';
import { ApiService } from '../../services/api.service';

@Injectable({
  providedIn: 'root'
})

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css'],
  providers: [ApiService]
})
export class ResultsComponent implements OnInit {
  
  str: String

  constructor(private api: ApiService) { }

  ngOnInit(): void {
  
  }
}
