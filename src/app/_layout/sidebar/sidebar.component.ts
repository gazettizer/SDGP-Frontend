import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  activeTab = 'home';

  

  // home(activeTab){
  //   console.log("Home")
  //   this.activeTab = activeTab;
  // }

  // search(activeTab){
  //   console.log("Search")
  //   this.activeTab = activeTab;
  // }

  // aboutus(activeTab){
  //   console.log("About")
  //   this.activeTab = activeTab;
  // }

  constructor() {
    let url = window.location.href
    if(url.includes('home')){
      this.activeTab = 'home'
    }else if(url.includes('search')){
      this.activeTab = 'search'
    }else if(url.includes('aboutus')){
      this.activeTab = 'about'
    }
    console.log(url)
   }

  ngOnInit() {
    
  }

}
