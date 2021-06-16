const app = {
	data(){
		return {
			firstName: '',
			lastName: '',
			email: '',
			picture: '',
			
		}
	},
	methods: {
		async getUser(){
			const res = await fetch('https://randomuser.me/api');
			const {results} = await res.json();

			this.firstName = results[0].name.first;
			this.lastName = results[0].name.last;
			this.email = results[0].email;
			this.picture = results[0].picture.large;
		}
	},
	mounted() {
		this.getUser();
}
};

Vue.createApp(app).mount("#app");