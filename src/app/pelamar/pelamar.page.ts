import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-pelamar',
  templateUrl: './pelamar.page.html',
  styleUrls: ['./pelamar.page.scss'],
})
export class PelamarPage implements ViewWillEnter {

  public Melamar: any=[];
  public Cabang: any=[];
  search:any;

  constructor(
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
    ) { 
      this.getMelamar()
      this.getCabang()
    }

  ionViewWillEnter(): void {
    this.getMelamar()
    this.getCabang()
  }

  async getMelamar(){
    try {
      this._apiService.getMelamar('Administrasi').subscribe(
        (res: any) => {
          this.Melamar = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Cabang',
              buttons: ['OK'],
            })
            .then((res) => {
              res.present();
            });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async getCabang(){
    try {
      this._apiService.getCabang().subscribe(
        (res: any) => {
          this.Cabang = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Cabang',
              buttons: ['OK'],
            })
            .then((res) => {
              res.present();
            });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  async Search(){
    try {
      this._apiService.SearchMelamar2('Administrasi', this.search).subscribe(
        (res: any) => {
          this.Melamar = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Melamar',
              buttons: ['OK'],
            })
            .then((res) => {
              res.present();
            });
        }
      );
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {
  }

}
