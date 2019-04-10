import { Component, Input } from '@angular/core';
@Component({
  selector: 'gmap',
  template: `
    <img 
    src="https://maps.googleapis.com/maps/api/staticmap?center={{city}}&zoom=5&size=200x200&key=AIzaSyBAyMH-A99yD5fHQPz7uzqk8glNJYGEqus" />
`
})
export class GMapComponent {
  @Input() city = 'Rome';
}