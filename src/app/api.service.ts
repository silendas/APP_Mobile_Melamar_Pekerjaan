import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    public http: HttpClient
  ) { }

  apiUrl(){
    return "http://localhost:1323/api";
  }

  getLoker(){
    return this.http.get(this.apiUrl()+'/loker/get');
  }

  getMelamar(kualifikasi){
    return this.http.get(this.apiUrl()+'/melamar/get/kualifikasi/'+kualifikasi);
  }

  getTest(){
    return this.http.get(this.apiUrl()+'/test/get');
  }

  getPelamar(nik){
    return this.http.get(this.apiUrl()+'/pelamar/get/id/'+nik);
  }

  getPendidikan(id){
    return this.http.get(this.apiUrl()+'/pnddkn/get/'+id);
  }

  getPengalaman(id){
    return this.http.get(this.apiUrl()+'/pnglmn/get/'+id);
  }

  SearchCabang(cabang){
    return this.http.get(this.apiUrl()+'/loker/search/'+cabang);
  }

  SearchTest(posisi){
    return this.http.get(this.apiUrl()+'/test/get/'+posisi);
  }

  SearchMelamar(kualifikasi){
    return this.http.get(this.apiUrl()+'/melamar/get/kualifkasi/'+kualifikasi);
  }

  SearchMelamar2(kualifikasi, cabang){
    return this.http.get(this.apiUrl()+'/melamar/get/search/'+kualifikasi+'/'+cabang);
  }

  getCabang(){
    return this.http.get(this.apiUrl()+'/cabang/get');
  }

  getPosisi(){
    return this.http.get(this.apiUrl()+'/posisi/get');
  }

  ambilLoker(id){
    return this.http.get(this.apiUrl()+'/loker/get/' + id);
  }

  ambilTest(id){
    return this.http.get(this.apiUrl()+'/test/get/id/' + id);
  }

  searchLoker(cabang){
    return this.http.get(this.apiUrl()+'/loker/search/' + cabang);
  }

  deleteTest(id){
    return this.http.delete(this.apiUrl()+'/test/delete/'+id);
  }
}
