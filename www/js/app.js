angular.module("goblackdiamond", ["ngCordova","ionic","ionMdInput","ionic-material","ion-datetime-picker","ionic.rating","utf8-base64","angular-md5","chart.js","goblackdiamond.controllers", "goblackdiamond.services"])
	.run(function($ionicPlatform,$window,$interval,$timeout,$ionicHistory,$ionicPopup,$state,$rootScope){

		$rootScope.appName = "GoBlackDiamond" ;
		$rootScope.appLogo = "data/images/header/logo.png" ;
		$rootScope.appVersion = "1.0" ;

		$ionicPlatform.ready(function() {
			//required: cordova plugin add ionic-plugin-keyboard --save
			if(window.cordova && window.cordova.plugins.Keyboard) {
				cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
				cordova.plugins.Keyboard.disableScroll(true);
			}

			//required: cordova plugin add cordova-plugin-statusbar --save
			if(window.StatusBar) {
				StatusBar.styleDefault();
			}

			localforage.config({
				driver : [localforage.WEBSQL,localforage.INDEXEDDB,localforage.LOCALSTORAGE],
				name : "goblackdiamond",
				storeName : "goblackdiamond",
				description : "The offline datastore for GoBlackDiamond app"
			});



		});
	})


	.filter("to_trusted", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])

	.filter("trustUrl", function($sce) {
		return function(url) {
			return $sce.trustAsResourceUrl(url);
		};
	})

	.filter("trustJs", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsJs(text);
		};
	}])

	.filter("strExplode", function() {
		return function($string,$delimiter) {
			if(!$string.length ) return;
			var $_delimiter = $delimiter || "|";
			return $string.split($_delimiter);
		};
	})

	.filter("strDate", function(){
		return function (input) {
			return new Date(input);
		}
	})
	.filter("strHTML", ["$sce", function($sce){
		return function(text) {
			return $sce.trustAsHtml(text);
		};
	}])
	.filter("strEscape",function(){
		return window.encodeURIComponent;
	})
	.filter("strUnscape", ["$sce", function($sce) {
		var div = document.createElement("div");
		return function(text) {
			div.innerHTML = text;
			return $sce.trustAsHtml(div.textContent);
		};
	}])

	.filter("objLabel", function(){
		return function (obj) {
			var new_item = [];
			angular.forEach(obj, function(child) {
				new_item = [];
				var indeks = 0;
				angular.forEach(child, function(v,l) {
					if (indeks !== 0) {
					new_item.push(l);
				}
				indeks++;
				});
			});
			return new_item;
		}
	})
	.filter("objArray", function(){
		return function (obj) {
			var new_items = [];
			angular.forEach(obj, function(child) {
				var new_item = [];
				var indeks = 0;
				angular.forEach(child, function(v){
						if (indeks !== 0){
							new_item.push(v);
						}
						indeks++;
					});
					new_items.push(new_item);
				});
			return new_items;
		}
	})





