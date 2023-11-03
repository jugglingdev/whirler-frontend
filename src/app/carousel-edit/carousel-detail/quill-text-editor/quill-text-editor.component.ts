import { Component, ElementRef, Input, OnInit, ViewChild, ɵallowSanitizationBypassAndThrow } from '@angular/core';
import Quill from 'quill';

@Component({
  selector: 'app-quill-text-editor',
  templateUrl: './quill-text-editor.component.html',
  styleUrls: ['./quill-text-editor.component.scss']
})
export class QuillTextEditorComponent implements OnInit {
  @Input('textToolbar') textToolbar: ElementRef;
  quill: Quill;
  // toolbarOptions = [];

  ngOnInit(): void {

    // this.toolbarOptions = [
    //   ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
    //   ['blockquote', 'code-block'],

    //   [{ 'header': 1 }, { 'header': 2 }],               // custom button values
    //   [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    //   [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
    //   [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
    //   [{ 'direction': 'rtl' }],                         // text direction

    //   [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
    //   [{ 'header': [1, 2, 3, 4, 5, 6, false] }],

    //   [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
    //   [{ 'font': [] }],
    //   [{ 'align': [] }],

    //   ['clean']                                         // remove formatting button
    // ];

    this.quill = new Quill('#editor', {
      modules: {
        toolbar: this.textToolbar
      },
      theme: 'snow'
    });
  }
}
