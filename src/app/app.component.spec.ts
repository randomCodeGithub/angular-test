import { Component } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from 'protractor';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule],
      declarations: [AppComponent],
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it('Test thath a is greater than 5', () => {
    let a = 6;
    expect(a).toBeGreaterThan(8);
  });

  //EQUAL TO

  it(`should have as title 'angularTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('angularTest');
  });

  // TO BE
  it(`title to be 'angularTest'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toBe('angularTest');
  });

  it(`Adds 2 + 2 to equal 4`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.add(2, 2)).not.toBe(5);
  });

  it(`is Null`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getNull()).toBeNull();
  });

  it(`Should be falsy`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.getNull()).toBeFalsy();
  });

  it(`user should be Artur Pavlov`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.createUser()).toEqual({ fName: 'Artur', lName: 'Pavlov' });
  });

  it(`should be under 1600`, () => {
    const load1 = 800;
    const load2 = 700;
    expect(load1 + load2).toBeLessThan(1600);
  });

  it(`should be under 1600`, () => {
    const load1 = 800;
    const load2 = 800;
    expect(load1 + load2).toBeLessThanOrEqual(1600);
  });

  it(`there is no I in team`, () => {
    const load1 = 800;
    const load2 = 800;
    expect('team').not.toMatch(/I/i);
  });

  it(`admin should be in username`, () => {
    let usernames = ['john', 'karen', 'admin'];
    expect(usernames).toContain('admin');
  });

  it(`chunk an array of 10 values with length of 2`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const len = 2;
    const chunkedArr = app.chunkArray(numbers, len);

    expect(chunkedArr).toEqual([
      [1, 2],
      [3, 4],
      [5, 6],
      [7, 8],
      [9, 10],
    ]);
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('.content span').textContent).toContain(
      'angularTest app is running!'
    );
  });

  // it('should have "Alert tag"', () => {
  //   expect(de.query(By.css('h1')).nativeElement.innerText).toBe('Alert Button');
  // });
});
