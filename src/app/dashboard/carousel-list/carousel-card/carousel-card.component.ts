import { Component, Input } from '@angular/core';
import { CarouselCard } from './carousel-card.model';
import { CarouselListService } from '../carousel-list.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel-card.component.html',
  styleUrls: ['./carousel-card.component.scss'],
})
export class CarouselCardComponent {
  @Input() carousel: CarouselCard;

  constructor(private carouselListService: CarouselListService) {}


}
