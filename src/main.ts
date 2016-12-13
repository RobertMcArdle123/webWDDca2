import './polyfills.ts';

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppModule } from './app/';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);


var app = angular.module('converter', []);

app.controller('MainController', function($scope) {
	$scope.a = 0;
});

app.directive('converter', function(converters) {
	return {
		require: 'ngModel',
		link: function(scope, element, attr, ngModel) {
			var converter = converters[attr.converter];
			ngModel.$formatters.unshift(converter.formatter);
			ngModel.$parsers.push(converter.parser);
		},
		controller: function($scope, $element) {

		}
	};
});

app.service('converters', function() { return {
	c2f: {
		formatter: function(c) {
			return 9 / 5 * parseFloat(c) + 32;
		},
		parser: function(f) {
			return 5 / 9 * (f - 32);
		}
	}
}});
