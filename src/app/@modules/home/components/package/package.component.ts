import { Component, Input } from '@angular/core';
import { Package } from 'src/app/@shared/interfaces/package.interface';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent {
  @Input() package!: Package;
}
