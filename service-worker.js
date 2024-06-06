/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "03-01.jpg",
    "revision": "61ccd31b9a99e4dc0b2115d7a181dc71"
  },
  {
    "url": "03-02.jpg",
    "revision": "0e42c83dcc174ebfdbb611ab0956fcd9"
  },
  {
    "url": "03-03.jpg",
    "revision": "dd23072447e0798b536bd162235d14c3"
  },
  {
    "url": "03-04.jpg",
    "revision": "661a64ee2776ef94b23ba82f7ee50969"
  },
  {
    "url": "03-05.jpg",
    "revision": "6f52dcb2ccb40af28a65a4b796eb918d"
  },
  {
    "url": "03-06.jpg",
    "revision": "2643698d9412e41a449c1edee719fb29"
  },
  {
    "url": "03-07.jpg",
    "revision": "c4a788f41d803f8b9bddb5adc0513be6"
  },
  {
    "url": "03-08.jpg",
    "revision": "4c810503ec4bc1adfd29904056fc2886"
  },
  {
    "url": "03-09.jpg",
    "revision": "9c798bc91f80f84b6b0e7f7fba26d65b"
  },
  {
    "url": "03-10.jpg",
    "revision": "bb5b18b65591e9d058edbc14b02c6ba5"
  },
  {
    "url": "03-11.jpg",
    "revision": "6a88d8f48c63e79c72ec45ae84a8d9ff"
  },
  {
    "url": "04-01.jpg",
    "revision": "4bbafd5dd4000461cef55f669139b17b"
  },
  {
    "url": "05-01.jpg",
    "revision": "8d54b111a4b6b5fb4cd39e4c7261b927"
  },
  {
    "url": "06-01.jpg",
    "revision": "cf2dab320c48c5ead6fe105863629e4e"
  },
  {
    "url": "06-02.jpg",
    "revision": "aa286f8fd6540b7a7b6d36392a63f505"
  },
  {
    "url": "06-03.jpg",
    "revision": "239fa5fb2a9063f1e261ae2db81fceef"
  },
  {
    "url": "06-04.jpg",
    "revision": "a2dbf924afd6a8580ce4a2d2bcd6e049"
  },
  {
    "url": "06-05.jpg",
    "revision": "22f4f542b283cdc3d027eb664424d3c8"
  },
  {
    "url": "06-06.jpg",
    "revision": "12017ddd5b9179e8f53e93044acee998"
  },
  {
    "url": "06-07.jpg",
    "revision": "1ded65fc56da9f0008ae4ef2eacc8175"
  },
  {
    "url": "1.jpg",
    "revision": "f1ea37a492254cc85dd6fd1e89b1a6b4"
  },
  {
    "url": "1.png",
    "revision": "d41d8cd98f00b204e9800998ecf8427e"
  },
  {
    "url": "12-01.jpg",
    "revision": "cc85570b3c89f73291af87791115986a"
  },
  {
    "url": "12-02.jpg",
    "revision": "f2b24c5c4beb21d5302c64b59445927a"
  },
  {
    "url": "12-03.jpg",
    "revision": "61fe98dff39d0887978deb0af605571b"
  },
  {
    "url": "12-04.jpg",
    "revision": "ff2468e7fbb03e034be0ffd7312dc7d9"
  },
  {
    "url": "12-05.jpg",
    "revision": "a126fe17514d81279c677666fd459d9d"
  },
  {
    "url": "12-06.jpg",
    "revision": "c25686b2f77ac7c5a2d4706f43e40132"
  },
  {
    "url": "12-07.jpg",
    "revision": "de17f3eb1df503250bcf1a5a4b533eec"
  },
  {
    "url": "12-08.jpg",
    "revision": "f3b58c768c18919a6fa2ab59ea6627db"
  },
  {
    "url": "13-01.jpg",
    "revision": "b22f06060909d43d796a8ffd4b0743a0"
  },
  {
    "url": "13-02.jpg",
    "revision": "2d2bca0518716a8dfaf37ef5c15e54ee"
  },
  {
    "url": "13-03.jpg",
    "revision": "fec1a3db903dc05c462fb6f384a400d6"
  },
  {
    "url": "2.jpg",
    "revision": "572bc2e4ef3efb7c81bbbcac5f09147b"
  },
  {
    "url": "3.jpg",
    "revision": "248757985bb49f73624c6923057530ac"
  },
  {
    "url": "4.jpg",
    "revision": "407c52446e2e463c4f8e494d52dbe485"
  },
  {
    "url": "404.html",
    "revision": "9e279cf572d5d980ead2814f379bbbda"
  },
  {
    "url": "5.jpg",
    "revision": "7e861769b640afa00fcc0ac4b72d9c52"
  },
  {
    "url": "assets/css/0.styles.103460df.css",
    "revision": "ea97775a2ca9dd392f4aa19ab99ce8e2"
  },
  {
    "url": "assets/img/1_get.40060bfb.png",
    "revision": "40060bfbebfd783cba4ab0d3df6f6355"
  },
  {
    "url": "assets/img/2_post_(test).cdb8c940.png",
    "revision": "cdb8c9401c15aafdea21c52d63ab5493"
  },
  {
    "url": "assets/img/2_post.92c9de72.png",
    "revision": "92c9de720071e78886abf57d6189c4b6"
  },
  {
    "url": "assets/img/3_put_(test).02dfcccd.png",
    "revision": "02dfcccdfeb227918b73b220249cb0b7"
  },
  {
    "url": "assets/img/3_put.fdd47653.png",
    "revision": "fdd476539086ef0bbb7bbdba57fedc6d"
  },
  {
    "url": "assets/img/4_delete_(test).218cbf7f.png",
    "revision": "218cbf7f704df651bcd5c59d8c673a4c"
  },
  {
    "url": "assets/img/4_delete.ebec0f73.png",
    "revision": "ebec0f737cc229df218bddc190d69adc"
  },
  {
    "url": "assets/img/relation_scheme.5720773c.png",
    "revision": "5720773c9758a4bdc326f511a469a74b"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.c2d6dd61.js",
    "revision": "8f4057e904de8901a9080ca2e7942b29"
  },
  {
    "url": "assets/js/11.603171d8.js",
    "revision": "2236bfcbc49677c60c3b0fda1eda054b"
  },
  {
    "url": "assets/js/12.c1d64cde.js",
    "revision": "423728ab885fd31ebf6d69834ae9cd1c"
  },
  {
    "url": "assets/js/13.dd1cbc0f.js",
    "revision": "bb06539f5f0715aaaa37b87ff1d5ea74"
  },
  {
    "url": "assets/js/14.36796f7d.js",
    "revision": "50df2bba4e7f9272ff6d717f924b6732"
  },
  {
    "url": "assets/js/15.9c6bcc86.js",
    "revision": "b0f69eb1e82c25a6e39404b17100d6bf"
  },
  {
    "url": "assets/js/16.e35a6dc4.js",
    "revision": "f732684eaab501586c368a3ad236eeb0"
  },
  {
    "url": "assets/js/17.9c36ab79.js",
    "revision": "954b6c882d2b785d939ab430700ac49c"
  },
  {
    "url": "assets/js/18.552fc511.js",
    "revision": "d953b83e23ebcad11c212bf5a550b3dd"
  },
  {
    "url": "assets/js/19.520fcdb4.js",
    "revision": "304f4e4cd4dd50d4511d36ec4c62b8c0"
  },
  {
    "url": "assets/js/2.b147f31f.js",
    "revision": "63318108ce286da836d2a38584f50182"
  },
  {
    "url": "assets/js/20.1ea3a510.js",
    "revision": "cd3e4cb90711e8219ba18fcf84d56826"
  },
  {
    "url": "assets/js/21.a60442e6.js",
    "revision": "a88722212b5f856275b022be964596b1"
  },
  {
    "url": "assets/js/22.1d40512f.js",
    "revision": "04fcea0a2a3d3f8a185e3b2875a4a42f"
  },
  {
    "url": "assets/js/23.d217b01a.js",
    "revision": "fc78062b807c61a3b8db34c58a10e866"
  },
  {
    "url": "assets/js/24.1b0d5ac6.js",
    "revision": "e0cf6f4647d572d332a29ef8711b93a4"
  },
  {
    "url": "assets/js/26.f5424b81.js",
    "revision": "24923da10b396b1a8796fc5698e01360"
  },
  {
    "url": "assets/js/3.a5664780.js",
    "revision": "453f3f07a55ac641fb599bc7281f672e"
  },
  {
    "url": "assets/js/4.8211a5d0.js",
    "revision": "18ce14d312c3d494dc613083f57bbf6e"
  },
  {
    "url": "assets/js/5.22a8c3cd.js",
    "revision": "859d0d25ceb8cd189fa6450460efe1db"
  },
  {
    "url": "assets/js/6.6cd70278.js",
    "revision": "7a8e773b0b2158f77779ca991c47cef5"
  },
  {
    "url": "assets/js/7.c0467edb.js",
    "revision": "f02ea9f667d8a109d1a08873f5350441"
  },
  {
    "url": "assets/js/8.18d20163.js",
    "revision": "06260b4320d12135315dd551c1e4658c"
  },
  {
    "url": "assets/js/9.2e26f8b0.js",
    "revision": "ca1ee0f65168061be63e2ceaea08d5f3"
  },
  {
    "url": "assets/js/app.4cf4fd48.js",
    "revision": "d52cebec196b69cf68e99aaa627053e7"
  },
  {
    "url": "conclusion/index.html",
    "revision": "1ead875368cc8346902fb926c9cbe0ea"
  },
  {
    "url": "design/index.html",
    "revision": "d755ca002c455bad12571d8449db20c2"
  },
  {
    "url": "index.html",
    "revision": "84d5e31ccc1c3e7fc398fd577d9379f1"
  },
  {
    "url": "intro/index.html",
    "revision": "9a0b872d17d9125bfc8d3018f2774b27"
  },
  {
    "url": "license.html",
    "revision": "70a2edbdcd1a16b29dc6ec11e14ab937"
  },
  {
    "url": "myAvatar.png",
    "revision": "b76db1e62eb8e7fca02a487eb3eac10c"
  },
  {
    "url": "requirements/index.html",
    "revision": "2952fee99663461e1cb55db64e8d4d2a"
  },
  {
    "url": "requirements/stakeholders-needs.html",
    "revision": "0a594c83da7989bb1e085fae6da78465"
  },
  {
    "url": "requirements/state-of-the-art.html",
    "revision": "ecacc0ab5c5cb24b813bb7cf0b412568"
  },
  {
    "url": "software/index.html",
    "revision": "2d2afd40213bcebdb998e3c09659e4e9"
  },
  {
    "url": "test/index.html",
    "revision": "b2e5b81de218bc8cdba336d3f089c568"
  },
  {
    "url": "use cases/index.html",
    "revision": "3b1476bcb44391b2b429ffbb2bc455dd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
