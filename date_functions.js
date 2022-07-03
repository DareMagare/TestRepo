function calculateDaysBetweenDates(begin_date, end_date) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(begin_date);
    var secondDate = new Date(end_date);

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay)));
}

function calculateWeeksBetweenDates(start_date, end_date) {
    var oneDay = 24*60*60*1000; // hours*minutes*seconds*milliseconds
    var firstDate = new Date(start_date);
    var secondDate = new Date(end_date);

    return Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneDay*7)));
}

//return current time
function getCurrentTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var seconds = currentTime.getSeconds();

    if (minutes < 10) {
        minutes = "0" + minutes;
    }
    if (seconds < 10) {
        seconds = "0" + seconds;
    }
    var time = hours + ":" + minutes + ":" + seconds;
    return time;
}

//calculate exponential value
function calculateExponentialValue(value, exponent) {
    return Math.pow(value, exponent);
}

//search for a tweet by  calling API
function searchTweet(tweet_id) {
    var url = "http://localhost:8080/tweet/search/" + tweet_id;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var tweet = JSON.parse(xhr.responseText);
    return tweet;
}

//search for a tweet text by  calling API
function searchTweetText(tweet_text) {
    var url = "http://localhost:8080/tweet/search/text/" + tweet_text;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, false);
    xhr.send();
    var tweet = JSON.parse(xhr.responseText);
    return tweet;
}

// calculate distance between 2 locations
function calculateDistance(lat1, lon1, lat2, lon2) {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2-lat1);  // deg2rad below
    var dLon = deg2rad(lon2-lon1);
    var a =
        Math.sin(dLat/2) * Math.sin(dLat/2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon/2) * Math.sin(dLon/2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    var d = R * c; // Distance in km
    return d;
}

//find prime numbers in an array
function findPrimeNumbers(array) {
    var primeNumbers = [];
    for (var i = 0; i < array.length; i++) {
        if (isPrime(array[i])) {
            primeNumbers.push(array[i]);
        }
    }
    return primeNumbers;
}