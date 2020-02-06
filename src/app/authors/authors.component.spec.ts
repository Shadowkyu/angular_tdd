import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthorsComponent } from './authors.component';
import { By, BrowserModule } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { Author, AuthorsService } from './authors.service';
import { AppRoutingModule } from '../app-routing.module';
import { NgxJsonapiModule } from 'ngx-jsonapi';
import Pretender from 'pretender';
import { request } from 'http';


describe('AuthorsComponent', () => {
  let component: AuthorsComponent;
  let fixture: ComponentFixture<AuthorsComponent>;

  const author = {"meta":{"page":1,"resources_per_page":10,"total_resources":11},"data":[{"type":"authors","id":"1","attributes":{"name":"Raoul Bode I","birthplace":"Micronesia","date_of_birth":"2012-04-05","date_of_death":"1991-05-20"},"relationships":{"photos":{"data":[{"type":"photos","id":"1"},{"type":"photos","id":"2"}]},"books":{"data":[]}},"links":{"self":"\/authors\/1"}},{"type":"authors","id":"2","attributes":{"name":"Dr. Gregg Rath","birthplace":"Saint Pierre and Miquelon","date_of_birth":"1975-03-12","date_of_death":"1992-03-24"},"relationships":{"photos":{"data":[]},"books":{"data":[{"type":"books","id":"5"}]}},"links":{"self":"\/authors\/2"}},{"type":"authors","id":"3","attributes":{"name":"Dr. Kiley Kuvalis Jr.","birthplace":"Isle of Man","date_of_birth":"1995-03-22","date_of_death":"1999-10-18"},"relationships":{"photos":{"data":[{"type":"photos","id":"3"}]},"books":{"data":[{"type":"books","id":"6"}]}},"links":{"self":"\/authors\/3"}},{"type":"authors","id":"4","attributes":{"name":"Mr. Marlon Jacobi","birthplace":"Turkey","date_of_birth":"2003-09-13","date_of_death":"2019-07-05"},"relationships":{"photos":{"data":[{"type":"photos","id":"4"},{"type":"photos","id":"5"}]},"books":{"data":[{"type":"books","id":"16"}]}},"links":{"self":"\/authors\/4"}},{"type":"authors","id":"5","attributes":{"name":"Leonard Simonis","birthplace":"Bouvet Island (Bouvetoya)","date_of_birth":"2001-12-17","date_of_death":"2001-03-21"},"relationships":{"photos":{"data":[]},"books":{"data":[{"type":"books","id":"2"},{"type":"books","id":"21"},{"type":"books","id":"24"}]}},"links":{"self":"\/authors\/5"}},{"type":"authors","id":"6","attributes":{"name":"Kendall Rogahn","birthplace":"Guinea","date_of_birth":"1977-09-21","date_of_death":"1985-02-08"},"relationships":{"photos":{"data":[{"type":"photos","id":"6"}]},"books":{"data":[{"type":"books","id":"42"}]}},"links":{"self":"\/authors\/6"}},{"type":"authors","id":"7","attributes":{"name":"Phoebe DuBuque","birthplace":"Estonia","date_of_birth":"2017-08-18","date_of_death":"2006-08-11"},"relationships":{"photos":{"data":[{"type":"photos","id":"7"},{"type":"photos","id":"8"}]},"books":{"data":[]}},"links":{"self":"\/authors\/7"}},{"type":"authors","id":"8","attributes":{"name":"Miracle Morissette PhD","birthplace":"Mauritius","date_of_birth":"1986-07-15","date_of_death":"2007-11-08"},"relationships":{"photos":{"data":[]},"books":{"data":[{"type":"books","id":"15"},{"type":"books","id":"43"},{"type":"books","id":"50"}]}},"links":{"self":"\/authors\/8"}},{"type":"authors","id":"9","attributes":{"name":"Kiana Tromp","birthplace":"Malta","date_of_birth":"1993-06-01","date_of_death":"1975-02-09"}}]}
  
  const server = new Pretender(function() {
    this.get('//jsonapiplayground.reyesoft.com/v2/authors', request => {
          
    return [200, {"Content-Type": "application/json"}, JSON.stringify(author)] 
    });
  });

  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
    })
    .compileComponents();
  }));
 
  beforeEach(() => {
    
    fixture = TestBed.createComponent(AuthorsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
  
  it('should create', async () => {
    await expect(component).toBeTruthy();
  });
 
  it('show all the authors', async () =>  {
    // await new Promise( (resolve, reject) => {
    //   setTimeout(() => {
    //     resolve()
    //   }, 2000)
    // }) 
    server.handledRequest = function(verb, path, request) {
    fixture.detectChanges();
    const authorElements = fixture.debugElement.queryAll(By.css('.author'));
    expect(authorElements.length).toBeGreaterThan(3);
}})});

  // it('Elements of class jqx-tree-item-li found using getElementsByClassName ', (done) => {

    // this.fixture.whenStable().then(
    //     async () => {
    //         fixture.detectChanges(); // missed
    //         const authorElements = fixture.debugElement.queryAll(By.css('.author')); // use fixture instance to 
    //         await expect(authorElements.length).toBeGreaterThan(3); //passes without issue :)
    //         done();
    //         debugger;
    //     }
    //   );
    // });

  // it('show all the authors', async () =>  {
 
  //   const authorElements = fixture.debugElement.queryAll(By.css('p'));
  //   authorElements.forEach((authorElements:DebugElement, index) => {
  //     expect(authorElements.nativeElement.innerHTML).toContain(authorElements[index].title);
  //   })
  // });
