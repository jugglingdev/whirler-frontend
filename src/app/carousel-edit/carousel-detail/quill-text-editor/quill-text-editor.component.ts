import { Component, OnInit } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-quill-text-editor',
  templateUrl: './quill-text-editor.component.html',
  styleUrls: ['./quill-text-editor.component.scss']
})
export class QuillTextEditorComponent implements OnInit {
  quill: Quill;

  ngOnInit(): void {
    const toolbar = document.querySelector('#toolbar');
    this.quill = new Quill('#editor', {
      modules: {
        toolbar: toolbar
      }
    });
  }
}
