import axios from "axios";

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer LKKcG95qXklU85GLtaYrpGmEAkqTInOde4TN588iEP30xsLbPBAX9HUtgVbLr5j5_lm8DO_cqK3hNtV4HMTDrzptZDTlmVVymTTeRUYcV5RA_r1-wd32VDzpIRDJZnYx',
    },
});