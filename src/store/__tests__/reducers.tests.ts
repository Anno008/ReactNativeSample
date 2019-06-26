import reducers from "store/reducers";

describe("Reducer tests", (): void => {
    it("Should return an object", (): void => {
        expect(typeof reducers).toBe("object");
    });
});
