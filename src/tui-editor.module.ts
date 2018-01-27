import { TuiService } from './services/tui-editor.service';
import { TuiComponent } from './components/tui-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        TuiComponent
    ],
    providers: [TuiService],
    exports: [TuiComponent]
})
export class TuiModule { }