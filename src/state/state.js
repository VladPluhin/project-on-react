let state = {
    _data: {
        links:[
            {link: 'About', label: 'About', id:1, linknav:'about', submenu: true,},
            {link: 'news', label: 'news',id:2, submenu: false},
            {link: 'contact', label: 'contact',id:3, submenu: false},
            {link: 'product', label: 'product',id:4, submenu: false},

        ],
        sliderContent: [
            {
                title: 'title with description',
                description: ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
                id:5
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/DCdBXcq.jpg',
                id:6
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/DvmN8Hx.jpg',
                 id:7
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
                id:8
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/DCdBXcq.jpg',
                id:9
            },
            {
                title: 'title with description',
                description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime natus, nulla obcaecati odit officiis quae quam quos, sed sequi?',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
                id:10
            },
        ],
        card: [
            {
                videoInfo: true,
                subtitle: 'Nursery Info',
                title: 'Commercial Production',
                text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit',
                button: 'How We Work?',
                id:11

            },
        ],
        video: [
            {
                channel: 'youtube',
                videoId: '/Yj6K4LZ-5HQ',
                bg: 'https://i.imgur.com/ZXBtVw7.jpg',
                id:12
            },
        ],
        newsContent: [
            {sectionTitle: 'LATEST ACTUAL NEWS'},
            {
                news: true,
                title:  'Do you want us to Feature a specific FruitTube?',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
                id:13
            },
            {
                news: true,
                title:  'February Issue of Nursery Management Magazine',
                button: 'Read More',
                image: 'https://i.imgur.com/DCdBXcq.jpg',
                id:14
            },
            {
                news: true,
                title:  'Acquisition of Fredriks Nursery in Ripon, California',
                button: 'Read More',
                image: 'https://i.imgur.com/ZXBtVw7.jpg',
                id:15
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
                    id:16
                },
            {
                typeInput: true,
                textPlaceholder:  'Name',
                type:  'text',
                id:17
            },
            {
                typeInput: true,
                textPlaceholder:  'Phone',
                type:  'tel',
                id:18
            },
            {
                typeInput: true,
                textPlaceholder:  'Surname',
                type:  'text',
                id:19

            },
            {
                typeTextarea:true,
                textPlaceholder:  'Comment',
                id:71
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

               title: 'title with description',
               description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque eligendi eum fugit impedit incidunt maxime  officiis quae quam quos, sed sequi?',
               button: 'Add to  Cart',
               image: 'https://i.imgur.com/ZXBtVw7.jpg',
               id:744
           },
           {
               product: true,

               title: 'title with description',
               description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequaturobcaecati odit officiis quae quam quos, sed sequi?',
               button: 'Add to  Cart',
               image: 'https://i.imgur.com/ZXBtVw7.jpg',
               id:75
           },
           {
               product: true,

               title: 'title with description',
               description:' Lorem ipsum dolor sit amet, consectetur adipisicing elit. A aliquam asperiores consequatur culpa doloremque ',
               button: 'Add to Cart',
               image: 'https://i.imgur.com/ZXBtVw7.jpg',
               id:73
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
