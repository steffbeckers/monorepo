import { Component } from '@angular/core';
import { LocalizationModule } from '@abp/ng.core';

@Component({
  imports: [LocalizationModule],
  selector: 'sb-contacts',
  standalone: true,
  styleUrl: './contacts.component.scss',
  templateUrl: './contacts.component.html',
})
export class ContactsComponent {}