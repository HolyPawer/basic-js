module.exports = class DepthCalculator {
    calculateDepth(arr) {

        let count = 1;
        let depth = 0;

        for (let n of arr) {
            if (Array.isArray(n)) {
                count = this.calculateDepth(n);
                if (depth < count) depth = count;
            }
        }
        return ++depth;
    }
};