var path = require('path');

var createPattern = function(path) {
  return {pattern: path, included: true, served: true, watched: false};
};

var initJasmine = function(files) {
  var jasminePath = path.dirname(require.resolve('jasmine-core'));
  var jqueryPath = path.dirname(require.resolve('jquery'));
  var jasmineJqueryPath = path.dirname(require.resolve('jasmine-jquery'));
  files.unshift(createPattern(jasmineJqueryPath + '/lib/jasmine-jquery.js'));
  files.unshift(createPattern(jqueryPath + '/dist/jquery.min.js'));
  files.unshift(createPattern(__dirname + '/adapter.js'));
  files.unshift(createPattern(__dirname + '/boot.js'));
  files.unshift(createPattern(jasminePath + '/jasmine-core/jasmine.js'));
};

initJasmine.$inject = ['config.files'];

module.exports = {
  'framework:jasmine': ['factory', initJasmine]
};
