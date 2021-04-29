import { Component, OnInit } from '@angular/core';
import { AddsingleService } from './addsingle.service';

@Component({
  selector: 'app-addsingle',
  templateUrl: './addsingle.component.html',
  styleUrls: ['./addsingle.component.scss'],
})

export class AddsingleComponent implements OnInit {
    public single = {
        Name: '',
    }

    constructor (
        private addsingleService: AddsingleService,
    ) { }

    ngOnInit() {
    }
    GpCreate() {
        this.addsingleService.GpCreate(this.single).subscribe(data => {
            this.single.Name = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}