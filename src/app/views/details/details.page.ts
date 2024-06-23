import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {

  user: any = {};

  constructor( private router: Router, private location: Location) {
    // const navigation = this.router.getCurrentNavigation();
    // if (navigation?.extras?.state) {
    //   this.user = navigation.extras.state['user'];
    //   console.log('dados do usuarios recebidos', this.user);
    // } else { console.log('dados não encontrados')}

    const detailsUser = this.router.getCurrentNavigation()?.extras.state as any;
    this.user = detailsUser['user'];

    // const navigation = this.router.getCurrentNavigation();
    // this.user.navigation?.extras.state?.user;
  }

  ngOnInit() {
        // if(!this.user){
    //   this.router.navigate(['users'])
    // }
   ;
  }
  back(): void {
    this.location.back();
  }

}
