(function() {
	'use strict';

	function confirm(options, callback) {
		var configs = {
			title 	: "",
			message : ""
		};

		if(typeof options == 'string'){
			options = {message : options};
		}
		if(typeof options == 'function'){
			callback = options;
		} else if(options){
			$.extend(true, configs, options);
		}

		var modalElement = $('#modal-confirm');

		console.assert(modalElement.length, '#modal-confirm not found!');
		console.assert(typeof callback == 'function', 'Param "callback" should be a function!');

		if(configs.message.length){
			modalElement.find(".modal-body").html(configs.message);
		}

		if(configs.title.length){
			modalElement.find(".dialog-title").html(configs.title);
		}

		callback = callback || function(){};

		modalElement.find("button[data-type=confirm]").unbind("click").bind("click", callback);

		modalElement.modal("show");
	}

	function loading(toggle){
		if(toggle){
			$('.loading').show(10);
		} else {
			$('.loading').hide(10);
		}
	}

	function message(message){
		var t = $.toast({
            text: message,
            hideAfter : false,
            position: 'bottom-right'
        });

        setTimeout(function(){
        	t.reset();
        }, 5000);
	}

	function reloadDefault(data){
		setTimeout(function(){
			location.reload(true);
		}, 500);
	}

	function redirectTo(data){
		data.timeout = data.timeout || 1000;

		setTimeout( callbackTimeout, data.timeout );

		function callbackTimeout() {
			location.href = data.redirect_to;
		}
	}

	function parseJSON(str, isArray){
		try{
			str = JSON.parse(str);
		}catch(err){
			str = !isArray ? {} : [];
		}
		return str;
	}

	function postToServer(url, data, callback) {
		if(!url) throw new Error('Param "url" is required');
		if(!data) throw new Error('Param "data" is required');

		var options = {};

		if(typeof url == "object" && $(url).prop('tagName') == "FORM"){

			var form = $(url);

			form.attr('enctype', 'multipart/form-data');

			callback = data;
			data = new FormData(form.get(0));
			url = form.attr("action");

		} else if( !isFormData(data) ){
			if(typeof data == "function") {
				callback = data;
				data = {};
			}
		}

		if( isFormData(data) ){
			options.processData = false;
			options.contentType = false;
		}

		if(!callback) throw new Error('A callback function is required');

		options.method = 'POST';
		options.url = url;
		options.data = data;
		options.beforeSend = function() { loading(true); };
		options.complete = function() { loading(false); };
		options.error = handleRequestError;
		options.success = handleRequestSuccess(callback);

		try { return $.ajax(options); } catch(err) { console.log(err); }
	}

	function handleRequestSuccess(cbSuccess){
		return function(response){
			if(response.message){
				window.helpers.message(response.message);
			}
			cbSuccess(response);
		};
	}

	function handleRequestError(err){
		var message = err.responseJSON && err.responseJSON.message ? 
						err.responseJSON.message
						: 'Ocorreu um erro no servidor.';

		if( isDevelopmentEnvironment() ){
        	openDebugPopup(message);
        }

        window.helpers.message(message);
	}

	function isDevelopmentEnvironment(){
		var developmentDomains = ['localhost', 'lenon.cnec.br', 'andre.cnec.br', 'evandro.cnec.br'];
		return developmentDomains.indexOf(location.hostname) >= 0;
	}

	function openDebugPopup(message){
		if(isDevelopmentEnvironment()){
			try{
				var w = window.open();
				w.document.write(message);
			}catch(err){}
		}
	}

	function isFormData(object){
		return typeof object == "object" && object.constructor && object.constructor.name == 'FormData';
	}

	window.helpers = {
		confirm : confirm,
		postToServer : postToServer,
		loading : loading,
		message : message,
		reloadDefault : reloadDefault,
		redirectTo : redirectTo,
		parseJSON : parseJSON
	};
	
})(window);