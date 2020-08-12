# This project is not being maintained. Please fork or see: https://github.com/beeman/ngx-tui for an actively updated library. 🎉

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
<!-- You can now use the editor in any component -->
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

#### Service Functions
The following functions can be called on the TuiService:

| Function | Use | Returns |
| -------- | --- | ------- |
| getMarkdown(editorId?: string) | Gets markdown syntax text from editor | string |
| getHtml(editorId?: string) | Gets html syntax text from editor | string |
| getSelectedText(editorId?: string) | Gets only selected text from editor | string |
| insertText(text: string, editorId?: string) | Inserts plain text into editor | void |
| setHtml(text: string, editorId?: string) | Inserts html text and formats into markdown in editor | void |
| setMarkdown(text: string, editorId?: string) | Inserts markdown text and formats into markdown syntax in editor | void |
| hide(editorId?: string) | Hides the editor pane | void |
| show(editorId?: string) | Shows the editor pane | void |

#### Component Outputs

| Attribute   | Required | Type | Default | Description |
| ----------- | -------- | ---- | ----- | ----------- |
| `loaded` | No | `void` |  | This event will fire when the editor has loaded |
| `onChangeMarkdown` | No | `string` |  | This event will be fired when you done typing and will return the markdown string |
| `onChangeHTML` | No | `string` |  | This event will be fired when you are typing and will return the rendered html string |
| `onChange` | No | `MarkdownData: {html: string, markdown: string}` |  | This event will be fired when you are typing and will return both the html and markdown from the editor |
| `onBlurMarkdown` | No | `string` |  | This event will be fired when the editor is blurred and will return the markdown string |
| `onBlurHTML` | No | `string` |  | This event will be fired when the editor is blurred and will return the rendered html string |
| `onBlur` | No | `string` |  | This event will be fired when the editor is blurred and will return both the html and markdown from the editor |

**Example**

```html
<tui-editor
  [options]="options"
  (loaded)="editorLoaded()"
  (onChange)="onChange($event)"
  (onBlur)="onBlur($event)"
></tui-editor>
```

## Setup with Multiple Instances
You can track the editorService instance by passing in an `editorId` in the options object. When you need to use any of the functions in the `TuiService` you will use the optional `editorId` you passed in with the options input.

### Example
Setting the editor id in the options
```typescript
options : {
            ...
            editorId: 'MyEditorId',
            ...
          },
```

Passing the editorId into the service call

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
    this.editorService.setHtml("<h1>Hello World</h1>", "MyEditorId");
  }
}
```

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

[Tyler Howard](mailto:tylernhoward@gmail.com)
