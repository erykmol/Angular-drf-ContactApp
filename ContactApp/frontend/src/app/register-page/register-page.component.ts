import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.scss']
})
export class RegisterPageComponent implements OnInit {

  registerForm = {name: '', email: '', subject: '', message: '' };

  constructor(private apiService: ApiService) { }

  ngOnInit() {
    // this.regsterForm = this.formBuilder.group({username: '', email: '', password: ''});
  }

}
