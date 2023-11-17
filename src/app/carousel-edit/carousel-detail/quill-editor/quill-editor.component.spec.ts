import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillEditorComponent } from './quill-editor.component';

describe('QuillEditorComponent', () => {
  let component: QuillEditorComponent;
  let fixture: ComponentFixture<QuillEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuillEditorComponent]
    });
    fixture = TestBed.createComponent(QuillEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
