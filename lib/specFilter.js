(function(window) {

    var jasmineEnv = window.jasmine.getEnv();
    var originalFilter = jasmineEnv.specFilter;

    function matchAny(name, includedSpecs) {
        for (var i = 0; i < includedSpecs.length; i++) {
            if (name == includedSpecs[i]) {
                return true;
            }
        }
    }

    /**
     * Determines if the given jasmine spec should run.
     *
     * @param {Spec} spec Jasmine spec object that is about to be executed.
     *
     * @returns {Boolean} True if spec should run, false if it should be skipped.
     */
    jasmineEnv.specFilter = function(spec){
        var includedSpecs = window.__includedSpecs;
        if (includedSpecs && includedSpecs.length) {
            return matchAny(spec.getFullName(), includedSpecs);
        } else {
            return (originalFilter && originalFilter(spec));
        }
    };

})(window);
