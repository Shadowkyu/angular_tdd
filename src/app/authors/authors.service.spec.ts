import { TestBed } from '@angular/core/testing';
import { AuthorsComponent } from './authors.component';
import { AuthorsService } from './authors.service';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
 
import { NgxJsonapiModule } from 'ngx-jsonapi';
import { AppRoutingModule } from '../app-routing.module';
import { AppComponent } from '../app.component';

describe('AuthorsService', () => {
  beforeEach(() => TestBed.configureTestingModule({ 
    declarations: [
      AuthorsComponent
    ],
    imports: [
      BrowserModule,
      AppRoutingModule,
      NgxJsonapiModule.forRoot({
        url: '//jsonapiplayground.reyesoft.com/v2/'
    })
    ],
    providers : [
      AuthorsService
    ],
  }));

  it('should be created', async () => {
    const service: AuthorsService = TestBed.get(AuthorsService);
    await expect(service).toBeTruthy();
  });
});
