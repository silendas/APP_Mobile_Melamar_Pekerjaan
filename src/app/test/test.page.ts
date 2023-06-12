import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';

@Component({
  selector: 'app-test',
  templateUrl: './test.page.html',
  styleUrls: ['./test.page.scss'],
})
export class TestPage implements ViewWillEnter {

  public Test: any=[];
  public Posisi: any=[];
  search:any;

  constructor(
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
    ) { 
      this.getTest()
      this.getPosisi()
    }

  ionViewWillEnter(){
    this.getTest()
    this.getPosisi()
  }

  async getTest(){
    try {
      this._apiService.getTest().subscribe(
        (res: any) => {
          this.Test = res;
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

  async Search(){
    try {
      this._apiService.SearchTest(this.search).subscribe(
        (res: any) => {
          this.Test = res;
        },
        (error: any) => {
          console.log('gagal', error);
          this.alertController
            .create({
              header: 'Notifikasi',
              message: 'Gagal memuat data Test',
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

  async deleteTest(id){
  this.alertController.create({
    header: "Warning",
    subHeader: "Yakin ingin menghapus test ini ?",
    buttons: [
      {
        text: "Batal",
        handler: (data:any)=>{
          console.log('dibatalkan', data);
        }
      },
      {
        text: "Yakin",
        handler: (data:any)=>{
          this._apiService.deleteTest(id).subscribe((res:any)=>{
            console.log('sukses', res);
            this.getTest();
          },(error:any)=>{
            console.log('error', error);
            this.alertController.create({
              header: "Notifikasi",
              message: "Gagal memuat data Test",
              buttons: ["OK"] 
            }).then(res => {
              res.present();
            })
          })
        }
      }
    ]
  }).then(res => {
    res.present();
  })
  }

  ngOnInit() {
  }

}
