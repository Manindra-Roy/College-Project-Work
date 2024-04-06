// sample database ///////////////////////////////////////////
const videos = [
  "./public/videos/animeShort1.mp4",
  "./public/videos/animeShort1.mp4",
  "./public/videos/animeShort2.mp4",
  "./public/videos/animeShort3.mp4",
  "./public/videos/animeShort4.mp4",
  "./public/videos/animeShort5.mp4",
  "./public/videos/lufy2.mp4",
  "./public/videos/slufy1.mp4",
  "./public/videos/snaruto2.mp4",
  "./public/videos/snaruto1.mp4",
  "./public/videos/naruto1.mp4",
  "./public/videos/lufy1.mp4",
  "./public/videos/wv1.webm",
  "./public/videos/wv2.webm",
  "./public/videos/wv3.webm",
  "./public/videos/wv4.webm",
  "./public/videos/wv5.webm",
  "./public/videos/wv6.webm",
];
const posters = [
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "null",
  "./public/images/naruto1.jpg",
  "./public/images/lufy1.jpg",
  "./public/images/th1.jpg",
  "./public/images/th2.png",
  "./public/images/th3.jpg",
  "./public/images/th4.jpg",
  "./public/images/th5.jpg",
  "./public/images/th6.jpg",
];
const topContents = [
  "Video",
  "Music",
  "Song",
  "Trending",
  "Tune",
  "New",
  "News",
];

let videoTitles =
  "This is the title of this video. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, ducimus.";
let channelNames = "Channel Name";

/////////////////////////////////////////////////////////////

// category data fetch
for (i = 0; i < topContents.length; i++) {
  document.querySelector(".content-categories").innerHTML += `
  <a href="#" class="top-contents">
  ${topContents[i]}
</a>`;
}
// card content data fetch for hime page
let j = 0;
while (j < 1) {
  for (i = 0; i < videos.length; i++) {
    document.querySelector(".contents").innerHTML += `
  <div class="l-cards">
  <div class="video-area">
    <a href="#" >
    <video
    class="vid"
    onclick="getSrcOfVideo(),gotoVideoPlayer()"
    poster=${posters[i]}
    src=${videos[i]}
    onmouseover="setTimeout(() => {
      this.play();
   }, 250);"
   onmouseout="setTimeout(() => {
     this.pause();
     this.currentTime=0;
     this.load();
   }, 250);"
        muted
        loop
        preload="none"
      ></video>
    </a>
  </div>
  <div class="video-meta">
    <a href="#" class="profile">
      <div
        class="profile-pic"
        style="
          background: url(${posters[i]});background-size: cover;
        "
      ></div>
    </a>
    <div class="text-info">
      <a href="#" class="title">
      ${videoTitles}
      </a>
      <div class="views-and-dates">
        <a href="#" class="channel-name"
          >${channelNames}</a
        >
        &nbsp;&nbsp;&nbsp;100K Views&nbsp;&nbsp;30 Days Ago
      </div>
    </div>
  </div>
  </div>`;
  }
  j = j + 1;
}
// switch to video player from home page
let contentCategories = document.querySelector(".content-categories");
let homePageContents = document.querySelector(".contents");
let videoPlayerPage = document.querySelector(".video-player-page");
let lCartVideo = document.querySelectorAll(".video-area>a>video");
let shortVideoSection = document.querySelector(".short-video-section");
let shortVideo = document.querySelector(".short-video-card video");
let shortVideoS = document.querySelectorAll(".short-video-card video");
const gotoVideoPlayer = () => {
  contentCategories.setAttribute("style", "display:none;");
  homePageContents.setAttribute("style", "display:none;");
  shortVideoSection.setAttribute("style", "display:none");
  videoPlayerPage.setAttribute("style", "display:grid");

  document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
    lvCard.remove();
  });

  for (i = 0; i < videos.length; i++) {
    document.querySelector(
      ".video-player-page .suggested-videos"
    ).innerHTML += `
    <div class="l-cards">
    <div class="video-area">
      <a href="#" >
      <video
      class="vid"
      onclick="getSrcOfVideo(),gotoVideoPlayer()"
      poster=${posters[i]}
      src=${videos[i]}
      onmouseover="setTimeout(() => {
        this.play();
     }, 250);"
     onmouseout="setTimeout(() => {
       this.pause();
       this.currentTime=0;
       this.load();
     }, 250);"
          muted
          loop
          preload="none"
        ></video>
      </a>
    </div>
    <div class="video-meta">
      <a href="#" class="profile">
        <div
          class="profile-pic"
          style="
            background: url(${posters[i]});background-size: cover;
          "
        ></div>
      </a>
      <div class="text-info">
        <a href="#" class="title">
        ${videoTitles}
        </a>
        <div class="views-and-dates">
          <a href="#" class="channel-name"
            >${channelNames}</a
          >
          &nbsp;&nbsp;&nbsp;100K Views&nbsp;&nbsp;30 Days Ago
        </div>
      </div>
    </div>
    </div>`;
  }
  // set default thambnail on empty thambnail videos
  document.querySelectorAll(".vid").forEach((val) => {
    if (val.getAttribute("poster") == "null") {
      val.setAttribute("poster", "./public/images/d.jpg");
    }
  });
  // set default profile pic on empty profiles
  document.querySelectorAll(".video-meta .profile-pic").forEach((picval) => {
    if (picval.getAttribute("style").trim().length == 45) {
      picval.setAttribute(
        "style",
        "background: url(./public/images/d.jpg); background-size: cover;"
      );
    }
  });
};

const gotoShortVideoPlayer = () => {
  contentCategories.setAttribute("style", "display:none;");
  homePageContents.setAttribute("style", "display:none;");
  videoPlayerPage.setAttribute("style", "display:none");
  shortVideoSection.setAttribute("style", "display:grid");
  video.pause();
  document.querySelectorAll(".short-video-card").forEach((svCards) => {
    svCards.remove();
  });
  document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
    lvCard.remove();
  });
  video.setAttribute("src", "");
  // card content data fetch for short video page
  for (i = 0; i < videos.length-8; i++) {
    document.querySelector(".short-video-section").innerHTML += `
    <div class="short-video-card">
    <video
      class="short-video-player"
      src=${videos[i]}
      autoplay="false"
      preload="none"
      loop
    ></video>
    <div class="short-video-info">
      <a href="#">
        <div
          class="short-video-profile"
          style="
            background: url(./public/images/a1.jpg);
            background-size: cover;
          "
        ></div>
        &nbsp;&nbsp;Channel Name</a
      >
      <div class="short-video-title">
        This is the Title of this video. Lorem ipsum dolor sit amet.
      </div>
    </div>
    <ul class="short-video-like-dislike-share">
      <li class="short-video-like">
        <i class="ri-thumb-up-line"></i>50K
      </li>
      <li class="short-video-dislike">
        <i class="ri-thumb-down-line"></i>50K
      </li>
      <li class="short-video-share">
        <i class="ri-share-fill"></i>Share
      </li>
    </ul>
  </div>`;
  }
  // //
  for (const val of document.querySelectorAll(".short-video-card video")) {
    let options = {
      root: shortVideoSection,
      rootMargin: "10px",
      threshold: 1.0,
    };
    let observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        let onScreenShortVideo = entry.target;
        //
        if (entry.isIntersecting) {
          console.log(onScreenShortVideo);
          console.log("played");
          onScreenShortVideo.play();
          onScreenShortVideo.muted = !onScreenShortVideo.muted;
          console.log(onScreenShortVideo.muted);
        } else {
          console.log(onScreenShortVideo);
          console.log("paused");
          onScreenShortVideo.pause();
          onScreenShortVideo.currentTime = 0;
          onScreenShortVideo.muted = !onScreenShortVideo.muted;
          console.log(onScreenShortVideo.muted);
        }
      });
    }, options);
    observer.observe(val);
    // short video play/pause button
    val.addEventListener("click", () => {
      val.paused ? val.play() : val.pause();
    });
  }
  setTimeout(() => {
    document
      .querySelector(".short-video-card")
      .setAttribute("style", "display:none");
  }, 1);
};
// switch to home page from video player
let switchToHomeButtons = document.querySelector(".switch-to-home");
const gotoHomePage = () => {
  contentCategories.setAttribute("style", "display:flex;");
  homePageContents.setAttribute("style", "display:grid;");
  videoPlayerPage.setAttribute("style", "display:none");
  shortVideoSection.setAttribute("style", "display:none");
  document.querySelectorAll(".short-video-card").forEach((svCards) => {
    svCards.remove();
  });
  document.querySelectorAll(".suggested-videos .l-cards").forEach((lvCard) => {
    lvCard.remove();
  });
  video.pause();
  video.setAttribute("src", "");
};

