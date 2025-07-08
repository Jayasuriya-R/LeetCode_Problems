function floorSqrt(n) {
    let i = 1;
    while (true) {
        if (i * i <= n) {
            i++;
        } else {
            break;
        }
    }
    return i - 1;
}
