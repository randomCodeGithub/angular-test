import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { DebugElement } from '@angular/core';

import { AlertButtonComponent } from './alert-button.component';
import { by, By } from 'protractor';

describe('AlertButtonComponent', () => {
  let component: AlertButtonComponent;
  let fixture: ComponentFixture<AlertButtonComponent>;
  let de: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AlertButtonComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertButtonComponent);
    component = fixture.componentInstance;
    de = fixture.debugElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have a message with `warn`', () => {
    expect(component.content).toContain('warn');
  });

  it('should have a message with `warn`', () => {
    expect(component.content).toBe('warn');
  });

  it('should have a severity greater than 2', () => {
    expect(component.severity).toBeGreaterThan(2);
  });

  // it('should have "Alert tag"', () => {
  //   expect(de.query(By.css('h3')).nativeElement.innerText('Alert Button'));
  // });

  it('should toggle the message boolean', () => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    expect(component.hideContent).toBeFalsy();
  });

  it('should toggle the message boolean asynchronously', fakeAsync(() => {
    expect(component.hideContent).toBeTruthy();
    component.toggle();
    tick(500);
    expect(component.hideContent).toBeFalsy();
  }));
});
