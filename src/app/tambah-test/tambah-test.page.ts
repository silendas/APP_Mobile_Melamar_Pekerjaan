import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ViewWillLeave } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-tambah-test',
  templateUrl: './tambah-test.page.html',
  styleUrls: ['./tambah-test.page.scss'],
})
export class TambahTestPage implements ViewWillLeave {

  public Posisi: any=[];
  pertanyaan:any;
  p_a:any;
  p_b:any;
  p_c:any;
  jwbn:any;
  posisi:any;

  constructor(
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { 
    this.getPosisi();
  }
  ionViewWillLeave(): void {
    this.getPosisi();
  }

  async getPosisi(){
    try {
      this._apiService.getPosisi().subscribe(
        (res: any) => {
          this.Posisi = res;
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

  async tambahTest() {
    try {
      let url = this._apiService.apiUrl() + '/test/post';
      Http.request({
        method: "POST",
        url: url,
        headers: { 'Content-Type': 'application/json' },
        data: {
          pertanyaan: this.pertanyaan,
          a: this.p_a,
          b: this.p_b,
          c: this.p_c,
          jawaban: this.jwbn,
          posisi: this.posisi,
        },
      }).then(($data)=>{
        this.posisi ='';
        this.pertanyaan ='';
        this.p_a ='';
        this.p_b ='';
        this.p_c ='';
        this.jwbn ='';
        this.alertController.create({
          header: "Notifikasi",
          message: "Data berhasil ditambahkan",
          buttons: ['OK'],
        }).then(res=>{
          res.present();
        });
        this.router.navigateByUrl('/test');
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

  ngOnInit() {
  }

}
