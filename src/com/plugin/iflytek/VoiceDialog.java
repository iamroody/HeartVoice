package com.plugin.iflytek;

import android.content.Context;
import com.iflytek.speech.SpeechConfig;
import com.iflytek.ui.RecognizerDialog;
import com.iflytek.ui.RecognizerDialogListener;

public class VoiceDialog {
    private final RecognizerDialog iatDialog;

    public VoiceDialog(Context context, RecognizerDialogListener recognizerListener) {
        iatDialog = new RecognizerDialog(context, "appid=51236408");
        iatDialog.setEngine("sms", null, null);
        iatDialog.setSampleRate(SpeechConfig.RATE.rate8k);
        iatDialog.setListener(recognizerListener);
    }

    public void openDialog() {
        iatDialog.show();
    }
}
