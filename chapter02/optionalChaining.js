var OptionalChainingNS;
(function (OptionalChainingNS) {
    var _a;
    class Automobile {
        constructor(wheels) {
            this.wheels = wheels;
        }
    }
    const car = new Automobile({
        count: undefined
    });
    console.log("car ", car);
    console.log("wheels ", car === null || car === void 0 ? void 0 : car.wheels);
    console.log("count ", (_a = car === null || car === void 0 ? void 0 : car.wheels) === null || _a === void 0 ? void 0 : _a.count);
})(OptionalChainingNS || (OptionalChainingNS = {}));
