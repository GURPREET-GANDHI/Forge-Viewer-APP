import {Component, OnDestroy, OnInit, Input, ViewChild} from '@angular/core';
import {BimModel} from '../model/bim-model';

declare const Autodesk;

@Component({
    selector: 'app-viewer',
    templateUrl: './viewer.component.html',
    styleUrls: ['./viewer.component.scss']
})
export class ViewerComponent implements OnInit, OnDestroy {

    public viewer;
    public options;
    @Input()
    public models: BimModel[];

    @ViewChild('viewer')
    public viewerContainer: any;

    constructor() {}

    ngOnInit() {
       // this.httpdService.startServer();
        console.log('viewer ngOnInit');
        this.options = {
            env: 'Local',
            useADP: false,
            language: 'en',
        };

        Autodesk.Viewing.Initializer(this.options, () => {
            this.onEnvInitialized();
        });
    }


    public onEnvInitialized() {
        this.viewer = new Autodesk.Viewing.Private.GuiViewer3D(this.viewerContainer.nativeElement, {});
        this.viewer.initialize();

        this.models.forEach(bimModel => {
            this.viewer.loadModel(decodeURI(bimModel.url), {globalOffset: {x: 0, y: 0, z: 0}, modelNameOverride: bimModel.name}, () => {
            }, (aErrorCode) => {});
        });
    }

    ngOnDestroy() {
        this.viewer.finish();
        this.viewer = null;
        this.options = null;
        //this.httpdService.stopServer();
    }

}
