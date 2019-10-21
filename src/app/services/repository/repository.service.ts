// Dependencias
import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// Endpoint
const API_ENDPOINT = 'https://api.github.com';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  // Último lanzamiento
  private latestRelease;
  // Changelog
  public changelog: string;
  // Nombre del lanzamiento
  public releaseName: string;
  // Enlace de descarga
  public downloadLink: string;

  constructor(private httpClient: HttpClient) {
    this.getLatestRelease();
  }

  /**
   * Obtener último lanzamiento en GitHub
   */
  private async getLatestRelease() {
    const response = await this.httpClient.get(`${API_ENDPOINT}/repos/AlexAzumi/az-player/releases/latest`).toPromise();
    if (response) {
      console.log(response);
      this.latestRelease = response;
      this.changelog = this.latestRelease.body;
      this.releaseName = this.latestRelease.name;
      this.downloadLink = this.getDownloadLink(this.latestRelease.assets);
    }
  }

  /**
   * Obtener enlace de descarga
   * @param assets Assets del lanzamiento
   */
  private getDownloadLink(assets: Array<any>): string {
    return assets.filter(item => item.name.includes('.exe'))[0].browser_download_url;
  }
}
