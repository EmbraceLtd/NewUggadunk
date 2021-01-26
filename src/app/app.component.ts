import {Component, OnInit, ViewChild, ElementRef, AfterViewInit} from '@angular/core';
import {MenuItem} from "primeng/primeng";
import {Menu} from "primeng/components/menu/menu";
import {ActivatedRoute, Router} from "@angular/router";

declare var jQuery :any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, AfterViewInit {

  menuItems: MenuItem[];
  miniMenuItems: MenuItem[];

  @ViewChild('bigMenu') bigMenu : Menu;
  @ViewChild('smallMenu') smallMenu : Menu;

  constructor(private router : Router) {

  }

  ngOnInit() {

    let handleSelected = function(event) {
      let allMenus = jQuery(event.originalEvent.target).closest('ul');
      let allLinks = allMenus.find('.menu-selected');

      allLinks.removeClass("menu-selected");
      let selected = jQuery(event.originalEvent.target).closest('a');
      selected.addClass('menu-selected');
    }

    this.menuItems = [
      {label: 'Mejn Menju', icon: 'fa fa-home', routerLink: ['/mejnmenju'], command: (event) => handleSelected(event)},
      {label: 'Sagan om Älghuds-Bengt', icon: 'fa fa-home', routerLink: ['/moose'], command: (event) => handleSelected(event)},
      {label: 'Embracing Hitlist Archive', icon: 'fa fa-calendar', routerLink: ['/hitlist'], command: (event) => handleSelected(event)},
      {label: 'Uggadunks bugg', icon: 'fa fa-clock-o', routerLink: ['/uggabugg'], command: (event) => handleSelected(event)},
      {label: 'Media', icon: 'fa fa-tasks', routerLink: ['/media'], command: (event) => handleSelected(event)},
    ]

    this.miniMenuItems = [];
    this.menuItems.forEach( (item : MenuItem) => {
      let miniItem = { icon: item.icon, routerLink: item.routerLink }
      this.miniMenuItems.push(miniItem);
    })

  }

  selectInitialMenuItemBasedOnUrl() {
    let path = document.location.pathname;
    let menuItem = this.menuItems.find( (item) => { return item.routerLink[0] == path });
    if (menuItem) {
      let iconToFind = '.' + menuItem.icon.replace('fa ', ''); // make fa fa-home into .fa-home
      let selectedIcon = document.querySelector(`${iconToFind}`);
      jQuery(selectedIcon).closest('li').addClass('menu-selected');
    }
  }

  ngAfterViewInit() {
    this.selectInitialMenuItemBasedOnUrl();
  }



}