// video transfer engine //////////////
const getSrcOfVideo = () => {
  document.onclick = (e) => {
    if (e.target.className == "vid") {
      let vSrc = e.target.getAttribute("src");
      let posterPath = e.target.getAttribute("poster");
      video.setAttribute("src", `${vSrc}`);
      document
        .querySelector(".left-playing-video-info .profile-pic")
        .setAttribute(
          "style",
          `background: url(${posterPath});background-size: cover;`
        );
      video.play();
    }
  };
};
// set default thambnail on empty thambnail videos
document.querySelectorAll(".vid").forEach((val) => {
  if (val.getAttribute("poster") == "null") {
    val.setAttribute("poster", "./public/images/d.jpg");
  }
});
// set default profile pic on empty profiles
document.querySelectorAll(".video-meta .profile-pic").forEach((picval) => {
  if (picval.getAttribute("style").trim().length == 45) {
    picval.setAttribute(
      "style",
      "background: url(./public/images/d.jpg); background-size: cover;"
    );
  }
});

///////////////////////////////// Finished ///////////////////////////////////
// menu function //
const root = document.querySelector(":root");
let menuIcon = document.querySelector(".menu-icon");
let sideBar = document.querySelector(".side-bar");
let sideBarUl = document.querySelectorAll(".side-bar>ul");
const closSideBar = () => {
  root.style.setProperty("--side-bar-w", "0px");
  sideBar.setAttribute("style", "opacity: 0;");
  sideBarUl.forEach((ul) => {
    setTimeout(() => {
      ul.setAttribute("style", "display: none;");
    }, 125);
  });
  menuIcon.setAttribute("onclick", "openSideBar()");
};
const openSideBar = () => {
  sideBarUl.forEach((ul) => {
    ul.setAttribute("style", "display: flex;");
  });
  root.style.setProperty("--side-bar-w", "240px");
  sideBar.setAttribute("style", "opacity: 1;");
  menuIcon.setAttribute("onclick", "closSideBar()");
};

// dark or light function //
let darkOrLightIcon = document.querySelector(".dark-or-light");
let darkOrLightIconI = document.querySelector(".dark-or-light>i");
const switchToLight = () => {
  root.style.setProperty("--main-bg-color", "#E4E4E4");
  root.style.setProperty("--second-bg-color", "#d3d3d3");
  root.style.setProperty("--font-color", "#222222");
  // root.style.setProperty("--nav-logo-color", "#20dc55");
  darkOrLightIconI.setAttribute("class", "ri-moon-fill");
  darkOrLightIcon.setAttribute("onclick", "switchToDark()");
};
const switchToDark = () => {
  root.style.setProperty("--main-bg-color", "#0F0F0F");
  root.style.setProperty("--second-bg-color", "#222222");
  root.style.setProperty("--font-color", "#E4E4E4");
  // root.style.setProperty("--nav-logo-color", "#2020dc");
  darkOrLightIconI.setAttribute("class", "ri-sun-fill");
  darkOrLightIcon.setAttribute("onclick", "switchToLight()");
};




const changeUrl=(nextURL)=>{
const nextTitle = 'My new page title';
const nextState = { additionalInformation: 'Updated the URL with JS' };
// This will create a new entry in the browser's history, without reloading
window.history.pushState(nextState, nextTitle, nextURL);
// This will replace the current entry in the browser's history, without reloading
// window.history.replaceState(nextState, nextTitle, nextURL);
}
let nextURL="http://127.0.0.1:5500/index.html"
// changeUrl(nextURL)