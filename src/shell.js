export class Shell {
	constructor() {
		this.parentprop = 'Hug your parents!';
	}

	configureRouter(config, router) {
		this.router = router;
		config.title = 'Capital Area .NET User Group';
		config.map([
			{
				route: ['', 'events'],
				moduleId: 'events/events',
				name: 'Events',
				title: 'Events',
				nav: true
			},
			{
				route: 'jobs',
				moduleId: 'jobs/jobs',
				name: 'Jobs',
				title: 'Jobs',
				nav: true
			},
			{
				route: 'discussion',
				moduleId: 'discussion/discussion',
				name: 'Discussion',
				title: 'Discussion',
				nav: true
			},
			{
				route: 'eventDetail/:eventId',
				moduleId: 'events/eventDetail',
				name: 'eventDetail'
			}
		]);
	}
}
