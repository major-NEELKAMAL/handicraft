﻿define("lib/jquery.menu-aim",["jquery"],function(e){return function(e){function t(t){var n=e(this),i=null,a=[],o=null,r=null,s=e.extend({rowSelector:"> li",submenuSelector:"*",submenuDirection:"right",tolerance:75,enter:e.noop,exit:e.noop,activate:e.noop,deactivate:e.noop,exitMenu:e.noop},t),u=3,c=300,d=function(e){a.push({x:e.pageX,y:e.pageY}),a.length>u&&a.shift()},l=function(){r&&clearTimeout(r),s.exitMenu(this)&&(i&&s.deactivate(i),i=null)},f=function(){r&&clearTimeout(r),s.enter(this),E(this)},v=function(){s.exit(this)},h=function(){m(this)},m=function(e){e!=i&&(i&&s.deactivate(i),s.activate(e),i=e)},E=function(e){var t=N();t?r=setTimeout(function(){E(e)},t):m(e)},N=function(){function t(e,t){return(t.y-e.y)/(t.x-e.x)}if(!i||!e(i).is(s.submenuSelector))return 0;var r=n.offset(),u={x:r.left,y:r.top-s.tolerance},d={x:r.left+n.outerWidth(),y:u.y},l={x:r.left,y:r.top+n.outerHeight()+s.tolerance},f={x:r.left+n.outerWidth(),y:l.y},v=a[a.length-1],h=a[0];if(!v)return 0;if(h||(h=v),h.x<r.left||h.x>f.x||h.y<r.top||h.y>f.y)return 0;if(o&&v.x==o.x&&v.y==o.y)return 0;var m=d,E=f;"left"==s.submenuDirection?(m=l,E=u):"below"==s.submenuDirection?(m=f,E=l):"above"==s.submenuDirection&&(m=u,E=d);var N=t(v,m),y=t(v,E),A=t(h,m),p=t(h,E);return A>N&&y>p?(o=v,c):(o=null,0)};n.mouseleave(l).find(s.rowSelector).mouseenter(f).mouseleave(v).click(h),e(document).mousemove(d)}e.fn.menuAim=function(e){return this.each(function(){t.call(this,e)}),this}}(e),e}),define("common/a11y/keycode",[],function(){return{TAB:9,ENTER:13,ESC:27,SPACE:32,LEFT:37,UP:38,RIGHT:39,DOWN:40,PAGEUP:33,PAGEDOWN:34,END:35,HOME:36}}),(function(){require.config({paths:{"common/a11y/keycode":"common/a11y/keycode.20180118211911"}});define("common/a11y/menubar",["jquery","common/a11y/keycode"],function(e,t){return{setMenubarKeyboardNavigation:function(n){function i(e){var t=e.attr("id");n.attr("aria-activedescendant",t),e.focus()}if("menubar"!==n.attr("role"))throw new Error(n+' must have a role set to "menubar".');var a=n.find('[role="menuitem"]').filter(":not(:disabled)").filter(":not(:hidden)");n.off("keydown.a11yMenubarFocus"),n.on("keydown.a11yMenubarFocus",function(n){if(n.keyCode===t.RIGHT||n.keyCode===t.LEFT){n.preventDefault();var o=e(document.activeElement),r=a.index(o);if(n.keyCode===t.LEFT){if(0===r)return void i(a.eq(a.length-1));i(a.eq(r-1))}if(n.keyCode===t.RIGHT){if(r===a.length-1)return void i(a.first());i(a.eq(r+1))}}(n.keyCode===t.ENTER||n.keyCode===t.SPACE||n.keyCode===t.DOWN)&&(n.preventDefault(),e(n.target).trigger("menubar-item-press"))})}}})})(),(function(){require.config({paths:{"common/a11y/keycode":"common/a11y/keycode.20180118211911"}});define("common/a11y/contain-focus",["jquery","common/a11y/keycode"],function(e,t){var n=function(){e(document).off(".a11yContainFocus")};return{FOCUSABLE_ELEMENTS:"a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex]:not([disabled]), *[contenteditable]",containFocusInElement:function(i){var a=i instanceof jQuery?i:e(i),o=this;n(),e(document).on("keydown.a11yContainFocus",function(n){if(n.keyCode===t.TAB){var i=e(document.activeElement),r=a.find(o.FOCUSABLE_ELEMENTS).filter(":not(:hidden)"),s=r.index(i);n.shiftKey&&0===s&&(r.get(r.length-1).focus(),n.preventDefault()),n.shiftKey||s!==r.length-1||(r.first().focus(),n.preventDefault())}})},setFocusToFirstFocusableElement:function(t,n){var i=t instanceof jQuery?t:e(t),a=i.find(this.FOCUSABLE_ELEMENTS).filter(":not(:hidden)"),o=a.not(n),r=o.filter('[role="tab"]');0===a.length?i.focus():1===a.length?a.first().focus():0===o.length?a.first().focus():o.first().is(r)?r.filter('[aria-selected="true"]').focus():o.first().focus()},getFocusableElementsInContainer:function(t){var n=t instanceof jQuery?t:e(t);return n.find(this.FOCUSABLE_ELEMENTS).filter(":not(:hidden)")},removeContainFocus:n}})})(),(function(){require.config({paths:{"common/a11y/keycode":"common/a11y/keycode.20180118211911"}});define("common/a11y/menu",["jquery","common/a11y/keycode"],function(e,t){return{setMenuKeyboardNavigation:function(n){function i(e){var t=e.attr("id");n.attr("aria-activedescendant",t),e.focus()}if(n.length){if("menu"!==n.attr("role"))throw new Error(n+' must have a role set to "menu".');var a=n.find('[role="menuitem"]').filter(":not(:disabled)").filter(":not(:hidden)");n.off("keydown.a11yMenuFocus"),n.on("keydown.a11yMenuFocus",function(n){if(n.keyCode===t.UP||n.keyCode===t.DOWN){n.preventDefault();var o=e(document.activeElement),r=a.index(o);if(n.keyCode===t.UP){if(0===r)return void i(a.eq(a.length-1));i(a.eq(r-1))}if(n.keyCode===t.DOWN){if(r===a.length-1)return void i(a.first());i(a.eq(r+1))}}(n.keyCode===t.ENTER||n.keyCode===t.SPACE)&&(n.preventDefault(),e(n.target).trigger("menu-item-activate",[n])),n.keyCode===t.RIGHT&&e(n.target).trigger("menu-item-open-submenu",[n]),(n.keyCode===t.LEFT||n.keyCode===t.ESC)&&(n.preventDefault(),e(n.target).trigger("menu-item-leave",[n]))})}}}})})(),(function(){require.config({paths:{"lib/jquery.menu-aim":"lib/jquery.menu-aim.20170615210935","common/a11y/menubar":"common/a11y/menubar.20180118211911","common/a11y/contain-focus":"common/a11y/contain-focus.20180118211911","common/a11y/keycode":"common/a11y/keycode.20180118211911","common/a11y/menu":"common/a11y/menu.20180118211911"}});define("category-nav/v2/category_handler",["jquery","lib/jquery.menu-aim","common/a11y/menubar","common/a11y/contain-focus","common/a11y/keycode","common/a11y/menu"],function(e,t,n,i,a,o){var r=function(){},s={TOP_NAV_CATEGORY_LIST:'[data-ui="top-nav-category-list"]',TOP_NAV_CATEGORY_LINK:'[data-ui="top-nav-category-link"]',TOP_NAV_PROMO_LINK:'[data-ui="top-nav-promo-link"]',SUB_NAV:'[data-ui="sub-nav"]',SIDE_NAV_CATEGORY_LIST:'[data-ui="side-nav-category-list"]',SIDE_NAV_CATEGORY_LINK:'[data-ui="side-nav-category-link"]',TERTIARY_NAV:'[data-ui="tertiary-nav"]',MENUITEM:'[role="menuitem"]'},u={MOUSE_LEAVE_TIMEOUT:400,MOUSE_ENTER_TIMEOUT:350,MOUSE_ENTER_DROPDOWN_DELAY:200};return r.prototype={init:function(t){this.$context=t,this.$topNavCategoryList=this.$context.find(s.TOP_NAV_CATEGORY_LIST),this.$navCategoryLinks=this.$context.find(s.TOP_NAV_CATEGORY_LINK),this.$sideNavCategoryList=this.$context.find(s.SIDE_NAV_CATEGORY_LIST),this.$sideNavCategoryLinks=this.$context.find(s.SIDE_NAV_CATEGORY_LINK),this.$tertiaryNavs=this.$context.find(s.TERTIARY_NAV),this.$searchResults=e(".gnav-search-inner").find("#search-suggestions"),this.bindEvents()},bindEvents:function(){this.$context.on("mouseenter",s.SUB_NAV,e.proxy(this.onMouseEnterNav,this)).on("mouseenter",s.TOP_NAV_CATEGORY_LIST,e.proxy(this.onMouseEnterNav,this)).on("mouseenter",s.SUB_NAV,e.proxy(this.clearMouseEnterNavItem,this)).on("mouseenter click",s.TOP_NAV_CATEGORY_LINK,e.proxy(this.onMouseEnterNavItem,this)).on("mouseleave",s.SUB_NAV,e.proxy(this.onMouseLeaveNav,this)).on("mouseleave",s.TOP_NAV_CATEGORY_LIST,e.proxy(this.onMouseLeaveNav,this)).on("mouseenter",s.TOP_NAV_PROMO_LINK,e.proxy(this.onMouseEnterPromoItem,this)).on("click",s.SIDE_NAV_CATEGORY_LINK,e.proxy(this.onMouseClickSideNavItem,this)),this.$sideNavCategoryList.menuAim({activate:e.proxy(this.onMouseEnterSideNavItem,this),deactivate:e.noop,submenuSelector:"li"}),this.setA11yInitialStateMenubar().bindA11yEvents().bindA11yEventsSideNav().bindA11yEventsTertiaryNav()},onMouseEnterNav:function(){this.clearLeaveNavTimeout()},onMouseEnterNavItem:function(t){var n=e(t.currentTarget),i=n.data("node-id"),a=(n.attr("id"),this.hasActiveTopNavLink()?u.MOUSE_ENTER_DROPDOWN_DELAY:u.MOUSE_ENTER_TIMEOUT);this.clearMouseEnterNavItem(),this.$searchResults.hide(),this.mouseEnterNavItemTimeout=window.setTimeout(e.proxy(function(){this.makeActiveNavItem(n).hide(s.SUB_NAV).show(s.SUB_NAV+this.getDataAttributeString(i)).activateSubNav(i,!1)},this),a)},onKeyActivateTopNavItem:function(e){{var t=e.data("node-id"),n=s.SUB_NAV+this.getDataAttributeString(t);e.attr("id")}this.clearMouseEnterNavItem().makeActiveNavItem(e).hide(s.SUB_NAV).show(n).activateSubNav(t,!0)},activateSubNav:function(e,t){var n=s.SUB_NAV+this.getDataAttributeString(e),i=this.getFirstFocusableChildForSelector(n+" "+s.SIDE_NAV_CATEGORY_LINK).parent("li");return i.length?(this.makeSideNavItemActive(i).setAriaActiveDescendant(n+" "+s.SIDE_NAV_CATEGORY_LIST,i.attr("id")),t&&this.setMenuKeyboardNavigation(n+" "+s.SIDE_NAV_CATEGORY_LIST).getFirstFocusableChildForSelector(n+" "+s.SIDE_NAV_CATEGORY_LIST).focus()):(n=s.TERTIARY_NAV+this.getDataAttributeString(e),this.show(n),t&&this.setMenuKeyboardNavigation(n).getFirstFocusableChildForSelector(n).focus()),this},onMouseEnterPromoItem:function(){this.clearLeaveNavTimeout().clearMouseEnterNavItem().clearActiveNavItems().hide(s.SUB_NAV)},onMouseLeaveNav:function(){this.clearLeaveNavTimeout().clearMouseEnterNavItem(),this.leaveNavTimeout=window.setTimeout(e.proxy(function(){this.clearActiveNavItems().hide(s.SUB_NAV)},this),u.MOUSE_LEAVE_TIMEOUT)},onMouseEnterSideNavItem:function(t){this.clearMouseEnterNavItem().makeSideNavItemActive(e(t))},onMouseClickSideNavItem:function(t){var n=e(t.currentTarget);this.clearMouseEnterNavItem().makeSideNavItemActive(n)},clearLeaveNavTimeout:function(){return this.leaveNavTimeout&&(window.clearTimeout(this.leaveNavTimeout),this.leaveNavTimeout=null),this},clearMouseEnterNavItem:function(){return this.mouseEnterNavItemTimeout&&(window.clearTimeout(this.mouseEnterNavItemTimeout),this.mouseEnterNavItemTimeout=null),this},getDataAttributeString:function(e){return'[data-node-id="'+e+'"]'},hasActiveTopNavLink:function(){return this.$navCategoryLinks.filter(".active").length>0},getFirstFocusableChildForSelector:function(e){return this.$context.find(e+" "+s.MENUITEM).first()},makeSideNavItemActive:function(e){{var t=e.data("node-id");e.attr("id")}return"A"===e.children().first().get(0).tagName?this:(this.clearActiveSideNavItems(),e.addClass("active"),this.hide(s.TERTIARY_NAV).show(s.TERTIARY_NAV+this.getDataAttributeString(t)).setMenuKeyboardNavigation(s.TERTIARY_NAV+this.getDataAttributeString(t)),this)},makeActiveNavItem:function(e){return this.clearActiveNavItems(),e.addClass("active"),this},clearActiveNavItems:function(){return this.$navCategoryLinks.removeClass("active"),this},clearActiveSideNavItems:function(){return this.$sideNavCategoryLinks.removeClass("active"),this},show:function(e){return this.$context.find(e).removeClass("display-none").attr("aria-hidden","false"),this},hide:function(e){return this.$context.find(e).addClass("display-none").attr("aria-hidden","true"),this},focus:function(e){return this.$context.find(e+" "+s.MENUITEM).focus(),this},onTabAway:function(){this.clearLeaveNavTimeout().clearMouseEnterNavItem().clearActiveNavItems().hide(s.SUB_NAV)},setAriaActiveDescendant:function(e,t){return this.$context.find(e).parent("ul").attr("aria-activedescendant",t),this},setMenuKeyboardNavigation:function(e){return o.setMenuKeyboardNavigation(this.$context.find(e)),this},setA11yInitialStateMenubar:function(){var e=this.$navCategoryLinks.find(s.MENUITEM);e.attr("tabindex","-1");var t=e.first();return t.attr("tabindex","0"),this.$topNavCategoryList.attr("aria-activedescendant",t.attr("id")),this},bindA11yEvents:function(){return!this.$topNavCategoryList||this.$topNavCategoryList.length<1?this:(n.setMenubarKeyboardNavigation(this.$topNavCategoryList),this.$context.on("keydown.catnav",e.proxy(function(e){this.$searchResults.hide(),e.keyCode===a.TAB&&this.onTabAway()},this)),this.$topNavCategoryList.on("menubar-item-press",s.MENUITEM,e.proxy(function(t){var n=e(t.target);"true"===n.attr("aria-haspopup")?this.onKeyActivateTopNavItem(n.parent()):n.attr("href")&&"#"!==n.attr("href")&&(window.location=n.attr("href"))},this)),this)},bindA11yEventsSideNav:function(){return this.$sideNavCategoryList.on("menu-item-open-submenu menu-item-activate",s.MENUITEM,e.proxy(function(t){var n=e(t.target);if("true"===n.attr("aria-haspopup")){var i=n.parent("li"),a=i.data("node-id");this.makeSideNavItemActive(i).getFirstFocusableChildForSelector(s.TERTIARY_NAV+this.getDataAttributeString(a)).focus()}else"menu-item-activate"===t.type&&n.attr("href")&&"#"!==n.attr("href")&&(window.location=n.attr("href"))},this)),this.$sideNavCategoryList.on("menu-item-leave",s.MENUITEM,e.proxy(function(t){var n=e(t.target),i=n.parents("ul").data("node-id");this.hide(s.SUB_NAV).clearActiveNavItems().focus(s.TOP_NAV_CATEGORY_LINK+this.getDataAttributeString(i))},this)),this},bindA11yEventsTertiaryNav:function(){return this.$tertiaryNavs.on("menu-item-leave",s.MENUITEM,e.proxy(function(t){var n=e(t.target),i=n.parents(s.TERTIARY_NAV),a=i.data("node-id"),o=i.attr("data-has-side-nav");return"false"===o?(this.hide(s.SUB_NAV).clearActiveNavItems().focus(s.TOP_NAV_CATEGORY_LINK+this.getDataAttributeString(a)),this):void this.focus(s.SIDE_NAV_CATEGORY_LINK+this.getDataAttributeString(a))},this)),this.$tertiaryNavs.on("menu-item-activate",s.MENUITEM,e.proxy(function(t){window.location=e(t.target).attr("href")},this)),this}},r})})(),function(e){var t,n;e.Context=e.Context||{},t=e.Context.feature||{},n=e.Context.data||{},e.Context.featureIsEnabled=function(e){return t.hasOwnProperty(e)?!!t[e]:!1},e.Context.getData=function(e,t){var i=String(e).split("."),a=n,o=arguments.length>1;if("string"!=typeof e||i.length<1)throw new Error("Etsy.Context.getData() called with an invalid key: "+e);for(;i.length>1&&a.hasOwnProperty(i[0]);)a=a[i.shift()];if(i.length>1||!a.hasOwnProperty(i[0])){if(o)return t;throw new Error("Etsy.Context.getData() called with an unspecified key, no default value provided: "+e)}return a[i[0]]},e.Context.pluck=function(){var t=arguments;return _.reduce(t,function(t,n){return t[n]=e.Context.getData(n,null),t},{})}}(Etsy),"function"==typeof define&&define.amd&&define("common/etsy.context",[],function(){return Etsy.Context}),(function(){require.config({paths:{"common/etsy.context":"common/etsy.context.20180118211911"}});define("common/csrf",["common/etsy.context"],function(e){return Etsy=Etsy||{},function(){return e.getData("csrf_nonce",Etsy.csrf_nonce||"")}})})(),define("common/simpleTemplate",[],function(){return function(e,t){return e.replace(/\{\{(\w+)\}\}/g,function(e,n){return t[n]})}}),define("common/detected-locale",[],function(){return function(){if(Etsy&&Etsy.Context&&Etsy.Context.getData){var e=Etsy.Context.getData("locale_settings.currency.code",null),t=Etsy.Context.getData("locale_settings.language.code",null),n=Etsy.Context.getData("locale_settings.region.code",null);return e&&t&&n?(e instanceof Array&&(e=e[0]),t instanceof Array&&(t=t[0]),n instanceof Array&&(n=n[0]),e+"|"+t+"|"+n):null}return null}}),(function(){require.config({paths:{"common/csrf":"common/csrf.20180118211911","common/simpleTemplate":"common/simpleTemplate.20170803184542","common/detected-locale":"common/detected-locale.20171109185125"}});define("apiv3/PublicBespokeClient/bespokeNeuSpecsGet",["common/csrf","common/simpleTemplate","common/detected-locale"],function(e,t,n){return function(e,i){var a={name:e,"":""},o="/api/v3/ajax/bespoke/public"+t("/neu/specs/{{name}}",a),r={};return i&&(i.hasOwnProperty("stats_sample_rate")&&(r.stats_sample_rate=i.stats_sample_rate),i.hasOwnProperty("specs")&&(r.specs=i.specs)),{headers:{"x-detected-locale":n()},data:r,url:o,type:"GET"}}})})(),(function(){require.config({paths:{"common/csrf":"common/csrf.20180118211911","common/simpleTemplate":"common/simpleTemplate.20170803184542","common/detected-locale":"common/detected-locale.20171109185125"}});define("apiv3/MemberBespokeClient/bespokeNeuSpecs",["common/csrf","common/simpleTemplate","common/detected-locale"],function(e,t,n){return function(i,a){var o={name:i,"":""},r="/api/v3/ajax/bespoke/member"+t("/neu/specs/{{name}}",o),s={};return a&&(a.hasOwnProperty("stats_sample_rate")&&(s.stats_sample_rate=a.stats_sample_rate),a.hasOwnProperty("specs")&&(s.specs=a.specs)),{headers:{"x-csrf-token":e(),"x-detected-locale":n()},data:s,url:r,type:"POST"}}})})(),(function(){require.config({paths:{"apiv3/PublicBespokeClient/bespokeNeuSpecsGet":"apiv3/PublicBespokeClient/bespokeNeuSpecsGet.20180118211911","apiv3/MemberBespokeClient/bespokeNeuSpecs":"apiv3/MemberBespokeClient/bespokeNeuSpecs.20180118211911"}});define("common/neu/specs",["jquery","apiv3/PublicBespokeClient/bespokeNeuSpecsGet","apiv3/MemberBespokeClient/bespokeNeuSpecs"],function(e,t,n){function i(i,a,o,r){if(r=r||c.POST,!(r in c))return e.Deferred().rejectWith(new Error("Invalid fetch type: "+r));var s=r==c.POST?n:t;return e.ajax(s(i,{specs:a,stats_sample_rate:o||Etsy.Context.getData("neu_api_specs_sample_rate",null)}))}function a(e,t,n,a){var o={};return o[e]=[t,n],i(e,o,null,a)}function o(t,n){t=t||s,n=n||u;var i={},a={};return e(t).each(function(){var t=e(this),o="spec"+ ++d,r=JSON.parse(t.find(n).text());i[o]=[r.spec_name,r.args],a[o]=function(e){t.replaceWith(e[o])}}),{args:i,onComplete:function(t){e.each(a,function(e,n){n(t)})}}}function r(e,t){if(l)throw new Error("There should only be one lazyLoad at a time!");t=t||{};var n=t.selectors||{},a=t.done||function(){},r=o(n.placeholder,n.childData);return l=!0,i(e,r.args).done(function(e){l=!1,r.onComplete(e.output),a(e)})}var s="[data-neu-spec-placeholder]",u="[data-neu-spec-placeholder-data]",c={GET:"GET",POST:"POST"},d=0,l=!1;return{getSpecArgsAndCallback:o,lazyLoad:r,fetch:i,fetchOne:a,DEFAULT_PLACEHOLDER_SELECTOR:s,DEFAULT_CHILD_DATA_SELECTOR:u}})})(),require({paths:{"category-nav/v2/category_handler":"category-nav/v2/category_handler.20180118211911","common/neu/specs":"common/neu/specs.20180118211911"}},["jquery","category-nav/v2/category_handler","common/neu/specs"],function(e,t,n){e(function(){var i={KEY:"catnav",NAME:"CategoryNav_V2_ApiSpec_SubNav"},a={CAT_NAV:"#desktop-category-nav",TOP_NAV_LIST:'[data-ui="top-nav-category-list"]',SUB_NAV_CONTAINER:'[data-ui="sub-nav-container"]',SUB_NAV:'[data-ui="sub-nav"]'},o=new t,r=e(a.CAT_NAV),s=r.find(a.TOP_NAV_LIST),u=r.find(a.SUB_NAV),c=Etsy.Context.getData("mott_version",null);s.children().length>0&&(0===u.length?n.fetchOne(i.KEY,i.NAME,{mott_version:c},"GET").done(function(t){r.find(a.SUB_NAV_CONTAINER+" "+n.DEFAULT_PLACEHOLDER_SELECTOR).replaceWith(e("<div />").append(t.output[i.KEY])),o.init(r)}):o.init(r))})});