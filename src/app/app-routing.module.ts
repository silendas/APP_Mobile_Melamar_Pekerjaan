import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'loker',
    loadChildren: () => import('./loker/loker.module').then( m => m.LokerPageModule)
  },
  {
    path: 'tambah-loker',
    loadChildren: () => import('./tambah-loker/tambah-loker.module').then( m => m.TambahLokerPageModule)
  },
  {
    path: 'ubah-loker/:id',
    loadChildren: () => import('./ubah-loker/ubah-loker.module').then( m => m.UbahLokerPageModule)
  },
  {
    path: 'pelamar',
    loadChildren: () => import('./pelamar/pelamar.module').then( m => m.PelamarPageModule)
  },
  {
    path: 'detail-pelamar/:id_melamar/:id_loker/:id_pelamar',
    loadChildren: () => import('./detail-pelamar/detail-pelamar.module').then( m => m.DetailPelamarPageModule)
  },
  {
    path: 'kualifikasi',
    loadChildren: () => import('./kualifikasi/kualifikasi.module').then( m => m.KualifikasiPageModule)
  },
  {
    path: 'test',
    loadChildren: () => import('./test/test.module').then( m => m.TestPageModule)
  },
  {
    path: 'tambah-test',
    loadChildren: () => import('./tambah-test/tambah-test.module').then( m => m.TambahTestPageModule)
  },
  {
    path: 'ubah-test/:id',
    loadChildren: () => import('./ubah-test/ubah-test.module').then( m => m.UbahTestPageModule)
  },
  {
    path: 'p-test',
    loadChildren: () => import('./p-test/p-test.module').then( m => m.PTestPageModule)
  },
  {
    path: 'p-interview',
    loadChildren: () => import('./p-interview/p-interview.module').then( m => m.PInterviewPageModule)
  },
  {
    path: 'p-lolos',
    loadChildren: () => import('./p-lolos/p-lolos.module').then( m => m.PLolosPageModule)
  },
  {
    path: 'p-gagal',
    loadChildren: () => import('./p-gagal/p-gagal.module').then( m => m.PGagalPageModule)
  },
  {
    path: 'detail-lolos/:id_melamar/:id_loker/:id_pelamar',
    loadChildren: () => import('./detail-lolos/detail-lolos.module').then( m => m.DetailLolosPageModule)
  },
  {
    path: 'detail-gagal/:id_melamar/:id_loker/:id_pelamar',
    loadChildren: () => import('./detail-gagal/detail-gagal.module').then( m => m.DetailGagalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
