import { Component } from '@angular/core';
import { OnInit } from '@angular/core';


@Component({
  selector: 'app-exp',
  templateUrl: './exp.component.html',
  styleUrls: ['./exp.component.scss']
})
export class ExpComponent implements OnInit {

  constructor() { }
  
  kthSrc = "./assets/kthcampus.png"
  EGSrc = "./assets/ELGLogo2.png"
  Elgiganten = "./assets/elgThomas.png"

  ngOnInit() {
  }
  

}
