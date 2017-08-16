import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SailsService } from 'angular2-sails';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
   switchView:boolean = true;
  login: FormGroup;
  register:FormGroup;

  constructor(private _fb:FormBuilder, private _sails:SailsService) { }

  ngOnInit() {
     this._sails.connect('http://localhost:1337');
     this._sails.on('message').subscribe(data=>{
       console.log(data);
     })
    //login Model Driven Form
    this.login = this._fb.group({
      email    : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')])],
      password : ['', Validators.compose([Validators.required])]
    });

    //Register Model Driven Form
      this.register = this._fb.group({
      email    : ['', Validators.compose([Validators.required, Validators.pattern('[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}')])],
      passwordGroup : this._fb.group({
          password : ['', Validators.compose([Validators.required])],
          confirmPassword : ['', Validators.compose([Validators.required])]
      }),
      BirthDay: ['', Validators.compose([Validators.required])]
    
    })
  }
  formSubmit(value,valid, form){
    console.log(form);
    if(valid && form==='login'){
      console.log(value, valid);
    }
    if(valid && form==='register'){
      console.log(value,valid);
      this._sails.post('/user/create', value).subscribe((data)=>{
         console.log(data);
      });
    }
  }

  

}
