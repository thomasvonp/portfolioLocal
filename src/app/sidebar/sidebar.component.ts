import { animate } from '@angular/animations';
import { state } from '@angular/animations';
import { style} from '@angular/animations';
import { transition } from '@angular/animations';
import { trigger } from '@angular/animations';
import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { HostListener } from '@angular/core';
import { fromEvent } from 'rxjs';
import { Inject} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material';
import { MatDialogConfig } from '@angular/material';
import { distinctUntilChanged } from 'rxjs/operators';
import { filter} from 'rxjs/operators';
import { map} from 'rxjs/operators';
import { pairwise} from 'rxjs/operators';
import { share} from 'rxjs/operators';
import { throttleTime} from 'rxjs/operators';
// import { ServerDialogComponent } from './dialog.component';
import { Routes } from '@angular/router';
import { RouterModule } from '@angular/router';
import { DOCUMENT } from '@angular/common';



enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

export interface DialogData {
  animal: string;
  name: string;
}

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
  styles: [
    ':host {position: fixed; top: 0;width: 100%;}'
  ],
	animations:[ 
    trigger('fade',
    [ 
      state('void', style({ opacity : 0})),
      transition(':enter',[ animate(300)]),
      transition(':leave',[ animate(500)]),
    ]
)]
})


export class SidebarComponent implements OnInit {

//////////////// SCROLL ////////////////

  scrollTo(className: string): void {
    const elementList = document.querySelectorAll('#' + className);
    const element = elementList[0] as HTMLElement;
    console.log(element);
    element.scrollIntoView({behavior: 'smooth', block: 'nearest', inline: 'start'});
  }

  constructor(@Inject(DOCUMENT) document) { }

  ngOnInit() {  }

  @HostListener('window:scroll', ['$event'])
  onWindowScroll(e) {
     if (window.pageYOffset > 550 ) {
       let element = document.getElementById('transparent');
		element.classList.add('sticky');
		element.classList.remove('transparent');
     } else {
      let element = document.getElementById('transparent');
		element.classList.remove('sticky'); 
		element.classList.add('transparent');
     }
  }
  
}
