package com.HeartVoice;

import android.content.Context;
import android.util.Log;
import android.view.OrientationEventListener;
import org.apache.cordova.CordovaWebView;
import org.apache.cordova.api.CallbackContext;

public class OrientationListener extends OrientationEventListener {


    private CordovaWebView webView;
    public static final int THRESHOLD = 15;
    public String currentOrientation = "Portrait";

    public OrientationListener(Context context, int rate, CordovaWebView webView, CallbackContext callbackContext) {
        super(context, rate);
        this.webView = webView;
    }

    @Override
    public void onOrientationChanged(int angle) {
        if (isChangedOrientation(angle, 90, 270, "Landscape")){
            Log.d("Orientation Changed:", "From Portrait to Landscape");
            webView.loadUrl("javascript:orientationChanged('Landscape')");
        } else if(isChangedOrientation(angle, 0, 360, "Portrait")) {
            Log.d("Orientation Changed:", "From Landscape to Portrait");
            webView.loadUrl("javascript:orientationChanged('Portrait')");
        }
    }

    private boolean isChangedOrientation(int angle, int first, int last, String orientation) {
       if (angle >= (first - THRESHOLD) && angle <= (first + THRESHOLD) || angle >= (last - THRESHOLD) && angle <= (last + THRESHOLD)) {
          if (!currentOrientation.equals(orientation)){
              currentOrientation = orientation;
              return true;
          }
       }
       return false;
    }
}
