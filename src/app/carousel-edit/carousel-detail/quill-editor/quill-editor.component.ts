import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import Quill from 'quill';
import Delta from 'quill-delta';
import { EditablesDataService } from './editable/editables.service';
import { LocalStorageStateService } from './editable/local-storage-state.service';
import { QuillEditorService } from './quill-editor.service';
import { CdkDragEnd, CdkDragStart } from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements AfterViewInit {
  @Output() editModeExited: EventEmitter<Delta> = new EventEmitter<Delta>();
  @ViewChild('toolbar') toolbar: ElementRef;
  @ViewChild('editor') editor: ElementRef;
  @Input('currentSlide') currentSlide: ElementRef;
  @Input('editContentMode') editContentMode: boolean;
  @Input('dragAndDropMode') dragAndDropMode: boolean;
  // @ViewChild('quillEditorContainerTempHolder') quillEditorContainerTempHolder: ElementRef;

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

    // const savedHtml = '<p>This is my slide content</>';
    // this.quill.clipboard.dangerouslyPasteHTML(savedHtml);
  }



  // onAlignBox (value: string) {
  //   if (value == 'ltr') {
  //     this.editor.nativeElement.style.setProperty('align-self', 'flex-end');
  //     this.editor.nativeElement.style.setProperty('direction', 'ltr');
  //   } else if (value == 'center') {
  //     this.editor.nativeElement.style.setProperty('align-self', 'center');
  //     this.editor.nativeElement.style.setProperty('direction', 'rtl');
  //   } else {
  //     this.editor.nativeElement.style.setProperty('align-self', 'flex-start');
  //     this.editor.nativeElement.style.setProperty('direction', 'rtl');
  //   }
  // }

  // @HostListener('document:keydown.escape')
  exitEditorMode() {
    const delta: Delta = this.getQuillDelta();
    this.editModeExited.emit(delta);
  }

  onDragEnded(event: CdkDragEnd) {
    let element = event.source.getRootElement();
    let boundingClientRect = element.getBoundingClientRect();
    let parentPosition = this.getPosition(element);

    console.log(
      'x: ' + (boundingClientRect.x - parentPosition.left),
      'y: ' + (boundingClientRect.y - parentPosition.top),
      'width: ' + element.offsetWidth,
      'height: ' + element.offsetHeight,
    );
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

  getQuillDelta(): Delta {
    return this.quill.getContents();
  }

  setQuillDelta(delta: Delta): void {
    this.quill.setContents(delta);
  }

  convertHtmlToDelta(html: string): Delta {
    const delta = this.quill.clipboard.convert({ html });
    return delta;
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
