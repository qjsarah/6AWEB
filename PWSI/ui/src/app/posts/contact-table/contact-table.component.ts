import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-table.component.html',
  styleUrl: './contact-table.component.css'
})
export class ContactTableComponent {
  readonly contactsAPIUrl = "http://localhost:5038/contacts/";
  contacts: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.refreshContacts(); // Call on initialization
  }

  refreshContacts() {
    this.http.get(this.contactsAPIUrl + 'GetContacts').subscribe(data => {
      console.log("Contacts:", data); // Debugging log
      this.contacts = data;
    }, error => {
      console.error("Error fetching contacts:", error);
    });
  }

  deleteContact(id: string) {
    this.http.delete(this.contactsAPIUrl + 'DeleteContacts?id=' + id).subscribe((data: any) => {
      alert(data.message);
      this.refreshContacts();
    }, error => {
      alert("Failed to delete the contact");
      console.error(error);
    });
  }
}
