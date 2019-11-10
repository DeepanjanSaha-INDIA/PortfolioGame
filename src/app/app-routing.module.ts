import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './component/game-page/game-page.component';
import { LoginPageComponent } from './component/login-page/login-page.component';

const routes: Routes = [
  { 
    path: '', 
    component: LoginPageComponent
  },
  { 
    path: 'game', 
    component: GamePageComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }