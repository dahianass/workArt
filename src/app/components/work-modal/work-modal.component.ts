import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Work } from '../../data/works';

@Component({
  selector: 'app-work-modal',
  standalone: true,
  templateUrl: './work-modal.component.html',
  styleUrl: './work-modal.component.scss'
})
export class WorkModalComponent {
  @Input({ required: true }) work!: Work;
  @Output() closed = new EventEmitter<void>();
}
