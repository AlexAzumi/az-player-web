import { Component, TemplateRef, Input, ViewChild, ElementRef } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-support',
  templateUrl: './support.component.html',
  styleUrls: ['./support.component.scss']
})
export class SupportComponent {
  // Modal
  public modalRef: BsModalRef;

  constructor(private modalService: BsModalService) { }

  @ViewChild('supportModal', { static: false }) supportModal: TemplateRef<any>;

  /**
   * Abrir modal de ayuda
   * @param template Referencia de template de Angular
   */
  public openSupport(): void {
    this.modalRef = this.modalService.show(this.supportModal);
  }
}
