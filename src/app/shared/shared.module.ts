import { FormsModule } from '@angular/forms';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { LocationPipe } from "./location.pipe";

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        LocationPipe
    ],
    exports: [
        LocationPipe,
        FormsModule
    ]
})
export class SharedModule {

}