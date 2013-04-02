package com.HeartVoice;

import android.hardware.SensorManager;
import android.os.Bundle;
import android.util.Log;
import android.view.OrientationEventListener;
import org.apache.cordova.*;

public class MyActivity extends DroidGap {
    /**
     * Called when the activity is first created.
     */
    OrientationEventListener myOrientationEventListener;

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.loadUrl("file:///android_asset/www/index.html");
    }

}
