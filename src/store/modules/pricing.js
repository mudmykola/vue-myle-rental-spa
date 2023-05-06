export default {
    state: {
        pricingList: [
            {
                id: 1,
                img: 'pricing-icon-1.svg',
                alt: 'pricing-icon',
                price: '$100',
                desc: 'Car to Your Location ',
            },
            {
                id: 2,
                img: 'pricing-icon-2.svg',
                alt: 'pricing-icon',
                price: '$150 / Day',
                desc: 'Basic Price  ',
            },
            {
                id: 3,
                img: 'pricing-icon-3.svg',
                alt: 'pricing-icon',
                price: '$0.50 / mile',
                desc: 'Over 100 miles  ',
            },
        ],
    },
    getters: {
        GET_PRICING_LIST(state) {
            return state.pricingList;
        },
    },
};
