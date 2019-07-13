import { Component, OnInit } from "@angular/core";
import { CharacterService } from "./character.service";
import { Pony } from "./pony.model";

@Component({
  selector: "app-ponies",
  templateUrl: "./ponies.page.html",
  styleUrls: ["./ponies.page.scss"]
})
export class PoniesPage implements OnInit {
  ponyArray: Pony[];
  constructor(private characterServices: CharacterService) {}

  ngOnInit() {
    this.ponyArray = this.characterServices.getAllPonies();
  }
}
