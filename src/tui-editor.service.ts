import { Injectable } from '@angular/core';
import Editor from 'tui-editor'
@Injectable()
export class TuiService {
  editor: any = {};
  defaultId = 'ngx-editor-default';
  constructor() { }
  createEditor(options: any): any {
    const id = options.editorId || this.defaultId;
    this.editor[id] = Editor.factory(Object.assign({
      el: document.querySelector('.ngx-tui-editor'),
      initialEditType: 'markdown',
      previewStyle: 'vertical',
      height: '300px'
    },
    options));
  
    return this.editor[id];
  }
  getMarkdown(id?: string): string {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].getMarkdown();
    }
    return '';
  }
  getHtml(id?: string): string {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].getHtml();
    }
    return '';
  }
  getSelectedText(id?: string): string {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].getSelectedText();
    }
    return '';
  }
  insertText(text: string, id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      this.editor[id].insertText(text);
    }
  }
  setHtml(text: string, id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      this.editor[id].setHtml(text);
    }
  }
  setMarkdown(text: string, id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      this.editor[id].setMarkdown(text);
    }
  }
  hide(id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].hide();
    }
  }
  show(id?: string) {
    id = id || this.defaultId;
    if (this.editor && this.editor[id]) {
      return this.editor[id].show();
    }
  }
}
