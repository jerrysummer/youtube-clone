import { SEARCH, SELECT_VIDEO } from '../helpers/constants';

export default (state = initialState, action) => {
  switch (action.type) {
    case SEARCH:
      return action.payload.items[0];
    case SELECT_VIDEO:
      return action.payload;
    default:
      return state;
  }
}


const initialState = { "kind": "youtube#searchResult", "etag": "\"_gJQceDMxJ8gP-8T2HLXUoURK8c/rN_4Qw6wTIjnutA8bqgcbXnCjog\"", "id": { "kind": "youtube#video", "videoId": "T5ZkSWTdbb4" }, "snippet": { "publishedAt": "2010-08-26T17:56:51.000Z", "channelId": "UC5vG9OAYxLX169iAFGW5rbg", "title": "JS - Ice Cream", "description": "JS Ice Cream.", "thumbnails": { "default": { "url": "https://i.ytimg.com/vi/T5ZkSWTdbb4/default.jpg", "width": 120, "height": 90 }, "medium": { "url": "https://i.ytimg.com/vi/T5ZkSWTdbb4/mqdefault.jpg", "width": 320, "height": 180 }, "high": { "url": "https://i.ytimg.com/vi/T5ZkSWTdbb4/hqdefault.jpg", "width": 480, "height": 360 } }, "channelTitle": "Yoshii", "liveBroadcastContent": "none" } };
