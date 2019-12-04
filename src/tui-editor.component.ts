import { TuiService } from './tui-editor.service';
import { Component, OnInit, ViewEncapsulation, Input, ViewChild, ElementRef, Output, EventEmitter } from '@angular/core';

export interface MarkdownData {
    html: string;
    markdown: string;
}

@Component({
    selector: 'tui-editor',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './tui-editor.component.scss',
    ],
    template: '<div #editor class = "ngx-tui-editor"></div>',
})
export class TuiComponent implements OnInit {
    @ViewChild('editor')
    editorElement: ElementRef;

    @Input() options: object;
    editor: any;
    events = {
        change: this.loadedEditor.bind(this),
        load: this.loadedEditor.bind(this),
        blur: this.blur.bind(this),
    };

    @Output() loaded: EventEmitter<void> = new EventEmitter<void>();
    @Output() onChangeMarkdown: EventEmitter<string> = new EventEmitter<string>();
    @Output() onChangeHTML: EventEmitter<string> = new EventEmitter<string>();
    @Output() onChange: EventEmitter<MarkdownData> = new EventEmitter<MarkdownData>();
    @Output() onBlurMarkdown: EventEmitter<string> = new EventEmitter<string>();
    @Output() onBlurHTML: EventEmitter<string> = new EventEmitter<string>();
    @Output() onBlur: EventEmitter<MarkdownData> = new EventEmitter<MarkdownData>();

    constructor(private editorService: TuiService) { }
    public ngOnInit() {
        this.getEditor();
    }

    async getEditor() {
        this.editor = await this.editorService.createEditor({
            events: this.events,
            ...this.options,
            el: this.editorElement.nativeElement,
        });
    }

    loadedEditor() {
        this.loaded.emit();
    }

    changed() {
        this.onChangeMarkdown.emit(this.editor.getMarkdown((this.options as any).editorId));
        this.onChangeHTML.emit(this.editor.getHtml((this.options as any).editorId));
        this.onChange.emit({
            html: this.editor.getHtml((this.options as any).editorId),
            markdown: this.editor.getMarkdown((this.options as any).editorId),
        });
    }

    blur() {
        this.onBlurMarkdown.emit(this.editor.getMarkdown((this.options as any).editorId));
        this.onBlurHTML.emit(this.editor.getHtml((this.options as any).editorId));
        this.onBlur.emit({
            html: this.editor.getHtml((this.options as any).editorId),
            markdown: this.editor.getMarkdown((this.options as any).editorId),
        });
    }
}
