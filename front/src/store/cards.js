export default {
    namespaced: true,
    state: {
       cards: [],
    },
    getters: {
        GET_CARDS(state) {
            return state.cards;
        },
    },
    mutations: {
      	CARDS_MUTATION(state, cards) {
        	state.cards = cards;
       	},
		CARDS_INCREMENT_LIKE(state,element){
			state.cards.find(item=>item.id==element.id).like++;
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
	   CARDS_INCREMENT_LIKE_ACTION({commit, state},element){
			try {
				commit('CARDS_INCREMENT_LIKE',element);
		  	} catch (err) {
				console.log(err);
		  	}
	   }
    },
 };