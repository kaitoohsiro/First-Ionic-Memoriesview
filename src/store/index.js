import { createStore } from 'vuex';

const store = createStore({
    state() {
        return {
            memories: [
                {
                    id: 'm1',
                    image: 'https://mysuki.jp/wp-content/uploads/2016/12/trip.jpg',
                    title: 'A trip into the mountains',
                    description: 'It was a really nice trip!!'
                },
                {
                    id: 'm2',
                    image: 'https://scontent-nrt1-1.xx.fbcdn.net/v/t39.30808-6/311667397_454111373484989_9219682886027814393_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=e3f864&_nc_ohc=4hIobAW4s6AAX_YLspS&tn=u3Oq7D2OEP6tnOOO&_nc_ht=scontent-nrt1-1.xx&oh=00_AfD7IY4JI6l9_D6Iemr3jCah_p2GCAOCmTAOjxp5mdkV8g&oe=636CD79F',
                    title: 'Surfing the sea side',
                    description: 'Feeling the cool breeze!'
                },
                {
                    id: 'm3',
                    image: 'https://ichef.bbci.co.uk/news/976/cpsprodpb/0995/production/_105435420_gettyimages-1016510872.jpg.webp',
                    title: 'Good eating',
                    description: 'Really tasty!'
                }
            ]
        }
    },
    mutations: {
        addMemory(state, memoryData) {
            const newMemory = {
                id: new Date().toISOString(),
                title: memoryData.title,
                image: memoryData.imageUrl,
                description: memoryData.description
            };

            state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
            context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories;
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find((memory) => memory.id === memoryId);
            }
        }
    }
});


export default store;