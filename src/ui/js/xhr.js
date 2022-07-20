const axios = require('axios').default;

const xhr = function () {
    const urlPrefix = '/models/';

    const models = {
        pages: 'pages.json',
        pagedata_start: 'startpage.json'
    }

    const self = {

        async sendGetRequest(action) {
            try {
                const resp = await axios.get(urlPrefix + models[action]);
                return(resp.data);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        }
    }
    
    return self;

};

export default xhr;