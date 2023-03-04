import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { SharedModule } from 'src/app/@shared/modules/shared.module';
import { HomePage } from './pages/home/home.page';

@NgModule({
  declarations: [HomePage],
  imports: [CommonModule, HomeRoutingModule, SharedModule],
})
export class HomeModule {}
