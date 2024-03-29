
const Home = {
    text: 'Home',
    link: '/home',
    icon: 'icon-home'
};

const Editor = {
    text:'Editor',
    link:'/editor/projects',
    icon:'fa fa-rupee'
}
const ProductQuestion = {
    text: 'Products & Questions',
    link: '/formcomponents/products',
    icon: 'fa fa-reorder '
}
const Formgroup = {
    text:' Forms',
    link:'/formgroup',
    icon:'icon-social-foursqare'

}
const MDL = {
    text:'MDL Admin',
    link:'/mdl',
    icon:'icon-options',
    submenu: [
        {
        text:'Users',
        link:'/mdl/users'
        },
        {
            text:'Services',
            link:'/services'
        }
  ]
}; 
const Clients = {
    text:'Clients',
    link:'/clients',
    icon:'icon-user-follow'
}
const CCHEST = {
    text:'Cchest',
    link:'/cchest',
    icon:'icon-social-spotify',
    submenu: [
        {
            text:'NGOS',
            link:'/cchest/ngos'
        },
        {
            text:'News',
            link:'/cchest/news'
        },
        {
            text:'Sponsors',
            link:'/cchest/sponsors'
        },
        {
            text:'Ngo Types',
            link:'/cchest/ngotypes',
        },
        {
            text:'Business Entitys',
            link:'/cchest/bentity'
        },
        {
            text:'Favourites',
            link:'/cchest/favourites'
        }
    ]
};

const Abalimi = {
    text: 'Abalimi',
    link: '/abalimi',
    icon: 'fa fa-adn',
    submenu: [
        {
            text:'Farmer',
            link:'/abalimi/farmer'
        },
        {
            text:'Farm',
            link:'/abalimi/farm'
        }
    ]
}
const Profile = {
    text: 'My Account',
    link: '/profile',
    icon: 'icon-user-following'
};
const Logout = {
    text: 'Logout',
    link: '/login',
    icon: 'icon-logout'
};

const Forms = {
    text: 'Forms',
    link: '/forms',
    icon: 'icon-social-foursqare',
    submenu: [
        {
            text:'Form Builder',
            link:'/forms/formbuilder'
        },
        {
            text: 'Standard',
            link: '/forms/standard'
        },
        {
            text: 'Extended',
            link: '/forms/extended'
        },
        {
            text: 'Validation',
            link: '/forms/validation'
        },
        {
            text: 'Upload',
            link: '/forms/upload'
        },
        {
            text: 'Image Crop',
            link: '/forms/cropper'
        }
    ]
};

const Tables = {
    text: 'Tables',
    link: '/tables',
    icon: 'icon-grid',
    submenu: [
        {
            text: 'Standard',
            link: '/tables/standard'
        },
        {
            text: 'Extended',
            link: '/tables/extended'
        },
        {
            text: 'Data-Tables',
            link: '/tables/datatable'
        },
        {
            text: 'Angular Grid',
            link: '/tables/aggrid'
        }
    ]
};


const headingMain = {
    text: 'MiDigitalLife Navigation',
    heading: true
};

const communityChest = {
    text:'Community Chest',
    heading: true
}
const headingComponents = {
    text: 'Components',
    heading: true
};

const headingMore = {
    text: 'More',
    heading: true
}; 

export const menu = [
    headingMain,
    Home,
    Editor,
    ProductQuestion,
    Formgroup,
    Clients,
    headingMore,
    Profile,
    Logout
];
