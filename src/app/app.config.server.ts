import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering } from '@angular/platform-server';
import { appConfig } from './app.config';
import {
  HttpClient,
  provideHttpClient,
  withInterceptorsFromDi,
} from '@angular/common/http';
import { BASE_PATH } from '../api/auto-gen/variables';

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(),
    provideHttpClient(withInterceptorsFromDi()),
    /*{ provide: BASE_PATH, useValue: 'http://localhost:3000' },*/
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
