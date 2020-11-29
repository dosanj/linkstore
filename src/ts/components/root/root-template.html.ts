import { html } from 'lit-html';

export default ({ setLoggedInUser, loggedInUser }) => html`<div class="root-wrapper flex flex-column">
  <app-navbar></app-navbar>
  ${loggedInUser
    ? html`<app-home-page></app-home-page>`
    : html`<app-landing-page class="flex-1" @setLoggedInUser=${setLoggedInUser}></app-landing-page>`}
</div>`;
