// Dependencias
import { Component } from '@angular/core';
// Iconos
import {
  faHome,
  faInfoCircle,
  faWrench,
  faDownload,
  faHeart,
  faBars
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

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
  public collapse = faBars;

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

  /**
   * Ir a elemento de menera fluída
   * @param id ID de elemento
   */
  public scrollTo(id: string): boolean {
    const element = document.getElementById(id);
    element.scrollIntoView({ behavior: 'smooth' });
    return false;
  }
}
