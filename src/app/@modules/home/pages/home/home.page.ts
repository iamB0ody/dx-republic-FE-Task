import { Component } from '@angular/core';
import { Package } from 'src/app/@shared/interfaces/package.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage {
  packages: Package[] = [];

  constructor() {
    [1, 2, 3].map((p) => this.addPackage());
  }

  addPackage() {
    this.packages.push({
      name: 'luxury',
      photo: 'https://www.shatablee.com/img/luxury.daf88dd6.jpg',
      price: 1260000,
      currency: 'EGP',
      popular: Math.random() < 0.5,
      deliveryDays: Math.floor(Math.random() * 100),
      details: [
        {
          name: 'flooring',
          value: [
            {
              name: 'Receptions & corridors',
              value: 'Engineered Wood',
            },
            {
              name: 'Bedrooms',
              value: 'HDF 8MM CLASS 33',
            },
            {
              name: 'Bathrooms & Kitchens',
              value: 'Ceramic/Porcelain',
            },
          ],
        },
        {
          name: 'walls',
          value: [
            {
              name: 'paint',
              value: 'JOTUN / SCIB',
            },
          ],
        },
      ],
    });
  }
}
