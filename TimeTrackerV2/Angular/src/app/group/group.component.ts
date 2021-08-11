import { Component, OnInit } from '@angular/core';
import { User } from '../user/model/User';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {

  public errMsg = '';
  private user!: User;
  
  constructor(
    private http: HttpClient,
    ) {}

  ngOnInit(): void {
  }

  public pageTitle = 'TimeTrackerV2 | Group'

  clockIn(): void {
    var item = localStorage.getItem('currentUser');
    
    if (typeof item === 'string')
    {
      this.user = JSON.parse(item) as User
    }
    
    if (this.user !== null)
    {
        let req = {
          timeIn: Date.now(), /// pull date from the HTML
          timeOut: null,
          createdOn: Date.now(),
          userID: this.user.userID,
          description: null /// pull description from the HTML
        };
      
        console.log(req);
        
      if (req !== null)
      {
        this.http.post<any>('http://localhost:8080/clock/', req, {headers: new HttpHeaders({"Access-Control-Allow-Headers": "Content-Type"})}).subscribe({
          next: data => {
            this.errMsg = "";
            console.log("user clocked in: " + this.user.username);
            /// populate a label to inform the user that they successfully clocked in, maybe with the time.
          },
          error: error => {
            this.errMsg = error['error']['message'];
          }
        });
      } 
    }
  }

  clockOut(): void {
    var item = localStorage.getItem('currentUser');
    
    if (typeof item === 'string')
    {
      this.user = JSON.parse(item) as User
    }

    if (this.user !== null )
    {
        let req = {
          timeIn: null, 
          timeOut: Date.now(), /// pull date from the HTML
          createdOn: null,
          userID: this.user.userID,
          description: null /// pull description from the HTML
        };
      

      if (req !== null)
      {
        this.http.post<any>('http://localhost:8080/clock/', req, {headers: new HttpHeaders({"Access-Control-Allow-Headers": "Content-Type"})}).subscribe({
          next: data => {
            this.errMsg = "";
            console.log("user clocked out: " + this.user.username);
            /// populate a label to inform the user that they successfully clocked out, maybe with the time.
          },
          error: error => {
            this.errMsg = error['error']['message'];
          }
        });
      }
    }
  }
}
