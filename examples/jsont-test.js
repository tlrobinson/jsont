var jsonT = require("jsont").jsonT,
    tests = require("./tests");

for (var i in tests.o) {
    if (tests.o.hasOwnProperty(i)) {
        print("================================================================================");
        print(jsonT(tests.o[i], tests.t[i]));
    }
}
