# String - Array #

+ __array__
    + 改变原数组
        + add
            + __.push(...)__ (last)
            + __.unshift(...)__ (first)
        + remove
            + __.pop()__ (last)
            + __.shift()__ (first)
        + splice
            + __.splice(index, num, ...)__
        + sort
            + __.reverse()__
            + __.sort()__
    + 不改变原数组
        + slice
            + __.slice(start, end)__
        + concat
            + __.concat(...)__
        + join
            + __.join(separator)__
+ __string__
    + 不改变原字符串
        + concat
            + __.concat(...)__
        + slice
            + __.substr(start, length)__
            + __.substring(pos1, pos2)__
            + __.slice(start, end)__
        + split
            + __.split(separator, num)__
        + change
            + __.toUpperCase()__
            + __.toLowerCase()__