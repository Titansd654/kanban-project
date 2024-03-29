import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-column-content',
  templateUrl: './column-content.component.html',
  styleUrls: ['./column-content.component.css']
})
export class ColumnContentComponent {
  
  @Input() title: string = '';
  @Input() color: string = '';

  cardsContent = [
    {
      title: 'Build UI for onboarding flow',
      content: '0 of 3 subtasks',
    },
    {
      title: 'Build UI for search',
      content: '0 of 3 subtasks',
    },
    {
      title: 'Build settings UI',
      content: '0 of 2 subtasks',
    },
    {
      title: 'QA and test all major user journeys',
      content: '0 of 3 subtasks',
    },
  ];
}
