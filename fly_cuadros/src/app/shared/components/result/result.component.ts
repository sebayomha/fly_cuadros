import { Component, Inject, OnInit } from '@angular/core';
import { MAT_SNACK_BAR_DATA } from '@angular/material/snack-bar';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: {message: string, status: 'success' | 'error', url?: string}
  ) {}


  ngOnInit(): void {
  }


}
