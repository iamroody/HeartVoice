package com.sina.mobile.iflytek;

import android.util.Log;
import com.iflytek.speech.RecognizerResult;
import com.iflytek.speech.SpeechError;
import com.iflytek.ui.RecognizerDialogListener;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.api.CallbackContext;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;

public class VoiceDialogListener implements RecognizerDialogListener {
    private CordovaWebView webView;
    private CallbackContext callbackContext;
    private static final String TAG = IFlyTekNewPlugin.class.getSimpleName();


    public VoiceDialogListener(CordovaWebView webView, CallbackContext callbackContext) {
        this.webView = webView;
        this.callbackContext = callbackContext;
    }

    @Override
    public void onResults(ArrayList<RecognizerResult> recognizerResults, boolean isLast) {
        String json = Object2Json.toJSONString(recognizerResults);
        try {
            JSONArray ja = new JSONArray(json);
            JSONObject jo = new JSONObject();
            jo.put("results", ja);
            jo.put("isLast", isLast);
            webView.loadUrl("javascript:onResults("+ jo.toString() +")");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        Log.d(TAG, ": Get into VoiceDialog");
        Log.d(TAG, ": " + json);
    }

    @Override
    public void onEnd(SpeechError speechError) {
        Log.d(TAG, ": Get into VoiceDialog on END");
        callbackContext.success();
    }
}
