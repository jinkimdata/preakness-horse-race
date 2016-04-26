var preaknessRace = {
    init: function() {
        preaknessRace.inputCalc();
    },
    share: function() {
        $(".icon-twitter").on("click", function() {
            var tweet = "";
            var url = "";
            var twitter_url = "https://twitter.com/intent/tweet?text=" + tweet + "&url=" + url + "&tw_p=tweetbutton";
            window.open(twitter_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
        $(".icon-facebook").on("click", function() {
            var picture = "";
            var title = "";
            var description = "";
            var url = "";
            var facebook_url = "https://www.facebook.com/dialog/feed?display=popup&app_id=310302989040998&link=" + url + "&picture=" + picture + "&name=" + title + "&description=" + description + "&redirect_uri=http://www.facebook.com";
            window.open(facebook_url, "mywin", "left=200,top=200,width=500,height=300,toolbar=1,resizable=0");
            return false;
        });
    },
    inputCalc: function() {
        $(".submit").on("click", function() {
            var bet = parseInt($(".inputDollars").val());
            var horse = parseInt($(".inputHorse option:selected").val());
            var odds = [ .8, 3.5, 20, 15, 30, 20, 12, 4 ];
            if (bet % 1 != 0 || isNaN(bet)) {} else {
                var results = [];
                var maxPos = 0;
                for (i = 0; i < 8; i++) {
                    results[i] = Math.round(Math.random() * 100 - odds[i] + 30);
                    if (i > 0 && results[i] > results[maxPos]) {
                        maxPos = i;
                    }
                }
                console.log(results);
                if (maxPos == horse) {
                    var winnings = bet + bet * results[maxPos];
                    console.log("won:" + winnings);
                }
            }
        });
    }
};

$(document).ready(function() {
    preaknessRace.init();
    console.log("connected");
});