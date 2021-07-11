# SuperSet
SuperSet is an extension to the Set Object in JavaScript using TypeScript. SuperSet allows method chaining by returning its own instance where applicable.

Every Set method is available in SuperSet due to inheritance, for more about [Set object](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set). 

## Installation
### Using npm
    npm install superset-ts

### Using yarn
    yarn add superset-ts

## Usage
### Union method

    const a = new SuperSet([1, 2, 3])
    const b = new SuperSet([1, 2, 3, 4])
    a.union(ss) // Mutates and returns Set {1, 2, 3, 4}

### Intersection method

    const a = new SuperSet([1, 2, 3])
    const b = new SuperSet([2, 3])
    a.intersection(b) // returns a new Set {2, 3}

### Difference method

    const a = new SuperSet([1, 2, 3])
    const b = new SuperSet([2, 3, 4])
    a.difference(b) // Mutates and returns Set {1}

### Symmetric Difference method

    const a = new SuperSet([1, 2, 3])
    const b = new SuperSet([3, 4])
    a.symmetricDifference(b) // Mutates and returns Set {1, 2, 4}

### Map and Filter methods

    let a = new SuperSet([1, 2, 3])
    a = a.map((value) => value * 2) // Maps and returns a new Set {2, 4, 6}

    let b = new SuperSet([1, 2, 3])
    b = b.filter((value) => value % 2 === 1) // Filters and returns a new Set {1, 3}

### Map and Filter chaining methods

    let a = new SuperSet([1, 2, 3])
    a = a.filter((value) => value % 2 === 1) // Filters and returns a new Set {1, 3}
    a = a.map((value) => value * 2) // Maps and returns a new Set {2, 6}

    or 

    let b = new SuperSet([1, 2, 3])
    b = b
      .filter((value) => value % 2 === 1)
      .map((value) => value * 2) // Filters, Maps and returns a new Set {2, 6}

### Add and Remove All methods

    let a = new SuperSet([1, 2, 3])
    a = a.addAll(4, 5, 6) // Mutates and returns Set {1, 2, 3, 4, 5, 6}
    a = a.removeAll(1, 3, 5) // Mutates and returns Set {2, 4, 6}

### isSuperSet and isSubSet methods

    let a = new SuperSet([1, 2, 3])
    let b = new SuperSet([1, 2])
    a.isSuperSet(b) // Returns true

    b = new SuperSet([1, 2, 3])
    a.isSubSet(b) // Returns true

### Remove

    let a = new SuperSet([1, 2, 3])
    a = a.remove(2) // Mutates and returns Set {1, 3}

### Clear

    let a = new SuperSet([1, 2, 3])
    a = a.clear // Mutates and returns Set {}

### Empty

    let a = new SuperSet([1, 2, 3])
    a.isEmpty() // Returns false

    a.clear()
    a.isEmpty() // Returns true


## Run Tests
### Using npm
    npm run test
### Using yarn
    yarn test
## License
MIT @ [Filipe Costa](https://github.com/filipe-costa/)
