/**
 * jquery.tip-validate
 *
 * @version v0.1.0
 * @author Mato Ilic <info@matoilic.ch>
 * @copyright 2011 Mato Ilic
 *
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 */
;(function($) {
    if(!$.fn.h5Validate) {
        alert('jquery.validate: h5validate not loaded');
        return;
    }
    
    if(!$.fn.qtip) {
        alert('jquery.validate: qtip not loaded');
        return;
    }
    
    function validate(form) {
        var valid = true;
        $(form).find(':input').each(function() {
           valid = valid && $(this).h5Validate('isValid');
        });
        
        return valid;
    }
    
    function markInvalid(options) {
        var $element = $(options.element);
        
		$element.removeClass(options.validClass)
		        .addClass(options.errorClass)
		        .data('valid', false)
		        .qtip({content: { attr: 'title' }});

		options.settings.invalidCallback.call(options.element);					

		return $element;
    }
    
    function markValid(options) {
        var $element = $(options.element);

		$element.removeClass(options.errorClass)
		        .addClass(options.validClass)
		        .data('valid', true)
		        .qtip('destroy');
		
		options.settings.validCallback.call(options.element);
		
		return $element;
    }
    
    function onSubmit(event) {
        if(!validate(this)) event.preventDefault();
    }
    
    $.fn.validate = function() {
        this.filter('form')
            .h5Validate({ markInvalid: markInvalid, markValid: markValid })
            .submit(onSubmit)
            .bind('validator.validate', function(e) { validate(this); });
        
        return this.end();
    };
    
    $(function() { 
        $('form').validate();
    });
})(jQuery);