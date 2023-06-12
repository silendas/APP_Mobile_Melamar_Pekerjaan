import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-detail-gagal',
  templateUrl: './detail-gagal.page.html',
  styleUrls: ['./detail-gagal.page.scss'],
})
export class DetailGagalPage implements OnInit {
  public NIK: any;
  public Id_Loker: any;
  public Id_Melamar: any;
  public Pelamar: any;
  public Loker: any;
  public Pendidikan: any;
  public Pengalaman: any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {
    this.route.params.subscribe((param: any) => {
      this.Id_Melamar = param.id_melamar;
      this.Id_Loker = param.id_loker;
      this.NIK = param.id_pelamar;
      console.log(this.NIK);
      this.getPelamar(this.NIK);
      this.getLoker(this.Id_Loker);
      this.getPendidikan(this.NIK);
      this.getPengalaman(this.NIK);
    });
  }

  async getLoker(id) {
    try {
      this._apiService.ambilLoker(id).subscribe(
        (res: any) => {
          this.Loker = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Pelamar',
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

  async getPelamar(nik) {
    try {
      this._apiService.getPelamar(nik).subscribe(
        (res: any) => {
          this.Pelamar = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Pelamar',
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

  async getPendidikan(id) {
    try {
      this._apiService.getPendidikan(id).subscribe(
        (res: any) => {
          this.Pendidikan = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Pendidikan',
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

  async getPengalaman(id) {
    try {
      this._apiService.getPengalaman(id).subscribe(
        (res: any) => {
          this.Pengalaman = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Pengalaman',
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

  async editKualifikasi(kualifikasi) {
    try {
      let url =
        this._apiService.apiUrl() + '/melamar/kualifikasi/' + this.Id_Melamar;
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
          this.router.navigateByUrl('/pelamar');
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
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {}
}
