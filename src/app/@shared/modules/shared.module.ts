import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { TopNavigationComponent } from '../components/top-navigation/top-navigation.component';
import { TopBarComponent } from '../components/top-bar/top-bar.component';

const components = [
  HeaderComponent,
  FooterComponent,
  TopBarComponent,
  TopNavigationComponent
];

@NgModule({
  declarations: [...components],
  imports: [CommonModule],
  exports: [...components]
})
export class SharedModule {}
