import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {BimModel} from './model/bim-model';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
    modelFilesToBeDownloaded: Array<string> = ["_3D_.svf", "1/mats/sitework.planting.grass.staugustine.bump1.jpg", "1/mats/sitework.planting.grass.staugustine.bump2.jpg", "1/mats/sitework.planting.grass.staugustine2.jpg", "3/mats/sitework.planting.grass.staugustine.bump1.jpg", "3/mats/sitework.planting.grass.staugustine.bump2.jpg", "3/mats/sitework.planting.grass.staugustine1.jpg", "3/mats/sitework.planting.grass.staugustine2.jpg", "3/mats/brick_uniform_running_bump.png", "3/mats/brick_uniform_running_burgundy.png", "3/mats/finishes.gypsum board.painted.white.bump.jpg", "3/mats/finishes.gypsum board.painted.white.jpg", "3/mats/masonry.stone.granite.square.stacked.polished.black.png", "mats/stone/external.dependency/simple_stone_mtl_granite_bump.jpg", "mats/stone/external.dependency/simple_stone_mtl_marble_bump.jpg", "mats/stone/external.dependency/simple_stone_mtl_stonewall_bump.jpg", "3/mats/woods&plastics.finishcarpentry.wood.beech.bump.jpg", "3/mats/woods&plastics.finishcarpentry.wood.beech.jpg", "3/mats/cmu_running_200x400_bump.png", "3/mats/autodesk.wood.plywood.png", "3/mats/finishes.plaster.stucco.fine.white.bump.png", "mats/concrete/external.dependency/simple_concrete_mtl_broomcurved_pattern.jpg", "mats/concrete/external.dependency/simple_concrete_mtl_broomstraight_pattern.jpg", "3/mats/woods & plastics.finish carpentry.wood.teak.png", "mats/metal/external.dependency/simple_metal_mtl_break_pattern.jpg", "mats/metal/external.dependency/simple_metal_mtl_brush_pattern.jpg", "mats/metal/external.dependency/simple_metal_mtl_checkerplate_pattern.jpg", "mats/metal/external.dependency/simple_metal_mtl_diamondplate_pattern.jpg", "3/mats/woods & plastics.finish carpentry.wood.red birch.png", "3/mats/concrete.precast structural concrete.smooth.jpg", "3/mats/woods&plastics.finishcarpentry.wood.spruce.bump.jpg", "3/mats/finishes.ceilings.acoustical tile.exposed grid.2x2.fissured.white.jpg", "3/mats/finishes.plaster.stucco.fine.white.bump.jpg", "3/mats/finishes.plaster.stucco.fine.white.jpg", "3/mats/metals.ornamental metals.chrome.satin.jpg", "3/mats/brick_uniform_soldier_bump.png", "3/mats/brick_uniform_soldier_burgundy.png", "2/mats/thermal - moisture.shingles.asphalt roofing.jpg", "3/mats/plastic_smooth_bump.png", "3/mats/sitework.planting.gravel.loose.bump.png", "3/mats/sitework.planting.gravel.loose.png", "2/mats/tilesquarebump.png", "3/mats/finishes.flooring.carpet.saxony.herringbone.bump.jpg", "3/mats/finishes.flooring.carpet.saxony.herringbone.jpg", "3/mats/metals.ornamental metals.aluminum.brushed.random.png", "3/mats/metals.ornamental metals.plate.mesh.cutout.png", "3/mats/finishes.flooring.tile.square.grey.dark.bump.jpg", "3/mats/finishes.flooring.tile.square.grey.dark.jpg", "3/mats/woods - plastics.finish carpentry.wood.pine.bump.jpg", "3/mats/doors - windows.door hardware.chrome.satin.jpg", "3/mats/metals.metal fabrications.metal stairs.galvanized.png", "3/mats/concrete.blocks.bump.png", "3/mats/concrete.blocks.png", "../../objects_attrs.json.gz", "../../objects_vals.json.gz", "../../objects_ids.json.gz", "../../objects_viewables.json.gz", "../../objects_offs.json.gz", "../../objects_avs.json.gz", "../../objects_rcv_offs.json.gz", "../../objects_rcvs.json.gz", "ProteinMaterials.json.gz", "Materials.json.gz", "CameraDefinitions.bin", "LightDefinitions.bin", "0.pf", "1.pf", "GeometryMetadata.pf", "FragmentList.pack", "CameraList.bin", "LightList.bin", "InstanceTree.bin", "embed:/metadata.json", "Set.bin"];

    title = 'forge-viewer-test';
    isActive = false;
    message: string;
    public bimModels: BimModel[];

    constructor(private router: Router) {
       
    }

    public gotoAssetList(): void {
        this.router.navigate(['/asset-list']);
    }
    ngOnInit() {
    }

    public togglePublicModel() {
        this.bimModels = [];
        this.isActive = !this.isActive;
    }

    public toggleLocalModel() {
        this.bimModels = [];
        this.isActive = !this.isActive;
    }

 
  

}
