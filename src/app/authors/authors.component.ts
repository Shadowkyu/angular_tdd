import { Component } from '@angular/core';
import { AuthorsService, Author } from './authors.service';
import { DocumentCollection } from 'ngx-jsonapi';
 
@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css'],
  providers: [AuthorsService]
})
export class AuthorsComponent {
  public authors: DocumentCollection<Author>;
 
  constructor(authorsService: AuthorsService) {
    authorsService.all({}).subscribe(authors => (this.authors = authors));
  }
}