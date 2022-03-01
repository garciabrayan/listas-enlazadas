var head;
class Node {
    constructor(val) {
        this.data = val;
        this.next = null;
    }
}


function push(new_data) {
    var new_node = new Node(new_data);

    new_node.next = head;

    head = new_node;
}

function insertAfter(prev_node , new_data) {
    if (prev_node == null) {
        document.write(
            "The given previous node cannot be null"
        );
        return;
    }

    var new_node = new Node(new_data);

    new_node.next = prev_node.next;


    prev_node.next = new_node;
}

function append(new_data) {

    var new_node = new Node(new_data);


    if (head == null) {
        head = new Node(new_data);
        return;
    }


    new_node.next = null;

    var last = head;
    while (last.next != null)
        last = last.next;


    last.next = new_node;
    return;
}

function deleteNode(key) {
    // Store head node
    var temp = head, prev = null;

    if (temp != null && temp.data == key) {
        head = temp.next; 
        return;
    }

    while (temp != null && temp.data != key) {
        prev = temp;
        temp = temp.next;
    }

    if (temp == null)
        return;

    prev.next = temp.next;
}
function removeElement(element){
    var current = this.head;
    var prev = null;


    while (current != null) {
        if (current.element === element) {
            if (prev == null) {
                this.head = current.next;
            } else {
                prev.next = current.next;
            }
            this.size--;
        }
        prev = current;
        current = current.next;
    }

}
push("garcia")
push("brayan")

function printList() {
    var tnode = head;
    var phrase = "";
    while (tnode != null) {
        phrase += (`<br><button onclick="deleting(${tnode.data.value})">${tnode.data}</button><br>`);
        tnode = tnode.next;
    }

    document.getElementById("list").innerHTML = phrase;
    console.log(head)
}
function indexOf(element){
    var count = 0;
    var current = this.head;

    while (current != null) {
        if (current.element == element){
            console.log(count)
            return count;
        }else {
            count++;
            current = current.next;
        }
    }


    return -1;
}

function removeFrom(index){
    if (index < 0 || index >= this.size)
        return console.log("Please Enter a valid index");
    else {
        var curr, prev, it = 0;
        curr = this.head;
        prev = curr;


        if (index === 0) {
            this.head = curr.next;
        } else {

            while (it < index) {
                it++;
                prev = curr;
                curr = curr.next;
            }


            prev.next = curr.next;
        }
        this.size--;

        return curr.element;
    }
}

function deleting(idName) {
    console.log("hi")
    removeFrom(indexOf(idName));
    document.getElementById("list").innerText = "";
    printList();

}
function pushing(){
    push(document.getElementById("texting").value);
    document.getElementById("texting").innerText="";
    document.getElementById("list").innerText = "";

}

window.onload = () => printList();