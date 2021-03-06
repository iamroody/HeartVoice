package com.plugin.screen;

import android.app.Activity;
import android.content.pm.ActivityInfo;
import android.hardware.SensorManager;
import android.util.Log;
import android.view.OrientationEventListener;
import android.view.Window;
import android.view.WindowManager;
import org.apache.cordova.api.CallbackContext;
import org.apache.cordova.api.CordovaPlugin;
import org.apache.cordova.api.PluginResult;
import org.json.JSONArray;
import org.json.JSONException;

public class ScreenOrientation extends CordovaPlugin {
    private static final String UNSPECIFIED = "unspecified";
    private static final String LANDSCAPE = "landscape";
    private static final String PORTRAIT = "portrait";
    private static final String USER = "user";
    private static final String BEHIND = "behind";
    private static final String SENSOR = "sensor";
    private static final String NOSENSOR = "nosensor";
    private static final String SENSOR_LANDSCAPE = "sensorLandscape";
    private static final String SENSOR_PORTRAIT = "sensorPortrait";
    private static final String REVERSE_LANDSCAPE = "reverseLandscape";
    private static final String REVERSE_PORTRAIT = "reversePortrait";
    private static final String FULL_SENSOR = "fullSensor";
    public static final String TAG = "ScreenOrientation";

    @Override
    public boolean execute(String action, JSONArray args, final CallbackContext callbackContext) throws JSONException {
        Activity activity = cordova.getActivity();
        if (action.equals("set")) {
            String orientation = args.optString(0);
            if (orientation.equals(UNSPECIFIED)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_UNSPECIFIED);
            } else if (orientation.equals(LANDSCAPE)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_LANDSCAPE);
            } else if (orientation.equals(PORTRAIT)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_PORTRAIT);
            } else if (orientation.equals(USER)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_USER);
            } else if (orientation.equals(BEHIND)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_BEHIND);
            } else if (orientation.equals(SENSOR)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR);
            } else if (orientation.equals(NOSENSOR)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_NOSENSOR);
            } else if (orientation.equals(SENSOR_LANDSCAPE)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_LANDSCAPE);
            } else if (orientation.equals(SENSOR_PORTRAIT)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_SENSOR_PORTRAIT);
            } else if (orientation.equals(REVERSE_LANDSCAPE)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_REVERSE_LANDSCAPE);
            } else if (orientation.equals(REVERSE_PORTRAIT)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_REVERSE_PORTRAIT);
            } else if (orientation.equals(FULL_SENSOR)) {
                activity.setRequestedOrientation(ActivityInfo.SCREEN_ORIENTATION_FULL_SENSOR);
            }
            return true;
        } else if (action.equals("detect")) {
            OrientationEventListener myOrientationEventListener;
            myOrientationEventListener = new OrientationListener(activity, SensorManager.SENSOR_DELAY_NORMAL, webView, callbackContext);
            if (myOrientationEventListener.canDetectOrientation()) {
                myOrientationEventListener.enable();
            } else {
                webView.loadUrl("javascript:alert('not support sensor detect')");
            }
            return true;
        } else if (action.equals("fullScreen")) {
            String operation = args.optString(0);
            Window window = activity.getWindow();
            if (operation.equals("enter")) {
                window.addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            } else {
                window.clearFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);
            }
            return true;
        }
        return false;
    }

}
