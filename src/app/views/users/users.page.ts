import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { IUser } from 'src/app/interfaces/Iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: Array<IUser> = []
  public loaded = false;

  // idUser = this.activateRoute.snapshot.paramMap.get(user)

  constructor( private userService: UserService, private router:Router, private route: ActivatedRoute) { 
    this.router.getCurrentNavigation()
  }

  ngOnInit() {
    this.loadUsers()
  }

  loadUsers(){
    this.loaded = true;
    return this.userService.loadingUsers().subscribe((res: any) =>{
      const { users } = res
      this.users = users
      // console.log(this.users)
      this.loaded = false;
    })
  }
  userDetails(){
    alert()
    const navigation: NavigationExtras = {state: { userdetails: this.users }}
    console.log(navigation)
    this.router.navigate([`users/details`], navigation)
  }
}
