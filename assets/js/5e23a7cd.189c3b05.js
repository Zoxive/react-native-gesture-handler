"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[9916],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),d=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(n),h=a,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||i;return n?r.createElement(m,o(o({ref:t},p),{},{components:n})):r.createElement(m,o({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:a,o[1]=s;for(var d=2;d<i;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9049:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var r=n(3117),a=(n(7294),n(3905));const i={id:"longpress-gh",title:"LongPressGestureHandler",sidebar_label:"Long press",sidebar_position:7},o=void 0,s={unversionedId:"gesture-handlers/longpress-gh",id:"gesture-handlers/longpress-gh",title:"LongPressGestureHandler",description:"Consider using the new gestures API instead. The old API is not actively supported and is not receiving the new features. Check out RNGH 2.0 section in Introduction for more information.",source:"@site/docs/gesture-handlers/longpress-gh.md",sourceDirName:"gesture-handlers",slug:"/gesture-handlers/longpress-gh",permalink:"/react-native-gesture-handler/docs/gesture-handlers/longpress-gh",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/gesture-handlers/longpress-gh.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{id:"longpress-gh",title:"LongPressGestureHandler",sidebar_label:"Long press",sidebar_position:7},sidebar:"tutorialSidebar",previous:{title:"Tap",permalink:"/react-native-gesture-handler/docs/gesture-handlers/tap-gh"},next:{title:"Rotation",permalink:"/react-native-gesture-handler/docs/gesture-handlers/rotation-gh"}},l={},d=[{value:"Properties",id:"properties",level:2},{value:"<code>minDurationMs</code>",id:"mindurationms",level:3},{value:"<code>maxDist</code>",id:"maxdist",level:3},{value:"Event data",id:"event-data",level:2},{value:"<code>x</code>",id:"x",level:3},{value:"<code>y</code>",id:"y",level:3},{value:"<code>absoluteX</code>",id:"absolutex",level:3},{value:"<code>absoluteY</code>",id:"absolutey",level:3},{value:"<code>duration</code>",id:"duration",level:3},{value:"Example",id:"example",level:2}],p={toc:d},u="wrapper";function c(e){let{components:t,...n}=e;return(0,a.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Consider using the new ",(0,a.kt)("a",{parentName:"p",href:"/docs/gestures/gesture"},"gestures API")," instead. The old API is not actively supported and is not receiving the new features. Check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/#rngh-20"},"RNGH 2.0 section in Introduction")," for more information.")),(0,a.kt)("p",null,"A discrete gesture handler that activates when the corresponding view is pressed for a sufficiently long time.\nThis handler's state will turn into ",(0,a.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#end"},"END")," immediately after the finger is released.\nThe handler will fail to recognize a touch event if the finger is lifted before the ",(0,a.kt)("a",{parentName:"p",href:"#mindurationms"},"minimum required time")," or if the finger is moved further than the ",(0,a.kt)("a",{parentName:"p",href:"#maxdist"},"allowable distance"),"."),(0,a.kt)("p",null,"The handler is implemented using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uilongpressgesturerecognizer"},"UILongPressGestureRecognizer")," on iOS and ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/android/src/main/java/com/swmansion/gesturehandler/core/LongPressGestureHandler.kt"},"LongPressGestureHandler")," on Android."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/common-gh#properties"},"set of properties inherited from base handler class"),". Below is a list of properties specific to the ",(0,a.kt)("inlineCode",{parentName:"p"},"LongPressGestureHandler")," component:"),(0,a.kt)("h3",{id:"mindurationms"},(0,a.kt)("inlineCode",{parentName:"h3"},"minDurationMs")),(0,a.kt)("p",null,"Minimum time, expressed in milliseconds, that a finger must remain pressed on the corresponding view. The default value is 500."),(0,a.kt)("h3",{id:"maxdist"},(0,a.kt)("inlineCode",{parentName:"h3"},"maxDist")),(0,a.kt)("p",null,"Maximum distance, expressed in points, that defines how far the finger is allowed to travel during a long press gesture. If the finger travels further than the defined distance and the handler hasn't yet ",(0,a.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#active"},"activated"),", it will fail to recognize the gesture. The default value is 10."),(0,a.kt)("h2",{id:"event-data"},"Event data"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/common-gh#event-data"},"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to the ",(0,a.kt)("inlineCode",{parentName:"p"},"LongPressGestureHandler")," component:"),(0,a.kt)("h3",{id:"x"},(0,a.kt)("inlineCode",{parentName:"h3"},"x")),(0,a.kt)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),(0,a.kt)("h3",{id:"y"},(0,a.kt)("inlineCode",{parentName:"h3"},"y")),(0,a.kt)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the view attached to the handler."),(0,a.kt)("h3",{id:"absolutex"},(0,a.kt)("inlineCode",{parentName:"h3"},"absoluteX")),(0,a.kt)("p",null,"X coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"absoluteX")," instead of ",(0,a.kt)("a",{parentName:"p",href:"#x"},(0,a.kt)("inlineCode",{parentName:"a"},"x"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),(0,a.kt)("h3",{id:"absolutey"},(0,a.kt)("inlineCode",{parentName:"h3"},"absoluteY")),(0,a.kt)("p",null,"Y coordinate, expressed in points, of the current position of the pointer (finger or a leading pointer when there are multiple fingers placed) relative to the window. It is recommended to use ",(0,a.kt)("inlineCode",{parentName:"p"},"absoluteY")," instead of ",(0,a.kt)("a",{parentName:"p",href:"#y"},(0,a.kt)("inlineCode",{parentName:"a"},"y"))," in cases when the view attached to the handler can be transformed as an effect of the gesture."),(0,a.kt)("h3",{id:"duration"},(0,a.kt)("inlineCode",{parentName:"h3"},"duration")),(0,a.kt)("p",null,"Duration of the long press (time since the start of the event), expressed in milliseconds."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/basic/multitap/index.tsx"},"multitap example")," from GestureHandler Example App."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'const LongPressButton = () => (\n  <LongPressGestureHandler\n    onHandlerStateChange={({ nativeEvent }) => {\n      if (nativeEvent.state === State.ACTIVE) {\n        Alert.alert("I\'m being pressed for so long");\n      }\n    }}\n    minDurationMs={800}>\n    <View style={styles.box} />\n  </LongPressGestureHandler>\n);\n')))}c.isMDXComponent=!0}}]);