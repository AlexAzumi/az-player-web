// Dependencias
import { Component } from '@angular/core';
// Servicios
import { RepositoryService } from '../../services/repository/repository.service';

@Component({
  selector: 'app-download',
  templateUrl: './download.component.html',
  styleUrls: ['../general.styles.scss']
})
export class DownloadComponent {
  constructor(public repositoryService: RepositoryService) { }
}
