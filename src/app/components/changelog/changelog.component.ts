// Dependencias
import { Component } from '@angular/core';
// Servicios
import { RepositoryService } from '../../services/repository/repository.service';

@Component({
  selector: 'app-changelog',
  templateUrl: './changelog.component.html',
  styleUrls: ['../general.styles.scss']
})
export class ChangelogComponent {
  constructor(public repositoryService: RepositoryService) { }
}
