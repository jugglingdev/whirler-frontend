import { Component, OnInit } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements OnInit {
  editTextMode = true;
  editImageMode = false;
  quill: Quill;
  toolbarOptions = [];

  ngOnInit(): void {

    if (this.editTextMode) {
      this.toolbarOptions = [
        [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
        [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
        [{ 'font': [] }],

        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
        [{ 'align': [] }],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent

        ['blockquote', 'code-block'],
        [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript

        ['clean']                                         // remove formatting button
      ];
    }

    if (this.editImageMode) {
      this.toolbarOptions = [
        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
        ['blockquote', 'code-block'],
      ]
    }

    this.quill = new Quill('#editor', {
      modules: {
        toolbar: this.toolbarOptions
      },
      theme: 'snow'
    });
  }

}
