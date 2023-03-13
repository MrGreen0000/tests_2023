const l = filter_list([1, 2, 'a', 'b']);


function filter_list(l) {
    // Return a new array with the strings filtered out
    return l.filter((x) => {
        console.log(x);
        if (typeof (x) === 'string')
            return true;

    });
    return false;
}


