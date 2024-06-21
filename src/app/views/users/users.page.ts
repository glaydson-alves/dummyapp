import { Component, OnInit } from '@angular/core';
import { IUser } from 'src/app/interfaces/Iuser';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {

  users: Array<IUser> = []

  constructor( private userService: UserService) { }

  ngOnInit() {
    this.loadUsers()
  }
  loadUsers(){
    return this.userService.loadingUsers().subscribe((res: any) =>{
      const { users } = res
      this.users = users
      console.log(this.users)
    })
  }
}
