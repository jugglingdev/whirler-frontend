import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillImageEditorComponent } from './quill-image-editor.component';

describe('QuillImageEditorComponent', () => {
  let component: QuillImageEditorComponent;
  let fixture: ComponentFixture<QuillImageEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuillImageEditorComponent]
    });
    fixture = TestBed.createComponent(QuillImageEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
