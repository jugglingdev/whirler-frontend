import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-carousel-edit',
  templateUrl: './carousel-edit.component.html',
  styleUrls: ['./carousel-edit.component.scss']
})
export class CarouselEditComponent implements OnInit {

  constructor (private route: ActivatedRoute) {}

  ngOnInit(): void {
      this.route.params.subscribe(params => {
        const carouselId = params['id'];
      });
  }
}
