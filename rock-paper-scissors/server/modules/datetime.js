exports.currentTime = function () {
    const current = new Date();
    return current.getDate() + "/"
        + (current.getMonth() + 1) + "/"
        + current.getFullYear() + " "
        + current.getHours() + ":"
        + current.getMinutes() + ":"
        + current.getSeconds();
};