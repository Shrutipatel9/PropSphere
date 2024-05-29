import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Property } from 'src/app/shared/interface/property';
@Component({
  selector: 'app-properties-gallery',
  templateUrl: './properties-gallery.component.html',
  styleUrls: ['./properties-gallery.component.scss'],
})
export class PropertiesGalleryComponent implements OnInit {
  @Input() images: string[] = [];
  @Input() showEdit = false;
  @Input() property: Property;
  @Output() edit = new EventEmitter<boolean>();

  public imagePresented = 'assets/images/no-image.jpeg';

  constructor() {}

  ngOnInit() {
    this.setImage();
  }

  public getImage(image: string) {
    image = image || 'assets/images/no-image.jpeg';
    return `url(${image})`;
  }

  public setSelected(image: string) {
    this.imagePresented = image || 'assets/images/no-image.jpeg';
  }

  public setImage() {
    this.imagePresented = this.images[0] || 'assets/images/no-image.jpeg';
  }
}
