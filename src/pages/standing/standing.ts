import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the StandingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-standing',
	templateUrl: 'standing.html',
})
export class StandingPage {
	category : string;
	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.category = 'team';
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad StandingPage');
	}

}
