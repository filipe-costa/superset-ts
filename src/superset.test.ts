import SuperSet from "./superset";

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

    it("Maps the set", () => {
      const ss = set.map((value) => value);
      expect(set).toEqual(ss);
    });

    it("Doubles the set values", () => {
      expect(set.map((value) => value * 2)).toEqual(new SuperSet([2, 4, 6]));
    });

    it("Filters odd values in the set", () => {
      const ss = set.filter((value) => value % 2 === 1);
      expect(ss).toEqual(new SuperSet<number>([1, 3]));
    });

    it("Filters odd and doubles the set values through method chaining", () => {
      const ss = set
        .filter((value) => value % 2 === 1)
        .map((value) => value * 2);
      expect(ss).toEqual(new SuperSet([2, 6]));
    });

    it("Checks that Set is a superset of B", () => {
      const b = new SuperSet<number>([1, 2]);
      expect(set.isSuperSet(b)).toBe(true);
    });

    it("Checks that Set is not a superset of B", () => {
      const b = new SuperSet<number>([1, 4]);
      expect(set.isSuperSet(b)).toBe(false);
    });

    it("Checks that Set is a subset of B with diff length", () => {
      const b = new SuperSet<number>([1, 2, 3, 4]);
      expect(set.isSubSet(b)).toBe(true);
    });

    it("Checks that Set is a subset of B with the same length", () => {
      const b = new SuperSet<number>([1, 2, 3]);
      expect(set.isSubSet(b)).toBe(true);
    });

    it("Checks that Set is not a subset of B", () => {
      const b = new SuperSet<number>([5]);
      expect(set.isSubSet(b)).toBe(false);
    });

    it("Checks if Set is not empty", () => {
      expect(set.isEmpty()).toBe(false);
    });

    it("Checks if Set is empty", () => {
      expect(set.clear().isEmpty()).toBe(true);
    });

    it("Adds new value to the set", () => {
      expect(set.add(4)).toEqual(new SuperSet<number>([1, 2, 3, 4]));
    });

    it("Adds new values to the set using an array", () => {
      expect(set.addAll(4, 5, 6)).toEqual(new SuperSet([1, 2, 3, 4, 5, 6]));
    });

    it("Removes value from the set", () => {
      expect(set.remove(2)).toEqual(new SuperSet<number>([1, 3]));
    });

    it("Removes values of the set using an array", () => {
      expect(set.removeAll(1, 2)).toEqual(new SuperSet([3]));
    });
  });
});
