import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PersoService } from 'src/app/services/perso.service';

@Component({
  selector: 'app-detailsperso',
  templateUrl: './detailsperso.component.html',
  styleUrls: ['./detailsperso.component.css']
})
export class DetailspersoComponent implements OnInit {
  persodetails: any;
  constructor(private route:ActivatedRoute , private perso : PersoService) { }
  id : any 

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.perso.getbyid(this.id).subscribe(
      (res: any) => {
        this.persodetails = res;
        console.log(this.persodetails)
      },
      (err: any) => {
        console.log(err);
      }
    );


  }

}
