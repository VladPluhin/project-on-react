let state = {
    _data: {
        links:[
            {link: 'About', label: 'About'},
            {link: 'news', label: 'news'},
            {link: 'contact', label: 'contact'},
            {link: 'product', label: 'product'}
        ],
        sliderContent: [
            {
                title: 'title with description',
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/DCdBXcq.jpg',
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/DvmN8Hx.jpg',
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/DCdBXcq.jpg',
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
            },
        ],
        card: [
            {
                videoInfo: true,
                subtitle: 'Nursery Info',
                title: 'Commercial Production',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit',
                button: 'How We Work?',

            },
        ],
        video: [
            {
                channel: 'youtube',
                videoId: '/Yj6K4LZ-5HQ',
                bg: 'https://i.imgur.com/ZXBtVw7.jpg',
            },
        ],
        newsContent: [
            {sectionTitle: 'LATEST ACTUAL NEWS'},
            {
                news: true,
                title:  'Do you want us to Feature a specific FruitTube?',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
            },
            {
                news: true,
                title:  'February Issue of Nursery Management Magazine',
                button: 'Read More',
                image: 'https://i.imgur.com/DCdBXcq.jpg',
            },
            {
                news: true,
                title:  'Acquisition of Fredriks Nursery in Ripon, California',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
            },
        ],
       contactInfo: [
            {
                sectionTitle: 'Contact Us',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit',
            },

        ],
        form: [
                {
                    typeInput: true,
                    textPlaceholder:  'Email',
                    type:  'email',
                },
            {
                typeInput: true,
                textPlaceholder:  'Name',
                type:  'text',
            },
            {
                typeInput: true,
                textPlaceholder:  'Phone',
                type:  'tel',
            },
            {
                typeInput: true,
                textPlaceholder:  'Surname',
                type:  'text',

            },
            {
                typeTextarea:true,
                textPlaceholder:  'Comment',
            },
            {
                button: 'Submit',
            },
        ],
       description:[
           {
               sectionTitle: 'Our Products',
               text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit,Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugitLorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit',
           },
           {
               product: true,
               id:'01',
               title: 'title with description',
               description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
               button: 'Add to  Cart',
               image: 'https://i.imgur.com/ZXBtVw7.jpg',
           },
           {
               product: true,
               id:'02',
               title: 'title with description',
               description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime  officiis quae quam quos, sed sequi?',
               button: 'Add to  Cart',
               image: 'https://i.imgur.com/ZXBtVw7.jpg',
           },
           {
               product: true,
               id:'03',
               title: 'title with description',
               description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequaturobcaecati odit officiis quae quam quos, sed sequi?',
               button: 'Add to  Cart',
               image: 'https://i.imgur.com/ZXBtVw7.jpg',
           },
           {
               product: true,
               id:'04',
               title: 'title with description',
               description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque ',
               button: 'Add to Cart',
               image: 'https://i.imgur.com/ZXBtVw7.jpg',
           },
       ]
    },
    getData() {
        return this._data;
    },
    _rerenderPage()  {
        console.log('');
    },

    getStart(start) {
        this._rerenderPage = start;
    },

}

export default state;
window.state= state;
