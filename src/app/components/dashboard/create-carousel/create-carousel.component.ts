import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { CarouselService } from 'src/app/services/carousel.service';
import { Router } from '@angular/router';
import { Carousel } from 'src/app/models/carousel';
import { Tag } from 'src/app/models/tag';
import { TagService } from 'src/app/services/tag.service';

@Component({
  selector: 'app-create-carousel',
  templateUrl: './create-carousel.component.html',
  styleUrls: ['./create-carousel.component.scss']
})
export class CreateCarouselComponent implements OnInit, OnDestroy {
  carouselForm: FormGroup;
  carouselTags: Tag[] = [];
  options: Tag[] = [
    { name: 'One', id: 0 },
    { name: 'Two', id: 0 },
    { name: 'Three', id: 0 }
  ];

  @Input('carousel') carousel: Carousel;
  @Output('closeModal') closeModal = new EventEmitter<void>();
  @Output() carouselsUpdated = new EventEmitter<void>();

  constructor(private carouselService: CarouselService, private router: Router, private tagService: TagService) {}

  ngOnInit(): void {
    document.body.classList.add('no-scroll');

    this.carouselForm = new FormGroup({
      title: new FormControl(this.carousel ? this.carousel.title : null, Validators.required),
      description: new FormControl(this.carousel ? this.carousel.description : null),
      tags: new FormArray([]),
      thumbnail: new FormControl(this.carousel ? this.carousel.thumbnail : null)
    });

    if (this.carousel && this.carousel.tags) {
      this.carouselTags = this.carousel.tags;
      this.carouselTags.forEach(tag => this.addTag(tag.name));
    }

    this.tagService.getTags().subscribe({
      next: (tags) => {
        this.options = tags;
      },
      error: (error) => {
        console.error(error);
      }
    })
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

  onOptionSelected(event: any) {
    if (!this.options.find((option) => option.name == event.option.value)) {
      const newTag = new Tag({ id: 0, name: event.option.value });
      this.tagService.createTag(newTag).subscribe({
        next: (tag) => {
          this.options.push(tag);
        },
        error: (error) => {
          console.error(error);
        }
      })
    }
  }

  onThumbnailChange(event: any) {
    const thumbnailUrl = event.target.value;
    this.carouselForm.get('thumbnail').setValue(thumbnailUrl);
  }

  onEdit() {
    const carousel = new Carousel(this.carouselForm.value);

    if (this.carousel && this.carousel.id) {
      this.carouselService.updateCarousel(carousel).subscribe(() => {
        this.router.navigate(['/edit', this.carousel.id]);
        this.onCloseAndUpdate();
      });
    } else {
      this.carouselService.createCarousel(carousel).subscribe((newCarousel) => {
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
    const carousel = new Carousel(this.carouselForm.value, this.carousel?.id);

    if (this.carousel && this.carousel.id) {
      this.carouselService.updateCarousel(carousel).subscribe(() => {
        this.onCloseAndUpdate();
      });
    } else {
      this.carouselService.createCarousel(carousel).subscribe(() => {
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
