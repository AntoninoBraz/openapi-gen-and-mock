import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';

async function enableMocking() {
  if (process.env['NODE_ENV'] !== 'development') {
    return;
  }
  // @ts-ignore
  const { worker } = await import('./api/mock/browser');
  // `worker.start()` returns a Promise that resolves
  // once the Service Worker is up and ready to intercept requests.
  return worker.start();
}

function mountApp() {
  bootstrapApplication(AppComponent, appConfig).catch((err) =>
    console.error(err),
  );
}

enableMocking().then(mountApp);
