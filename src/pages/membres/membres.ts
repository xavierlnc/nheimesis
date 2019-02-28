import { Component } from '@angular/core';

import { H1Page } from '../h1/h1';
import { H2Page } from '../h2/h2';
import { H3Page } from '../h3/h3';
import { H4Page } from '../h4/h4';
import { RechercherPage } from '../rechercher/rechercher';

@Component({
  selector: 'page-membres',
  templateUrl: 'membres.html',
})
export class MembresPage {
  tab1Root = H1Page;
  tab2Root = H2Page;
  tab3Root = H3Page;
  tab4Root = H4Page;
  tab5Root = RechercherPage;
  constructor() {
  }

}
