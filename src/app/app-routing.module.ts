import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BankruptcyPredictionComponent } from './bankruptcy-prediction/bankruptcy-prediction.component';
import { ProfitPrediictionComponent } from './profit-prediiction/profit-prediiction.component';
import { CalculatorsComponent } from './calculators/calculators.component';
import { BlogComponent } from './blog/blog.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'bankruptcy-predict',
    component: BankruptcyPredictionComponent 
  },
  {
    path:'profit-predict',
    component: ProfitPrediictionComponent 
  },
  {
    path:'calculators',
    component: CalculatorsComponent 
  },
  {
    path:'blog',
    component: BlogComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
