package com.HeartVoice;

import android.os.Bundle;
import org.apache.cordova.*;

public class MyActivity extends DroidGap {
    /**
     * Called when the activity is first created.
     */

    @Override
    public void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        super.setIntegerProperty("splashscreen", R.drawable.splash);
        super.loadUrl("file:///android_asset/www/index.html", 10000);
    }

}
