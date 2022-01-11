import { AuthService } from './../shared/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user1 = {
    provinceId: 2
  }

  user = {
    province: [
      { id: 1, name: "กรุงเทพ" },
      { id: 2, name: "ชลบุรี" },
      { id: 3, name: "เชียงใหม่" },
    ]
  };

  constructor( private authService: AuthService, private router : Router ) { }

  ngOnInit() {
  }

  register(formValue: any) {

    console.log(formValue);
    this.authService.register(formValue).subscribe(
      (response) => {
        if (response.status === 'ok') {
          alert(response.message);
          this.router.navigate(['/']);
        } else {
          alert(response.message);
        }
      }
    )

  }
}
