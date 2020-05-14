import { Component, OnInit, HostListener, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  // Window Scrolled Status
  public windowScrolled: boolean;

  constructor(@Inject(DOCUMENT) private document: Document) { }

  ngOnInit() {
  }

  /*
* Window scroll host listner function
* @author Bola
* @since 2020-03-17
*/
  @HostListener("window:scroll", [])
  onWindowScroll() {
    if (window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop > 100) {
      this.windowScrolled = true;
    }
    else if (this.windowScrolled && window.pageYOffset || this.document.documentElement.scrollTop || this.document.body.scrollTop < 10) {
      this.windowScrolled = false;
    }
  }
}
