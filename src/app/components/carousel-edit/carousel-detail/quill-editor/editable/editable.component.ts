import { Component, ElementRef, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import * as Quill from 'quill';

@Component({
    selector: 'app-editable',
    templateUrl: './editable.component.html',
    styleUrls: ['./editable.component.scss']
})
export class EditableComponent implements OnInit {
    @Input() editable: any;
    @Input() content: string;
    @Output() onChangeActive = new EventEmitter<any>();
    @Input() isActive: boolean;

    @ViewChild('contentEl') contentEl: ElementRef;
    @ViewChild('quillEditorParent') quillEditorParent: ElementRef;
    @ViewChild('quillEditorParent') quillEditorContainer: ElementRef;

    constructor() {}

    ngOnInit(): void {
        this.contentEl.nativeElement.innerHTML = this.content;
        if (this.isActive) {
            this.quillEditorParent.nativeElement.appendChild(this.quillEditorContainer.nativeElement);
        }
        this.quillEditorParent.nativeElement.style.display = this.isActive ? 'block' : 'none';
        this.contentEl.nativeElement.style.display = this.isActive ? 'none' : 'block';

        if (this.isActive) {
            document.addEventListener('keyup', (event) => {
                if (event.code === 'Escape') {
                    this.activate(false);
                }
            });
        }
    }

    activate(active: boolean): void {
        this.onChangeActive.emit({ editable: this.editable, active });
    }
}

