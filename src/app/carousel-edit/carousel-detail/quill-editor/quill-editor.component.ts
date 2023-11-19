import { AfterViewInit, Component, ElementRef, EventEmitter, HostListener, OnInit, Output, ViewChild } from '@angular/core';
import Quill from 'quill';
import DeltaStatic from 'quill-delta';
import { EditablesDataService } from './editable/editables.service';
import { LocalStorageStateService } from './editable/local-storage-state.service';

@Component({
  selector: 'app-quill-editor',
  templateUrl: './quill-editor.component.html',
  styleUrls: ['./quill-editor.component.scss']
})
export class QuillEditorComponent implements AfterViewInit {
  @Output() editModeExited: EventEmitter<DeltaStatic> = new EventEmitter<DeltaStatic>();
  @ViewChild('toolbar') toolbar: ElementRef;
  @ViewChild('editor') editor: ElementRef;
  // @ViewChild('quillEditorContainerTempHolder') quillEditorContainerTempHolder: ElementRef;

  editables: any;
  editablesList: any;
  activeEditable: any;
  quill: Quill;

  constructor(private editablesService: EditablesDataService, private localStorageStateService: LocalStorageStateService) {
    this.editables = this.localStorageStateService.getState('quill-edit-multiple:editables', this.editablesService.getEditable('editable-1'));
    this.editablesList = Object.values(this.editables);
  }

  ngAfterViewInit(): void {
      this.quill = new Quill(this.editor.nativeElement, {
          theme: 'snow',
          modules: {
              toolbar: this.toolbar.nativeElement
          },
          placeholder: 'Enter text...'
      });
  }

  // @HostListener('document:keydown.escape')
  exitEditorMode() {
    const delta: DeltaStatic = this.getQuillDelta();
    this.editModeExited.emit(delta);
  }

  getQuillDelta(): DeltaStatic {
    return this.quill.getContents();
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
