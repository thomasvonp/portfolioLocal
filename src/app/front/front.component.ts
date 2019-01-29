import { animate } from '@angular/animations';
import { state } from '@angular/animations';
import { style} from '@angular/animations';
import { transition } from '@angular/animations';
import { trigger } from '@angular/animations';
import { AfterViewInit} from '@angular/core';
import { Component} from '@angular/core';
import { HostBinding} from '@angular/core';
import { Input} from '@angular/core';
import { fromEvent } from 'rxjs';
import { Inject} from '@angular/core';
import { MatDialog } from '@angular/material';
import { MatDialogRef } from '@angular/material';
import { MAT_DIALOG_DATA} from '@angular/material';
import { MatDialogConfig } from '@angular/material';

// import { distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators';


@Component({
  selector: 'app-front',
  templateUrl: './front.component.html',
  styleUrls: ['./front.component.scss']
})
export class FrontComponent {
	imageSrc="./assets/thomas.png";

}
