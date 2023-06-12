import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController, ViewWillLeave } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-ubah-test',
  templateUrl: './ubah-test.page.html',
  styleUrls: ['./ubah-test.page.scss'],
})
export class UbahTestPage implements ViewWillLeave {

  public Posisi: any=[];
  idTest:any;
  pertanyaan:any;
  p_a:any;
  p_b:any;
  p_c:any;
  jwbn:any;
  posisi:any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController
  ) { 
    this.route.params.subscribe((param:any)=>{
      this.idTest = param.id;
      this.getTest(this.idTest)
    })
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

  getTest(idTest){
    this._apiService.ambilTest(idTest).subscribe((res:any)=>{
      let test = res[0];
      this.pertanyaan = test.pertanyaan;
      this.p_a = test.a;
      this.p_b = test.b;
      this.p_c = test.c;
      this.jwbn = test.jawaban;
      this.posisi = test.posisi;
    },(error:any)=>{
      error.log('error',error);
      alert('Gagal ambil data');
    })
  }

  async ubahTest(){
    let url = this._apiService.apiUrl()+"/test/put/" + this.idTest;
    Http.request({
      method: "PUT",
      url: url,
      headers: {"Content-Type":"application/json"},
      data:{
        pertanyaan: this.pertanyaan,
        a: this.p_a,
        b: this.p_b,
        c: this.p_c,
        jawaban: this.jwbn,
        posisi: this.posisi,
      },
    }).then((data)=>{
      this.alertController.create({
        header:"Notifikasi",
        message: "Berhasil mengubah data",
        buttons: ['OK'],
      });
      this.router.navigateByUrl('/test');
    },(err)=>{
      this.alertController.create({
        header:"Notifikasi",
        message: "Gagal mengubah data",
        buttons: ['OK'],
      }).then(res=>{
        res.present();
      });
    })
  }

  ngOnInit() {
  }

}
