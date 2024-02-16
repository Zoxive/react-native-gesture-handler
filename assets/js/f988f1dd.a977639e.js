"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[9821],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=c(n),h=a,m=p["".concat(l,".").concat(h)]||p[h]||u[h]||o;return n?r.createElement(m,i(i({ref:t},d),{},{components:n})):r.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},9371:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(3117),a=(n(7294),n(3905));const o={id:"rotation-gh",title:"RotationGestureHandler",sidebar_label:"Rotation",sidebar_position:8},i=void 0,s={unversionedId:"gesture-handlers/rotation-gh",id:"gesture-handlers/rotation-gh",title:"RotationGestureHandler",description:"Consider using the new gestures API instead. The old API is not actively supported and is not receiving the new features. Check out RNGH 2.0 section in Introduction for more information.",source:"@site/docs/gesture-handlers/rotation-gh.md",sourceDirName:"gesture-handlers",slug:"/gesture-handlers/rotation-gh",permalink:"/react-native-gesture-handler/docs/gesture-handlers/rotation-gh",draft:!1,editUrl:"https://github.com/software-mansion/react-native-gesture-handler/edit/main/docs/docs/gesture-handlers/rotation-gh.md",tags:[],version:"current",sidebarPosition:8,frontMatter:{id:"rotation-gh",title:"RotationGestureHandler",sidebar_label:"Rotation",sidebar_position:8},sidebar:"tutorialSidebar",previous:{title:"Long press",permalink:"/react-native-gesture-handler/docs/gesture-handlers/longpress-gh"},next:{title:"Fling",permalink:"/react-native-gesture-handler/docs/gesture-handlers/fling-gh"}},l={},c=[{value:"Properties",id:"properties",level:2},{value:"Event data",id:"event-data",level:2},{value:"<code>rotation</code>",id:"rotation",level:3},{value:"<code>velocity</code>",id:"velocity",level:3},{value:"<code>anchorX</code>",id:"anchorx",level:3},{value:"<code>anchorY</code>",id:"anchory",level:3},{value:"Example",id:"example",level:2}],d={toc:c},p="wrapper";function u(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Consider using the new ",(0,a.kt)("a",{parentName:"p",href:"/docs/gestures/gesture"},"gestures API")," instead. The old API is not actively supported and is not receiving the new features. Check out ",(0,a.kt)("a",{parentName:"p",href:"/docs/#rngh-20"},"RNGH 2.0 section in Introduction")," for more information.")),(0,a.kt)("p",null,"A continuous gesture handler that can recognize a rotation gesture and track its movement."),(0,a.kt)("p",null,"The handler ",(0,a.kt)("a",{parentName:"p",href:"/docs/under-the-hood/state#active"},"activates")," when fingers are placed on the screen and change position in a proper way."),(0,a.kt)("p",null,"Gesture callback can be used for continuous tracking of the rotation gesture. It provides information about the gesture such as the amount rotated, the focal point of the rotation (anchor), and its instantaneous velocity."),(0,a.kt)("p",null,"The handler is implemented using ",(0,a.kt)("a",{parentName:"p",href:"https://developer.apple.com/documentation/uikit/uirotationgesturerecognizer"},"UIRotationGestureRecognizer")," on iOS and from scratch on Android."),(0,a.kt)("h2",{id:"properties"},"Properties"),(0,a.kt)("p",null,"Properties provided to ",(0,a.kt)("inlineCode",{parentName:"p"},"RotationGestureHandler")," do not extend ",(0,a.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/common-gh#properties"},"common set of properties from base handler class"),"."),(0,a.kt)("h2",{id:"event-data"},"Event data"),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"/docs/gesture-handlers/common-gh#event-data"},"set of event attributes from base handler class"),". Below is a list of gesture event attributes specific to ",(0,a.kt)("inlineCode",{parentName:"p"},"RotationGestureHandler"),":"),(0,a.kt)("h3",{id:"rotation"},(0,a.kt)("inlineCode",{parentName:"h3"},"rotation")),(0,a.kt)("p",null,"Amount rotated, expressed in radians, from the gesture's focal point (anchor)."),(0,a.kt)("h3",{id:"velocity"},(0,a.kt)("inlineCode",{parentName:"h3"},"velocity")),(0,a.kt)("p",null,"Instantaneous velocity, expressed in point units per second, of the gesture."),(0,a.kt)("h3",{id:"anchorx"},(0,a.kt)("inlineCode",{parentName:"h3"},"anchorX")),(0,a.kt)("p",null,"X coordinate, expressed in points, of the gesture's central focal point (anchor)."),(0,a.kt)("h3",{id:"anchory"},(0,a.kt)("inlineCode",{parentName:"h3"},"anchorY")),(0,a.kt)("p",null,"Y coordinate, expressed in points, of the gesture's central focal point (anchor)."),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("p",null,"See the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/software-mansion/react-native-gesture-handler/blob/main/example/src/recipes/scaleAndRotate/index.tsx"},"scale and rotation example")," from Gesture Handler Example App."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"class RotableBox extends React.Component {\n  _rotate = new Animated.Value(0);\n  _rotateStr = this._rotate.interpolate({\n    inputRange: [-100, 100],\n    outputRange: ['-100rad', '100rad'],\n  });\n  _lastRotate = 0;\n  _onRotateGestureEvent = Animated.event(\n    [{ nativeEvent: { rotation: this._rotate } }],\n    { useNativeDriver: USE_NATIVE_DRIVER }\n  );\n  _onRotateHandlerStateChange = (event) => {\n    if (event.nativeEvent.oldState === State.ACTIVE) {\n      this._lastRotate += event.nativeEvent.rotation;\n      this._rotate.setOffset(this._lastRotate);\n      this._rotate.setValue(0);\n    }\n  };\n  render() {\n    return (\n      <RotationGestureHandler\n        onGestureEvent={this._onRotateGestureEvent}\n        onHandlerStateChange={this._onRotateHandlerStateChange}>\n        <Animated.Image\n          style={[\n            styles.pinchableImage,\n            {\n              transform: [{ perspective: 200 }, { rotate: this._rotateStr }],\n            },\n          ]}\n        />\n      </RotationGestureHandler>\n    );\n  }\n}\n")))}u.isMDXComponent=!0}}]);