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
    /* Use this this to alter HTTP Client Basepath - For whatever reason */
    /*{ provide: BASE_PATH, useValue: 'http://localhost:3000' },*/
  ],
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
