import styles from "./main.module.css";
import jsPic from "../../Images/js.png";
import cpp from "../../Images/cpp.png";
import python from "../../Images/python.png";
import array from "../../Images/array.png";
import string from "../../Images/String.png";
import linkedList from "../../Images/Singlelinkedlist.png";
import stack from "../../Images/stack.png";
import queue from "../../Images/queue.png";
import Code from "../Code Box/Code";
import Syntax from "../Syntax Box/Syntax";
import Output from "../Output Box/Output";
import Image from "../Image Card/Image";
import Sidebar from "../Sidebar/Sidebar";
import Profile from "../Profile Card/Profile";
import Quotes from "../Quotes/Quotes";
const Blog = () => {
  const featuredPosts = [
    {
      id: 1,
      title: "Getting Started with C++",
      date: "Nov 12",
      content:
        "Getting started with C++ programming language. Learn the basics of C++ programming language.",
      img: cpp,
    },
    {
      id: 2,
      title: "Getting Started with Python",
      date: "Nov 12",
      content:
        "Getting started with Python programming language. Learn the basics of Python programming language.",
      img: python,
    },
  ];
  const tableOfContents = [
    {
      id: 1,
      title: "Introduction to Data Structures",
      link: "##Link1",
    },
    {
      id: 2,
      title: "How to start learning Data Structures with Javascript?",
      link: "##Link2",
    },
    {
      id: 3,
      title: "Learn about Complexities",
      link: "##Link3",
    },
    {
      id: 4,
      title: "Learn Data Structures with JavaScript",
      link: "##Link4",
    },
    {
      id: 5,
      title: "Array in javascript",
      link: "##Link5",
    },
    {
      id: 6,
      title: "String in javascript",
      link: "##Link6",
    },
    {
      id: 7,
      title: "Linked List in javascript",
      link: "##Link7",
    },
    {
      id: 8,
      title: "Stack in javascript",
      link: "##Link8",
    },
    {
      id: 9,
      title: "Queue in javascript",
      link: "##Link9",
    },
  ];

  return (
    <main
      className={`${styles.main} container`}
      style={{ margin: "100px auto 20px auto" }}
    >
      {/* Hero Section */}
      <div
        className="p-4 p-md-5 mb-4 rounded"
        style={{ backgroundColor: "#1A1A1A" }}
      >
        <div className="d-flex px-0">
          <div className="col-lg-6">
            <h1 className="display-5 fst-italic text-light">
              Learn Data Structures with Javascript | DSA using JavaScript
              Tutorial
            </h1>
            <p className="lead my-3 text-light fs-6">
              The tutorial advocates for using JavaScript for Data Structures
              and Algorithms (DSA) and offers a detailed guide for beginners to
              start learning DSA from scratch using the language. It
              acknowledges the challenges of combining DSA with JavaScript but
              aims to provide comprehensive assistance in overcoming them.
            </p>
          </div>
          <div className="d-none d-lg-block col-lg-6">
            <img
              src={jsPic}
              className="img-fluid h-100 object-fit-contain"
              alt=""
            />
          </div>
        </div>
      </div>

      {/* Featured posts */}
      <div className="row mb-2">
        <h3 className="pb-4 mb-4 fst-italic border-bottom">Featured posts</h3>
        {featuredPosts.map((post) => (
          <div className="col-md-6" key={post.id}>
            <div className="row g-0 border rounded overflow-hidden flex-md-row mb-4 h-md-250">
              <div className="col-12 d-none d-lg-block">
                <img
                  src={post.img}
                  className="img-fluid w-100 object-fit-cover"
                  style={{ maxHeight: "300px" }}
                  alt=""
                />
              </div>
              <div className="col-auto p-4 d-flex flex-column">
                <h3 className="mb-0">{post.title}</h3>
                <em className="mb-1 ">{post.date}</em>
                <p className="card-text mb-auto">{post.content}</p>
                <a href="#">Continue reading</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Main content */}
      <div className="row g-5">
        <div className="col-md-8">
          {/* Profile Section */}
          <Profile />
          <h3 className="pb-4 mb-4 fst-italic border-bottom">
            Table of Contents
          </h3>
          <article className="blog-post">
            <div
              className="container p-3 rounded"
              style={{ backgroundColor: "#1A1A1A" }}
            >
              <ul>
                {tableOfContents.map((item, index) => (
                  <li key={index}>
                    <a href={item.link} className="text-decoration-none">
                      {item.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <hr />
            <h2 id="#Link1">Introduction to Data Structures</h2>
            <p>
              A data structure is defined as a particular way of storing and
              organizing data in our devices to use the data efficiently and
              effectively. The main idea behind using data structures is to
              minimize the time and space complexities. An efficient data
              structure takes minimum memory space and requires minimum time to
              execute the data.
            </p>
            <h3 id="#Link2">
              How to start learning Data Structures with Javascript?
            </h3>
            <p>
              The first and foremost thing is dividing the total procedure into
              little pieces which need to be done sequentially.
            </p>
            <p>
              The complete process to learn DS from scratch can be broken into 3
              parts:
            </p>
            <ol>
              <li>
                <strong>Learn about Complexities</strong>
              </li>
              <li>
                <strong>Learn the basics of individual Data Structures</strong>
              </li>
              <li>
                <strong>Practice Problems on Data Structures</strong>
              </li>
            </ol>
            <h2 id="#Link3">1. Learn about Complexities</h2>
            <p>
              Here comes one of the interesting and important topics. The
              primary motive to use DSA is to solve a problem effectively and
              efficiently. How can you decide if a program written by you is
              efficient or not? This is measured by complexities. Complexity is
              of two types:
            </p>
            <ol>
              <li>
                <strong className="text-decoration-underline">
                  Time Complexity:{" "}
                </strong>
                Time complexity is used to measure the amount of time required
                to execute the code.
              </li>
              <li>
                <strong className="text-decoration-underline">
                  Space Complexity:{" "}
                </strong>
                Space complexity means the amount of space required to execute
                successfully the functionalities of the code. You will also come
                across the term Auxiliary Space very commonly in DSA, which
                refers to the extra space used in the program other than the
                input data structure.
              </li>
            </ol>
            <p>
              Both of the above complexities are measured with respect to the
              input parameters. But here arises a problem. The time required for
              executing a code depends on several factors, such as:
            </p>
            <ul>
              <li>The number of operations performed in the program, </li>
              <li>The speed of the device, and also </li>
              <li>
                The speed of data transfer is being executed on an online
                platform
              </li>
            </ul>
            <h2 id="#Link4">2. Learn Data Structures with Javascript</h2>
            <p>
              Here comes the most crucial and the most awaited stage of the
              roadmap for learning data structure and algorithm – the stage
              where you start learning about DSA. The topic of DSA consists of
              two parts:
            </p>
            <ul>
              <li>Data Structures</li>
              <li>Algorithms </li>
            </ul>
            <p>
              Though they are two different things, they are highly
              interrelated, and it is very important to follow the right track
              to learn them most efficiently. If you are confused about which
              one to learn first, we recommend you to go through our detailed
              analysis on the topic: What should I learn first- Data Structures
              or Algorithms? Here we have followed the flow of learning a data
              structure and then the most related and important algorithms used
              by that data structure.
            </p>
            <hr />
            <h2 id="#Link5">1. Array in javascript</h2>
            <p>
              An array is a collection of items of the same variable type stored
              that are stored at contiguous memory locations. It’s one of the
              most popular and simple data structures and is often used to
              implement other data structures. Each item in an array is indexed
              starting with 0.
            </p>
            <p>
              <strong>Declaration of an Array: </strong>
              There are basically two ways to declare an array.
            </p>
            <Syntax
              content="let arrayName = [value1, value2, ...]; // Method 1
let arrayName = new Array(); // Method 2"
            />
            <Image pic={array} />

            <p>
              <strong>Types of Array operations:</strong>
            </p>
            <ul>
              <li>
                <strong>Traversal: </strong>
                Traverse through the elements of an array.
              </li>
              <li>
                <strong>Insertion: </strong>
                Inserting a new element in an array.
              </li>
              <li>
                <strong>Deletion: </strong>
                Deleting element from the array.
              </li>
              <li>
                <strong>Searching: </strong>
                Search for an element in the array.
              </li>
              <li>
                <strong>Sorting: </strong>
                Maintaining the order of elements in the array.
              </li>
            </ul>

            <p>Below is the implementation of the array in javascript:</p>

            <Code
              code={`// Initializing while declaring
// Creates an array having elements 10, 20, 30, 40, 50
var house = new Array(10, 20, 30, 40, 50);

// Creates an array of 5 undefined elements
var house1 = new Array(5);

// Creates an array with element 1BHK
var home = new Array("1BHK");
console.log(house)
console.log(house1)
console.log(home)`}
            />

            <Output
              content={`[ 10, 20, 30, 40, 50 ]
[ <5 empty items> ]
[ '1BHK' ]
`}
            />
            <hr />
            <h2 id="#Link6">2. String in javascript</h2>
            <p>
              JavaScript strings are used for storing and manipulating text. It
              can contain zero or more characters within quotes.
            </p>
            <p>
              <strong>Creating Strings: </strong>There are two ways to create a
              string in Javascript:
            </p>
            <ul>
              <li>By string literal</li>
              <li>By string object</li>
            </ul>
            <Image pic={string} />
            <p>
              <strong className="text-decoration-underline">
                String operations:
              </strong>
            </p>
            <ul>
              <li>
                <strong>Substrings: </strong>A substring is a contiguous
                sequence of characters within a string
              </li>
              <li>
                <strong>Concatenation: </strong>
                This operation is used for appending one string to the end of
                another string.
              </li>
              <li>
                <strong>Length: </strong>
                It defines the number of characters in the given string.
              </li>
              <li>
                <strong>Text Processing Operations: </strong>
                Text processing is the process of creating and editing strings.
              </li>
              <ul>
                <li>
                  <strong>Insertion: </strong>
                  This operation is used to insert characters in the string at
                  the specified position.
                </li>
                <li>
                  <strong>Deletion: </strong>
                  This operation is used to delete characters in the string at
                  the specified position.
                </li>
                <li>
                  <strong>Update: </strong>
                  This operation is used to update characters in the string at
                  the specified position.
                </li>
              </ul>
            </ul>

            <p>Below is the implementation of the String in javascript:</p>

            <Code
              code={`// String written inside quotes
	var x = "Welcome to GeeksforGeeks!";
	console.log(x);
	
	// Declare an object
	var y = new String("Great Geek");
        console.log(y);
	
	
	let a = "abcdefgh";

	// Finding the first index of the character 'b'
	console.log(a.indexOf('b'));


	let a2 = "Hello World";

	let arrString = ["Geeks", "for", "Geeks"]

	// Replacing the word 'World' with 'Geeks'
	console.log(a2.replace("World", arrString[0]));
`}
            />

            <Output
              content={`Welcome to GeeksforGeeks!
[String: 'Great Geek']
1
Hello Geeks
`}
            />

            <hr />
            <h2 id="#Link7">3. Linked List in javascript</h2>
            <p>
              A linked list is a linear data structure, Unlike arrays, linked
              list elements are not stored at a contiguous location. it is
              basically chains of nodes, each node contains information such as
              data and a pointer to the next node in the chain. In the linked
              list there is a head pointer, which points to the first element of
              the linked list, and if the list is empty then it simply points to
              null or nothing.
            </p>
            <Image pic={linkedList} />
            <p>
              <strong className="text-decoration-underline">
                Operations on Linked List:
              </strong>
            </p>
            <ul>
              <li>
                <strong>Traversal: </strong> We can traverse the entire linked
                list starting from the head node. If there are n nodes then the
                time complexity for traversal becomes O(n) as we hop through
                each and every node.
              </li>

              <li>
                <strong>Insertion: </strong> Insert a key to the linked list. An
                insertion can be done in 3 different ways; insert at the
                beginning of the list, insert at the end of the list and insert
                in the middle of the list.
              </li>

              <li>
                <strong>Deletion: </strong> Removes an element x from a given
                linked list. You cannot delete a node by a single step. A
                deletion can be done in 3 different ways; delete from the
                beginning of the list, delete from the end of the list and
                delete from the middle of the list.
              </li>

              <li>
                <strong>Search: </strong> Find the first element with the key k
                in the given linked list by a simple linear search and returns a
                pointer to this element
              </li>
            </ul>

            <p>Below is the implementation of the Linked List in javascript:</p>

            <Code
              code={`class Node {
	// constructor
	constructor(element) {
		this.element = element;
		this.next = null
	}
}
// linkedlist class
class LinkedList {
	constructor() {
		this.head = null;
		this.size = 0;
	}

	// adds an element at the end
	// of list
	add(element) {
		// creates a new node
		var node = new Node(element);

		// to store current node
		var current;

		// if list is Empty add the
		// element and make it head
		if (this.head == null)
			this.head = node;
		else {
			current = this.head;

			// iterate to the end of the
			// list
			while (current.next) {
				current = current.next;
			}

			// add node
			current.next = node;
		}
		this.size++;
	}

	// insert element at the position index
	// of the list
	insertAt(element, index) {
		if (index < 0 || index > this.size)
			return console.log("Please enter a valid index.");
		else {
			// creates a new node
			var node = new Node(element);
			var curr, prev;

			curr = this.head;

			// add the element to the
			// first index
			if (index == 0) {
				node.next = this.head;
				this.head = node;
			} else {
				curr = this.head;
				var it = 0;

				// iterate over the list to find
				// the position to insert
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// adding an element
				node.next = curr;
				prev.next = node;
			}
			this.size++;
		}
	}

	// removes an element from the
	// specified location
	removeFrom(index) {
		if (index < 0 || index >= this.size)
			return console.log("Please Enter a valid index");
		else {
			var curr, prev, it = 0;
			curr = this.head;
			prev = curr;

			// deleting first element
			if (index === 0) {
				this.head = curr.next;
			} else {
				// iterate over the list to the
				// position to removce an element
				while (it < index) {
					it++;
					prev = curr;
					curr = curr.next;
				}

				// remove the element
				prev.next = curr.next;
			}
			this.size--;

			// return the remove element
			return curr.element;
		}
	}

	// removes a given element from the
	// list
	removeElement(element) {
		var current = this.head;
		var prev = null;

		// iterate over the list
		while (current != null) {
			// comparing element with current
			// element if found then remove the
			// and return true
			if (current.element === element) {
				if (prev == null) {
					this.head = current.next;
				} else {
					prev.next = current.next;
				}
				this.size--;
				return current.element;
			}
			prev = current;
			current = current.next;
		}
		return -1;
	}


	// finds the index of element
	indexOf(element) {
		var count = 0;
		var current = this.head;

		// iterate over the list
		while (current != null) {
			// compare each element of the list
			// with given element
			if (current.element === element)
				return count;
			count++;
			current = current.next;
		}

		// not found
		return -1;
	}

	// checks the list for empty
	isEmpty() {
		return this.size == 0;
	}

	// gives the size of the list
	size_of_list() {
		console.log(this.size);
	}


	// prints the list items
	printList() {
		var curr = this.head;
		var str = "";
		while (curr) {
			str += curr.element + " ";
			curr = curr.next;
		}
		console.log(str);
	}

}

// creating an object for the
// Linkedlist class
var ll = new LinkedList();

// testing isEmpty on an empty list
// returns true
console.log(ll.isEmpty());

// adding element to the list
ll.add(10);

// prints 10
ll.printList();

// returns 1
console.log(ll.size_of_list());

// adding more elements to the list
ll.add(20);
ll.add(30);
ll.add(40);
ll.add(50);

// returns 10 20 30 40 50
ll.printList();

// prints 50 from the list
console.log("is element removed ?" + ll.removeElement(50));

// prints 10 20 30 40
ll.printList();

// returns 3
console.log("Index of 40 " + ll.indexOf(40));

// insert 60 at second position
// ll contains 10 20 60 30 40
ll.insertAt(60, 2);

ll.printList();

// returns false
console.log("is List Empty ? " + ll.isEmpty());

// remove 3rd element from the list
console.log(ll.removeFrom(3));

// prints 10 20 60 40
ll.printList();
`}
            />

            <Output
              content={`true
10 
1
undefined
10 20 30 40 50 
is element removed ?50
10 20 30 40 
Index of 40 3
10 20 60 30 40 
is List Empty ? false
30
10 20 60 40 `}
            />

            <hr />
            <h2 id="#Link8">4. Stack in javascript</h2>
            <p>
              Stack is a linear data structure in which insertion and deletion
              are done at one end this end is generally called the top. It works
              on the principle of Last In First Out (LIFO) or First in Last out
              (FILO). LIFO means the last element inserted inside the stack is
              removed first. FILO means, the last inserted element is available
              first and is the first one to be deleted.{" "}
            </p>

            <Image pic={stack} />

            <p>
              <strong className="text-decoration-underline">
                Operations in a Stack:
              </strong>
            </p>
            <ol>
              <li>
                {" "}
                <strong>Push: </strong>Add an element to the top of a stack
              </li>
              <li>
                {" "}
                <strong>Pop: </strong>Remove an element from the top of a stack
              </li>
              <li>
                {" "}
                <strong>IsEmpty: </strong>Check if the stack is empty
              </li>
              <li>
                {" "}
                <strong>IsFull: </strong>Check if the stack is full
              </li>
              <li>
                {" "}
                <strong>top/Peek: </strong>Get the value of the top element
                without removing it
              </li>
            </ol>

            <p>Below is the implementation of the Stack in javascript:</p>

            <Code
              code={`// Stack class
class Stack {

	// Array is used to implement stack
	constructor()
	{
		this.items = [];
	}

	// Functions to be implemented
	// push(item)
	// push function
push(element)
{
	// push element into the items
	this.items.push(element);
}

	
	// pop function
pop()
{
	// return top most element in the stack
	// and removes it from the stack
	// Underflow if stack is empty
	if (this.items.length == 0)
		return "Underflow";
	return this.items.pop();
}

// peek function
peek()
{
	// return the top most element from the stack
	// but does'nt delete it.
	return this.items[this.items.length - 1];
}


// isEmpty function
isEmpty()
{
	// return true if stack is empty
	return this.items.length == 0;
}

	
	// printStack function
printStack()
{
	var str = "";
	for (var i = 0; i < this.items.length; i++)
		str += this.items[i] + " ";
	return str;
}

}
// creating object for stack class
var stack = new Stack();

// testing isEmpty and pop on an empty stack

// returns false
console.log(stack.isEmpty());

// returns Underflow
console.log(stack.pop());
// Adding element to the stack
stack.push(10);
stack.push(20);
stack.push(30);

// Printing the stack element
// prints [10, 20, 30]
console.log(stack.printStack());

// returns 30
console.log(stack.peek());

// returns 30 and remove it from stack
console.log(stack.pop());

// returns [10, 20]
console.log(stack.printStack());
`}
            />

            <Output
              content={`true
Underflow
10 20 30 
30
30
10 20 
`}
            />

            <hr />
            <h2 id="#Link9">5. Queue in javascript</h2>
            <p>
              A Queue is a linear structure that follows a particular order in
              which the operations are performed. The order is First In First
              Out (FIFO). It is similar to the ticket queue outside a cinema
              hall, where the first person entering the queue is the first
              person who gets the ticket.
            </p>

            <Image pic={queue} />

            <p>
              <strong className="text-decoration-underline">
                Operations of Queue:
              </strong>
            </p>
            <p>
              A queue is an object (an abstract data structure – ADT) that
              allows the following operations:
            </p>

            <ol>
              <li>
                <strong>Enqueue: </strong>Add an element to the end of the queue
              </li>
              <li>
                <strong>Dequeue: </strong>Remove an element from the front of
                the queue
              </li>
              <li>
                <strong>IsEmpty: </strong>Check if the queue is empty
              </li>
              <li>
                <strong>IsFull: </strong>Check if the queue is full
              </li>
              <li>
                <strong>top/Peek: </strong>Get the value of the front of the
                queue without removing it
              </li>
            </ol>

            <p>Below is the implementation of the Queue in javascript:</p>

            <Code
              code={`class Queue {
		constructor() {
			this.items = {}
			this.frontIndex = 0
			this.backIndex = 0
		}
		enqueue(item) {
			this.items[this.backIndex] = item
			this.backIndex++
			return item + ' inserted'
		}
		dequeue() {
			const item = this.items[this.frontIndex]
			delete this.items[this.frontIndex]
			this.frontIndex++
			return item
		}
		peek() {
			return this.items[this.frontIndex]
		}
		get printQueue() {
			return this.items;
		}
		// isEmpty function
isEmpty() {
	// return true if the queue is empty.
	return this.items.length == 0;
}

	}
	const queue = new Queue()
	console.log(queue.enqueue(7))
	console.log(queue.enqueue(2))
	console.log(queue.enqueue(6))
	console.log(queue.enqueue(4))
	console.log(queue.dequeue())
	console.log(queue.peek())
	var str = queue.printQueue;
	console.log(str)
`}
            />

            <Output
              content={`7 inserted
2 inserted
6 inserted
4 inserted
7
2
{ '1': 2, '2': 6, '3': 4 }`}
            />
          </article>
        </div>
        {/* Sidebar content */}

        <Sidebar />
      </div>
      <Quotes />
    </main>
  );
};

export default Blog;
