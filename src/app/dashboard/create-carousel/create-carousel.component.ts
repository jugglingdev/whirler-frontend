import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarouselService } from 'src/app/shared/carousel.service';
import { Carousel } from 'src/app/shared/carousel.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-carousel',
  templateUrl: './create-carousel.component.html',
  styleUrl: './create-carousel.component.scss'
})
export class CreateCarouselComponent implements OnInit {

  carouselForm: FormGroup;
  @Output('closeModal') closeModal = new EventEmitter<void>();
  @Output() carouselsUpdated = new EventEmitter<void>();

  constructor(private carouselService: CarouselService, private router: Router) {}

  ngOnInit(): void {
      this.carouselForm = new FormGroup({
        title: new FormControl(null, Validators.required),
        description: new FormControl(null),
        tags: new FormArray([]),
        thumbnail: new FormControl(null)
      });
  }

  get tags() {
    return this.carouselForm.get('tags') as FormArray;
  }

  addTag() {
    this.tags.push(new FormControl(''));
  }

  removeTag(index: number) {
    this.tags.removeAt(index);
  }

  onThumbnailChange(event: any) {
    const thumbnailUrl = event.target.value;
    this.carouselForm.get('thumbnail').setValue(thumbnailUrl);
  }

  onEdit() {
    this.carouselService.createCarousel(this.carouselForm.value).subscribe(() => {
      this.onCloseModal();
      this.router.navigate(['/edit']);
    });
  }

  onSave() {
    this.carouselService.createCarousel(this.carouselForm.value).subscribe(() => {
      this.onCloseModal();
      this.carouselsUpdated.emit();
    });
  }

  onCancel() {
    this.carouselForm.reset();
    this.onCloseModal();
  }

  onCloseModal() {
    this.closeModal.emit();
  }

}
