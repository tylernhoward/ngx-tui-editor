import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as TuiEditor from 'tui-editor'
@Component({
    selector: 'tui-editor',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        '../../node_modules/tui-editor/dist/tui-editor-contents.css',
        '../../node_modules/tui-editor/dist/tui-editor.css',
        './codemirror.css'

    ],
    template: '<div class = "ngx-tui-editor"></div>',
})
export class TuiComponent implements OnInit {
    @Input() options: object;
    editor: TuiEditor;

    public ngOnInit() {
        let editor = new TuiEditor(Object.assign({
            el: document.querySelector('.ngx-tui-editor'),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '300px'
        }, this.options));
    }
    save(event) {
        let textBlob = new Blob([this.editor.getMarkdown()], { type: 'text/plain' });
        let textURI = URL.createObjectURL(textBlob);
    }
}