.config(function($stateProvider,$urlRouterProvider,$sceDelegateProvider,$ionicConfigProvider,$httpProvider){
	/** tabs position **/
	$ionicConfigProvider.tabs.position("bottom"); 
	try{
	// Domain Whitelist
		$sceDelegateProvider.resourceUrlWhitelist([
			"self",
			new RegExp('^(http[s]?):\/\/(w{3}.)?youtube\.com/.+$'),
			new RegExp('^(http[s]?):\/\/(w{3}.)?w3schools\.com/.+$'),
		]);
	}catch(err){
		console.log("%cerror: %cdomain whitelist","color:blue;font-size:16px;","color:red;font-size:16px;");
	}
	$stateProvider
	.state("goblackdiamond",{
		url: "/goblackdiamond",
		abstract: true,
		templateUrl: "templates/goblackdiamond-tabs.html",
	})

	.state("goblackdiamond.about_us", {
		url: "/about_us",
		views: {
			"goblackdiamond-about_us" : {
						templateUrl:"templates/goblackdiamond-about_us.html",
						controller: "about_usCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.apoyo_singles", {
		url: "/apoyo_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-apoyos" : {
						templateUrl:"templates/goblackdiamond-apoyo_singles.html",
						controller: "apoyo_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.apoyos", {
		url: "/apoyos",
		cache:false,
		views: {
			"goblackdiamond-apoyos" : {
						templateUrl:"templates/goblackdiamond-apoyos.html",
						controller: "apoyosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.arranca", {
		url: "/arranca",
		cache:false,
		views: {
			"goblackdiamond-arranca" : {
						templateUrl:"templates/goblackdiamond-arranca.html",
						controller: "arrancaCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.arranca_singles", {
		url: "/arranca_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-arranca" : {
						templateUrl:"templates/goblackdiamond-arranca_singles.html",
						controller: "arranca_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.comparte", {
		url: "/comparte",
		cache:false,
		views: {
			"goblackdiamond-comparte" : {
						templateUrl:"templates/goblackdiamond-comparte.html",
						controller: "comparteCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.comparte_singles", {
		url: "/comparte_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-comparte" : {
						templateUrl:"templates/goblackdiamond-comparte_singles.html",
						controller: "comparte_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.criptomoneda_singles", {
		url: "/criptomoneda_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-criptomonedas" : {
						templateUrl:"templates/goblackdiamond-criptomoneda_singles.html",
						controller: "criptomoneda_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.criptomonedas", {
		url: "/criptomonedas",
		cache:false,
		views: {
			"goblackdiamond-criptomonedas" : {
						templateUrl:"templates/goblackdiamond-criptomonedas.html",
						controller: "criptomonedasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.criptomonedas_singles", {
		url: "/criptomonedas_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-criptomonedas" : {
						templateUrl:"templates/goblackdiamond-criptomonedas_singles.html",
						controller: "criptomonedas_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.dashboard", {
		url: "/dashboard",
		cache:false,
		views: {
			"goblackdiamond-dashboard" : {
						templateUrl:"templates/goblackdiamond-dashboard.html",
						controller: "dashboardCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.desarrollo_personal", {
		url: "/desarrollo_personal",
		views: {
			"goblackdiamond-desarrollo_personal" : {
						templateUrl:"templates/goblackdiamond-desarrollo_personal.html",
						controller: "desarrollo_personalCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.despertar_singles", {
		url: "/despertar_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-despierta" : {
						templateUrl:"templates/goblackdiamond-despertar_singles.html",
						controller: "despertar_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.despiert_singles", {
		url: "/despiert_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-despierta" : {
						templateUrl:"templates/goblackdiamond-despiert_singles.html",
						controller: "despiert_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.despierta", {
		url: "/despierta",
		cache:false,
		views: {
			"goblackdiamond-despierta" : {
						templateUrl:"templates/goblackdiamond-despierta.html",
						controller: "despiertaCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.mision", {
		url: "/mision",
		cache:false,
		views: {
			"goblackdiamond-mision" : {
						templateUrl:"templates/goblackdiamond-mision.html",
						controller: "misionCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.post_singles", {
		url: "/post_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-apoyos" : {
						templateUrl:"templates/goblackdiamond-post_singles.html",
						controller: "post_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.quienessomos", {
		url: "/quienessomos",
		cache:false,
		views: {
			"goblackdiamond-quienessomos" : {
						templateUrl:"templates/goblackdiamond-quienessomos.html",
						controller: "quienessomosCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.slide_tab_menu", {
		url: "/slide_tab_menu",
		views: {
			"goblackdiamond-slide_tab_menu" : {
						templateUrl:"templates/goblackdiamond-slide_tab_menu.html",
						controller: "slide_tab_menuCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.tica_y_legal", {
		url: "/tica_y_legal",
		cache:false,
		views: {
			"goblackdiamond-tica_y_legal" : {
						templateUrl:"templates/goblackdiamond-tica_y_legal.html",
						controller: "tica_y_legalCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.tica_y_legal_singles", {
		url: "/tica_y_legal_singles/:id",
		cache:false,
		views: {
			"goblackdiamond-tica_y_legal" : {
						templateUrl:"templates/goblackdiamond-tica_y_legal_singles.html",
						controller: "tica_y_legal_singlesCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.tu_negocio", {
		url: "/tu_negocio",
		cache:false,
		views: {
			"goblackdiamond-tu_negocio" : {
						templateUrl:"templates/goblackdiamond-tu_negocio.html",
						controller: "tu_negocioCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.user_login", {
		url: "/user_login",
		views: {
			"goblackdiamond-user_login" : {
						templateUrl:"templates/goblackdiamond-user_login.html",
						controller: "user_loginCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.user_profile", {
		url: "/user_profile",
		views: {
			"goblackdiamond-user_profile" : {
						templateUrl:"templates/goblackdiamond-user_profile.html",
						controller: "user_profileCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.user_register", {
		url: "/user_register",
		views: {
			"goblackdiamond-user_register" : {
						templateUrl:"templates/goblackdiamond-user_register.html",
						controller: "user_registerCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.vision", {
		url: "/vision",
		cache:false,
		views: {
			"goblackdiamond-vision" : {
						templateUrl:"templates/goblackdiamond-vision.html",
						controller: "visionCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	.state("goblackdiamond.vivencias", {
		url: "/vivencias",
		cache:false,
		views: {
			"goblackdiamond-vivencias" : {
						templateUrl:"templates/goblackdiamond-vivencias.html",
						controller: "vivenciasCtrl"
					},
			"fabButtonUp" : {
						template: '',
					},
		}
	})

	$urlRouterProvider.otherwise("/goblackdiamond/dashboard");
});
