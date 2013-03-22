package com.sina.mobile.iflytek;

import com.iflytek.speech.RecognizerResult;
import com.iflytek.speech.SpeechError;
import com.iflytek.ui.RecognizerDialogListener;
import org.apache.cordova.api.CallbackContext;

import java.util.ArrayList;

public class VoiceDialogListener implements RecognizerDialogListener {
    private CallbackContext callbackContext;

    public VoiceDialogListener(CallbackContext callbackContext) {
        this.callbackContext = callbackContext;
    }

    @Override
    public void onResults(ArrayList<RecognizerResult> recognizerResults, boolean b) {
        String json = Object2Json.toJSONString(recognizerResults);
        System.out.println("json = " + json);
    }

    @Override
    public void onEnd(SpeechError speechError) {
        callbackContext.success();
    }
}
