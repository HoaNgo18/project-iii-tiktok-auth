/**
 * TikTok API handling — Authorization & Token management.
 * This is a placeholder for integrating TikTok's OAuth 2.0 flow
 * and API calls for content publishing.
 */
(function () {
  'use strict';

  /* TikTok OAuth configuration — update with your app credentials */
  var TIKTOK_CONFIG = {
    clientKey: '',
    clientSecret: '',
    redirectUri: window.location.origin + '/tiktok/callback.html',
    authEndpoint: 'https://www.tiktok.com/v2/auth/authorize/',
    tokenEndpoint: 'https://open.tiktokapis.com/v2/oauth/token/'
  };

  /* Build TikTok authorization URL */
  function getAuthUrl() {
    var params = new URLSearchParams({
      client_key: TIKTOK_CONFIG.clientKey,
      response_type: 'code',
      scope: 'user.info.basic,video.publish,video.upload',
      redirect_uri: TIKTOK_CONFIG.redirectUri,
      state: generateState()
    });

    return TIKTOK_CONFIG.authEndpoint + '?' + params.toString();
  }

  function generateState() {
    return Math.random().toString(36).substring(2, 15) +
           Math.random().toString(36).substring(2, 15);
  }

  /* Parse callback parameters from URL */
  function getCallbackParams() {
    var params = new URLSearchParams(window.location.search);
    return {
      code: params.get('code'),
      state: params.get('state'),
      error: params.get('error'),
      error_description: params.get('error_description')
    };
  }

  /* Exchange authorization code for access token */
  function exchangeToken(code) {
    return fetch(TIKTOK_CONFIG.tokenEndpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        client_key: TIKTOK_CONFIG.clientKey,
        client_secret: TIKTOK_CONFIG.clientSecret,
        code: code,
        grant_type: 'authorization_code',
        redirect_uri: TIKTOK_CONFIG.redirectUri
      })
    }).then(function (res) {
      if (!res.ok) throw new Error('Token exchange failed');
      return res.json();
    });
  }

  /* Expose to global scope for use in other modules */
  window.TikTokAuth = {
    getAuthUrl: getAuthUrl,
    getCallbackParams: getCallbackParams,
    exchangeToken: exchangeToken
  };
})();
