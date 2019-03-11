import reducers from "store/reducers";

describe("Reducer tests", () => {
    it("Should return an object", () => {
        expect(typeof reducers).toBe("object");
    });
});
