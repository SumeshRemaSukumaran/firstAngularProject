import { Component, OnInit } from '@angular/core';
import { ListhttpService } from '../listhttp.service';

@Component({
  selector: 'app-eva',
  templateUrl: './eva.component.html',
  styleUrls: ['./eva.component.scss']
})
export class EvaComponent implements OnInit {

  brews: object;
  constructor( private _httpSevice: ListhttpService ) { }

  ngOnInit(): void {
    this._httpSevice.firstServiceMethod();
    this._httpSevice.fristApiCall().subscribe(data => {
      this.brews=data
      console.log(this.brews);
    });
  }

}
