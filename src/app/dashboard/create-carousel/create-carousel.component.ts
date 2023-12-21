import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarouselService } from 'src/app/shared/carousel.service';
import { Router } from '@angular/router';
import { Carousel } from 'src/app/shared/carousel.model';

@Component({
  selector: 'app-create-carousel',
  templateUrl: './create-carousel.component.html',
  styleUrls: ['./create-carousel.component.scss']
})
export class CreateCarouselComponent implements OnInit, OnDestroy {
  carouselForm: FormGroup;
  @Input('carousel') carousel: Carousel;
  @Output('closeModal') closeModal = new EventEmitter<void>();
  @Output() carouselsUpdated = new EventEmitter<void>();

  constructor(private carouselService: CarouselService, private router: Router) {}

  ngOnInit(): void {
    document.body.classList.add('no-scroll');

    this.carouselForm = new FormGroup({
      title: new FormControl(this.carousel ? this.carousel.title : null, Validators.required),
      description: new FormControl(this.carousel ? this.carousel.description : null),
      tags: new FormArray([]),
      thumbnail: new FormControl(this.carousel ? this.carousel.thumbnail : null)
    });

    if (this.carousel && this.carousel.tags) {
      this.carousel.tags.forEach(tag => this.addTag(tag));
    }
  }

  get tags() {
    return this.carouselForm.get('tags') as FormArray;
  }

  addTag(initialValue: string = '') {
    this.tags.push(new FormControl(initialValue));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  onThumbnailChange(event: any) {
    const thumbnailUrl = event.target.value;
    this.carouselForm.get('thumbnail').setValue(thumbnailUrl);
  }

  onEdit() {
    console.log('Edit Clicked.  Carousel ID: ', this.carousel.id);
    console.log('Form Values: ', this.carouselForm.value);

    if (this.carousel && this.carousel.id) {
      this.carouselService.updateCarousel(this.carousel.id, this.carouselForm.value).subscribe(() => {
        console.log('Update successful.');
        this.router.navigate(['/edit', this.carousel.id]);
        this.onCloseAndUpdate();
      });
    } else {
      this.carouselService.createCarousel(this.carouselForm.value).subscribe((newCarousel) => {
        if (newCarousel && newCarousel.id) {
          this.router.navigate(['/edit', newCarousel.id]);
          this.onCloseAndUpdate();
        } else {
          console.error('Error: Carousel ID is undefined after creation.');
        }
      }, (error) => {
        console.error('Error creating carousel: ', error);
      });
    }
  }

  onSave() {
    if (this.carousel && this.carousel.id) {
      this.carouselService.updateCarousel(this.carousel.id, this.carouselForm.value).subscribe(() => {
        this.onCloseAndUpdate();
      });
    } else {
      this.carouselService.createCarousel(this.carouselForm.value).subscribe(() => {
        this.onCloseAndUpdate();
      });
    }
  }

  onCancel() {
    this.carouselForm.reset();
    this.onCloseModal();
  }

  onCloseAndUpdate() {
    this.carouselsUpdated.emit();
    this.onCloseModal();
  }

  onCloseModal() {
    this.closeModal.emit();
  }

  ngOnDestroy(): void {
    document.body.classList.remove('no-scroll');
  }

}
