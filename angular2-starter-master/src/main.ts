import {bootstrap} from '@angular/platform-browser-dynamic';
import {enableProdMode} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {provideForms, disableDeprecatedForms} from '@angular/forms';

import {AppComponent, environment} from './app/';

import {DummyComputerDetailsService} from './app/services/ComputerDetails/ComputerDetailsFacadeService';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, 
  [
    HTTP_PROVIDERS,
    DummyComputerDetailsService, 
    disableDeprecatedForms(), 
    provideForms()
    ]);
