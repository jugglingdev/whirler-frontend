import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel-edit',
  templateUrl: './carousel-edit.component.html',
  styleUrls: ['./carousel-edit.component.scss']
})
export class CarouselEditComponent implements OnInit {
  carouselId: string;

  constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        this.carouselId = params['id'];
      });
  }
}
