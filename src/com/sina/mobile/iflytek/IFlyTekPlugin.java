package com.sina.mobile.iflytek;

import java.util.ArrayList;

import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.util.Log;

import com.iflytek.speech.RecognizerResult;
import com.iflytek.speech.SpeechConfig.RATE;
import com.iflytek.speech.SpeechError;
import com.iflytek.ui.RecognizerDialog;
import com.iflytek.ui.RecognizerDialogListener;

public class IFlyTekPlugin extends CordovaPlugin {
	private static final String TAG = IFlyTekPlugin.class.getSimpleName();

	private RecognizerDialog iatDialog;

	private String listenerName = "onResults";

	@Override
	public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException{
		if ("init".equals(action)) {
			iatDialog = new RecognizerDialog(this.webView.getContext(),"appid=51236408");
			Log.d(TAG, "init end");

		} else if (action.equals("setOption")) {
			iatDialog.setEngine("sms", null, null);
            iatDialog.setSampleRate(RATE.rate8k);

			Log.d(TAG, "setOption end");

		} else if (action.equals("setListener")) {
			this.listenerName = args.optString(0);
		} else if (action.equals("start")) {
			Runnable runnable = new Runnable() {
				@Override
				public void run() {
					RecognizerDialogListener recognizerListener = new RecognizerDialogListener() {
						@Override
						public void onEnd(SpeechError error) {
							Log.d(TAG, "onEnd: " + error);
							int errorCode = 0;
							String message = "成功";
							if (error != null) {
								errorCode = error.getErrorCode();
								message = error.getErrorDesc();
							}

							JSONObject jo = new JSONObject();
							try {
								jo.put("errorCode", errorCode);
								jo.put("message", message);
							} catch (JSONException e) {
								e.printStackTrace();
							}

                            callbackContext.success("get out");
						}

						@Override
						public void onResults(
								ArrayList<RecognizerResult> results,
								boolean isLast) {
							Log.d(TAG, "onResults: isLast: " + isLast);

							try {
								String json = Object2Json.toJSONString(results);
								Log.d(TAG, "json: " + json);
								JSONArray ja = new JSONArray(json);
								JSONObject jo = new JSONObject();
								jo.put("results", ja);
								jo.put("isLast", isLast);

								IFlyTekPlugin.this.webView
										.loadUrl("javascript:"
                                                + IFlyTekPlugin.this.listenerName
                                                + "(" + jo.toString() + ")");
							} catch (JSONException e) {
								e.printStackTrace();
							}
						}
					};

					iatDialog.setListener(recognizerListener);
					iatDialog.show();
				}
			};
			this.cordova.getActivity().runOnUiThread(runnable);

			Log.d(TAG, "start end");

		}
        return false;
	}

}
