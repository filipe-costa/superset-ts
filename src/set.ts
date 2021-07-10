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

  union = (b: SuperSet<T>) => {
    b.forEach((value) => {
      this.add(value);
    });
    return this;
  };

  intersection = (b: SuperSet<T>) => {
    let ss = new SuperSet<T>();
    b.forEach((value) => {
      if (this.has(value)) {
        ss.add(value);
      }
    });
    return ss;
  };

  difference = (b: SuperSet<T>) => {
    b.forEach((value) => {
      if (this.has(value)) {
        this.delete(value);
      }
    });
    return this;
  };

  symmetricDifference = (b: SuperSet<T>) => {
    b.forEach((value) => {
      if (this.has(value)) {
        this.delete(value);
      } else {
        this.add(value);
      }
    });
    return this;
  };

  addAll = (...values: T[]) => {
    values.forEach((value) => {
      this.add(value);
    });
    return this;
  };

  isSuperSet = (b: SuperSet<T>): boolean => {
    for (const item of b) {
      if (!this.has(item)) {
        return false;
      }
    }
    return true;
  };

  isSubSet = (b: SuperSet<T>): boolean => {
    const ss = this.intersection(b);
    return ss.size > 0 && ss.size <= this.size;
  };

  remove = (value: T) => {
    super.delete(value);
    return this;
  };

  isEmpty = () => this.size === 0;

  // Override Set Methods
  clear = () => {
    super.clear();
    return this;
  };
}
