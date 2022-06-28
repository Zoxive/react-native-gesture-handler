package com.swmansion.gesturehandler

import android.view.View
import com.facebook.react.bridge.ReactContext
import com.facebook.react.fabric.FabricUIManager
import com.facebook.react.uimanager.UIManagerHelper
import com.facebook.react.uimanager.common.UIManagerType
import com.facebook.react.uimanager.events.Event

fun ReactContext.dispatchEvent(event: Event<*>) {
    val fabricUIManager = UIManagerHelper.getUIManager(this, UIManagerType.FABRIC) as FabricUIManager
    fabricUIManager.eventDispatcher.dispatchEvent(event)
}

fun ReactContext.resolveView(viewTag: Int): View {
    val fabricUIManager = UIManagerHelper.getUIManager(this, UIManagerType.FABRIC) as FabricUIManager
    return fabricUIManager.resolveView(viewTag)
}
