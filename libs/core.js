function assert () {
    var args = Array.prototype.slice.call(arguments);
    var condition = args.shift();

    if (condition) {
        console.log.apply(this, args);
    }
    else {
        console.error.apply(this, args);
    }
}

// http://ejohn.org/apps/learn/#17