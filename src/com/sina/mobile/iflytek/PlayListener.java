package com.sina.mobile.iflytek;

import com.iflytek.speech.SpeechError;
import com.iflytek.speech.SynthesizerPlayerListener;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.api.CallbackContext;

public class PlayListener implements SynthesizerPlayerListener {
    private CordovaWebView webView;
    private CallbackContext callbackContext;

    public PlayListener(CordovaWebView webView, CallbackContext callbackContext) {
        this.webView = webView;
        this.callbackContext = callbackContext;
    }

    @Override
    public void onPlayBegin() {
        
    }

    @Override
    public void onBufferPercent(int i, int i2, int i3) {
        
    }

    @Override
    public void onPlayPaused() {
        
    }

    @Override
    public void onPlayResumed() {
        
    }

    @Override
    public void onPlayPercent(int i, int i2, int i3) {
        
    }

    @Override
    public void onEnd(SpeechError speechError) {
        
    }
}
