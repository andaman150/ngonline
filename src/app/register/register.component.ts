import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  register(formValue: any) {

    console.log(formValue);

  }
}
