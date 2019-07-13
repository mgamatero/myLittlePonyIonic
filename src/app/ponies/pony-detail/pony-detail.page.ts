import { Component, OnInit } from "@angular/core";
import { CharacterService } from "../character.service";
import { Pony } from "../pony.model";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-pony-detail",
  templateUrl: "./pony-detail.page.html",
  styleUrls: ["./pony-detail.page.scss"]
})
export class PonyDetailPage implements OnInit {
  ponyDetail: Pony;
  constructor(
    private characterService: CharacterService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has("ponyId")) {
        return
      }
      const ponyId = paramMap.get("ponyId");
      this.ponyDetail = this.characterService.findOnePony(ponyId);
    });
  }

  onDeletePony(){
    console.log('Delete '+ this.ponyDetail.id)
    this.characterService.deletePony(this.ponyDetail.id);
    this.router.navigate(['/ponies']);
  }
}
