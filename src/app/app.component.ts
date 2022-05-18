import { Component } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  login_email:string=""
  login_password:string=""
  email:string=""
  password:string=""

  async login(){
    this.email=this.login_email
    this.password=this.login_password
    alert("Login Success");
  }
  constructor( private storage:Storage) {}

  async ngOnInit(){
    await this.storage.create();
    this.email = await this.storage.get('email');
    this.login_email = await this.storage.get('login_email')
  }

}
