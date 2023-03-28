# Async and Callbacks

JavaScript is a synchronous language with some asynchronous behaviours, it is executed line by line and the next line is only executed when the current line is finished.

Synchronous in this regard means one line after the other.
JavaScript is single threaded - only one thing can be done at a time.

If at a certain line there is some very time consuming code running it would stop the execution of the lines below - that would be very bad 😩
For operations that take an unpredictable amount of time we use async functionality.

#### Potentially blocking operations

* Database Access

* Calling an API (like Google Maps or your own server)

* Encryption 

* Filesystem 

* Compression

Then the async function runs in the background and the rest of the code can continue to execute. 
