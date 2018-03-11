angular.module("goblackdiamond.controllers", [])



// TODO: indexCtrl --|-- 
.controller("indexCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	// TODO: indexCtrl --|-- $rootScope.exitApp
	$rootScope.exitApp = function(){
		var confirmPopup = $ionicPopup.confirm({
			title: "Confirm Exit",
			template: "Are you sure you want to exit?"
		});
		confirmPopup.then(function (close){
			if(close){
				ionic.Platform.exitApp();
			}
			$rootScope.closeMenuPopover();
		});
	};
	// TODO: indexCtrl --|-- $rootScope.clearCacheApp
	$rootScope.clearCacheApp = function(){
		var confirmPopup = $ionicPopup.confirm({
			title: "Confirm",
			template: "Are you sure you want to clear cache?"
		});
		confirmPopup.then(function (close){
			if(close){
				localforage.keys().then(function(keys) {
					for(var e = 0; e < keys.length ; e++) {
						localforage.setItem(keys[e],[]);
					}
					$state.go("goblackdiamond.dashboard");
				}).catch(function(err) {
					$state.go("goblackdiamond.dashboard");
				});
			}
			$rootScope.closeMenuPopover();
		});
	};
	$rootScope.last_edit = "-" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: indexCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: indexCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: indexCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: indexCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: indexCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: indexCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 
	
	var popover_template = "";
	popover_template += "<ion-popover-view class=\"fit\">";
	popover_template += "	<ion-content>";
	popover_template += "		<ion-list>";
	popover_template += "			<a  class=\"item dark-ink\" ng-href=\"#/goblackdiamond/about_us\" ng-click=\"popover.hide()\">";
	popover_template += "			About Us";
	popover_template += "			</a>";
	popover_template += "		</ion-list>";
	popover_template += "	</ion-content>";
	popover_template += "</ion-popover-view>";
	
	
	$scope.popover = $ionicPopover.fromTemplate(popover_template,{
		scope: $scope
	});
	
	$scope.closePopover = function(){
		$scope.popover.hide();
	};
	
	$rootScope.closeMenuPopover = function(){
		$scope.popover.hide();
	};
	
	$scope.$on("$destroy", function(){
		$scope.popover.remove();
	});

	// TODO: indexCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `index` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: about_usCtrl --|-- 
.controller("about_usCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: about_usCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: about_usCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: about_usCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: about_usCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: about_usCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: about_usCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: about_usCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `about_us` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: apoyo_singlesCtrl --|-- 
.controller("apoyo_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (apoyo)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: apoyo_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: apoyo_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: apoyo_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: apoyo_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: apoyo_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: apoyo_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: apoyo_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show();
	
	// Retrieving data
	var itemID = $stateParams.id;
	// TODO: apoyo_singlesCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=4&per_page=20";
	// TODO: apoyo_singlesCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=4&per_page=20&callback=JSON_CALLBACK";
	// TODO: apoyo_singlesCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash($scope.fetchURL);
	
	var current_item = [];
	localforage.getItem("data_apoyos_" + $scope.hashURL, function(err, get_datas){
		if(get_datas === null){
			current_item = [];
		}else{
			if(get_datas !== null){
				var datas = JSON.parse(get_datas);
				for (var i = 0; i < datas.length; i++) {
					if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
						current_item = datas[i] ;
					}
				}
			}
			// event done, hidden animation loading
			$timeout(function(){
				$ionicLoading.hide();
				$scope.apoyo = current_item ;
				controller_by_user();
			}, 100);
		};
	}).then(function(value){
	}).catch(function (err){
	})
	if( current_item.length === 0 ){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: apoyo_singlesCtrl --|-- $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: apoyo_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_apoyos_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "No Network connection" + " (" + data.status + ")",
						template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
					});
					$timeout(function() {
						alertPopup.close();
					}, 2000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.apoyo = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: apoyo_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: apoyo_singlesCtrl --|------ $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: apoyo_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_apoyos_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: apoyo_singlesCtrl --|---------- $http.jsonp
				$http.jsonp($scope.fetchURLp,http_header).success(function(response){
					// Get data single
					var datas = response;
			// TODO: apoyo_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_apoyos_"+ $scope.hashURL,JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.apoyo = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.apoyo = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: apoyo_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `apoyo_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: apoyosCtrl --|-- 
.controller("apoyosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (apoyo)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: apoyosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: apoyosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: apoyosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: apoyosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: apoyosCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: apoyosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: apoyosCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Apoyos
	targetQuery = "categories=4"; //default param
	raplaceWithQuery = "categories=4";
	
	
	// TODO: apoyosCtrl --|-- $scope.splitArray
	$scope.splitArray = function(items,cols,maxItem) {
		var newItems = [];
		if(maxItem == 0){
			maxItem = items.length;
		}
		if(items){
			for (var i=0; i < maxItem; i+=cols) {
				newItems.push(items.slice(i, i+cols));
			}
		}
		return newItems;
	}
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show();
	
	
	// TODO: apoyosCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=4&per_page=20";
	// TODO: apoyosCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=4&per_page=20&callback=JSON_CALLBACK";
	// TODO: apoyosCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash( $scope.fetchURL.replace(targetQuery,raplaceWithQuery));
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_apoyos = [];
	
	localforage.getItem("data_apoyos_" + $scope.hashURL, function(err, get_apoyos){
		if(get_apoyos === null){
			data_apoyos =[];
		}else{
			data_apoyos = JSON.parse(get_apoyos);
			$scope.data_apoyos =JSON.parse( get_apoyos);
			$scope.apoyos = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_apoyos[lastPush])){
					$scope.apoyos.push(data_apoyos[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			},200);
		}
	}).then(function(value){
	}).catch(function (err){
	})
	if(data_apoyos === null ){
		data_apoyos =[];
	}
	if(data_apoyos.length === 0 ){
		$timeout(function() {
			var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: apoyosCtrl --|-- $http.get
			console.log("%cRetrieving JSON: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
			$http.get(url_request,http_header).then(function(response) {
				data_apoyos = response.data;
				console.log("%cSuccessfully","color:blue;font-size:18px");
				console.dir(data_apoyos);
				$scope.data_apoyos = response.data;
				// TODO: apoyosCtrl --|---------- set:localforage
				localforage.setItem("data_apoyos_" + $scope.hashURL, JSON.stringify(data_apoyos));
				$scope.apoyos = [];
				for(lastPush = 0; lastPush < 50; lastPush++) {
					if (angular.isObject(data_apoyos[lastPush])){
						$scope.apoyos.push(data_apoyos[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = $scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					console.log("%cRetrieving again: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
					// TODO: apoyosCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_apoyos = data;
						$scope.data_apoyos = data;
						$ionicLoading.hide();
						// TODO: apoyosCtrl --|---------- set:localforage
						localforage.setItem("data_apoyos_" + $scope.hashURL,JSON.stringify(data_apoyos));
						controller_by_user();
						$scope.apoyos = [];
						for(lastPush = 0; lastPush < 50; lastPush++) {
							if (angular.isObject(data_apoyos[lastPush])){
								$scope.apoyos.push(data_apoyos[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: apoyosCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: apoyosCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
						$timeout(function() {
							alertPopup.close();
						}, 2000);
					}
					});
				}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 200);
		});
	
		}, 200);
	}
	
	
	// TODO: apoyosCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: apoyosCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_apoyos = response.data;
			$scope.data_apoyos = response.data;
			// TODO: apoyosCtrl --|---------- set:localforage
			localforage.setItem("data_apoyos_" + $scope.hashURL,JSON.stringify(data_apoyos));
			$scope.apoyos = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_apoyos[lastPush])){
					$scope.apoyos.push(data_apoyos[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request =$scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: apoyosCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_apoyos = data;
					$scope.data_apoyos = data;
					$ionicLoading.hide();
					controller_by_user();
					// TODO: apoyosCtrl --|---------- set:localforage
					localforage.setItem("data_apoyos_"+ $scope.hashURL,JSON.stringify(data_apoyos));
					$scope.apoyos = [];
					for(lastPush = 0; lastPush < 50; lastPush++) {
						if (angular.isObject(data_apoyos[lastPush])){
							$scope.apoyos.push(data_apoyos[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: apoyosCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: apoyosCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					};
				});
			}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_apoyos === null){
		data_apoyos = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_apoyos[lastPush])){
				$scope.apoyos.push(data_apoyos[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialInk.displayEffect();
	};
	// TODO: apoyosCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Apoyos
	targetQuery = "categories=4"; //default param
	raplaceWithQuery = "categories=4";
	
	
	// TODO: apoyosCtrl --|-- $scope.splitArray
	$scope.splitArray = function(items,cols,maxItem) {
		var newItems = [];
		if(maxItem == 0){
			maxItem = items.length;
		}
		if(items){
			for (var i=0; i < maxItem; i+=cols) {
				newItems.push(items.slice(i, i+cols));
			}
		}
		return newItems;
	}
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show();
	
	
	// TODO: apoyosCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=4&per_page=20";
	// TODO: apoyosCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=4&per_page=20&callback=JSON_CALLBACK";
	// TODO: apoyosCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash( $scope.fetchURL.replace(targetQuery,raplaceWithQuery));
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_posts = [];
	
	localforage.getItem("data_posts_" + $scope.hashURL, function(err, get_posts){
		if(get_posts === null){
			data_posts =[];
		}else{
			data_posts = JSON.parse(get_posts);
			$scope.data_posts =JSON.parse( get_posts);
			$scope.posts = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_posts[lastPush])){
					$scope.posts.push(data_posts[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			},200);
		}
	}).then(function(value){
	}).catch(function (err){
	})
	if(data_posts === null ){
		data_posts =[];
	}
	if(data_posts.length === 0 ){
		$timeout(function() {
			var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: apoyosCtrl --|-- $http.get
			console.log("%cRetrieving JSON: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
			$http.get(url_request,http_header).then(function(response) {
				data_posts = response.data;
				console.log("%cSuccessfully","color:blue;font-size:18px");
				console.dir(data_posts);
				$scope.data_posts = response.data;
				// TODO: apoyosCtrl --|---------- set:localforage
				localforage.setItem("data_posts_" + $scope.hashURL, JSON.stringify(data_posts));
				$scope.posts = [];
				for(lastPush = 0; lastPush < 50; lastPush++) {
					if (angular.isObject(data_posts[lastPush])){
						$scope.posts.push(data_posts[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = $scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					console.log("%cRetrieving again: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
					// TODO: apoyosCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_posts = data;
						$scope.data_posts = data;
						$ionicLoading.hide();
						// TODO: apoyosCtrl --|---------- set:localforage
						localforage.setItem("data_posts_" + $scope.hashURL,JSON.stringify(data_posts));
						controller_by_user();
						$scope.posts = [];
						for(lastPush = 0; lastPush < 50; lastPush++) {
							if (angular.isObject(data_posts[lastPush])){
								$scope.posts.push(data_posts[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: apoyosCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: apoyosCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
						$timeout(function() {
							alertPopup.close();
						}, 2000);
					}
					});
				}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 200);
		});
	
		}, 200);
	}
	
	
	// TODO: apoyosCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: apoyosCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_posts = response.data;
			$scope.data_posts = response.data;
			// TODO: apoyosCtrl --|---------- set:localforage
			localforage.setItem("data_posts_" + $scope.hashURL,JSON.stringify(data_posts));
			$scope.posts = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_posts[lastPush])){
					$scope.posts.push(data_posts[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request =$scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: apoyosCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_posts = data;
					$scope.data_posts = data;
					$ionicLoading.hide();
					controller_by_user();
					// TODO: apoyosCtrl --|---------- set:localforage
					localforage.setItem("data_posts_"+ $scope.hashURL,JSON.stringify(data_posts));
					$scope.posts = [];
					for(lastPush = 0; lastPush < 50; lastPush++) {
						if (angular.isObject(data_posts[lastPush])){
							$scope.posts.push(data_posts[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: apoyosCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: apoyosCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					};
				});
			}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_posts === null){
		data_posts = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_posts[lastPush])){
				$scope.posts.push(data_posts[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: apoyosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
//console.log(data_apoyos);
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `apoyos` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: arrancaCtrl --|-- 
.controller("arrancaCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (arranca)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: arrancaCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: arrancaCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: arrancaCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: arrancaCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: arrancaCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: arrancaCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: arrancaCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Arranca
	targetQuery = "categories=6"; //default param
	raplaceWithQuery = "categories=6";
	
	
	// TODO: arrancaCtrl --|-- $scope.splitArray
	$scope.splitArray = function(items,cols,maxItem) {
		var newItems = [];
		if(maxItem == 0){
			maxItem = items.length;
		}
		if(items){
			for (var i=0; i < maxItem; i+=cols) {
				newItems.push(items.slice(i, i+cols));
			}
		}
		return newItems;
	}
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show();
	
	
	// TODO: arrancaCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=6&per_page=20";
	// TODO: arrancaCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=6&per_page=20&callback=JSON_CALLBACK";
	// TODO: arrancaCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash( $scope.fetchURL.replace(targetQuery,raplaceWithQuery));
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_arrancas = [];
	
	localforage.getItem("data_arrancas_" + $scope.hashURL, function(err, get_arrancas){
		if(get_arrancas === null){
			data_arrancas =[];
		}else{
			data_arrancas = JSON.parse(get_arrancas);
			$scope.data_arrancas =JSON.parse( get_arrancas);
			$scope.arrancas = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_arrancas[lastPush])){
					$scope.arrancas.push(data_arrancas[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			},200);
		}
	}).then(function(value){
	}).catch(function (err){
	})
	if(data_arrancas === null ){
		data_arrancas =[];
	}
	if(data_arrancas.length === 0 ){
		$timeout(function() {
			var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: arrancaCtrl --|-- $http.get
			console.log("%cRetrieving JSON: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
			$http.get(url_request,http_header).then(function(response) {
				data_arrancas = response.data;
				console.log("%cSuccessfully","color:blue;font-size:18px");
				console.dir(data_arrancas);
				$scope.data_arrancas = response.data;
				// TODO: arrancaCtrl --|---------- set:localforage
				localforage.setItem("data_arrancas_" + $scope.hashURL, JSON.stringify(data_arrancas));
				$scope.arrancas = [];
				for(lastPush = 0; lastPush < 50; lastPush++) {
					if (angular.isObject(data_arrancas[lastPush])){
						$scope.arrancas.push(data_arrancas[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = $scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					console.log("%cRetrieving again: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
					// TODO: arrancaCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_arrancas = data;
						$scope.data_arrancas = data;
						$ionicLoading.hide();
						// TODO: arrancaCtrl --|---------- set:localforage
						localforage.setItem("data_arrancas_" + $scope.hashURL,JSON.stringify(data_arrancas));
						controller_by_user();
						$scope.arrancas = [];
						for(lastPush = 0; lastPush < 50; lastPush++) {
							if (angular.isObject(data_arrancas[lastPush])){
								$scope.arrancas.push(data_arrancas[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: arrancaCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: arrancaCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
						$timeout(function() {
							alertPopup.close();
						}, 2000);
					}
					});
				}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 200);
		});
	
		}, 200);
	}
	
	
	// TODO: arrancaCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: arrancaCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_arrancas = response.data;
			$scope.data_arrancas = response.data;
			// TODO: arrancaCtrl --|---------- set:localforage
			localforage.setItem("data_arrancas_" + $scope.hashURL,JSON.stringify(data_arrancas));
			$scope.arrancas = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_arrancas[lastPush])){
					$scope.arrancas.push(data_arrancas[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request =$scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: arrancaCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_arrancas = data;
					$scope.data_arrancas = data;
					$ionicLoading.hide();
					controller_by_user();
					// TODO: arrancaCtrl --|---------- set:localforage
					localforage.setItem("data_arrancas_"+ $scope.hashURL,JSON.stringify(data_arrancas));
					$scope.arrancas = [];
					for(lastPush = 0; lastPush < 50; lastPush++) {
						if (angular.isObject(data_arrancas[lastPush])){
							$scope.arrancas.push(data_arrancas[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: arrancaCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: arrancaCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					};
				});
			}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_arrancas === null){
		data_arrancas = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_arrancas[lastPush])){
				$scope.arrancas.push(data_arrancas[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: arrancaCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
//console.log(data_arrancas);
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `arranca` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: arranca_singlesCtrl --|-- 
.controller("arranca_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (arranca)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: arranca_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: arranca_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: arranca_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: arranca_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: arranca_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: arranca_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: arranca_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show();
	
	// Retrieving data
	var itemID = $stateParams.id;
	// TODO: arranca_singlesCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=6&per_page=20";
	// TODO: arranca_singlesCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=6&per_page=20&callback=JSON_CALLBACK";
	// TODO: arranca_singlesCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash($scope.fetchURL);
	
	var current_item = [];
	localforage.getItem("data_arrancas_" + $scope.hashURL, function(err, get_datas){
		if(get_datas === null){
			current_item = [];
		}else{
			if(get_datas !== null){
				var datas = JSON.parse(get_datas);
				for (var i = 0; i < datas.length; i++) {
					if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
						current_item = datas[i] ;
					}
				}
			}
			// event done, hidden animation loading
			$timeout(function(){
				$ionicLoading.hide();
				$scope.arranca = current_item ;
				controller_by_user();
			}, 100);
		};
	}).then(function(value){
	}).catch(function (err){
	})
	if( current_item.length === 0 ){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: arranca_singlesCtrl --|-- $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: arranca_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_arrancas_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "No Network connection" + " (" + data.status + ")",
						template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
					});
					$timeout(function() {
						alertPopup.close();
					}, 2000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.arranca = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: arranca_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: arranca_singlesCtrl --|------ $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: arranca_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_arrancas_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: arranca_singlesCtrl --|---------- $http.jsonp
				$http.jsonp($scope.fetchURLp,http_header).success(function(response){
					// Get data single
					var datas = response;
			// TODO: arranca_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_arrancas_"+ $scope.hashURL,JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.arranca = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.arranca = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: arranca_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `arranca_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: comparteCtrl --|-- 
.controller("comparteCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (comparte)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: comparteCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: comparteCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: comparteCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: comparteCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: comparteCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: comparteCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: comparteCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Comparte
	targetQuery = "categories=3"; //default param
	raplaceWithQuery = "categories=3";
	
	
	// TODO: comparteCtrl --|-- $scope.splitArray
	$scope.splitArray = function(items,cols,maxItem) {
		var newItems = [];
		if(maxItem == 0){
			maxItem = items.length;
		}
		if(items){
			for (var i=0; i < maxItem; i+=cols) {
				newItems.push(items.slice(i, i+cols));
			}
		}
		return newItems;
	}
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show();
	
	
	// TODO: comparteCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=3&per_page=20";
	// TODO: comparteCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=3&per_page=20&callback=JSON_CALLBACK";
	// TODO: comparteCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash( $scope.fetchURL.replace(targetQuery,raplaceWithQuery));
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_compartes = [];
	
	localforage.getItem("data_compartes_" + $scope.hashURL, function(err, get_compartes){
		if(get_compartes === null){
			data_compartes =[];
		}else{
			data_compartes = JSON.parse(get_compartes);
			$scope.data_compartes =JSON.parse( get_compartes);
			$scope.compartes = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_compartes[lastPush])){
					$scope.compartes.push(data_compartes[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			},200);
		}
	}).then(function(value){
	}).catch(function (err){
	})
	if(data_compartes === null ){
		data_compartes =[];
	}
	if(data_compartes.length === 0 ){
		$timeout(function() {
			var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: comparteCtrl --|-- $http.get
			console.log("%cRetrieving JSON: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
			$http.get(url_request,http_header).then(function(response) {
				data_compartes = response.data;
				console.log("%cSuccessfully","color:blue;font-size:18px");
				console.dir(data_compartes);
				$scope.data_compartes = response.data;
				// TODO: comparteCtrl --|---------- set:localforage
				localforage.setItem("data_compartes_" + $scope.hashURL, JSON.stringify(data_compartes));
				$scope.compartes = [];
				for(lastPush = 0; lastPush < 50; lastPush++) {
					if (angular.isObject(data_compartes[lastPush])){
						$scope.compartes.push(data_compartes[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = $scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					console.log("%cRetrieving again: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
					// TODO: comparteCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_compartes = data;
						$scope.data_compartes = data;
						$ionicLoading.hide();
						// TODO: comparteCtrl --|---------- set:localforage
						localforage.setItem("data_compartes_" + $scope.hashURL,JSON.stringify(data_compartes));
						controller_by_user();
						$scope.compartes = [];
						for(lastPush = 0; lastPush < 50; lastPush++) {
							if (angular.isObject(data_compartes[lastPush])){
								$scope.compartes.push(data_compartes[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: comparteCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: comparteCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
						$timeout(function() {
							alertPopup.close();
						}, 2000);
					}
					});
				}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 200);
		});
	
		}, 200);
	}
	
	
	// TODO: comparteCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: comparteCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_compartes = response.data;
			$scope.data_compartes = response.data;
			// TODO: comparteCtrl --|---------- set:localforage
			localforage.setItem("data_compartes_" + $scope.hashURL,JSON.stringify(data_compartes));
			$scope.compartes = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_compartes[lastPush])){
					$scope.compartes.push(data_compartes[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request =$scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: comparteCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_compartes = data;
					$scope.data_compartes = data;
					$ionicLoading.hide();
					controller_by_user();
					// TODO: comparteCtrl --|---------- set:localforage
					localforage.setItem("data_compartes_"+ $scope.hashURL,JSON.stringify(data_compartes));
					$scope.compartes = [];
					for(lastPush = 0; lastPush < 50; lastPush++) {
						if (angular.isObject(data_compartes[lastPush])){
							$scope.compartes.push(data_compartes[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: comparteCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: comparteCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					};
				});
			}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_compartes === null){
		data_compartes = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_compartes[lastPush])){
				$scope.compartes.push(data_compartes[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: comparteCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
//console.log(data_compartes);
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `comparte` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: comparte_singlesCtrl --|-- 
.controller("comparte_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (comparte)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: comparte_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: comparte_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: comparte_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: comparte_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: comparte_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: comparte_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: comparte_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show();
	
	// Retrieving data
	var itemID = $stateParams.id;
	// TODO: comparte_singlesCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=3&per_page=20";
	// TODO: comparte_singlesCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=3&per_page=20&callback=JSON_CALLBACK";
	// TODO: comparte_singlesCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash($scope.fetchURL);
	
	var current_item = [];
	localforage.getItem("data_compartes_" + $scope.hashURL, function(err, get_datas){
		if(get_datas === null){
			current_item = [];
		}else{
			if(get_datas !== null){
				var datas = JSON.parse(get_datas);
				for (var i = 0; i < datas.length; i++) {
					if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
						current_item = datas[i] ;
					}
				}
			}
			// event done, hidden animation loading
			$timeout(function(){
				$ionicLoading.hide();
				$scope.comparte = current_item ;
				controller_by_user();
			}, 100);
		};
	}).then(function(value){
	}).catch(function (err){
	})
	if( current_item.length === 0 ){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: comparte_singlesCtrl --|-- $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: comparte_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_compartes_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "No Network connection" + " (" + data.status + ")",
						template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
					});
					$timeout(function() {
						alertPopup.close();
					}, 2000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.comparte = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: comparte_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: comparte_singlesCtrl --|------ $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: comparte_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_compartes_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: comparte_singlesCtrl --|---------- $http.jsonp
				$http.jsonp($scope.fetchURLp,http_header).success(function(response){
					// Get data single
					var datas = response;
			// TODO: comparte_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_compartes_"+ $scope.hashURL,JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.comparte = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.comparte = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: comparte_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `comparte_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: criptomoneda_singlesCtrl --|-- 
.controller("criptomoneda_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (criptomoneda)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: criptomoneda_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: criptomoneda_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: criptomoneda_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: criptomoneda_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: criptomoneda_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: criptomoneda_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: criptomoneda_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show();
	
	// Retrieving data
	var itemID = $stateParams.id;
	// TODO: criptomoneda_singlesCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=8&per_page=20";
	// TODO: criptomoneda_singlesCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=8&per_page=20&callback=JSON_CALLBACK";
	// TODO: criptomoneda_singlesCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash($scope.fetchURL);
	
	var current_item = [];
	localforage.getItem("data_criptomonedas_" + $scope.hashURL, function(err, get_datas){
		if(get_datas === null){
			current_item = [];
		}else{
			if(get_datas !== null){
				var datas = JSON.parse(get_datas);
				for (var i = 0; i < datas.length; i++) {
					if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
						current_item = datas[i] ;
					}
				}
			}
			// event done, hidden animation loading
			$timeout(function(){
				$ionicLoading.hide();
				$scope.criptomoneda = current_item ;
				controller_by_user();
			}, 100);
		};
	}).then(function(value){
	}).catch(function (err){
	})
	if( current_item.length === 0 ){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: criptomoneda_singlesCtrl --|-- $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: criptomoneda_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_criptomonedas_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "No Network connection" + " (" + data.status + ")",
						template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
					});
					$timeout(function() {
						alertPopup.close();
					}, 2000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.criptomoneda = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: criptomoneda_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: criptomoneda_singlesCtrl --|------ $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: criptomoneda_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_criptomonedas_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: criptomoneda_singlesCtrl --|---------- $http.jsonp
				$http.jsonp($scope.fetchURLp,http_header).success(function(response){
					// Get data single
					var datas = response;
			// TODO: criptomoneda_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_criptomonedas_"+ $scope.hashURL,JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.criptomoneda = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.criptomoneda = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: criptomoneda_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `criptomoneda_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: criptomonedasCtrl --|-- 
.controller("criptomonedasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (criptomoneda)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: criptomonedasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: criptomonedasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: criptomonedasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: criptomonedasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: criptomonedasCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: criptomonedasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: criptomonedasCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Criptomonedas
	targetQuery = "categories=8"; //default param
	raplaceWithQuery = "categories=8";
	
	
	// TODO: criptomonedasCtrl --|-- $scope.splitArray
	$scope.splitArray = function(items,cols,maxItem) {
		var newItems = [];
		if(maxItem == 0){
			maxItem = items.length;
		}
		if(items){
			for (var i=0; i < maxItem; i+=cols) {
				newItems.push(items.slice(i, i+cols));
			}
		}
		return newItems;
	}
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show();
	
	
	// TODO: criptomonedasCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=8&per_page=20";
	// TODO: criptomonedasCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=8&per_page=20&callback=JSON_CALLBACK";
	// TODO: criptomonedasCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash( $scope.fetchURL.replace(targetQuery,raplaceWithQuery));
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_criptomonedas = [];
	
	localforage.getItem("data_criptomonedas_" + $scope.hashURL, function(err, get_criptomonedas){
		if(get_criptomonedas === null){
			data_criptomonedas =[];
		}else{
			data_criptomonedas = JSON.parse(get_criptomonedas);
			$scope.data_criptomonedas =JSON.parse( get_criptomonedas);
			$scope.criptomonedas = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_criptomonedas[lastPush])){
					$scope.criptomonedas.push(data_criptomonedas[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			},200);
		}
	}).then(function(value){
	}).catch(function (err){
	})
	if(data_criptomonedas === null ){
		data_criptomonedas =[];
	}
	if(data_criptomonedas.length === 0 ){
		$timeout(function() {
			var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: criptomonedasCtrl --|-- $http.get
			console.log("%cRetrieving JSON: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
			$http.get(url_request,http_header).then(function(response) {
				data_criptomonedas = response.data;
				console.log("%cSuccessfully","color:blue;font-size:18px");
				console.dir(data_criptomonedas);
				$scope.data_criptomonedas = response.data;
				// TODO: criptomonedasCtrl --|---------- set:localforage
				localforage.setItem("data_criptomonedas_" + $scope.hashURL, JSON.stringify(data_criptomonedas));
				$scope.criptomonedas = [];
				for(lastPush = 0; lastPush < 50; lastPush++) {
					if (angular.isObject(data_criptomonedas[lastPush])){
						$scope.criptomonedas.push(data_criptomonedas[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = $scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					console.log("%cRetrieving again: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
					// TODO: criptomonedasCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_criptomonedas = data;
						$scope.data_criptomonedas = data;
						$ionicLoading.hide();
						// TODO: criptomonedasCtrl --|---------- set:localforage
						localforage.setItem("data_criptomonedas_" + $scope.hashURL,JSON.stringify(data_criptomonedas));
						controller_by_user();
						$scope.criptomonedas = [];
						for(lastPush = 0; lastPush < 50; lastPush++) {
							if (angular.isObject(data_criptomonedas[lastPush])){
								$scope.criptomonedas.push(data_criptomonedas[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: criptomonedasCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: criptomonedasCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
						$timeout(function() {
							alertPopup.close();
						}, 2000);
					}
					});
				}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 200);
		});
	
		}, 200);
	}
	
	
	// TODO: criptomonedasCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: criptomonedasCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_criptomonedas = response.data;
			$scope.data_criptomonedas = response.data;
			// TODO: criptomonedasCtrl --|---------- set:localforage
			localforage.setItem("data_criptomonedas_" + $scope.hashURL,JSON.stringify(data_criptomonedas));
			$scope.criptomonedas = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_criptomonedas[lastPush])){
					$scope.criptomonedas.push(data_criptomonedas[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request =$scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: criptomonedasCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_criptomonedas = data;
					$scope.data_criptomonedas = data;
					$ionicLoading.hide();
					controller_by_user();
					// TODO: criptomonedasCtrl --|---------- set:localforage
					localforage.setItem("data_criptomonedas_"+ $scope.hashURL,JSON.stringify(data_criptomonedas));
					$scope.criptomonedas = [];
					for(lastPush = 0; lastPush < 50; lastPush++) {
						if (angular.isObject(data_criptomonedas[lastPush])){
							$scope.criptomonedas.push(data_criptomonedas[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: criptomonedasCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: criptomonedasCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					};
				});
			}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_criptomonedas === null){
		data_criptomonedas = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_criptomonedas[lastPush])){
				$scope.criptomonedas.push(data_criptomonedas[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: criptomonedasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
//console.log(data_criptomonedas);
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `criptomonedas` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: criptomonedas_singlesCtrl --|-- 
.controller("criptomonedas_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (criptomonedas)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: criptomonedas_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: criptomonedas_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: criptomonedas_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: criptomonedas_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: criptomonedas_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: criptomonedas_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: criptomonedas_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `criptomonedas_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: dashboardCtrl --|-- 
.controller("dashboardCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: dashboardCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: dashboardCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: dashboardCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: dashboardCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: dashboardCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: dashboardCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: dashboardCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `dashboard` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: desarrollo_personalCtrl --|-- 
.controller("desarrollo_personalCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "page" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: desarrollo_personalCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: desarrollo_personalCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: desarrollo_personalCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: desarrollo_personalCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: desarrollo_personalCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: desarrollo_personalCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: desarrollo_personalCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `desarrollo_personal` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: despertar_singlesCtrl --|-- 
.controller("despertar_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (despertar)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: despertar_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: despertar_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: despertar_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: despertar_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: despertar_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: despertar_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: despertar_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `despertar_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: despiert_singlesCtrl --|-- 
.controller("despiert_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (despiert)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: despiert_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: despiert_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: despiert_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: despiert_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: despiert_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: despiert_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: despiert_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show();
	
	// Retrieving data
	var itemID = $stateParams.id;
	// TODO: despiert_singlesCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=2&per_page=20";
	// TODO: despiert_singlesCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=2&per_page=20&callback=JSON_CALLBACK";
	// TODO: despiert_singlesCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash($scope.fetchURL);
	
	var current_item = [];
	localforage.getItem("data_despierts_" + $scope.hashURL, function(err, get_datas){
		if(get_datas === null){
			current_item = [];
		}else{
			if(get_datas !== null){
				var datas = JSON.parse(get_datas);
				for (var i = 0; i < datas.length; i++) {
					if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
						current_item = datas[i] ;
					}
				}
			}
			// event done, hidden animation loading
			$timeout(function(){
				$ionicLoading.hide();
				$scope.despiert = current_item ;
				controller_by_user();
			}, 100);
		};
	}).then(function(value){
	}).catch(function (err){
	})
	if( current_item.length === 0 ){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: despiert_singlesCtrl --|-- $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: despiert_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_despierts_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "No Network connection" + " (" + data.status + ")",
						template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
					});
					$timeout(function() {
						alertPopup.close();
					}, 2000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.despiert = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: despiert_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: despiert_singlesCtrl --|------ $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: despiert_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_despierts_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: despiert_singlesCtrl --|---------- $http.jsonp
				$http.jsonp($scope.fetchURLp,http_header).success(function(response){
					// Get data single
					var datas = response;
			// TODO: despiert_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_despierts_"+ $scope.hashURL,JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.despiert = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.despiert = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: despiert_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `despiert_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: despiertaCtrl --|-- 
.controller("despiertaCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (despiert)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: despiertaCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: despiertaCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: despiertaCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: despiertaCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: despiertaCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: despiertaCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: despiertaCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Despierta
	targetQuery = "categories=2"; //default param
	raplaceWithQuery = "categories=2";
	
	
	// TODO: despiertaCtrl --|-- $scope.splitArray
	$scope.splitArray = function(items,cols,maxItem) {
		var newItems = [];
		if(maxItem == 0){
			maxItem = items.length;
		}
		if(items){
			for (var i=0; i < maxItem; i+=cols) {
				newItems.push(items.slice(i, i+cols));
			}
		}
		return newItems;
	}
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show();
	
	
	// TODO: despiertaCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=2&per_page=20";
	// TODO: despiertaCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=2&per_page=20&callback=JSON_CALLBACK";
	// TODO: despiertaCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash( $scope.fetchURL.replace(targetQuery,raplaceWithQuery));
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_despierts = [];
	
	localforage.getItem("data_despierts_" + $scope.hashURL, function(err, get_despierts){
		if(get_despierts === null){
			data_despierts =[];
		}else{
			data_despierts = JSON.parse(get_despierts);
			$scope.data_despierts =JSON.parse( get_despierts);
			$scope.despierts = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_despierts[lastPush])){
					$scope.despierts.push(data_despierts[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			},200);
		}
	}).then(function(value){
	}).catch(function (err){
	})
	if(data_despierts === null ){
		data_despierts =[];
	}
	if(data_despierts.length === 0 ){
		$timeout(function() {
			var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: despiertaCtrl --|-- $http.get
			console.log("%cRetrieving JSON: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
			$http.get(url_request,http_header).then(function(response) {
				data_despierts = response.data;
				console.log("%cSuccessfully","color:blue;font-size:18px");
				console.dir(data_despierts);
				$scope.data_despierts = response.data;
				// TODO: despiertaCtrl --|---------- set:localforage
				localforage.setItem("data_despierts_" + $scope.hashURL, JSON.stringify(data_despierts));
				$scope.despierts = [];
				for(lastPush = 0; lastPush < 50; lastPush++) {
					if (angular.isObject(data_despierts[lastPush])){
						$scope.despierts.push(data_despierts[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = $scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					console.log("%cRetrieving again: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
					// TODO: despiertaCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_despierts = data;
						$scope.data_despierts = data;
						$ionicLoading.hide();
						// TODO: despiertaCtrl --|---------- set:localforage
						localforage.setItem("data_despierts_" + $scope.hashURL,JSON.stringify(data_despierts));
						controller_by_user();
						$scope.despierts = [];
						for(lastPush = 0; lastPush < 50; lastPush++) {
							if (angular.isObject(data_despierts[lastPush])){
								$scope.despierts.push(data_despierts[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: despiertaCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: despiertaCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
						$timeout(function() {
							alertPopup.close();
						}, 2000);
					}
					});
				}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 200);
		});
	
		}, 200);
	}
	
	
	// TODO: despiertaCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: despiertaCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_despierts = response.data;
			$scope.data_despierts = response.data;
			// TODO: despiertaCtrl --|---------- set:localforage
			localforage.setItem("data_despierts_" + $scope.hashURL,JSON.stringify(data_despierts));
			$scope.despierts = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_despierts[lastPush])){
					$scope.despierts.push(data_despierts[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request =$scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: despiertaCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_despierts = data;
					$scope.data_despierts = data;
					$ionicLoading.hide();
					controller_by_user();
					// TODO: despiertaCtrl --|---------- set:localforage
					localforage.setItem("data_despierts_"+ $scope.hashURL,JSON.stringify(data_despierts));
					$scope.despierts = [];
					for(lastPush = 0; lastPush < 50; lastPush++) {
						if (angular.isObject(data_despierts[lastPush])){
							$scope.despierts.push(data_despierts[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: despiertaCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: despiertaCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					};
				});
			}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_despierts === null){
		data_despierts = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_despierts[lastPush])){
				$scope.despierts.push(data_despierts[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: despiertaCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
//console.log(data_despierts);
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `despierta` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: misionCtrl --|-- 
.controller("misionCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "page" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: misionCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: misionCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: misionCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: misionCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: misionCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: misionCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: misionCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `mision` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: post_singlesCtrl --|-- 
.controller("post_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (post)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: post_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: post_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: post_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: post_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: post_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: post_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: post_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show();
	
	// Retrieving data
	var itemID = $stateParams.id;
	// TODO: post_singlesCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=4&per_page=20";
	// TODO: post_singlesCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=4&per_page=20&callback=JSON_CALLBACK";
	// TODO: post_singlesCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash($scope.fetchURL);
	
	var current_item = [];
	localforage.getItem("data_posts_" + $scope.hashURL, function(err, get_datas){
		if(get_datas === null){
			current_item = [];
		}else{
			if(get_datas !== null){
				var datas = JSON.parse(get_datas);
				for (var i = 0; i < datas.length; i++) {
					if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
						current_item = datas[i] ;
					}
				}
			}
			// event done, hidden animation loading
			$timeout(function(){
				$ionicLoading.hide();
				$scope.post = current_item ;
				controller_by_user();
			}, 100);
		};
	}).then(function(value){
	}).catch(function (err){
	})
	if( current_item.length === 0 ){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: post_singlesCtrl --|-- $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: post_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_posts_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "No Network connection" + " (" + data.status + ")",
						template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
					});
					$timeout(function() {
						alertPopup.close();
					}, 2000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.post = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: post_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: post_singlesCtrl --|------ $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: post_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_posts_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: post_singlesCtrl --|---------- $http.jsonp
				$http.jsonp($scope.fetchURLp,http_header).success(function(response){
					// Get data single
					var datas = response;
			// TODO: post_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_posts_"+ $scope.hashURL,JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.post = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.post = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: post_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `post_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: quienessomosCtrl --|-- 
.controller("quienessomosCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "page" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: quienessomosCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: quienessomosCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: quienessomosCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: quienessomosCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: quienessomosCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: quienessomosCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: quienessomosCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `quienessomos` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: slide_tab_menuCtrl --|-- 
.controller("slide_tab_menuCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: slide_tab_menuCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: slide_tab_menuCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: slide_tab_menuCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: slide_tab_menuCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: slide_tab_menuCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: slide_tab_menuCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: slide_tab_menuCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `slide_tab_menu` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: tica_y_legalCtrl --|-- 
.controller("tica_y_legalCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (tica_y_legal)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: tica_y_legalCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: tica_y_legalCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: tica_y_legalCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: tica_y_legalCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: tica_y_legalCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: tica_y_legalCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: tica_y_legalCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};
	
	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	var targetQuery = ""; //default param
	var raplaceWithQuery = "";
	//fix url Ética y Legal
	targetQuery = "categories=9"; //default param
	raplaceWithQuery = "categories=9";
	
	
	// TODO: tica_y_legalCtrl --|-- $scope.splitArray
	$scope.splitArray = function(items,cols,maxItem) {
		var newItems = [];
		if(maxItem == 0){
			maxItem = items.length;
		}
		if(items){
			for (var i=0; i < maxItem; i+=cols) {
				newItems.push(items.slice(i, i+cols));
			}
		}
		return newItems;
	}
	$scope.gmapOptions = {options: { scrollwheel: false }};
	
	var fetch_per_scroll = 1;
	// animation loading 
	$ionicLoading.show();
	
	
	// TODO: tica_y_legalCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=9&per_page=20";
	// TODO: tica_y_legalCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=9&per_page=20&callback=JSON_CALLBACK";
	// TODO: tica_y_legalCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash( $scope.fetchURL.replace(targetQuery,raplaceWithQuery));
	
	
	$scope.noMoreItemsAvailable = false; //readmore status
	var lastPush = 0;
	var data_tica_y_legals = [];
	
	localforage.getItem("data_tica_y_legals_" + $scope.hashURL, function(err, get_tica_y_legals){
		if(get_tica_y_legals === null){
			data_tica_y_legals =[];
		}else{
			data_tica_y_legals = JSON.parse(get_tica_y_legals);
			$scope.data_tica_y_legals =JSON.parse( get_tica_y_legals);
			$scope.tica_y_legals = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_tica_y_legals[lastPush])){
					$scope.tica_y_legals.push(data_tica_y_legals[lastPush]);
				};
			}
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			},200);
		}
	}).then(function(value){
	}).catch(function (err){
	})
	if(data_tica_y_legals === null ){
		data_tica_y_legals =[];
	}
	if(data_tica_y_legals.length === 0 ){
		$timeout(function() {
			var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
			// overwrite HTTP Header 
			http_header = {
				headers: {
				},
				params: http_params
			};
			// TODO: tica_y_legalCtrl --|-- $http.get
			console.log("%cRetrieving JSON: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
			$http.get(url_request,http_header).then(function(response) {
				data_tica_y_legals = response.data;
				console.log("%cSuccessfully","color:blue;font-size:18px");
				console.dir(data_tica_y_legals);
				$scope.data_tica_y_legals = response.data;
				// TODO: tica_y_legalCtrl --|---------- set:localforage
				localforage.setItem("data_tica_y_legals_" + $scope.hashURL, JSON.stringify(data_tica_y_legals));
				$scope.tica_y_legals = [];
				for(lastPush = 0; lastPush < 50; lastPush++) {
					if (angular.isObject(data_tica_y_legals[lastPush])){
						$scope.tica_y_legals.push(data_tica_y_legals[lastPush]);
					};
				}
			},function(response) {
			
				$timeout(function() {
					var url_request = $scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
					// overwrite HTTP Header 
					http_header = {
						headers: {
						},
						params: http_params
					};
					console.log("%cRetrieving again: %c" + url_request,"color:blue;font-size:18px","color:red;font-size:18px");
					// TODO: tica_y_legalCtrl --|------ $http.jsonp
					$http.jsonp(url_request,http_header).success(function(data){
						data_tica_y_legals = data;
						$scope.data_tica_y_legals = data;
						$ionicLoading.hide();
						// TODO: tica_y_legalCtrl --|---------- set:localforage
						localforage.setItem("data_tica_y_legals_" + $scope.hashURL,JSON.stringify(data_tica_y_legals));
						controller_by_user();
						$scope.tica_y_legals = [];
						for(lastPush = 0; lastPush < 50; lastPush++) {
							if (angular.isObject(data_tica_y_legals[lastPush])){
								$scope.tica_y_legals.push(data_tica_y_legals[lastPush]);
							};
						}
					}).error(function(data){
					if(response.status ===401){
						// TODO: tica_y_legalCtrl --|------------ error:Unauthorized
						$scope.showAuthentication();
					}else{
						// TODO: tica_y_legalCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
						$timeout(function() {
							alertPopup.close();
						}, 2000);
					}
					});
				}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 200);
		});
	
		}, 200);
	}
	
	
	// TODO: tica_y_legalCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		var url_request = $scope.fetchURL.replace(targetQuery,raplaceWithQuery);
		// retry retrieving data
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: tica_y_legalCtrl --|------ $http.get
		$http.get(url_request,http_header).then(function(response) {
			data_tica_y_legals = response.data;
			$scope.data_tica_y_legals = response.data;
			// TODO: tica_y_legalCtrl --|---------- set:localforage
			localforage.setItem("data_tica_y_legals_" + $scope.hashURL,JSON.stringify(data_tica_y_legals));
			$scope.tica_y_legals = [];
			for(lastPush = 0; lastPush < 50; lastPush++) {
				if (angular.isObject(data_tica_y_legals[lastPush])){
					$scope.tica_y_legals.push(data_tica_y_legals[lastPush]);
				};
			}
		},function(response){
			
		// retrieving data with jsonp
			$timeout(function() {
			var url_request =$scope.fetchURLp.replace(targetQuery,raplaceWithQuery);
				// overwrite http_header 
				http_header = {
					headers: {
					},
					params: http_params
				};
				// TODO: tica_y_legalCtrl --|---------- $http.jsonp
				$http.jsonp(url_request,http_header).success(function(data){
					data_tica_y_legals = data;
					$scope.data_tica_y_legals = data;
					$ionicLoading.hide();
					controller_by_user();
					// TODO: tica_y_legalCtrl --|---------- set:localforage
					localforage.setItem("data_tica_y_legals_"+ $scope.hashURL,JSON.stringify(data_tica_y_legals));
					$scope.tica_y_legals = [];
					for(lastPush = 0; lastPush < 50; lastPush++) {
						if (angular.isObject(data_tica_y_legals[lastPush])){
							$scope.tica_y_legals.push(data_tica_y_legals[lastPush]);
						};
					}
				}).error(function(resp){
					if(response.status ===401){
					// TODO: tica_y_legalCtrl --|------------ error:Unauthorized
					$scope.showAuthentication();
					}else{
						// TODO: tica_y_legalCtrl --|------------ error:Message
						var data = { statusText:response.statusText, status:response.status };
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					};
				});
			}, 200);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				controller_by_user();
			}, 500);
		});
	
	};
	if (data_tica_y_legals === null){
		data_tica_y_legals = [];
	};
	// animation readmore
	var fetchItems = function() {
		for(var z=0;z<fetch_per_scroll;z++){
			if (angular.isObject(data_tica_y_legals[lastPush])){
				$scope.tica_y_legals.push(data_tica_y_legals[lastPush]);
				lastPush++;
			}else{;
				$scope.noMoreItemsAvailable = true;
			}
		}
		$scope.$broadcast("scroll.infiniteScrollComplete");
	};
	
	// event readmore
	$scope.onInfinite = function() {
		$timeout(fetchItems, 500);
	};
	
	// create animation fade slide in right (ionic-material)
	$scope.fireEvent = function(){
		ionicMaterialInk.displayEffect();
	};
	// code 

	// TODO: tica_y_legalCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
//debug: all data
//console.log(data_tica_y_legals);
$ionicConfig.backButton.text("");
			
		} catch(e){
			console.log("%cerror: %cPage: `tica_y_legal` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: tica_y_legal_singlesCtrl --|-- 
.controller("tica_y_legal_singlesCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "table (tica_y_legal)" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.showAuthentication
	$scope.showAuthentication  = function(){
		var authPopup = $ionicPopup.show({
			template: ' This page required login',
			title: "Authorization",
			subTitle: "Authorization is required",
			scope: $scope,
			buttons: [
				{text:"Cancel",onTap: function(e){
					$state.go("goblackdiamond.dashboard");
				}},
			],
		}).then(function(form){
		},function(err){
		},function(msg){
		});
	};
	
	// set default parameter http
	var http_params = {};

	// set HTTP Header 
	var http_header = {
		headers: {
		},
		params: http_params
	};
	// animation loading 
	$ionicLoading.show();
	
	// Retrieving data
	var itemID = $stateParams.id;
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.fetchURL
	$scope.fetchURL = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=9&per_page=20";
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.fetchURLp
	$scope.fetchURLp = "http://goblackdiamond.com/wp-json/wp/v2/posts?categories=9&per_page=20&callback=JSON_CALLBACK";
	// TODO: tica_y_legal_singlesCtrl --|-- $scope.hashURL
	$scope.hashURL = md5.createHash($scope.fetchURL);
	
	var current_item = [];
	localforage.getItem("data_tica_y_legals_" + $scope.hashURL, function(err, get_datas){
		if(get_datas === null){
			current_item = [];
		}else{
			if(get_datas !== null){
				var datas = JSON.parse(get_datas);
				for (var i = 0; i < datas.length; i++) {
					if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
						current_item = datas[i] ;
					}
				}
			}
			// event done, hidden animation loading
			$timeout(function(){
				$ionicLoading.hide();
				$scope.tica_y_legal = current_item ;
				controller_by_user();
			}, 100);
		};
	}).then(function(value){
	}).catch(function (err){
	})
	if( current_item.length === 0 ){
		var itemID = $stateParams.id;
		var current_item = [];
	
		// set HTTP Header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: tica_y_legal_singlesCtrl --|-- $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: tica_y_legal_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_tica_y_legals_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
					// Error message
					var alertPopup = $ionicPopup.alert({
						title: "No Network connection" + " (" + data.status + ")",
						template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
					});
					$timeout(function() {
						alertPopup.close();
					}, 2000);
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.tica_y_legal = current_item ;
				controller_by_user();
			}, 500);
		});
	}
	
	
		// TODO: tica_y_legal_singlesCtrl --|-- $scope.doRefresh
	$scope.doRefresh = function(){
		// Retrieving data
		var itemID = $stateParams.id;
		var current_item = [];
		// overwrite http_header 
		http_header = {
			headers: {
			},
			params: http_params
		};
		// TODO: tica_y_legal_singlesCtrl --|------ $http.get
		$http.get($scope.fetchURL,http_header).then(function(response) {
			// Get data single
			var datas = response.data;
			// TODO: tica_y_legal_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_tica_y_legals_"+ $scope.hashURL,JSON.stringify(datas));
			for (var i = 0; i < datas.length; i++) {
				if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
					current_item = datas[i] ;
				}
			}
		},function(data) {
			// Error message
		// TODO: tica_y_legal_singlesCtrl --|---------- $http.jsonp
				$http.jsonp($scope.fetchURLp,http_header).success(function(response){
					// Get data single
					var datas = response;
			// TODO: tica_y_legal_singlesCtrl --|---------- set:localforage
			localforage.setItem("data_tica_y_legals_"+ $scope.hashURL,JSON.stringify(datas));
					for (var i = 0; i < datas.length; i++) {
						if((datas[i].id ===  parseInt(itemID)) || (datas[i].id === itemID.toString())) {
							current_item = datas[i] ;
						}
					}
						$scope.$broadcast("scroll.refreshComplete");
						// event done, hidden animation loading
						$timeout(function() {
							$ionicLoading.hide();
							$scope.tica_y_legal = current_item ;
							controller_by_user();
						}, 500);
					}).error(function(resp){
						var alertPopup = $ionicPopup.alert({
							title: "No Network connection" + " (" + data.status + ")",
							template: "Internet connection is required to access the application. Please enable mobile network or Wifi in Settings",
						});
					});
		}).finally(function() {
			$scope.$broadcast("scroll.refreshComplete");
			// event done, hidden animation loading
			$timeout(function() {
				$ionicLoading.hide();
				$scope.tica_y_legal = current_item ;
				controller_by_user();
			}, 500);
		});
	};
	// code 

	// TODO: tica_y_legal_singlesCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `tica_y_legal_singles` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: tu_negocioCtrl --|-- 
.controller("tu_negocioCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: tu_negocioCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: tu_negocioCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: tu_negocioCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: tu_negocioCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: tu_negocioCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: tu_negocioCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: tu_negocioCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `tu_negocio` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: user_loginCtrl --|-- 
.controller("user_loginCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = false;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "page_builder" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: user_loginCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: user_loginCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: user_loginCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: user_loginCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: user_loginCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: user_loginCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: user_loginCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			


/** auth login **/
$scope.login_data = {username:"",password:""};
$scope.submitLogin = function(){
    
    // animation loading 
	$ionicLoading.show({
		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
	});
    
    var username = $scope.login_data.username || "admin" ;
    var password = $scope.login_data.password || "1234" ;
 
    
    var auth_cookie_url = "http://goblackdiamond.com//api/user/generate_auth_cookie/?insecure=cool&username="+username+"&password="+password+"&callback=JSON_CALLBACK";
    $sce.trustAsResourceUrl(auth_cookie_url);
    
    $http.jsonp(auth_cookie_url).success(function(resp_auth_cookie, status, headers, config){
        console.log("resp_auth_cookie",resp_auth_cookie);
        
        $scope.login_data.username = "" ;
        $scope.login_data.password = "" ;
        
        if(resp_auth_cookie.user){ 
            $ionicLoading.hide();
            window.localStorage.setItem("login_data",JSON.stringify(resp_auth_cookie));      
            $ionicHistory.nextViewOptions({
                disableAnimate: true,
                disableBack: true
            });
            $ionicHistory.clearHistory();
            $ionicHistory.clearCache();
            $state.go("goblackdiamond.user_profile");            
        }else{
            $ionicLoading.hide();
            $ionicPopup.show({
                title: "Something is wrong",
                template: "Please check your username and password.",
                buttons: [{
                    text: "Retry"
                }]
            })
            
        }
    }).error(function (err_auth_cookie, status, headers, config) {
        console.log("err_auth_cookie",err_auth_cookie);
    });
}                 
			
		} catch(e){
			console.log("%cerror: %cPage: `user_login` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: user_profileCtrl --|-- 
.controller("user_profileCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "page_builder" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: user_profileCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: user_profileCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: user_profileCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: user_profileCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: user_profileCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: user_profileCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: user_profileCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			


    $interval(function() {
        
        if(window.localStorage.getItem("login_data") !== "undefined"){
            var login_data = JSON.parse(window.localStorage.getItem("login_data"));
            if(angular.isObject(login_data)){
                $scope.current_user = login_data.user;
            }else{
                window.localStorage.removeItem("login_data");
                $ionicHistory.nextViewOptions({
                    disableAnimate: true,
                    disableBack: true
                });
                
                $ionicHistory.clearHistory();
                $ionicHistory.clearCache();
                $state.go("goblackdiamond.user_login");
            }
        }else{
          
          window.localStorage.removeItem("login_data");
          
          $ionicHistory.nextViewOptions({
            disableAnimate: true,
            disableBack: true
          });
        
          $ionicHistory.clearHistory();
          $ionicHistory.clearCache();
          $state.go("goblackdiamond.user_login");
        }
    
    },500);


$scope.showDialog = function(){
    $ionicPopup.show({
        title: "Something is wrong",
        template: "Please check your username and password.",
        buttons: [{
            text: "Retry"
        }]
    })  
}

$scope.logOut = function(){
    window.localStorage.removeItem("login_data");
    
    $ionicHistory.nextViewOptions({
        disableAnimate: true,
        disableBack: true
    });
    
    $ionicHistory.clearHistory();
    $ionicHistory.clearCache();
    $state.go("goblackdiamond.user_login");
}

			
		} catch(e){
			console.log("%cerror: %cPage: `user_profile` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: user_registerCtrl --|-- 
.controller("user_registerCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = false;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "page_builder" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: user_registerCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: user_registerCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: user_registerCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: user_registerCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: user_registerCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: user_registerCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: user_registerCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			

            $scope.user_data = {username:"",user_pass:"",email:""};
            $scope.submitRegister = function(){
                
                // animation loading 
            	$ionicLoading.show({
            		template: '<div class="loader"><svg class="circular"><circle class="path" cx="50" cy="50" r="20" fill="none" stroke-width="2" stroke-miterlimit="10"/></svg></div>'
            	});   
                                 
                var nonce_url = "http://goblackdiamond.com//api/get_nonce/?controller=user&method=register&callback=JSON_CALLBACK";
                $sce.trustAsResourceUrl(nonce_url);
                
                $http.jsonp(nonce_url).success(function(resp_nonce, status, headers, config){
                    console.log("resp_nonce",resp_nonce);
                    
                    var http_params = $scope.user_data ;
                    http_params.nonce = resp_nonce.nonce;
                    var http_header = {params: http_params};
                                        
                    var register_url = "http://goblackdiamond.com//api/user/register/?insecure=cool&callback=JSON_CALLBACK";
                    $sce.trustAsResourceUrl(register_url);
                    $http.jsonp(register_url,http_header).success(function(resp_register, status, headers, config){
                            console.log("resp_register",resp_register);

                            if(resp_register.user_id){ 
                                    $ionicLoading.hide();
                                    $ionicPopup.show({
                                        title: "Congratulations",
                                        template: "Your account has been created successfully. Please login.",
                                        buttons: [{
                                            text: "OK",         
                                            onTap: function(e){
                                                
                                                $ionicHistory.nextViewOptions({
                                                    disableAnimate: true,
                                                    disableBack: true
                                                });
                                                
                                                $ionicHistory.clearHistory();
                                                $ionicHistory.clearCache();
                                                $state.go("goblackdiamond.user_login");
                    				        },
                                        }]
                                    })
                            }else{
                                    
                                    $ionicLoading.hide();
                                    $ionicPopup.show({
                                        title: resp_register.status,
                                        template: resp_register.error,
                                        buttons: [{
                                            text: "Retry"
                                        }]
                                    })
                                    
                            }
                    }).error(function (err_register, status, headers, config) {
                        console.log("err_register",err_register);
                    });    
                        
                }).error(function (err_nonce, status, headers, config) {
                    console.log("err_nonce",err_nonce);
                });
    
            }     
			
		} catch(e){
			console.log("%cerror: %cPage: `user_register` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: visionCtrl --|-- 
.controller("visionCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "page" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: visionCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: visionCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: visionCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: visionCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: visionCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: visionCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: visionCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
			
		} catch(e){
			console.log("%cerror: %cPage: `vision` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})

// TODO: vivenciasCtrl --|-- 
.controller("vivenciasCtrl", function($ionicConfig,$scope,$rootScope,$state,$location,$ionicScrollDelegate,$ionicListDelegate,$http,$httpParamSerializer,$stateParams,$timeout,$interval,$ionicLoading,$ionicPopup,$ionicPopover,$ionicActionSheet,$ionicSlideBoxDelegate,$ionicHistory,ionicMaterialInk,ionicMaterialMotion,$window,$ionicModal,base64,md5,$document,$sce,$ionicGesture){
	
	$rootScope.headerExists = true;
	$rootScope.ionWidth = $document[0].body.querySelector(".view-container").offsetWidth || 412;
	$rootScope.grid64 = parseInt($rootScope.ionWidth / 64) ;
	$rootScope.grid80 = parseInt($rootScope.ionWidth / 80) ;
	$rootScope.grid128 = parseInt($rootScope.ionWidth / 128) ;
	$rootScope.grid256 = parseInt($rootScope.ionWidth / 256) ;
	$rootScope.last_edit = "menu" ;
	$scope.$on("$ionicView.afterEnter", function (){
		var page_id = $state.current.name ;
		$rootScope.page_id = page_id.replace(".","-") ;
	});
	$scope.$on("$ionicView.enter", function (){
		$scope.scrollTop();
	});
	// TODO: vivenciasCtrl --|-- $scope.scrollTop
	$rootScope.scrollTop = function(){
		$timeout(function(){
			$ionicScrollDelegate.$getByHandle("top").scrollTop();
		},100);
	};
	// TODO: vivenciasCtrl --|-- $scope.openURL
	// open external browser 
	$scope.openURL = function($url){
		window.open($url,"_system","location=yes");
	};
	// TODO: vivenciasCtrl --|-- $scope.openAppBrowser
	// open AppBrowser
	$scope.openAppBrowser = function($url){
		var appBrowser = window.open($url,"_blank","hardwareback=Done");
		appBrowser.addEventListener("loadstart",function(){
			appBrowser.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: vivenciasCtrl --|-- $scope.openWebView
	// open WebView
	$scope.openWebView = function($url){
		var appWebview = window.open($url,"_blank","location=no");
		appWebview.addEventListener("loadstart",function(){
			appWebview.insertCSS({
				code: "body{background:#100;color:#100;font-size:1px;}body:after{content:'loading...';color:#fff;font-size:72px;position:absolute;bottom:50%;left:0;right:0; text-align: center; vertical-align: middle;}"
			});
		});
	
		appWebview.addEventListener("loaderror",function(){
			window.location = "retry.html";
		});
	};
	
	
	// TODO: vivenciasCtrl --|-- $scope.toggleGroup
	$scope.toggleGroup = function(group) {
		if ($scope.isGroupShown(group)) {
			$scope.shownGroup = null;
		} else {
			$scope.shownGroup = group;
		}
	};
	
	$scope.isGroupShown = function(group) {
		return $scope.shownGroup === group;
	};
	
	// TODO: vivenciasCtrl --|-- $scope.redirect
	// redirect
	$scope.redirect = function($url){
		$window.location.href = $url;
	};
	
	// Set Motion
	$timeout(function(){
		ionicMaterialMotion.slideUp({
			selector: ".slide-up"
		});
	}, 300);
	// code 

	// TODO: vivenciasCtrl --|-- controller_by_user
	// controller by user 
	function controller_by_user(){
		try {
			
$ionicConfig.backButton.text("");			
		} catch(e){
			console.log("%cerror: %cPage: `vivencias` and field: `Custom Controller`","color:blue;font-size:18px","color:red;font-size:18px");
			console.dir(e);
		}
	}
	$scope.rating = {};
	$scope.rating.max = 5;
	
	// animation ink (ionic-material)
	ionicMaterialInk.displayEffect();
	controller_by_user();
})
