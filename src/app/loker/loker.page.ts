import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';
import axios from 'axios';

@Component({
  selector: 'app-loker',
  templateUrl: './loker.page.html',
  styleUrls: ['./loker.page.scss'],
})
export class LokerPage implements ViewWillEnter {
  public Loker: any = [];

  public Cabang: any = [];

  public sendLoker: any = [];

  search: any;

  constructor(
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.getLoker();
    this.getCabang();
  }
  ionViewWillEnter(): void {
    try {
      this.getLoker();
      this.getCabang();
    } catch (e) {
      throw new Error(e + 'Method not implemented.');
    }
  }

  async getLoker() {
    try {
      this._apiService.getLoker().subscribe(
        (res: any) => {
          this.Loker = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Loker',
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

  async getCabang() {
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

  async Search() {
    try {
      this._apiService.SearchCabang(this.search).subscribe(
        (res: any) => {
          this.Loker = res;
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

  async editStatus(id_loker, status) {
    try {
      this.alertController
        .create({
          header: 'Warning',
          subHeader: 'merubah status ' + status + ' untuk Loker ini ?',
          buttons: [
            {
              text: 'Batal',
              handler: (data: any) => {
                console.log('dibatalkan', data);
              },
            },
            {
              text: 'Yakin',
              handler: (data: any) => {
                let url = this._apiService.apiUrl() + '/loker/delete/' + id_loker;
                Http.request({
                  method: 'PUT',
                  url: url,
                  headers: { 'Content-Type': 'application/json' },
                  data: {
                    status: status,
                  },
                }).then(
                  (data) => {
                    this.getLoker();
                    this.getCabang();
                    this.alertController.create({
                      header: 'Notifikasi',
                      message: 'Berhasil menghapus data',
                      buttons: ['OK'],
                    });
                  },
                  (err) => {
                    this.alertController
                      .create({
                        header: 'Notifikasi',
                        message: 'Gagal menghapus data',
                        buttons: ['OK'],
                      })
                      .then((res) => {
                        res.present();
                      });
                  }
                );
              },
            },
          ],
        })
        .then((res) => {
          res.present();
        });
    } catch (error) {
      console.log(error);
    }
  }

  tambahLoker() {
    this.router.navigateByUrl('/tambah-loker');
  }

  ngOnInit() {}
}
