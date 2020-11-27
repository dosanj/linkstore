import { customElement } from '../../utilities/custom-element';
import { BaseComponent } from '../base.comp';
import htmlTemplate from './navbar-template.html';
@customElement('app-navbar')
export class NavbarComponent extends BaseComponent {
  template = htmlTemplate;
}