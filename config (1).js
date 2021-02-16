var config = {
    style: 'mapbox://styles/alexmathios/ckl7lztlz2sca17o6507crmfj',
    accessToken: 'pk.eyJ1IjoiYWxleG1hdGhpb3MiLCJhIjoiY2tsN2x6Z2Z1MWpmcTJ1bWdmYmc3MGp6cCJ9.B_MXif7PNGocRzKZfnRRZA',
    showMarkers: true,
    markerColor: '#3FB1CE',
    theme: 'light',
    use3dTerrain: false,
    title: 'Contrasts in the Islamic World: A Story Map for IGE',
    subtitle: 'Analyzing Islam in India, Anatolia, and West Africa; By Alex Mathios, For IGE 1200.05, Spring 2021',
    byline: 'By Alexander Mathios',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'Mecca-Birthplace-ofIslam',
            alignment: 'right',
            hidden: false,
            title: 'Mecca: Birthplace of Islam',
            image: '.http://www.eonimages.com/media/49fd4d8a-3a2e-11e0-9c74-fbb16b62a40b-mecca-in-a-19th-century-drawing',
            description: 'At the time of the birth of Muhammad in570, Mecca was a cosmopolitan trading city. Located on the west of the Arabian peninsula, about 40 miles inland from the Red Sea, Mecca drew pilgrims and merchants alike by housing the Kaaba; the greatest shrine in the region to the Arab pantheon.  ',
            location: {Mecca
                center: [39.75858, 21.51858],
                zoom: 3.47,
                pitch: 0.50,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'other-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-77.020636, 38.886900],
                zoom: 8.5,
                pitch: 60,
                bearing: -43.2
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [],
            onChapterExit: []
        }
    ]
};
