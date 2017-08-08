import {inject} from 'aurelia-framework';
import {DataRepository} from 'services/dataRepository';
import { Router, activationStrategy } from 'aurelia-router';

@inject(DataRepository, Router)
export class Jobs {
	constructor(dataRepository, router) {
    this.dataRepository = dataRepository;
    this.router = router;
	}

	activate(params, routeConfig, navigationInstruction) {
		this.jobs = [];
		this.router = navigationInstruction.router;
		return this.dataRepository.getJobs().then( jobs => {
			this.jobs = jobs; 
		});
	}

	addJob() {
		this.router.navigateToRoute("addJob");
	}

}

	// canActivate(params, routeConfig, navigationInstruction) {
	// 	var promise = new Promise((resolve, reject) => {
	// 		setTimeout(_ => {
	// 			resolve(false);
	// 		},3000);
	// 	});
	// 	return promise;
	// }
