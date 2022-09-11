import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Output() public onDrawerToggle = new EventEmitter<void>();
  
  constructor(private readonly router: Router) { }

  ngOnInit(): void {
  }

  public goToHome(): void {
    this.router.navigate([''])
  }

}
