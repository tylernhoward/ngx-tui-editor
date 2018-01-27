# Angular ToastUI Editor

Angular 2+ plugin for tui-editor [tui-editor](https://github.com/nhnent/tui.editor)

## Installation

To install this library, run:

```bash
$ npm install ngx-tui-editor --save
```

## Setup

To install, simply run:

```bash
$ npm install ngx-tui-editor
```

and then from your `AppModule`:

```typescript
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

// Import
import { TuiModule } from 'ngx-tui-editor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,

    // Specify import
    TuiModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

Use in the template like so:

```xml
<!-- You can now use your library component in app.component.html -->
<h1>
  {{title}}
</h1>
<tui-editor [options] = "options" ></tui-editor>
```
You may pass options to the component in the following format
```typescript
options : {
            initialValue: `# Title of Project` ,
            initialEditType: 'markdown',
            previewStyle: 'vertical',
            height: 'auto',
            minHeight: '500px'
          },
```

If you wish to interact with more features of the plugin:

Inject the service in the component that you wish to use the editor.
```typescript
import { TuiService } from 'ngx-tui-editor';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private editorService: TuiService){} 
  setHtml(){
    this.editorService.setHtml("<h1>Hello World</h1>")
  }
}
```
The following functions can be called on the TuiService:

| Function | Use | Returns |
| -------- | --- | ------- |
| getMarkdown( ) | Gets markdown syntax text from editor | string |
| getHtml( ) | Gets html syntax text from editor | string |
| getSelectedText( ) | Gets only selected text from editor | string |
| insertText(text: string) | Inserts plain text into editor | void |
| setHtml(text: string) | Inserts html text and formats into markdown in editor | void |
| setMarkdown(text: string) | Inserts markdown text and formats into markdown syntax in editor | void |
| hide( ) | Hides the editor pane | void |
| show( ) | Shows the editor pane | void |


## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Tyler Howard](mailto:tylernhoward@gmail.com)