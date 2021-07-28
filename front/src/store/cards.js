export default {
    namespaced: true,
    state: {
       cards: [],
    },
    getters: {
        GET_CARDS(state) {
            return state.cards;
        },
		GET_CARDS_LENGHT(state) {
            return state.cards.lenght;
        },
    },
    mutations: {
      	CARDS_MUTATION(state, cards) {
        	state.cards = cards;
       	},
		CARDS_INCREMENT_LIKE(state,element){
			state.cards.find(item => item.id == element.id).like++;
		}
    },
    actions: {
       	async FETCH_CARDS_ACTION({commit}) {
        	try {
				let response = await fetch('http://localhost:3000/posts');
				let responseFile = await response.json();
				commit('CARDS_MUTATION', responseFile);
          	} catch (err) {
            	console.log(err);
          	}
 
       },
	    async CARDS_INCREMENT_LIKE_ACTION({commit, state},element){
			try {

				const url=`http://localhost:3000/posts/${element.id}`
				const response = await fetch(url, {
					method: 'PUT', 
					body: JSON.stringify({ ...element, 'like': element.like+1 }), 
					headers: {
					'Content-Type': 'application/json'
					}
				});
				const json = await response.json();
				commit('CARDS_INCREMENT_LIKE',element);             
		  	} catch (err) {
				console.log(err);
		  	}
	   }
    },
 };