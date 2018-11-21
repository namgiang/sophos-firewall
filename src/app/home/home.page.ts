import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  items = [
    {
      icon: '',
      title: 'Facebook',
      subTitle: 'Facebook là mạng xã hội với tin tức, chat, video và hình ảnh',
      checked: true
    },
    {
      icon: '',
      title: 'Youtube',
      subTitle: 'Youtube là mạng xã hội video',
      checked: true
    },
    {
      icon: '',
      title: 'Trò chơi',
      subTitle: 'Những trang web trò chơi lớn nhất',
      checked: true
    },
    {
      icon: '',
      title: 'Vũ khí',
      subTitle: '',
      checked: true
    },
    {
      icon: '',
      title: 'Phản động',
      subTitle: '',
      checked: true
    },
    {
      icon: '',
      title: 'Ma tuý',
      subTitle: '',
      checked: true
    },
    {
      icon: '',
      title: 'Bia rượu',
      subTitle: '',
      checked: true
    }
    ,
    {
      icon: '',
      title: 'Nhảm nhí',
      subTitle: '',
      checked: true
    }
    ,
    {
      icon: '',
      title: 'Web người lớn',
      subTitle: '',
      checked: true
    }
    ,
    {
      icon: '',
      title: 'Đồng tính',
      subTitle: '',
      checked: true
    }
  ];

  constructor() {

  }

}
