import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-tambah-loker',
  templateUrl: './tambah-loker.page.html',
  styleUrls: ['./tambah-loker.page.scss'],
})
export class TambahLokerPage implements OnInit {
  posisi: any;
  cabang: any;
  gaji: any;
  deskripsi: any;

  constructor(
    public router: Router,
    private route: ActivatedRoute,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) {}

  async tambahLoker() {
    try {
      let url = this._apiService.apiUrl() + '/loker/post';
      Http.request({
        method: "POST",
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: {
          posisi: this.posisi,
          cabang: this.cabang,
          deskripsi: this.deskripsi,
          gaji: this.gaji,
        },
      }).then(($data)=>{
        this.posisi ='';
        this.cabang ='';
        this.gaji ='';
        this.deskripsi ='';
        this.alertController.create({
          header: "Notifikasi",
          message: "Data berhasil ditambahkan",
          buttons: ['OK'],
        }).then(res=>{
          res.present();
        });
        this.router.navigateByUrl('/loker');
      }),(error)=>{
        this.alertController.create({
          header: "Notifikasi",
          message: "Gagal menambahkan data",
          buttons: ['OK'],
        }).then(res=>{
          res.present();
        });
      }
    } catch (error) {
      console.log(error);
    }
  }

  ngOnInit() {}
}
