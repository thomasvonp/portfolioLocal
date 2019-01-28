import { animate } from '@angular/animations';
import { trigger } from '@angular/animations';
import { transition } from '@angular/animations';
import { style} from '@angular/animations';
import { state} from '@angular/animations';
import { OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Component} from '@angular/core';
import { AfterViewInit} from '@angular/core';
import { fromEvent } from 'rxjs';
import { MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material';
import { MatDialogConfig } from '@angular/material';
import { FormControl } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'dialog-project',
  templateUrl: './projectDialog.html',
  styleUrls: ['./projectDialog.component.scss']
  //styles: ['mail {display: flex;  flex-direction: column;} mail > * { width:100%; } ']
})

export class projectDialogComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<projectDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data) { }

	kex2 = './assets/kex2.png'
	aladeen2 = './assets/aladeen2.png'
	dh24001 = './assets/dh24001.jpg'
	infovis1 = './assets/image1.png'
	infovis2 = './assets/image2.png'
	uranus = "./assets/uranus.png"
	earth = "./assets/earthmars.png"
	group = "./assets/dm2799.png"
	generator = "./assets/generator.png"
  ngOnInit() {  }
  
  
  
}


