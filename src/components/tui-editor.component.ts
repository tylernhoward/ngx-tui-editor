import { TuiService } from './../services/tui-editor.service';
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
    constructor(private editorService: TuiService) { }
    public ngOnInit() {
        this.getEditor();
    }

    async getEditor() {
        this.editor = await this.editorService.createEditor(this.options);
    }
}