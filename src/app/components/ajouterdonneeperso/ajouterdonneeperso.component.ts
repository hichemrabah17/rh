import { Component, OnInit } from '@angular/core';
import { PersoService } from 'src/app/services/perso.service';

@Component({
  selector: 'app-ajouterdonneeperso',
  templateUrl: './ajouterdonneeperso.component.html',
  styleUrls: ['./ajouterdonneeperso.component.css']
})
export class AjouterdonneepersoComponent implements OnInit {

  constructor(private perso:PersoService ) { }
  nom: string = '';
  idDonnee: number = 0;
  dateNaissance: string = '';
  adresse: string = '';
  numeroTelephone: string = '';
  service: string = '';
  departement: string = '';
  poste: string = '';
  situationFamiliale: string = '';
  numeroSecuriteSociale: string = '';
  image: string = '';
  cin: number = 0;
  dateEmbauche: string = '';
  prenom: string = '';

  ngOnInit(): void {
  }
  Envoyer() {
    const fd = {
      idDonnee: this.idDonnee,
      dateNaissance: this.dateNaissance,
      adresse: this.adresse,
      numeroTelephone: this.numeroTelephone,
      service: this.service,
      departement: this.departement,
      poste: this.poste,
      situationFamiliale: this.situationFamiliale,
      numeroSecuriteSociale: this.numeroSecuriteSociale,
      image: this.image,
      cin: this.cin,
      dateEmbauche: this.dateEmbauche,
      prenom: this.prenom,
      nom: this.nom
  };
  
    console.log(fd)
    this.perso.add(fd).subscribe(
      (response) => {
        console.log('Form data added to the database:', response);
        // Optionally, you can perform other actions or show a success message here
      },
      (error) => {
        console.error('Error while adding form data:', error);
        // Optionally, you can show an error message here
      }
    );
  }

}
