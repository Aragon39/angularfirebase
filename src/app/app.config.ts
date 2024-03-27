import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), importProvidersFrom(provideFirebaseApp(() => initializeApp({"projectId":"angular-firebase-app-db85d","appId":"1:98562360162:web:cb41f3f945679f0d39623b","storageBucket":"angular-firebase-app-db85d.appspot.com","apiKey":"AIzaSyD6pqDtFmk4TvP3cGcsYxGXrj493y02Tls","authDomain":"angular-firebase-app-db85d.firebaseapp.com","messagingSenderId":"98562360162"}))), importProvidersFrom(provideAuth(() => getAuth()))]
};
