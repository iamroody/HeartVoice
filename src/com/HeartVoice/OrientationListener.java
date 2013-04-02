package com.HeartVoice;

import android.content.Context;
import android.util.Log;
import android.view.OrientationEventListener;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.api.CallbackContext;

public class OrientationListener extends OrientationEventListener {


    private CordovaWebView webView;
    private CallbackContext callbackContext;

    public OrientationListener(Context context, int rate, CordovaWebView webView, CallbackContext callbackContext) {
        super(context, rate);
        this.webView = webView;
        this.callbackContext = callbackContext;
    }

    @Override
    public void onOrientationChanged(int orientation) {
        webView.loadUrl("javascript:alert('hello world');");
    }
}
