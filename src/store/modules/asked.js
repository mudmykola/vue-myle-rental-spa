export default {
    state: {
        askedAccordion: [
            {
                id: 1,
                title: 'What do I need to book a car?',
                desc: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
            },
            {
                id: 2,
                title: 'What happens if I have an accident?',
                desc: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
            },
            {
                id: 3,
                title: 'Do I need my own insurance?',
                desc: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
            },

            {
                id: 4,
                title: 'Can I get my car delivered to me?',
                desc: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
            },
            {
                id: 5,
                title: 'Can other people drive a car that I booked?',
                desc: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
            },
            {
                id: 6,
                title: 'How do I get discounts when booking a car?',
                desc: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
            },
            {
                id: 7,
                title: 'What is the cancellation policy?',
                desc: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
            },
            {
                id: 8,
                title: 'What are the cleaning and safety policies?',
                desc: 'We currently serve clients in several locations, including New York, New Jersey, Georgia, Florida, and Ohio. We are working on expanding the service',
            },

        ],
    },
    getters: {
        GET_ASKED_ACCORDION(state) {
            return state.askedAccordion;
        },
    },
};
