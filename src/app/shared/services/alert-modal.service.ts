import { Injectable } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap';
import { ToastrService } from 'ngx-toastr';
import { Subject } from 'rxjs';
import { ConfirmModalComponent } from '../components/confirm-modal/confirm-modal.component';

@Injectable({
  providedIn: 'root'
})
export class AlertModalService {

  constructor(private toastrService: ToastrService, private modalService: BsModalService) { }

  public showAlertSuccess(message: string): void {
    this.toastrService.success(message, 'Concluído');
  }

  public showAlertDanger(message: string): void {
    this.toastrService.error(message, 'Erro');
  }

  public showAlertWarning(message: string): void {
    this.toastrService.warning(message, 'Alerta');
  }

  public showConfirm(title: string, message: string, confirmTxt?: string, cancelTxt?: string): Subject<boolean> {
    const bsModalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    bsModalRef.content.title = title;
    bsModalRef.content.message = message;

    if (confirmTxt) {
      bsModalRef.content.confirmTxt = confirmTxt;
    }

    if (cancelTxt) {
      bsModalRef.content.cancelTxt = cancelTxt;
    }

    return (bsModalRef.content as ConfirmModalComponent).confirmResult;
  }

}
