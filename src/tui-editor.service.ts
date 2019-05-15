import { Injectable } from '@angular/core';
import Editor from 'tui-editor'
@Injectable()
export class TuiService {
  editor: any;
  constructor() { }
  createEditor(options: any): any {
      this.editor = Editor.factory(Object.assign({
            el: document.querySelector('.ngx-tui-editor'),
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: '300px'
          },
          options));
  
    return this.editor;
  }
  getMarkdown(): string {
    return this.editor.getMarkdown();
  }
  getHtml(): string {
    return this.editor.getHtml();
  }
  getSelectedText(): string {
    return this.editor.getSelectedText();
  }
  insertText(text: string) {
    this.editor.insertText(text)
  }
  setHtml(text: string) {
    this.editor.setHtml(text)
  }
  setMarkdown(text: string) {
    this.editor.setMarkdown(text)
  }
  hide() {
    return this.editor.hide();
  }
  show() {
    return this.editor.show();
  }
}
