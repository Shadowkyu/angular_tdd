import { Injectable } from '@angular/core';
import { Autoregister, Service, Resource } from 'ngx-jsonapi';
 
export class Author extends Resource {
    public attributes = {
        name: 'default name',
        date_of_birth: ''
    };
}
 
@Injectable()
@Autoregister()
export class AuthorsService extends Service<Author> {
    public resource = Author;
    public type = 'authors';
}
