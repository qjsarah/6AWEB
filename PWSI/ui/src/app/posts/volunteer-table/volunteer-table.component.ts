import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-volunteer-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './volunteer-table.component.html',
  styleUrl: './volunteer-table.component.css'
})
export class VolunteerTableComponent {
  readonly volunteersAPIUrl = "http://localhost:5038/volunteers/";
  volunteers: any = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.refreshVolunteers(); // Call on initialization
  }

  refreshVolunteers() {
    this.http.get(this.volunteersAPIUrl + 'GetVolunteers').subscribe(data => {
      console.log("Volunteers:", data); // Debugging log
      this.volunteers = data;
    }, error => {
      console.error("Error fetching volunteers:", error);
    });
  }

  deleteVolunteer(id: string) {
    this.http.delete(this.volunteersAPIUrl + 'DeleteVolunteers?id=' + id).subscribe((data: any) => {
      alert(data.message);
      this.refreshVolunteers();
    }, error => {
      alert("Failed to delete volunteer.");
      console.error(error);
    });
  }
}
