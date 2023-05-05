import { NgModule }         from "@angular/core";
import { CounterComponent } from "./components/counter.component";

@NgModule( {
    exports: [
        CounterComponent
    ],
    declarations: [
        CounterComponent
    ]
} )
export class CounterModule {
}

