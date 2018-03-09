import { SEARCH } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      console.dir(action.payload);
      return action.payload;
    default:
      return state;
  }
}


const initialState = {
  "kind": "youtube#searchListResponse",
  "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/N6c2CakFOmZwNXEr2OXg895Kfwo\"",
  "nextPageToken": "CAUQAA",
  "regionCode": "US",
  "pageInfo": {
    "totalResults": 1000000,
    "resultsPerPage": 5
  },
  "items": [
    {
      "kind": "youtube#searchResult",
      "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/AWQIsnGyoABUtWDKw8D39lByR0c\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "fju9ii8YsGs"
      },
      "snippet": {
        "publishedAt": "2015-09-20T17:30:33.000Z",
        "channelId": "UCwRXb5dUK4cvsHbx-rGzSgw",
        "title": "JavaScript Tutorial",
        "description": "Get the Cheat Sheet Here : http://goo.gl/TxNsQO Best Book on JavaScript : http://amzn.to/1WbMYvm Support Me on Patreon : https://www.patreon.com/derekbanas 00:22 Introduction 03:27 Variables...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/fju9ii8YsGs/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/fju9ii8YsGs/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/fju9ii8YsGs/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Derek Banas",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/EkMZZ_zeL5yeChzsR--Lkm31MoE\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Ukg_U3CnJWI"
      },
      "snippet": {
        "publishedAt": "2014-08-05T14:30:15.000Z",
        "channelId": "UCc1Pn7FxieMohCZFPYEbs7w",
        "title": "Learn JavaScript in 12 Minutes",
        "description": "Learn the fundamental features of JavaScript - the language used to add dynamic, interactive content to websites. I teach you how to get started with JavaScript, how to use variables, operators,...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Ukg_U3CnJWI/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Ukg_U3CnJWI/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Ukg_U3CnJWI/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Jake Wright",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/_CaMwZqcKnWN8DIrnau3ZJ8h3VQ\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "vEROU2XtPR8"
      },
      "snippet": {
        "publishedAt": "2016-03-24T16:18:08.000Z",
        "channelId": "UC29ju8bIPH5as8OGnQzwJyA",
        "title": "JavaScript Fundamentals For Beginners",
        "description": "This is a mini-course on the fundamentals of not only JavaScript, but programming in general. We will cover the following... What is JavaScript? Variables & Data Types Loops Arrays Objects...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/vEROU2XtPR8/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/vEROU2XtPR8/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/vEROU2XtPR8/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Traversy Media",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/8RUSKWH_HaaIugF3xIFJ-R4O2Zs\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "Bv_5Zv5c-Ts"
      },
      "snippet": {
        "publishedAt": "2015-04-03T01:14:59.000Z",
        "channelId": "UCsFmLpSNJuFzpKqdEj5jeHw",
        "title": "JavaScript: Understanding the Weird Parts - The First 3.5 Hours",
        "description": "Full 12 hour course on sale for $19! https://www.udemy.com/understand-javascript/?couponCode=YOUTUBE19 (normal price $149) This is an advanced Javascript course for everyone, giving a deep...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/Bv_5Zv5c-Ts/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Tony Alicea",
        "liveBroadcastContent": "none"
      }
    },
    {
      "kind": "youtube#searchResult",
      "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/wRchBpFGoxOFexb6XbQLzZ5tYsM\"",
      "id": {
        "kind": "youtube#video",
        "videoId": "6MaOPdQPvow"
      },
      "snippet": {
        "publishedAt": "2015-10-29T00:23:29.000Z",
        "channelId": "UCfV36TX5AejfAGIbtwTc7Zw",
        "title": "10 Things To Master For JavaScript Beginners",
        "description": "THIS VIDEO IS SPONSORED BY -------------- The Tech Academy http://ow.ly/RAMO30fE7Oc HipsterCode (my website) https://www.hipstercode.com/ JOIN MY SLACK CHANNEL https://www.patreon.com...",
        "thumbnails": {
          "default": {
            "url": "https://i.ytimg.com/vi/6MaOPdQPvow/default.jpg",
            "width": 120,
            "height": 90
          },
          "medium": {
            "url": "https://i.ytimg.com/vi/6MaOPdQPvow/mqdefault.jpg",
            "width": 320,
            "height": 180
          },
          "high": {
            "url": "https://i.ytimg.com/vi/6MaOPdQPvow/hqdefault.jpg",
            "width": 480,
            "height": 360
          }
        },
        "channelTitle": "Chris Hawkes",
        "liveBroadcastContent": "none"
      }
    }
  ]
};
