import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/api.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.scss']
})
export class ContactFormComponent implements OnInit {
  form = {name: '', email: '', subject: '', message: '' };

  constructor(private toast: ToastrService, private apiService: ApiService) {}

  ngOnInit() {
  }

  sendForm() {
    this.apiService.sendForm(this.form).subscribe(
      data => {
        this.form = data;
      },
      error => {
        if(error.status == 500){
          this.toast.error("Reached rate limit, wait 10 minutes.", "Error");
        } else {
          this.toast.error("Check if the email is correct or all required fields are filled.", "Error");
        }
      }
    );
  }
}
