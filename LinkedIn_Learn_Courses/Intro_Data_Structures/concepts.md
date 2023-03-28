## Ideas and concepts

### **Data Types**

In JavaScript, a primative is data that is not an object. It has no method or properties. Primatives are immutable. Variables with primartives can be reassigned a new value, but the existing value itself is not mutated, unlike objects, arrays, and functions can be altered. To complicate matters, what properties are accessed on a primative, JavaScript automatically applied a wrapper object ot he primative, thereby creating an object out of it (e.g., "foo".includes("f") is possible because the wrapper prototype String.prototype.includes())

https://developer.mozilla.org/en-US/docs/Glossary/Primitive

<ul>
    <li>string</li>
    <li>number</li>
    <li>boolean</li>
    <li>bigint</li>
    <li>symbol</li>
    <li>undefined</li>
    <li>null</li>
</ul>

Different languages have different a different number of primatives

### **Data Structures**

<p>
    When the pre-defined data types provided by the language are not sufficient for our purposes, we need to create custom data types. We call these data structures.
    Data structures take up a dynamic amount of spave, as opposed to primatives, which takeup a predefined amount of space on the machine
</p>

### **Pointers**

<p>
    Pointers allow a data structure, or parts of a data structure, to be stored in various places in memory. This means that the data on the physical machine does not have to be adjacent, consecutive bits. What is more, the data need not be adjacent when referenced. Instead, as you traverse the data structure, you traverse its pointers. Reference types reference an address to where the data is stored, rather than directly accessing the data itself.

    For example, imagine we had two collections back to back: C1 = [111, 222] & C2= [333, 444]. If we wanted to add a 3rd element to C1, say 555, we would have to overwrite the first element of C2. That is, we would be replacing C2's 333 with 555. After that operation C1 would include 3 elements, and C2 would have just 1. Adding a 3rd element to C1 meant overwriting the 1st element of C2.

</p>

<p>
    Pointers are references to place in memory, so data structures that use pointers are called "reference types". Reference types are also called objects. An object is aa value in memory referenced by an identifyer.
</p>

### Arrays

Arrays are zero-indexed, collections of elements, where each element in the collection has an index (an identifier) that increments from 0. So, for example, the first element in at index 0, whereas the second element is at index 2, and so on. The tenth element is at index 9.

**Data Strcutre**: a collection with a definied way of accessing and storing items

**Multidimensional arrays** are simply nested arrays. You can imagine them as columns and rows, where the outer array is like a row, and the inner array is a colum. For example, from the first row, I want the item at index 3 (i.e., the item at the 3rd index). By definition, each nested array is the same size

**Jagged arrays** each array within the data structure can have a different length, meaning the inner arrays can have different sizes

### TypeScript

https://dpericich.medium.com/how-to-build-multi-type-multidimensional-arrays-in-typescript-a9550c9a688e

Declair and initialize an array in TypeScript:

```
let array_name[:data type] = [val1, val2, val3... valn]

let arr_names: string[] = new Array(4) // utilizing JavaScript innate objects
```

TypeScript can defined multi-dimention arrays, which are by default jagged, as follows:

```
let arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]

let arr_name:number[][]=[ [1, 2, 3], [5, 6, 7] ]

// specifying length, and type of each element, of each nested
let constrainedLengthAndType: [number, number, number][] = [[1, 22, 333], [55, 666, 7777], [99, 1, 55], [65, 67, 78]]

// specifying length, and type of each element, of each nested the array
let mixedTypeArr: [string, number][] = [['orange', 22], ['pineapple', 666]]
```

```
type Cat = {
    id: number;
    breed: string
    name: string;
}

const myCats: Cat[][] = [
    {id: 1, breed: 'scottish fold', name: 'pepper'},
    {id: 1, breed: 'ragdoll', name: 'cookie'},
]
```

Sequential search is a brute force methodfor trying to find a value in an array. It means search the array one element at a time, and checking whether or not it matches the desired value.
By definition, the longer the array is, the longer it takes to search it. Since the time complexity is linear, 5x more items means 5x more time required.

## Time Complexity / Big O Notation

**Big O Notation** describes the performance or complexity of an algorithm. It's often used to represent the worst-case-scenario.

https://dev.to/lukocastillo/time-complexity-big-0-for-javascript-array-methods-and-examples-mlg

https://www.freecodecamp.org/news/all-you-need-to-know-about-big-o-notation-to-crack-your-next-coding-interview-9d575e7eec4/

O(1) is best case scenario. This means the number of operations required remains consistant as the number of elements increases - the time complexity is constant.
O(n) is linear, meaning the time complexity increass by the same value for each new elements within the data structure

### Sorting

if an array is pre-sorted, it opens up a myriad of search options that lowers the time complexity from the base of O(n)

**Comparator**: in lieu of a natural way of sorting values within data, programmers will choose a value. For example, a data structure for a person might look like this:

```
let myPerson = {
    age: 46,
    firstName: "Adam",
    lastName: "Simon"
}
```

In this case, we get to choose which of the keys we will use when sorting in either ascending or decending order

### Linked Lists

**Singly Linked Lists**
Linked lists are a data structure that utilize pointers exclusively. The advantage is that you can connect dispirate data together anywhere in memory - they need not be contiguous. The disadvantage of linked lists is that they are in inherent in most languages, meaning its up to the programmer to add in whatever features he/she desires. For example, you'd have to specify a "getLength" attrribute for a linked list, if that's imporant. You need not do that with, say, strings or arrays, as it comes built-in to many languages

A further downside to linked lists is that getting, searching for, or deleting a value at a certain node wiothin a link requires incrementally traversing down the list, node by node. Singly linked lists are uni-directional, meaning traversal is only possible one way: from the head (i.e., most recent node) down. Each new node becomes the head and "pushed" the preceeding nodes further down the list

**Node**: a discrete, constituent part of a linked list containing at minimum two things: data, and a porter to the next node (if any)

**Singly linked list Big 0 nation**

<ul>
    <li>Access a value: O(n) linear time</li>
    <li>Update a value: O(n) linear time</li>
    <li>Delete a value: O(n) linear time</li>
    <li>Search a value: O(n) linear time</li>
    <li>Add a value: O(1) or constant time if we don't care of order and are fine with adding it to the front of the list; and if we want to add it to the back of the list then it's O(n), or linear time</li>
</ul>

Linked lists have slow random access, because to access the value at a given node, you have to traverse the list up to that node. An array, however, can give you the value of an index instantly without traversing the array.

### Classes

public means the property may only be from outside of the class (e.g., Class.length)
pset to private if you only want the property to be accessed from code interal to the class itself

```
class Report {

    private secret: string

    constructor(secret: string) {
            this.secret = secret
    }

    doSomething = () => {
        if (this.secret) {
            // there is a secret so do something
        }
    }
}
```
