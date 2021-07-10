import SuperSet from "./set";

describe("SuperSet class", () => {
  describe("SuperSet methods", () => {
    let set: SuperSet<number>;

    beforeEach(() => {
      set = new SuperSet<number>([1, 2, 3]);
    });

    it("Creates the Union set", () => {
      const ss = new SuperSet<number>([1, 2, 3, 4]);
      expect(set.union(ss)).toEqual(ss);
    });

    it("Creates the Intersection set", () => {
      const ss = new SuperSet<number>([2, 3]);
      expect(set.intersection(ss)).toEqual(ss);
    });

    it("Creates the Difference set", () => {
      const ss = new SuperSet<number>([2, 3, 4]);
      expect(set.difference(ss)).toEqual(new SuperSet<number>([1]));
    });

    it("Creates the Symmetric difference set", () => {
      const ss = new SuperSet<number>([3, 4]);
      expect(set.symmetricDifference(ss)).toEqual(
        new SuperSet<number>([1, 2, 4])
      );
    });

    it("Checks that Set is a superset of B", () => {
      const b = new SuperSet<number>([1, 2]);
      expect(set.isSuperSet(b)).toBe(true);
    });

    it("Checks that Set is not a superset of B", () => {
      const b = new SuperSet<number>([1, 4]);
      expect(set.isSuperSet(b)).toBe(false);
    });

    it("Checks that Set is a subset of B", () => {
      const b = new SuperSet<number>([1, 2, 3, 4]);
      expect(set.isSubSet(b)).toBe(true);
    });

    it("Checks that Set is not a subset of B", () => {
      const b = new SuperSet<number>([5]);
      expect(set.isSubSet(b)).toBe(false);
    });

    it("Checks if Set is empty", () => {
      expect(set.clear().isEmpty()).toBe(true);
    });

    it("Removes value from the Set", () => {
      expect(set.remove(2)).toEqual(new SuperSet<number>([1, 3]));
    });
  });
});
