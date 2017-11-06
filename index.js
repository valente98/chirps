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
    html += '<p>' + PAGE_DATA.user.description + '</p>';
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
        '<h3><img class="img-circle2" src="https://pbs.twimg.com/profile_images/73450913/IMG_0202_400x400.jpg" alt="Raymond Hettinger"height="60" width="60"> ' +
        chirp.author.name +
        ' @' +
        chirp.author.username +
        ' ' +
        month[chirp.date.month] +
        ' ' +
        chirp.date.day +
        '</h3>';
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
//***************************** Main **********************************/
function main() {
    showPic();
    showUserInformation();
    showChirpInformation();
    shownavbar();
}

$(main);
