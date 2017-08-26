function Node() {
    var data;
    var next;
    this.getNext = getNext;
    this.setNext = setNext;
    this.getData = getData;
    this.setData = setData;
    function getNext() {
        return next;
    }

    function setNext(n) {
        next = n;
    }

    function getData() {
        return data;
    }

    function setData(d) {
        data = d;
    }
}

function LinkedList() {
    var root;
    this.enQueue = enQueue;
    this.deQueue = deQueue;
    this.print = print;
    function enQueue(value) {
        var node = new Node();
        node.setData(value);
        if (!root) {
            root = node;
        } else {
            var temp = root;
            while (temp.getNext()) {
                temp = temp.getNext();
            }
            temp.setNext(node);
        }
    }

    function print() {
        var temp = root;
        while (temp) {
            console.log(temp.getData());
            temp = temp.getNext();
        }
    }

    function deQueue(val) {
        var temp;
        var previousNode;
        if (!root) {
            return;
        }
        if (root.getData() === val) {
            root = root.getNext();
            return;
        }
        previousNode = root;
        temp = root.getNext();
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

var list = new LinkedList();
list.enQueue(5);
list.enQueue(6);
list.enQueue(1);
list.enQueue(8);
list.enQueue(9);
list.enQueue(6);
list.deQueue(6);
list.print();