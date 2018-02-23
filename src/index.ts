import { TuiService } from './tui-editor.service';
import { TuiComponent } from './tui-editor.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
export * from './tui-editor.component';
export * from './tui-editor.service';

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