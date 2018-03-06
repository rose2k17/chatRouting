import { Component } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  private apiUrl = 'https://restcountries.eu/rest/v2/all';
  public countries;

  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getCountries();
  }

  getCountries() {
    this.http.get(this.apiUrl).subscribe(
      // the first argument is a function which runs on success
      data => { this.countries = data},
      // the second argument is a function which runs on error
      err => console.error(err),
      // the third argument is a function which runs on completion
      () => console.log('done loading countries')
    );
  }
}
