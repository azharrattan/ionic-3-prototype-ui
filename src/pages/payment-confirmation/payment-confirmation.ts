import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';

/**
 * Generated class for the PaymentConfirmationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-payment-confirmation',
  templateUrl: 'payment-confirmation.html',
})
export class PaymentConfirmationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PaymentConfirmationPage');
  }

  	presentToast() {
		let toast = this.toastCtrl.create({
			message: 'Thank you! Please wait 1-2 working days for us to confirm your payment.',
			duration: 3000,
			position: 'middle'
		});
		toast.present()
		.then(()=>{
			this.navCtrl.push('TabsPage');
		});
  	}

  confirmPayment() {
	this.presentToast();
  }
}
