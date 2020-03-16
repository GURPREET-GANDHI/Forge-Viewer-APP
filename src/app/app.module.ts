import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AssetListComponent} from './asset-list/asset-list.component';
import {ViewerComponent} from './viewer/viewer.component';

@NgModule({
    declarations: [
        AppComponent,
        AssetListComponent,
        ViewerComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {}
