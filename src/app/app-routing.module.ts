import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  { path: "", redirectTo: "ponies", pathMatch: "full" },
  {
    path: "ponies",
    children: [
      {
        path: "",
        loadChildren: "./ponies/ponies.module#PoniesPageModule"
      },
      {
        path: ":ponyId",
        loadChildren:
          "./ponies/pony-detail/pony-detail.module#PonyDetailPageModule"
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
