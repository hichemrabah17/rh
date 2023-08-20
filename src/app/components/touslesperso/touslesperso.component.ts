import { Component, OnInit } from '@angular/core';
import { PersoService } from 'src/app/services/perso.service';

@Component({
  selector: 'app-touslesperso',
  templateUrl: './touslesperso.component.html',
  styleUrls: ['./touslesperso.component.css']
})
export class TouslespersoComponent implements OnInit {
  allperso : any
  constructor(private perso:PersoService) { }
  
  ngOnInit(): void {
    this.perso.getall().subscribe(
      (res: any) => {
        this.allperso=res
        console.log(res)
      },
      (err: any) => {
        console.log(err);
      }
    );
  
    
  }

}
