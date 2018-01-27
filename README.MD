# ngx-tui-editor

## Installation

To install this library, run:

```bash
$ npm install ngx-tui-editor --save
```

## Consuming your library

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
Or leave options blank for default settings

## Development

To generate all `*.js`, `*.d.ts` and `*.metadata.json` files:

```bash
$ npm run build
```

## License

MIT © [Tyler Howard](mailto:tylernhoward@gmail.com)
