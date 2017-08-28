# Linked List in Javascript

Every now and then we encounter a situation when we need to use data structures. One such data structure form is **Linked List**. 
**Caching** is one such example where **Linked List** are used. 
In case of **Java**, **Linked List** is available in **Collection** package/framework.
But in **Javascript**, one needs to implement it.

A linked list is linear collection of data elements where each element/node points to next element/node.

Below diagram shows a **Linked List** :

![Linked_List](https://raw.githubusercontent.com/NamitaMalik/Linked-list-in-Javascript/master/Linked_List.png)

Well, the agenda of this blog is to:

1. Create a Linked List
2. Delete a node from linked list
3. Print the linked list

So here we go...

Let's have two classes :

* **Node**
* **LinkedList**

**Node** class would be responsible for representing a node. **Node** class will have the data and reference to the next node.

```Javascript
class Node {
    constructor(data) {
        this.data = data;
    }

    getNext() {
        return this.next;
    }

    setNext(n) {
        this.next = n;
    }

    getData() {
        return this.data;
    }

}
```

As you can see above, we have `getNext`, `setNext` and `getData` functions. 
1. `setNext` function is for setting the next/subsequent node in the node.
2. `getNext` function is to fetch the next node reference. 
3. `getData` function is to get the data.

Now, let's implement the `LinkedList` class. It should be have the following functionality:

1. Adding a new node to Linked List
2. Removing a node from Linked List
3. Print the Linked List

Below is the `LinkedList` class:

```Javascript
class LinkedList {
    constructor() {
        this.root = undefined;
    }

    enQueue(value) {
        let node = new Node(value);
        if (!this.root) {
            this.root = node;
        } else {
            let temp = this.root;
            while (temp.getNext()) {
                temp = temp.getNext();
            }
            temp.setNext(node);
        }
    }

    print() {
        let result = [];
        let temp = this.root;
        while (temp) {
            result.push(temp.getData());
            temp = temp.getNext();
        }
        console.log(result.join(' => '));
    };

    deQueue(val) {
        let temp;
        let previousNode;
        if (!this.root) {
            return;
        }
        if (this.root.getData() === val) {
            this.root = this.root.getNext();
            return;
        }
        previousNode = this.root;
        temp = this.root.getNext();
        while (temp) {
            if (temp.getData() !== val) {
                previousNode = temp;
                temp = temp.getNext();
            } else {
                previousNode.setNext(temp.getNext());
                break;
            }
        }
    }
}
```

Let's look at each function closely:

1. `enQueue` function

```Javascript
enQueue(value) {
    let node = new Node(value);
    if (!this.root) {
        this.root = node;
    } else {
        let temp = this.root;
        while (temp.getNext()) {
            temp = temp.getNext();
        }
        temp.setNext(node);
    }
}
```

`enQueue` function is to add a node to a `linked list`. As we know `root` node is the first node in the `linked list`.
If node does not have reference to any node we need to initialize root node first, else if root node has reference of a node, we check if there is another node after the root node. 
As soon as we get a node which doesn't have any next/subsequent node, we add the intended node.

2. `deQueue` function

```Javascript
deQueue(val) {
    let temp;
    let previousNode;
    if (!this.root) {
        return;
    }
    if (this.root.getData() === val) {
        this.root = this.root.getNext();
        return;
    }
    previousNode = this.root;
    temp = this.root.getNext();
    while (temp) {
        if (temp.getData() !== val) {
            previousNode = temp;
            temp = temp.getNext();
        } else {
            previousNode.setNext(temp.getNext());
            break;
        }
    }
}
```

`deQueue` function is responsible for deleting a node in the linked list. In order to delete a node, we remove the reference of the node to be deleted from its
previous node and reference of next node in the linked list is assigned to the previous node. And when removed node is the root node,
we simply refer next node of the root node as a root node.
 
> Dereference node will be automatically collected by Garbage Collector. 
 
3. `print` function
 
```Javascript
print() {
    let result = [];
    let temp = this.root;
    while (temp) {
        result.push(temp.getData());
        temp = temp.getNext();
    }
    console.log(result.join(' => '));
};
```   

We initialize the temp variable by the root node and traverse through the linked list till we reach end of it.

Let's see some action now:
```Javascript
let list = new LinkedList(); // Initializing linked list
list.enQueue(5); //Adding 5 to linked list
list.enQueue(6);
list.enQueue(1);
list.enQueue(8);
list.enQueue(9);
list.enQueue(6);
console.log("Printing the linked list before removing 6");
list.print();
list.deQueue(6); // Removing 6 from linked list
console.log("Printing linked list after removing 6");
list.print();
```

Output of the above code is:

```Javascript
Printing the linked list before removing 6
5 => 6 => 1 => 8 => 9 => 6
Printing linked list after removing 6
5 => 1 => 8 => 9 => 6
```

In the above output, one can notice the first call to the `print` function prints the entire linked list and then on making the second call
linked list printed which has `6` removed from it as we have called `deQueue` function to remove node with data/value `6` in it.