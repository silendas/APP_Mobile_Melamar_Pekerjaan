import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController, LoadingController } from '@ionic/angular';
import { ApiService } from '../api.service';
import { Http } from '@capacitor-community/http';

@Component({
  selector: 'app-ubah-loker',
  templateUrl: './ubah-loker.page.html',
  styleUrls: ['./ubah-loker.page.scss'],
})
export class UbahLokerPage implements OnInit {

  idloker:any;
  posisi: any;
  cabang: any;
  gaji: any;
  deskripsi: any;
  status:any;

  constructor(
    private route: ActivatedRoute,
    public router: Router,
    public _apiService: ApiService,
    private alertController: AlertController,
    public loadingController: LoadingController,
  ) { 
    this.route.params.subscribe((param:any)=>{
      this.idloker = param.id;
      this.getLoker(this.idloker)
    })
  }

  ngOnInit() {
  }

  getLoker(idloker){
    this._apiService.ambilLoker(idloker).subscribe((res:any)=>{
      let loker = res[0];
      this.posisi = loker.posisi;
      this.cabang = loker.cabang;
      this.gaji = loker.gaji;
      this.status = loker.status;
      this.deskripsi = loker.deskripsi;
    },(error:any)=>{
      error.log('error',error);
      alert('Gagal ambil data');
    })
  }

  async editLoker(){
    let url = this._apiService.apiUrl()+"/loker/put/" + this.idloker;
    Http.request({
      method: "PUT",
      url: url,
      headers: {"Content-Type":"application/json"},
      data:{
        posisi: this.posisi,
        cabang: this.cabang,
        deskripsi: this.deskripsi,
        gaji: this.gaji,
        status: this.status,
      },
    }).then((data)=>{
      this.alertController.create({
        header:"Notifikasi",
        message: "Berhasil mengubah data",
        buttons: ['OK'],
      });
      this.router.navigateByUrl('/loker');
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

}
