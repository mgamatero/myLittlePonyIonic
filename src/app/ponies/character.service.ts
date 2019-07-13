import { Injectable } from "@angular/core";
import { Pony } from "./pony.model";

@Injectable({
  providedIn: "root"
})
export class CharacterService {
  private character: Pony[] = [
    {
      id: "1",
      name: "Twilight Sparkle",
      imageUrl:
        "https://upload.wikimedia.org/wikipedia/sco/5/5b/Twilight_sparkle.png"
    },
    {
      id: "2",
      name: "Rainbow Dash",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/51q9H3E2uxL._SY355_.jpg"
    },
    {
      id: "3",
      name: "Pinkie Pie",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41mP4KcuQNL._SX425_.jpg"
    },
    {
      id: "4",
      name: "Fluttershy",
      imageUrl:
        "https://i.kym-cdn.com/photos/images/original/001/215/594/21e.gif"
    },
    {
      id: "5",
      name: "Rarity",
      imageUrl:
        "https://pbs.twimg.com/profile_images/607466195025920000/HcpcVSjY.jpg"
    },
    {
      id: "6",
      name: "Applejack",
      imageUrl:
        "https://i.pinimg.com/originals/f9/7a/07/f97a077515ca0c01fc7e8afaa911d636.jpg"
    },
    {
      id: "7",
      name: "Princess Celestia",
      imageUrl: "https://derpicdn.net/img/2018/7/16/1782662/large.png"
    },
    {
      id: "8",
      name: "Princess Luna",
      imageUrl: "https://i.imgur.com/xpsIhxv.png"
    },
    {
      id: "9",
      name: "Spike",
      imageUrl:
        "https://images-na.ssl-images-amazon.com/images/I/41KxgRsZBmL._SY450_.jpg"
    },
    {
      id: "10",
      name: "Derpy Hooves",
      imageUrl: "https://i.imgur.com/WxhfrdS.gif"
    },
    {
      id: "11",
      name: "Apple Bloom",
      imageUrl:
        "https://i.pinimg.com/736x/2d/d8/7e/2dd87e0ac11e6ac236fc14ecc82f1008--apples-party-themes.jpg"
    },
    {
      id: "12",
      name: "Scootaloo",
      imageUrl: "https://media0.giphy.com/media/oFVm4lm06Wy7S/giphy.gif"
    },
    {
      id: "13",
      name: "Sweetie Belle",
      imageUrl:
        "http://1.bp.blogspot.com/-uerNXdYkmBI/VmNKPhBnGoI/AAAAAAAAB7U/FK-XVihN4sI/s1600/AHHHH.gif"
    },
    {
      id: "14",
      name: "Trixie",
      imageUrl:
        "https://vignette.wikia.nocookie.net/mlp/images/8/8c/Noteworthy_ID_S03E05.png/revision/latest?cb=20140409123414"
    },
    {
      id: "15",
      name: "Granny Smith",
      imageUrl: "https://derpicdn.net/img/view/2014/1/11/521349.gif"
    }
  ];

  getAllPonies() {
    return [...this.character];
  }

  findOnePony(ponyId: string) {
    return {
      ...this.character.find(pony => {
        return ponyId === pony.id;
      })
    };
  }

  deletePony(ponyId: string){
    return{
      ...this.character.filter(pony=>{
        return ponyId !== pony.id;
      })
    };
  }


  constructor() {}
}
