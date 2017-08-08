import { computedFrom } from 'aurelia-framework';
export class Sponsors {
	constructor() {
		this.message = 'Sponsors';
		setTimeout(() => {
			this.message = 'Changed after binding';
		}, 3000);

		this.mapCollection = new window.Map();
		this.mapCollection.set('a', 'Alpha');
		this.mapCollection.set('b', 'Beta');
		this.mapCollection.set('c', 'Charlie');
		this.mapCollection.set('d', 'Delta');

		this.styleString = 'background: red';
		this.styleObject = { background: 'green' };

		this.person = new Person();
		this.person.firstName = 'Brian';
		this.person.lastName = 'Noyes';
	}

	doSomething(foo) {
		console.log(foo);
	}
}

class Person {
	firstName: 'Brian';
	lastName: 'Noyes';

	@computedFrom('firstName', 'lastName')
	get fullName() {
		return this.firstName + ' ' + this.lastName;
	}
}
