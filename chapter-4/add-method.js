function addMethod(object, name, fn) {
    // 暂存object[name]，保存原有的函数，因为调用的时候可能不匹配传入的参数个数
    var old = object[name];                        //#1
    object[name] = function () {
        // 如果该匿名函数的形参个数和实参个数匹配，就调用该函数
        if (fn.length == arguments.length)           //#2
            return fn.apply(this, arguments)           //#2
        // 如果传入的参数不匹配，则调用原有的参数
        else if (typeof old == 'function')           //#3
            return old.apply(this, arguments);         //#3
    };
}
