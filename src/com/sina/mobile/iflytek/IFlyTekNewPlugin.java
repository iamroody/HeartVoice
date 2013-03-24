package com.sina.mobile.iflytek;

import android.test.suitebuilder.annotation.LargeTest;
import android.util.Log;
import com.iflytek.speech.SpeechError;
import com.iflytek.speech.SynthesizerPlayer;
import com.iflytek.speech.SynthesizerPlayerListener;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

public class IFlyTekNewPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {

        if ("recognizer".equals(action)) {
            Log.d("options:", args.toString());
            cordova.getActivity().runOnUiThread(new Runnable() {
                public void run() {
                    VoiceDialog voiceDialog = new VoiceDialog(cordova.getActivity(), new VoiceDialogListener(webView, callbackContext));
                    voiceDialog.openDialog();
                }
            });
            return true;
        } else if ("synthesizer".equals(action)){
            JSONObject object = args.getJSONObject(0);
            String appId = object.getString("appId");
            String voiceName = object.getString("voiceName");
            String content = object.getString("content");

            SynthesizerPlayer player = SynthesizerPlayer.createSynthesizerPlayer(cordova.getActivity(), "appid="+appId);
            player.setVoiceName(voiceName);
            player.playText(content,"tts_buffer_time=2000", new PlayListener(webView, callbackContext));
        }
        return true;
    }
}
