export default class SuperSet<T> extends Set<T> {
  constructor(values?: readonly T[] | null) {
    super(values);

    /**
     * Rebinding JS Set methods to use method chaining
     */
    this.has = this.has.bind(this);
    this.add = this.add.bind(this);
    this.forEach = this.forEach.bind(this);
    this.values = this.values.bind(this);
    this.entries = this.entries.bind(this);
    this.keys = this.keys.bind(this);
  }

  isSuperSet = (b: SuperSet<T>): boolean => {
    for (const item of b) {
      if (!this.has(item)) {
        return false;
      }
    }
    return true;
  };

  isSubSet = (b: SuperSet<T>): boolean => {
    let count = 0;
    for (const value of b) {
      if (this.has(value)) {
        count++;
      }
    }
    return count === this.size;
  };

  union = (b: SuperSet<T>): SuperSet<T> => {
    for (const value of b) {
      this.add(value);
    }
    return this;
  };

  intersection = (b: SuperSet<T>): SuperSet<T> => {
    const ss = new SuperSet<T>();
    for (const value of b) {
      if (this.has(value)) {
        ss.add(value);
      }
    }
    return ss;
  };

  difference = (b: SuperSet<T>): SuperSet<T> => {
    for (const value of b) {
      if (this.has(value)) {
        this.delete(value);
      }
    }
    return this;
  };

  symmetricDifference = (b: SuperSet<T>): SuperSet<T> => {
    for (const value of b) {
      if (this.has(value)) {
        this.delete(value);
      } else {
        this.add(value);
      }
    }
    return this;
  };

  filter = (predicate: (value: T) => boolean): SuperSet<T> => {
    const ss = new SuperSet<T>();
    for (const item of this) {
      if (predicate(item)) {
        ss.add(item);
      }
    }
    return ss;
  };

  map = (callbackfn: (value: T) => T): SuperSet<T> => {
    const ss = new SuperSet<T>();
    for (const item of this) {
      ss.add(callbackfn(item));
    }
    return ss;
  };

  addAll = (...values: T[]): SuperSet<T> => {
    for (const value of values) {
      this.add(value);
    }
    return this;
  };

  removeAll = (...values: T[]): SuperSet<T> => {
    for (const value of values) {
      this.delete(value);
    }
    return this;
  };

  isEmpty = (): boolean => this.size === 0;

  // Same as Set.delete but allows for method chaining
  remove = (value: T): SuperSet<T> => {
    super.delete(value);
    return this;
  };

  // Override Set Methods
  clear = (): SuperSet<T> => {
    super.clear();
    return this;
  };
}
