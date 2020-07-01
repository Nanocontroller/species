// Copyright (c) 2019 8th Wall, Inc.
//
// app.js is the main entry point for your 8th Wall app. Code here will execute after head.html
// is loaded, and before body.html is loaded.

import {gestureDetectorComponent} from './gesture-detector'
import {holdDragComponent} from './hold-drag'
import {pinchScaleComponent} from './pinch-scale'
import {twoFingerSpinComponent} from './two-finger-spin'

AFRAME.registerComponent('gesture-detector', gestureDetectorComponent())
AFRAME.registerComponent('hold-drag', holdDragComponent())
AFRAME.registerComponent('pinch-scale', pinchScaleComponent())
AFRAME.registerComponent('two-finger-spin', twoFingerSpinComponent())
