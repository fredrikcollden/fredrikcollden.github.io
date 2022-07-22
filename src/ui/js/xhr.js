const axios = require('axios').default;

const xhr = function () {
    const urlPrefix = '/models/';
    const wpUrlPrefix = 'https://public-api.wordpress.com/rest/v1.1/sites/fredrikcollden.wordpress.com/';

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
        },

        async getWpPosts(action) {
            try {
                const resp = await axios.get(wpUrlPrefix + 'posts/?category=startpage');
                console.log('wp resp posts')
                console.log(resp);

                let result = {}
                result.book = []
                resp.data.posts.forEach(post => {
                    let chapter = {}
                    
                    chapter.name = post.slug
                    chapter.title = post.title
                    chapter.text = post.excerpt
                    chapter.bg = null
                    chapter.graphics = []

                    const attachments = Object.keys(post.attachments);

                    attachments.forEach((key, index) => {
                        const attachment = post.attachments[key]
                        if (attachment.caption == 'background') {
                            chapter.bg = attachment.URL
                        }
                        if (attachment.caption == 'graphics-1' || attachment.caption == 'graphics-2') {
                            chapter.graphics.push({
                                'type': attachment.caption,
                                'url': attachment.URL
                            })
                        }
                    });
                    result.book.unshift(chapter)
                });
                
                return(result);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        }
    }
    
    return self;

};

export default xhr;