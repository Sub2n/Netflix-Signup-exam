import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  template: `
    <div>
      <h1>MAIN</h1>
    </div>
    <nav>
      <a routerLink="/subin/signup">회원가입</a>
      <a routerLink="/subin/signin">로그인</a>
    </nav>
  `,
  styles: [
    `
      :host {
        display: block;
        width: 100%;
        height: 100vh;
      }
      h1 {
        font-size: 20rem;
        text-align: center;
      }
      nav {
        text-align: center;
      }
      a {
        display: inline-block;
        margin: 0 10px;
        padding: 10px 20px;
        border: 1px solid #181818;
        border-radius: 4px;
      }
    `,
  ],
})
export class MainComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
