//********************* user information ******************/
var PAGE_DATA = {
    user: {
        name: 'Raymond Hettinger',
        username: 'raymondh',
        description:
            'Python core developer. Freelance programmer/consultant/trainer. Husband to Rachel. Father to Matthew.',
        location: 'Santa Clara, CA',
        website: 'rhettinger.wordpress.com',
        joined: {
            month: 3,
            year: 2008
        },
        pic_url:
            'https://pbs.twimg.com/profile_images/73450913/IMG_0202_400x400.jpg'
    },
    chips: [
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 28,
                year: 2017
            },
            message:
                '#python tip:  iter(C, sentinel) returns an iterator that invokes the callable C until it returns a sentinel signaling the iterator is done.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 25,
                year: 2017
            },
            message:
                '#python teaching tip:  When teaching adults, half of your time should be spent helping students unlearn pre-existing incorrect knowledge.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 23,
                year: 2017
            },
            message:
                '#python insight of the day:  Directories are a namespace and behave like dictionaries where the key is a filename and the value is an inode.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 10,
                day: 5,
                year: 2017
            },
            message: '#python news:  #PyPy version 5.9 has just been released.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 9,
                day: 24,
                year: 2017
            },
            message:
                'Put another way. With "yield" the consumer controls execution. With "await" the producer controls execution. Very different points of view.'
        },
        {
            author: {
                name: 'Raymond Hettinger',
                username: 'raymondh'
            },
            date: {
                month: 9,
                day: 24,
                year: 2017
            },
            message:
                'With #python iterators, we think of next() as initiating execution. With coroutines, we "await" a downstream event to initiate execution.'
        }
    ],
    suggestedFriends: [
        {
            username: 'basecampcoding',
            name: 'Base Camp Coding',
            img_url:
                'https://pbs.twimg.com/profile_images/656838014446927872/DIEvACFG_400x400.png'
        },
        {
            username: 'code_ms',
            name: 'Code Mississippi',
            img_url:
                'https://pbs.twimg.com/profile_images/837387398510170112/qUb2XhX4_400x400.jpg'
        },
        {
            username: 'CoalesceJxn',
            name: 'Coalesce',
            img_url:
                'https://pbs.twimg.com/profile_images/674302593154154496/D59nQPLI_400x400.jpg'
        },
        {
            username: 'CSpire',
            name: 'C Spire',
            img_url:
                'https://pbs.twimg.com/profile_images/832727503944814592/qwVyJv9o_400x400.jpg'
        },
        {
            username: 'FedEx',
            name: 'FedEx',
            img_url:
                'https://pbs.twimg.com/profile_images/902281255802339331/aVXYUjiu_400x400.jpg'
        }
    ]
};
//*********************** change num to month ************************/
const month = {
    1: 'January',
    2: 'February',
    3: 'March',
    4: 'April',
    5: 'May',
    6: 'June',
    7: 'July',
    8: 'August',
    9: 'September',
    10: 'October',
    11: 'November',
    12: 'December'
};
//**************************** column1 *********************************/
function userInformation() {
    var html =
        '<h2><a id="name" href="https://www.twitter.com/' +
        PAGE_DATA.user.username +
        '">' +
        PAGE_DATA.user.name +
        '</a></h2>';
    html +=
        '<h4><a id="username" href="https://www.twitter.com/' +
        PAGE_DATA.user.username +
        '">@' +
        PAGE_DATA.user.username +
        '</a></p>';
    html += '<p id="description">' + PAGE_DATA.user.description + '</p>';
    html +=
        '<p><i class="fa fa-map-pin" aria-hidden="true"></i> ' +
        PAGE_DATA.user.location +
        '</p>';
    html +=
        '<p><i class="fa fa-bookmark" aria-hidden="true"></i> <a href="https://' +
        PAGE_DATA.user.website +
        '">' +
        PAGE_DATA.user.website +
        '</a></p>';
    html +=
        '<p><i class="fa fa-calendar" aria-hidden="true"></i> Joined: ' +
        month[PAGE_DATA.user.joined.month] +
        '  ' +
        PAGE_DATA.user.joined.year +
        '</p>';
    return html;
}
function picture() {
    return (
        '<img class="img-circle" src="' +
        PAGE_DATA.user.pic_url +
        '" lt="Raymond Hettinger" height="215" width="215">'
    );
}

function showUserInformation() {
    var h = userInformation();

    $('#column1').html(h);
}
function showPic() {
    var p = picture();
    $('#header2').html(p);
}

//**************************** column2 *********************************/
function chirpInformation(chirp) {
    var html =
        '<h3><img class="img-circle2" src="' +
        PAGE_DATA.user.pic_url +
        '" alt="Raymond Hettinger"height="60" width="60"><a id="user" href="https://twitter.com/' +
        PAGE_DATA.user.username +
        '">' +
        chirp.author.name +
        '</a><a id="info" href="https://twitter.com/' +
        PAGE_DATA.user.username +
        '"> @' +
        chirp.author.username +
        ' ' +
        month[chirp.date.month] +
        ' ' +
        chirp.date.day +
        '</a></h3>';
    html +=
        '<p><i class="fa fa-arrow-right" aria-hidden="true"></i> ' +
        chirp.message +
        '</p>';
    return html;
}
function showChirpInformation() {
    var html = PAGE_DATA.chips
        .map(function(chirp) {
            return chirpInformation(chirp);
        })
        .join('');
    $('#column2').html(html);
}
//************************************** nav bar ***********************/
function navbar() {
    var html =
        '<a id="Home" href="http://twitter.com"><i id="bird" class="fa fa-twitter" aria-hidden="true"></i> Home</a>';
    html +=
        '<a id="Home" href="https://twitter.com/i/moments"><i id="bird" class="fa fa-bolt" aria-hidden="true"></i> Moments</a>';
    return html;
}

function shownavbar() {
    var html = navbar();
    $('#header1').html(html);
}
//****************************************** column 3 ************************/
function signup() {
    var html = '<h5> New to Twitter?<h4>';
    html += '<p id="sign">Sign up now to get your own personalized timeline!';
    html +=
        '<br><br><br><a href="https://twitter.com/signup" class="signup-button">Sign up</a>';
    return html;
}
function showsignup() {
    var html = signup();
    $('#column3').html(html);
}

function youMayAlsoLIKE(suggest) {
    var html =
        '<div id="usernames"><img class="img-circle2" src="' +
        suggest.img_url +
        '" alt="Raymond Hettinger"height="60" width="60"></div><br><p id="names">' +
        suggest.name +
        '</p><p>@' +
        suggest.username +
        '</p>';

    return html;
}
function showyouMayAlsoLike() {
    var html =
        '<div id="header"><h5> You may also like <button id="refresh" type="button">Refresh</button></h5></div>';
    html += PAGE_DATA.suggestedFriends
        .map(function(suggest) {
            return youMayAlsoLIKE(suggest);
        })
        .join('');
    $('#column4').html(html);
}

//***************************** Main **********************************/
function main() {
    showPic();
    showUserInformation();
    showChirpInformation();
    showsignup();
    showyouMayAlsoLike();
    shownavbar();
}

$(main);
