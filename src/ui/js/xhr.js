const axios = require('axios').default;

const xhr = function () {
    const urlPrefix = '/models/';
    
    //const wpUrlPrefix = 'https://public-api.wordpress.com/rest/v1.1/sites/fredrikcollden.wordpress.com/';
    const wpUrlPrefix = 'https://public-api.wordpress.com/wp/v2/sites/fredrikcollden.wordpress.com/';

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

        async getWpPosts() {
            try {
                if (process.env.NODE_ENV === 'development') {
                    const respMock = await axios.get(urlPrefix + 'startpage.json');
                    return(respMock.data);
                }
                
                const resp = await axios.get(wpUrlPrefix + 'posts/?category=startpage');
                console.log('wp resp posts')
                console.log(resp);

                let result = {}
                result.book = []
                resp.data.forEach(post => {
                    let chapter = {}
                    
                    chapter.name = post.slug
                    chapter.title = post.title.rendered
                    chapter.text = ""
                    chapter.color = 'black'
                    chapter.align = 'left'
                    chapter.bg = null
                    chapter.graphics = []
                    chapter.layoutDecoration = null

                    //Parse propsdata from WP-post
                    const postContentHtml = post.content.rendered

                    let contentText = postContentHtml.substring(
                        0, 
                        postContentHtml.lastIndexOf('<pre')
                    )

                    chapter.text = contentText;

                    let postPropsHtml = ""
                    if (postContentHtml.indexOf("<code>") >= 0) {
                        postPropsHtml = postContentHtml.substring(
                            postContentHtml.indexOf("<code>") + 6, 
                            postContentHtml.lastIndexOf("</code>")
                        )
                        postPropsHtml = self.decodeHtml(postPropsHtml)

                        const backgroundProp = self.getPropFromString(
                            postPropsHtml, 
                            '<xml:background-url>', 
                            '</xml:background-url>'
                        )
                        
                        const graphic1 = self.getPropFromString(
                            postPropsHtml, 
                            '<xml:graphic1-url>', 
                            '</xml:graphic1-url>'
                        )

                        const graphic2 = self.getPropFromString(
                            postPropsHtml, 
                            '<xml:graphic2-url>', 
                            '</xml:graphic2-url>'
                        )

                        const color = self.getPropFromString(
                            postPropsHtml, 
                            '<xml:layout-color>', 
                            '</xml:layout-color>'
                        )

                        const align = self.getPropFromString(
                            postPropsHtml, 
                            '<xml:layout-align>', 
                            '</xml:layout-align>'
                        )

                        const layoutDecoration = self.getPropFromString(
                            postPropsHtml, 
                            '<xml:layout-decoration>', 
                            '</xml:layout-decoration>'
                        )

                        backgroundProp !== null ? chapter.bg = backgroundProp : null   
                        graphic1 !== null ? chapter.graphics.unshift(graphic1) : null  
                        graphic2 !== null ? chapter.graphics.unshift(graphic2) : null
                        color !== null ? chapter.color = color : null     
                        align !== null ? chapter.align = align : null     
                        layoutDecoration !== null ? chapter.layoutDecoration = layoutDecoration : null     
                    }

                    result.book.unshift(chapter)
                });
                console.log(result)
                return(result);
            } catch (err) {
                // Handle Error Here
                console.error(err);
            }
        },

        decodeHtml(html) {
            var txt = document.createElement("textarea");
            txt.innerHTML = html;
            return txt.value;
        },

        getPropFromString(htmlString, propName, propNameEnd) {
            let returnVal = null
            let propNameLength = propName.length

            if (htmlString.indexOf(propName) >= 0) {
                returnVal = htmlString.substring(
                    htmlString.indexOf(propName) + propNameLength, 
                    htmlString.lastIndexOf(propNameEnd)
                )
            }
            return returnVal
        }
    }
    
    return self;

};

export default xhr;