const getRandom = function (min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const quotes = [
  "لا يُدركُ المجد إلا سيدُ فطن لما يشقُ على السادات ِ فعالُ",
  "احرص علي ما ينفعك واستعن بالله ولا تعجز",
  "وَما نَيلُ المَطالِبِ بِالتَمَنّي وَلَكِن تُؤخَذُ الدُنيا غِلابا",
  "وَإِذا كانَتِ النُفوسُ كِباراً   تَعِبَت في مُرادِها الأَجسامُ",
  "وانفض غبار الكسل واهجر من عذل ،، فكل من سار على الدرب وصل",
  "لن تبلغ المجد حتي تلعق الصبرا",
  "لو أن الناس كلما استصعبوا أمرا تركوه ما قام للناس دنيا ولا دين",
  "النعيم لا يدرك بالنعيم",
  "أفكلما اشتهيت اشتريت ؟",
  "من آثر الراحة فاتته الراحة",
  "لَوْلا المَشَقّةُ سَادَ النّاسُ كُلُّهُمُ  الجُودُ يُفْقِرُ وَالإقدامُ قَتّالُ",
];
const urls = [
  "https://www.facebook.com",
  "https://www.facebook.com/",
  "https://www.facebook.com/watch",
  "https://www.facebook.com/watch/",
];

const feedMessage = `
<h1 style="font-size:30px;margin-top:60px;text-align: center;">🛑 الفيسبوك مضر بالصحة ويؤدي إلي الوفاة 🛑</h1>
<p style="text-align: center;font-size: 20px">${
        quotes[getRandom(0, quotes.length - 1)]
      }</p>`

/////

const removeFeed = function (url) {
  if (urls.includes(url)) {
    const videosLink = document.querySelector(
      "a[href='https://www.facebook.com/watch/']"
    );
    videosLink?.remove();
    const homeFeed = document.querySelector("div[role='main'].x9f619");
    console.log(homeFeed);
    if (homeFeed) {
      homeFeed.innerHTML = feedMessage ;
      homeFeed.style.display = "block";
    }
    const watchFeed = document.querySelector("#watch_feed");
        if (watchFeed) {
          watchFeed.innerHTML = feedMessage;
          watchFeed.style.display = "block";
        }
    const watchList = document.querySelector(".x2bj2ny.x1afcbsf");
    watchList?.remove();
  }
};

///

removeFeed("https://www.facebook.com/watch/");

////
window.navigation.addEventListener("navigate", (event) => {
  setTimeout(()=> {
    removeFeed(event.destination.url);
  }, 500);
});
