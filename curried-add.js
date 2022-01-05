function curriedAdd(total) {
    if (total === undefined) return 0;

    return adder = (num) => {
        if (!num) return total;
        total += num;
        return adder;
    }
}

module.exports = { curriedAdd };

