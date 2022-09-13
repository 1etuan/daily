// https://leetcode.com/problems/numbers-with-same-consecutive-differences/
// BFS version - O(2^n) - O (2^n)
var numsSameConsecDiff = function (n, k) {

    let queue = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    let level = 1;

    while (queue.length) {
        let queueSize = queue.length;

        level = level + 1;

        while (queueSize > 0) {
            let front = queue.shift();
            queueSize--

            let lastNum = front % 10;

            if (lastNum + k <= 9) {
                queue.push(front * 10 + (lastNum + k));
            }

            if (lastNum - k >= 0 && k > 0) {
                queue.push(front * 10 + (lastNum - k));
            }
        }

        if (level === n) {
            break;
        }
    }
    console.log(queue)
    return queue;
};

numsSameConsecDiff(3, 7)
