package com.sina.mobile.iflytek;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;

public class IFlyTekNewPlugin extends CordovaPlugin {

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        cordova.getActivity().runOnUiThread(new Runnable() {
            public void run() {
                VoiceDialog voiceDialog = new VoiceDialog(cordova.getActivity(), new VoiceDialogListener(callbackContext));
                voiceDialog.openDialog();
            }
        });
        return true;
    }
}
