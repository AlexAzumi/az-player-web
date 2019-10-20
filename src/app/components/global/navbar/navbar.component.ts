// Dependencias
import { Component } from '@angular/core';
// Iconos
import {
  faHome,
  faInfoCircle,
  faWrench,
  faDownload,
  faHeart,
  faStream
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub
} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  // Iconos
  public home = faHome;
  public info = faInfoCircle;
  public changes = faWrench;
  public download = faDownload;
  public heart = faHeart;
  public github = faGithub;
  public collapse = faStream;

  // Barra
  public isCollapsed = true;

  /**
   * Colapsar barra
   */
  public collapseNavbar(): void {
    if (!this.isCollapsed) {
      this.isCollapsed = true;
    }
  }
}
