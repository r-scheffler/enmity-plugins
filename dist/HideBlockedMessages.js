function S(o){window.enmity.plugins.registerPlugin(o)}function l(...o){return window.enmity.modules.getByProps(...o)}window.enmity.modules.common;function h(o){return window.enmity.patcher.create(o)}window.enmity.modules.common.Constants,window.enmity.modules.common.Clipboard,window.enmity.modules.common.Assets,window.enmity.modules.common.Messages,window.enmity.modules.common.Clyde,window.enmity.modules.common.Avatars,window.enmity.modules.common.Native;const m=window.enmity.modules.common.React;window.enmity.modules.common.Dispatcher,window.enmity.modules.common.Storage;const t=window.enmity.modules.common.Toasts;window.enmity.modules.common.Dialog,window.enmity.modules.common.Token,window.enmity.modules.common.REST,window.enmity.modules.common.Settings,window.enmity.modules.common.Users,window.enmity.modules.common.Navigation,window.enmity.modules.common.NavigationNative,window.enmity.modules.common.NavigationStack,window.enmity.modules.common.Theme,window.enmity.modules.common.Linking,window.enmity.modules.common.StyleSheet,window.enmity.modules.common.ColorMap,window.enmity.modules.common.Components,window.enmity.modules.common.Locale,window.enmity.modules.common.Profiles,window.enmity.modules.common.Lodash,window.enmity.modules.common.Logger,window.enmity.modules.common.Flux,window.enmity.modules.common.SVG,window.enmity.modules.common.Scenes;var F="HideBlockedMessages",f="1.1.1",k="For when you really need to shut someone the f*** up.",B=[{name:"NotMarek",id:"206299359007080450"}],v="#ff0069",M="https://raw.githubusercontent.com/notmarek/enmity-plugins/master/dist/HideBlockedMessages.js",u={name:F,version:f,description:k,authors:B,color:v,sourceUrl:M};function s(o){return window.enmity.assets.getIDByName(o)}function T(o){return window.enmity.settings.makeStore(o)}const{components:e}=window.enmity;e.Alert,e.Button,e.FlatList,e.Image,e.ImageBackground,e.KeyboardAvoidingView,e.Modal,e.Pressable,e.RefreshControl;const A=e.ScrollView;e.SectionList,e.StatusBar,e.StyleSheet,e.Switch,e.Text,e.TextInput,e.TouchableHighlight,e.TouchableOpacity,e.TouchableWithoutFeedback,e.Touchable,e.View,e.VirtualizedList,e.Form,e.FormArrow,e.FormCTA,e.FormCTAButton,e.FormCardSection,e.FormCheckbox,e.FormDivider,e.FormHint,e.FormIcon,e.FormInput,e.FormLabel,e.FormRadio;const w=e.FormRow;e.FormSection,e.FormSelect,e.FormSubLabel,e.FormSwitch,e.FormTernaryCheckBox,e.FormText,e.FormTextColors,e.FormTextSizes;var b=({pluginUrl:o})=>m.createElement(w,{label:"Update plugin",trailing:w.Arrow,onPress:()=>{(void 0)(`${o}?${Math.random()*1001}.js`,()=>{Toasts.show({content:"Plugin updated.",type:"success"})})}});const g=h("HideBlockedMessages"),r=l("_currentDispatchActionType","_subscriptions","_waitQueue"),C=l("isBlocked","isFriend"),_={...u,onStart(){const o=T(this.name);r.dispatch({type:"LOAD_MESSAGES"}),o.set("test","test"),r.dispatch({type:"LOAD_MESSAGES_SUCCESS",channelId:0,messages:[],isBefore:!1,isAfter:!1,hasMoreBefore:!1,hasMoreAfter:!1,limit:25,jump:void 0,isStale:!1,truncate:void 0});let n=0,i=3;const a=()=>{try{n++,console.log(`HideBlockedMessages delayed start attempt ${n}/${i}.`),t.open({content:`HideBlockedMessages start attempt ${n}/${i}.`,source:s("ic_staff_guild_icon_blurple")});const y=r._orderedActionHandlers.LOAD_MESSAGES_SUCCESS.find(d=>d.name==="MessageStore");g.before(y,"actionHandler",(d,c)=>{c[0].messages=c[0].messages.filter(p=>!C.isBlocked(p.author.id))}),console.log("HideBlockedMessages delayed start successful."),t.open({content:"HideBlockedMessages delayed start successful.",source:s("Check")})}catch{n<i?(console.warn(`HideBlockedMessages failed to start. Trying again in ${n}0s.`),t.open({content:`HideBlockedMessages failed to start trying again in ${n}0s.`,source:s("ic_message_retry")}),setTimeout(a,n*1e4)):(console.error("HideBlockedMessages failed to start. Giving up."),t.open({content:"HideBlockedMessages failed to start. Giving up.",source:s("Small")}))}};setTimeout(a,300)},onStop(){g.unpatchAll()},patches:[],getSettingsPanel({settings:o}){return m.createElement(A,{settings:o},m.createElement(b,{pluginUrl:u.sourceUrl}))}};S(_);
