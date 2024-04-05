import { AfterViewInit, Component, ElementRef, Input, ViewChild } from '@angular/core';
import Quill from 'quill';
import { EditablesDataService } from './editable/editables.service';
import { LocalStorageStateService } from './editable/local-storage-state.service';
import { QuillEditorService } from '../../../../services/quill-editor.service';
import { CdkDragEnd } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements AfterViewInit {

  @ViewChild('toolbar') toolbar: ElementRef;
  @ViewChild('editor-border') editorBorder: ElementRef;
  @ViewChild('editor') editor: ElementRef;
  // @ViewChild('quillEditorContainerTempHolder') quillEditorContainerTempHolder: ElementRef;

  @Input('currentSlide') currentSlide: ElementRef;
  @Input('mode') mode: string;

  quill: Quill;
  editables: any;
  editablesList: any;
  activeEditable: any;

  constructor(
    private editablesService: EditablesDataService,
    private localStorageStateService: LocalStorageStateService,
    private quillEditorService: QuillEditorService) {
    this.editables = this.localStorageStateService.getState('quill-edit-multiple:editables', this.editablesService.getEditable('editable-1'));
    this.editablesList = Object.values(this.editables);
  }

  ngAfterViewInit(): void {
    this.initializeQuill();
  }

  initializeQuill(): void {
    this.quill = new Quill(this.editor.nativeElement, {
      theme: 'snow',
      modules: {
          toolbar: this.toolbar.nativeElement
      },
      placeholder: 'Enter text...'
    });

    this.quillEditorService.setQuillInstance(this.quill);

    // const savedHtml = '<p>This is my slide content</>';
    // this.quill.clipboard.dangerouslyPasteHTML(savedHtml);
  }

  // @HostListener('document:mousedown', ['$event'])
  // onGlobalClick(event: Event): void {
  //   if (!this.editor.nativeElement.contains(event.target)) {
  //     this.editContentMode = false;
  //     this.dragAndDropMode = true;

  //     const quillEditor = document.querySelector('.ql-container');
  //     quillEditor.classList.add('.drag-and-drop-mode');
  //   }
  // }

  onDragAndDropMode(event: MouseEvent) {
    const cursor = window.getComputedStyle(event.target as Element).cursor;
    if (cursor == 'nwse-resize') return;
    if (event.target !== event.currentTarget) return;
    this.mode = 'dragAndDrop';
    console.log("border-hover");
  }

  onDragEnded(event: CdkDragEnd) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);

    const width = element.offsetWidth;
    const height = element.offsetHeight;
    const x = boundingClientRect.x - parentPosition.left;
    const y = boundingClientRect.y - parentPosition.top;

    this.mode = 'editContent';
    this.quillEditorService.setCurrentQuillContentDimensions(width, height, x, y);
  }

  getPosition(el: any) {
    let x = 0;
    let y = 0;
    while (el && !isNaN(el.offsetLeft) && !isNaN(el.offsetTop)) {
      x += el.offsetLeft - el.scrollLeft;
      y += el.offsetTop - el.scrollTop;
      el = el.offsetParent;
    }
    return { top: y, left: x };
  }

  // setEditableActive(editable: any, activate: boolean): void {
  //     if (activate) {
  //         const quill = this.quill;
  //         const delta = quill.clipboard.convert(editable.content);
  //         quill.setContents(delta, 'silent');
  //         this.activeEditable = editable;
  //         setTimeout(() => {
  //             quill.setSelection({ index: 0, length: quill.getLength() - 1 }, 'api');
  //         });
  //     } else {
  //         this.quillEditorContainerTempHolder.nativeElement.appendChild(this.quillEditorContainer.nativeElement);
  //         this.activeEditable = undefined;
  //     }
  // }

}
