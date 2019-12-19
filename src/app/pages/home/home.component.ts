import { Component, OnInit } from '@angular/core';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalComponent } from 'src/app/shared/modal/modal.component';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public modalService: NgbModal)   { }



  ngOnInit() {


  }
  openModal() {
    const modalRef = this.modalService.open(ModalComponent);
    modalRef.componentInstance.name = 'Modal';

  }

}
