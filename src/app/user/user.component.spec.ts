import {
  HttpClientTestingModule,
  HttpTestingController
} from "@angular/common/http/testing";
import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import { UserComponent } from "./user.component";
import { UserService } from "./user.service";

describe("UserComponent", () => {
  let component: UserComponent;
  let fixture: ComponentFixture<UserComponent>;
  let userService: UserService;

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientTestingModule],
        declarations: [UserComponent],
        providers: [UserService]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(UserComponent);
    component = fixture.componentInstance;
    userService = TestBed.inject(UserService);

    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
  it("should call getUsers() on click of getUserts button", () => {
    let getUsersBtn = fixture.debugElement.nativeElement.querySelector(
      "button"
    );
    let headerName = fixture.debugElement.nativeElement.querySelector("h4");
    let span = Array.from(fixture.debugElement.nativeElement.querySelectorAll('span')).map(
      ({textContent}) => textContent);
    getUsersBtn.click();
    expect(component.getUsers).toHaveBeenCalled();
    expect(headerName).toContain('John Placeholder');
    expect(span).toContain('john.placeholder@fakemail.com')
    expect(span).toContain('03/16/2021');
    expect(span).toContain('unconfirmed')
  });
});
