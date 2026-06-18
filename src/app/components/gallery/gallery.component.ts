import { Component } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { WORKS, Work } from '../../data/works';
import { WorkModalComponent } from '../work-modal/work-modal.component';

type Filter = 'Todas' | Work['category'];

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgFor, NgIf, WorkModalComponent],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.scss'
})
export class GalleryComponent {
  filters: Filter[] = ['Todas', 'Pintura', 'Cerámica', 'Escultura', 'Digital'];
  activeFilter: Filter = 'Todas';
  selectedWork: Work | null = null;
  works = WORKS;

  get filteredWorks(): Work[] {
    return this.activeFilter === 'Todas' ? this.works : this.works.filter(work => work.category === this.activeFilter);
  }

  setFilter(filter: Filter): void { this.activeFilter = filter; }
  openWork(work: Work): void { this.selectedWork = work; }
  closeModal(): void { this.selectedWork = null; }
}
