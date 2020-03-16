import { Component, OnInit } from '@angular/core';
import { Asset } from '../model/asset';

@Component({
  selector: 'app-asset-list',
  templateUrl: './asset-list.component.html',
  styleUrls: ['./asset-list.component.scss']
})
export class AssetListComponent implements OnInit {
  private assets: Asset[];

  constructor() { 
    this.assets = [{id: 1, code: "001", name: "Asset 001", bimModels: ["001.svf", "002.svf"]}];
  }

  public getAssets(): Asset[] {
    return this.assets;
  }

  ngOnInit() {
  }

}
