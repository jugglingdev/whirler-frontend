import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CarouselService } from 'src/app/shared/carousel.service';
import { Carousel } from 'src/app/shared/carousel.model';

@Component({
  selector: 'app-create-carousel',
  templateUrl: './create-carousel.component.html',
  styleUrl: './create-carousel.component.scss'
})
export class CreateCarouselComponent implements OnInit {
  carouselForm: FormGroup;
  @Input('showModal') showCreateCarouselModal: boolean;

  constructor(private carouselService: CarouselService) {}

  ngOnInit(): void {
      this.carouselForm = new FormGroup({
        title: new FormControl(null, Validators.required),
        description: new FormControl(null),
        tags: new FormControl(null),
        thumbnail: new FormControl(null)
      });
  }

  onEdit(carousel: Carousel) {
    this.carouselService.createCarousel(carousel);
    this.closeModal();
  }

  onSave(carousel: Carousel) {
    this.carouselService.createCarousel(carousel);
    this.closeModal();
  }

  onCancel() {
    this.carouselForm.reset();
    this.closeModal();
  }

  closeModal() {
    this.showCreateCarouselModal = false;
  }

}
