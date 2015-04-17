(function () {
  'use strict';

  window.onkeypress = function () {
    location.reload(true);
  };

  window.console.log = function () {
    var args = [].slice.call(arguments, 0);
    var p = document.createElement('pre');

    var message = args.map(function (arg) {
      var message;

      try {
        message = (typeof arg === 'object') ? JSON.stringify(arg, null, 0) : arg + '';
      } catch (ex) {
        message = 'Unable to serialize';
      }

      return message;
    }).join(' ')

    p.innerHTML = message;
    document.body.appendChild(p);
    return p;
  }

  window.console.error = function error() {
    var p = log(arguments);
    p.style.color = 'red';
    return p;
  }

  window.console.info = window.console.log;
  window.console.warn = window.console.log

  window.onerror = console.error;
  window.onkeydown = function () {
    location.reload(true);
  };

  console.log(new Date().getMilliseconds());
  console.log(window.location.href);

  //document.cookie = 'raw=test_raw; expires=Tue, 19 Jan 2038 03:14:07 GMT; path=/';

  $.ajax({
    type: "POST",
    url: '/',
    data: {
      name: 'raw',
      value: 'html_value' + new Date().getMilliseconds(),
      maxAge: 10000
    }
  }).done(function () {
    window.localStorage.setItem('ls', 'oh hai!');
    console.log('LS=' + window.localStorage.getItem('ls'));
    console.log('All=' + document.cookie);
  });

}());