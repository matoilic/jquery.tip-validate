# jquery.tip-validate #

jquery.tip-validate extends [h5validate](http://ericleads.com/h5validate) to show the error messages in a tooltip using [qtip2](http://craigsworks.com/projects/qtip2). jquery.tip-validate takes also care of canceling the submission of a form if it contains invalid inputs.

## Usage ##

First include [h5validate](http://ericleads.com/h5validate) and [qtip2](http://craigsworks.com/projects/qtip2) in your page and the jquery.tip-validate. The plugin will then automatically capture all validation events and form submissions. If you add forms dynamically to your page you have to call `tipValidate` manually on the form, e.g. `$('#myForm').tipValidate()` to activate jquery.tip-validate.

## Version History ##

**0.1**

* initial release

## Licence ##

Copyright &copy; 2011 Mato Ilic <<info@matoilic.ch>>

jquery.tip-validate is dual licensed under the MIT and GPL licenses:

* http://www.opensource.org/licenses/mit-license.php 
* http://www.gnu.org/licenses/gpl.html