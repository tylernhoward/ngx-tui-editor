import { TuiService } from './tui-editor.service';
import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
@Component({
    selector: 'tui-editor',
    encapsulation: ViewEncapsulation.None,
    styleUrls: [
        './tui-editor.component.scss',
    ],
    template: '<div class = "ngx-tui-editor"></div>',
})
export class TuiComponent implements OnInit {
    @Input() options: object;
    editor: any;
    constructor(private editorService: TuiService) { }
    public ngOnInit() {
        this.getEditor();
    }

    async getEditor() {
        this.editor = await this.editorService.createEditor(this.options);
    }
}