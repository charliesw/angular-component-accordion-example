import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
  <div>
    <h2>Angular Accordion Example </h2>

    <accordion>
        <group title="First Group">this is the content</group>
        <group title="Second Group">
          <input type="text" class="form-control" />
          <button>Send</button>
        </group>
        <group [title]="u.label" *ngFor="let u of users">
          <gmap [city]="u.label"></gmap>
          <hr />{{u.lat}} - {{u.lng}}
        </group>
      </accordion>
  </div>
  `,
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  users = [
    { id: 1001, label: 'Roma', lat: 42, lng: 12 },
    { id: 1002, label: 'Copenaghen', lat: 56, lng: 14},
    { id: 1003, label: 'Gibuti', lat: 11, lng: 44}
  ];
}