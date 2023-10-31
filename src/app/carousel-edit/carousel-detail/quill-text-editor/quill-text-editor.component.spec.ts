import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuillTextEditorComponent } from './quill-text-editor.component';

describe('QuillTextEditorComponent', () => {
  let component: QuillTextEditorComponent;
  let fixture: ComponentFixture<QuillTextEditorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuillTextEditorComponent]
    });
    fixture = TestBed.createComponent(QuillTextEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
