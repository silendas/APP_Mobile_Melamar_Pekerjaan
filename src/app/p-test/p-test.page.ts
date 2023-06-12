import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-p-test',
  templateUrl: './p-test.page.html',
  styleUrls: ['./p-test.page.scss'],
})
export class PTestPage implements ViewWillEnter {
  public Melamar: any = [];
  public Cabang: any = [];
  search: any;

  constructor(
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.getMelamar();
    this.getCabang();
  }

  ionViewWillEnter(): void {
    this.getMelamar();
    this.getCabang();
  }

  async getMelamar() {
    try {
      this._apiService.getMelamar('Test').subscribe(
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
      this._apiService.SearchMelamar2('Test', this.search).subscribe(
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

  async editKualifikasi(kualifikasi, id_melamar) {
    try {
      this.alertController
        .create({
          header: 'Warning',
          subHeader: 'merubah status ' + kualifikasi + ' untuk Pelamar ini ?',
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
                let url = this._apiService.apiUrl() + '/melamar/kualifikasi/' + id_melamar;
                Http.request({
                  method: 'PUT',
                  url: url,
                  headers: { 'Content-Type': 'application/json' },
                  data: {
                    kualifikasi: kualifikasi,
                  },
                }).then(
                  (data) => {
                    this.alertController.create({
                      header: 'Notifikasi',
                      message: 'Berhasil mengubah data',
                      buttons: ['OK'],
                    });
                    this.getMelamar();
                  },
                  (err) => {
                    this.alertController
                      .create({
                        header: 'Notifikasi',
                        message: 'Gagal mengubah data',
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

  ngOnInit() {}
}
