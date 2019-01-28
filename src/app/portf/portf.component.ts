import { Injectable } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Input } from '@angular/core';
import { animate } from '@angular/animations';
import { trigger } from '@angular/animations';
import { transition } from '@angular/animations';
import { style} from '@angular/animations';
import { state} from '@angular/animations';
import { AfterViewInit } from '@angular/core';
import { Component} from '@angular/core';
import { HostBinding } from '@angular/core';
import { OnInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import { MatDialog} from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material';
import { MatDialogConfig } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';
import { filter} from 'rxjs/operators';
import { map} from 'rxjs/operators';
import { pairwise} from 'rxjs/operators';
import { share} from 'rxjs/operators';
import { throttleTime} from 'rxjs/operators';
import { projectDialogComponent } from './projectDialog.component';

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

export interface DialogData {
  project: 'Bachelor Thesis' | 'Aladeen Adventures' | 'Le Bon Nobel' | 'Digital Hourglass' | 'Group Strength Calculator' | 'Information Visualization' | 'Pangaea' | 'Stellar Bodies Space Simulator' |'Small Group Formations';
}
@Injectable()

@Component({
  selector: 'app-portf',
  templateUrl: './portf.component.html',
  styleUrls: ['./portf.component.scss'],
})

export class PortfComponent implements OnInit {

	blur: boolean;

	ngOnInit() {
		this.blur = false;
	}
	constructor(public dialog: MatDialog) {}

	openProjectDialog(title) {

		this.blur = true;
		const dialogRef = this.dialog.open(projectDialogComponent, {
		data: {
			project: title.srcElement.id,
			picture: title.srcElement.currentSrc,
			},
		panelClass: 'custom-dialog-container'
			}
		);
		dialogRef.afterClosed().subscribe(result => {
		console.log('Dialog result: ${result}');
		this.blur = false;	
		});
	}
	
	items:Array<string>= ['','','','','','','','','','','','']
	pictures = [
    {
      id: 1,
      title: 'Bachelor Thesis',
      img: "./assets/kex1.png"
    },
    {
      id: 2,
      title: 'Aladeen Adventures',
      img: "./assets/aladeen.png"
    },
    {
      id: 3,
      title: 'Le Bon Nobel',
      img: "./assets/nobel.png"
    },
	{
      id: 4,
      title: 'Digital Hourglass',
      img: "./assets/dh2400.jpg"
    },
	{
      id: 5,
      title: 'Stellar Bodies Space Simulator',
      img: "./assets/uranus.png"
    },
    {
      id: 6,
      title: 'Information Visualization',
      img: "./assets/infovis2.png"
    },
	{
      id: 7,
      title: 'Pangaea',
      img: "./assets/pangaea.jpg"
    },
    {
      id: 8,
      title: 'Small Group Formations',
      img: "./assets/dm2799.png"
    },
	
	
  ];
}