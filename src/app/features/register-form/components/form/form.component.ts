import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; 
import { comparePassword } from 'src/app/shared/validators/customValidators';
import { Register } from '../../models/user-register-model';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  // Variables de iniciación del Form:
  // userRegisterForm esta nos permite contruir un Formulario
  // submitted control propio para saber si el user clicka en el submit
  public userRegisterForm!: FormGroup;
  public submitted: boolean = false;

  // Es el que va a emitri el Usuario que Registremos
  @Output() public eventRegistered = new EventEmitter<Register>();

  // Inyección de dependencias -> el constructor recibe la clase que queremos usar
  // Es private -> solo lo queremos usar en el ámbito del .TS
  constructor(private formBuilder: FormBuilder) { 
    // Inicializamos nuestro Form Reactive
    this.initForm();
  }

  ngOnInit(): void {}

  public initForm(): void {
    this.userRegisterForm = this.formBuilder.group({
      name:['', [Validators.required, Validators.minLength(1)]],
      email:['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.maxLength(20),Validators.minLength(8)]],
	    passwordRepeat: ['', [Validators.required, Validators.maxLength(20), Validators.minLength(8)]],
      gender:['']
    }, {
      validator: comparePassword('password', 'passwordRepeat')
    })
  }


  public onSubmit(): void {
    this.submitted = true;
    if( this.userRegisterForm.valid) {
      const user: Register = {
        name: this.userRegisterForm.get('name')?.value,
        email: this.userRegisterForm.get('email')?.value,
        password: this.userRegisterForm.get('password')?.value,
        passwordRepeat: this.userRegisterForm.get('passwordRepeat')?.value,
        gender: this.userRegisterForm.get('gender')?.value,
      }
      this.sendUser(user);
      this.submitted ? this.userRegisterForm.reset() : '';
      this.submitted = !this.submitted;
    }
  }

  public sendUser(user: Register): void {
    this.eventRegistered.emit(user);
  }

}
