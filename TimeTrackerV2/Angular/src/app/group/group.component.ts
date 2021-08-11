import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css']
})

export class GroupComponent implements OnInit {
  public pageTitle = 'TimeTrackerV2 | Group'
  public errMsg = '';
  private item;
  public groupName;

  constructor(
    private http: HttpClient,
    private router: Router,
  ) { 
    this.item = localStorage.getItem('currentGroup');
    console.log("The current group is: " + this.item);
    if (this.item) {
      this.item = JSON.parse(this.item);
      this.groupName = this.item[0];
    }
  }

  ngOnInit(): void {
  }

}
