"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[6467],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),u=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(h,s(s({ref:t},c),{},{components:n})):a.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var u=2;u<o;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},4870:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u}});var a=n(3117),r=(n(7294),n(3905));const o={id:"gesture-composition",title:"Gesture composition & interactions",sidebar_label:"Gesture composition & interactions",sidebar_position:4},s=void 0,i={unversionedId:"fundamentals/gesture-composition",id:"fundamentals/gesture-composition",title:"Gesture composition & interactions",description:"Composing gestures is much simpler in RNGH2, you don't need to create a ref for every gesture that depends on another one. Instead you can use Race, Simultaneous and Exclusive methods provided by the Gesture object.",source:"@site/docs/fundamentals/gesture-composition.md",sourceDirName:"fundamentals",slug:"/fundamentals/gesture-composition",permalink:"/react-native-gesture-handler/docs/fundamentals/gesture-composition",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/fundamentals/gesture-composition.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{id:"gesture-composition",title:"Gesture composition & interactions",sidebar_label:"Gesture composition & interactions",sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Quick start",permalink:"/react-native-gesture-handler/docs/fundamentals/quickstart/"},next:{title:"Manual gestures",permalink:"/react-native-gesture-handler/docs/fundamentals/manual-gestures/"}},l={},u=[{value:"Race",id:"race",level:2},{value:"Simultaneous",id:"simultaneous",level:2},{value:"Exclusive",id:"exclusive",level:2},{value:"requireExternalGestureToFail",id:"requireexternalgesturetofail",level:2},{value:"blocksExternalGesture",id:"blocksexternalgesture",level:2},{value:"simultaneousWithExternalGesture",id:"simultaneouswithexternalgesture",level:2}],c={toc:u};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Composing gestures is much simpler in RNGH2, you don't need to create a ref for every gesture that depends on another one. Instead you can use ",(0,r.kt)("inlineCode",{parentName:"p"},"Race"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Simultaneous")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"Exclusive")," methods provided by the ",(0,r.kt)("inlineCode",{parentName:"p"},"Gesture")," object."),(0,r.kt)("h2",{id:"race"},"Race"),(0,r.kt)("p",null,"Only one of the provided gestures can become active at the same time. The first gesture to become active will cancel the rest of the gestures. It accepts variable number of arguments.\nIt is the equivalent to having more than one gesture handler without defining ",(0,r.kt)("inlineCode",{parentName:"p"},"simultaneousHandlers")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"waitFor")," props."),(0,r.kt)("p",null,"For example, lets say that you have a component that you want to make draggable but you also want to show additional options on long press. Presumably you would not want the component to move after the long press activates. You can accomplish this using ",(0,r.kt)("inlineCode",{parentName:"p"},"Race"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSharedValue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { GestureDetector, Gesture } from 'react-native-gesture-handler';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const offset = useSharedValue({ x: 0, y: 0 });\n  const start = useSharedValue({ x: 0, y: 0 });\n  const popupPosition = useSharedValue({ x: 0, y: 0 });\n  const popupAlpha = useSharedValue(0);\n\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      transform: [\n        { translateX: offset.value.x },\n        { translateY: offset.value.y },\n      ],\n    };\n  });\n\n  const animatedPopupStyles = useAnimatedStyle(() => {\n    return {\n      transform: [\n        { translateX: popupPosition.value.x },\n        { translateY: popupPosition.value.y },\n      ],\n      opacity: popupAlpha.value,\n    };\n  });\n\n  const dragGesture = Gesture.Pan()\n    .onStart((_e) => {\n      popupAlpha.value = withTiming(0);\n    })\n    .onUpdate((e) => {\n      offset.value = {\n        x: e.translationX + start.value.x,\n        y: e.translationY + start.value.y,\n      };\n    })\n    .onEnd(() => {\n      start.value = {\n        x: offset.value.x,\n        y: offset.value.y,\n      };\n    });\n\n  const longPressGesture = Gesture.LongPress().onStart((_event) => {\n    popupPosition.value = { x: offset.value.x, y: offset.value.y };\n    popupAlpha.value = withTiming(1);\n  });\n\n  const composed = Gesture.Race(dragGesture, longPressGesture);\n\n  return (\n    <Animated.View>\n      <Popup style={animatedPopupStyles} />\n      <GestureDetector gesture={composed}>\n        <Component style={animatedStyles} />\n      </GestureDetector>\n    </Animated.View>\n  );\n}\n")),(0,r.kt)("h2",{id:"simultaneous"},"Simultaneous"),(0,r.kt)("p",null,"All of the provided gestures can activate at the same time. Activation of one will not cancel the other.\nIt is the equivalent to having some gesture handlers, each with ",(0,r.kt)("inlineCode",{parentName:"p"},"simultaneousHandlers")," prop set to the other handlers."),(0,r.kt)("p",null,"For example, if you want to make a gallery app, you might want user to be able to zoom, rotate and pan around photos. You can do it with ",(0,r.kt)("inlineCode",{parentName:"p"},"Simultaneous"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSharedValue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { GestureDetector, Gesture } from 'react-native-gesture-handler';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n} from 'react-native-reanimated';\n\nfunction App() {\n  const offset = useSharedValue({ x: 0, y: 0 });\n  const start = useSharedValue({ x: 0, y: 0 });\n  const scale = useSharedValue(1);\n  const savedScale = useSharedValue(1);\n  const rotation = useSharedValue(0);\n  const savedRotation = useSharedValue(0);\n  const animatedStyles = useAnimatedStyle(() => {\n    return {\n      transform: [\n        { translateX: offset.value.x },\n        { translateY: offset.value.y },\n        { scale: scale.value },\n        { rotateZ: `${rotation.value}rad` },\n      ],\n    };\n  });\n\n  const dragGesture = Gesture.Pan()\n    .averageTouches(true)\n    .onUpdate((e) => {\n      offset.value = {\n        x: e.translationX + start.value.x,\n        y: e.translationY + start.value.y,\n      };\n    })\n    .onEnd(() => {\n      start.value = {\n        x: offset.value.x,\n        y: offset.value.y,\n      };\n    });\n\n  const zoomGesture = Gesture.Pinch()\n    .onUpdate((event) => {\n      scale.value = savedScale.value * event.scale;\n    })\n    .onEnd(() => {\n      savedScale.value = scale.value;\n    });\n\n  const rotateGesture = Gesture.Rotation()\n    .onUpdate((event) => {\n      rotation.value = savedRotation.value + event.rotation;\n    })\n    .onEnd(() => {\n      savedRotation.value = rotation.value;\n    });\n\n  const composed = Gesture.Simultaneous(\n    dragGesture,\n    Gesture.Simultaneous(zoomGesture, rotateGesture)\n  );\n\n  return (\n    <Animated.View>\n      <GestureDetector gesture={composed}>\n        <Photo style={animatedStyles} />\n      </GestureDetector>\n    </Animated.View>\n  );\n}\n")),(0,r.kt)("h2",{id:"exclusive"},"Exclusive"),(0,r.kt)("p",null,"Only one of the provided gestures can become active, with the first one having a higher priority than the second one (if both gestures are still possible, the second one will wait for the first one to fail before it activates), second one having a higher priority than the third one, and so on.\nIt is equivalent to having some gesture handlers where the second one has the ",(0,r.kt)("inlineCode",{parentName:"p"},"waitFor")," prop set to the first handler, third one has the ",(0,r.kt)("inlineCode",{parentName:"p"},"waitFor")," prop set to the first and the second one, and so on."),(0,r.kt)("p",null,"For example, if you want to make a component that responds to single tap as well as to a double tap, you can accomplish that using ",(0,r.kt)("inlineCode",{parentName:"p"},"Exclusive"),":"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Note: the ",(0,r.kt)("inlineCode",{parentName:"p"},"useSharedValue")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"useAnimatedStyle")," are part of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.swmansion.com/react-native-reanimated/"},(0,r.kt)("inlineCode",{parentName:"a"},"react-native-reanimated")),".")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { GestureDetector, Gesture } from 'react-native-gesture-handler';\n\nfunction App() {\n  const singleTap = Gesture.Tap().onEnd((_event, success) => {\n    if (success) {\n      console.log('single tap!');\n    }\n  });\n  const doubleTap = Gesture.Tap()\n    .numberOfTaps(2)\n    .onEnd((_event, success) => {\n      if (success) {\n        console.log('double tap!');\n      }\n    });\n\n  const taps = Gesture.Exclusive(doubleTap, singleTap);\n\n  return (\n    <GestureDetector gesture={taps}>\n      <Component />\n    </GestureDetector>\n  );\n}\n")),(0,r.kt)("h1",{id:"cross-component-interactions"},"Cross-component interactions"),(0,r.kt)("p",null,"You may have noticed that gesture composition described above requires you to mount all of the composed gestures under a single ",(0,r.kt)("inlineCode",{parentName:"p"},"GestureDetector"),", effectively attaching them to the same underlying component. You can customize how gestures interact with each other across multiple components in a couple of ways:"),(0,r.kt)("h2",{id:"requireexternalgesturetofail"},"requireExternalGestureToFail"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"requireExternalGestureToFail")," allows to delay activation of the handler until all handlers passed as arguments to this method fail (or don't begin at all)."),(0,r.kt)("p",null,"For example, you may want to have two nested components, both of them can be tapped by the user to trigger different actions: outer view requires one tap, but the inner one requires 2 taps. If you don't want the first tap on the inner view to activate the outer handler, you must make the outer gesture wait until the inner one fails:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, StyleSheet } from 'react-native';\nimport {\n  GestureDetector,\n  Gesture,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n\nexport default function Example() {\n  const innerTap = Gesture.Tap()\n    .numberOfTaps(2)\n    .onStart(() => {\n      console.log('inner tap');\n    });\n\n  const outerTap = Gesture.Tap()\n    .onStart(() => {\n      console.log('outer tap');\n    })\n    .requireExternalGestureToFail(innerTap);\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <GestureDetector gesture={outerTap}>\n        <View style={styles.outer}>\n          <GestureDetector gesture={innerTap}>\n            <View style={styles.inner} />\n          </GestureDetector>\n        </View>\n      </GestureDetector>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  outer: {\n    width: 250,\n    height: 250,\n    backgroundColor: 'lightblue',\n  },\n  inner: {\n    width: 100,\n    height: 100,\n    backgroundColor: 'blue',\n    alignSelf: 'center',\n  },\n});\n")),(0,r.kt)("h2",{id:"blocksexternalgesture"},"blocksExternalGesture"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"blocksExternalGesture")," works similarily to ",(0,r.kt)("inlineCode",{parentName:"p"},"requireExternalGestureToFail")," but the direction of the relation is reversed - instead of being one-to-many relation, it's many-to-one. It's especially useful for making lists where the ",(0,r.kt)("inlineCode",{parentName:"p"},"ScrollView")," component needs to wait for every gesture underneath it. All that's required to do is to pass a ref, for example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React, { useRef } from 'react';\nimport { StyleSheet } from 'react-native';\nimport {\n  GestureDetector,\n  Gesture,\n  GestureHandlerRootView,\n  ScrollView,\n} from 'react-native-gesture-handler';\nimport Animated, {\n  useSharedValue,\n  useAnimatedStyle,\n  withTiming,\n} from 'react-native-reanimated';\n\nconst ITEMS = ['red', 'green', 'blue', 'yellow'];\n\nfunction Item({ backgroundColor, scrollRef }) {\n  const scale = useSharedValue(1);\n  const zIndex = useSharedValue(1);\n\n  const pinch = Gesture.Pinch()\n    .blocksExternalGesture(scrollRef)\n    .onBegin(() => {\n      zIndex.value = 100;\n    })\n    .onChange((e) => {\n      scale.value *= e.scaleChange;\n    })\n    .onFinalize(() => {\n      scale.value = withTiming(1, undefined, (finished) => {\n        if (finished) {\n          zIndex.value = 1;\n        }\n      });\n    });\n\n  const animatedStyles = useAnimatedStyle(() => ({\n    transform: [{ scale: scale.value }],\n    zIndex: zIndex.value,\n  }));\n\n  return (\n    <GestureDetector gesture={pinch}>\n      <Animated.View\n        style={[\n          { backgroundColor: backgroundColor },\n          styles.item,\n          animatedStyles,\n        ]}\n      />\n    </GestureDetector>\n  );\n}\n\nexport default function Example() {\n  const scrollRef = useRef();\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <ScrollView style={styles.container} ref={scrollRef}>\n        {ITEMS.map((item) => (\n          <Item backgroundColor={item} key={item} scrollRef={scrollRef} />\n        ))}\n      </ScrollView>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n  },\n  item: {\n    flex: 1,\n    aspectRatio: 1,\n  },\n});\n")),(0,r.kt)("h2",{id:"simultaneouswithexternalgesture"},"simultaneousWithExternalGesture"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"simultaneousWithExternalGesture")," allows gestures across different components to be recognized simultaneously. For example, you may want to have two nested views, both with tap gesture attached. Both of them require one tap, but tapping the inner one should also activate the gesture attached to the outer view:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, StyleSheet } from 'react-native';\nimport {\n  GestureDetector,\n  Gesture,\n  GestureHandlerRootView,\n} from 'react-native-gesture-handler';\n\nexport default function Example() {\n  const innerTap = Gesture.Tap()\n    .onStart(() => {\n      console.log('inner tap');\n    });\n\n  const outerTap = Gesture.Tap()\n    .onStart(() => {\n      console.log('outer tap');\n    })\n    .simultaneousWithExternalGesture(innerTap);\n\n  return (\n    <GestureHandlerRootView style={styles.container}>\n      <GestureDetector gesture={outerTap}>\n        <View style={styles.outer}>\n          <GestureDetector gesture={innerTap}>\n            <View style={styles.inner} />\n          </GestureDetector>\n        </View>\n      </GestureDetector>\n    </GestureHandlerRootView>\n  );\n}\n\nconst styles = StyleSheet.create({\n  container: {\n    flex: 1,\n    alignItems: 'center',\n    justifyContent: 'center',\n  },\n  outer: {\n    width: 250,\n    height: 250,\n    backgroundColor: 'lightblue',\n  },\n  inner: {\n    width: 100,\n    height: 100,\n    backgroundColor: 'blue',\n    alignSelf: 'center',\n  },\n});\n")))}p.isMDXComponent=!0}}]);