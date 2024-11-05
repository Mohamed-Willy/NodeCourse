# NodeCourse

Following this course: https://www.udemy.com/course/nodejs-express-mongodb-bootcamp<br>

Demos:<br>
1-<br>

Notes:<br>
1- Ctrl + ` -> to open terminal<br>
2- Write {node} to enter the REPL and {Ctrl + D} to Exit<br>
3- To make a shortcut in terminal {File -> Preferences -> Keyboard Shortcuts} Clear Terminal comand -> workbench.action.terminal.clear<br>
4- Callback Hell:<br>
![alt text](image.png)<br>
5- Use {CTRL + C} to exit the process (Server)<br>
6- Event Loop:<br>
![alt text](image-1.png)<br>
7- Event Arcitecture:<br>
![alt text](image-3.png)<br>
8- Streams:<br>
![alt text](image-2.png)<br>
9- Backpressure error: When respone can't send data as fast as it is resieving it<br>
10- POST request used to create new resource<br>
11- GET request used to read a resource<br>
12- PUT request used to update all resources<br>
13- PATCH request used to update a patch from the data<br>
14- DELETE request used to delete a resource<br>
15- CRUD are the name of these operations (Create, Read, Update, Delete)<br>
16- ![alt text](image-4.png)<br>
17- MongoDB uses BSON encoding<br>
18- Mongo Shell Testing: (insertMany is like insertOne but takes more then one object)<br>
![alt text](image-5.png)<br>
19- db.tours.find({ name: "The Forest Hiker"}) -> To filter by name, can be anything<br>
20- db.tours.find({price: {$lte: 500}}) -> $lte stands for less than or equal and $ symbol is reserved by mongo<br>
    * $lt stands for less than<br>
    * $gt stand for greater than<br>
21- find( {First Condition}, {Second Condition} ) -> AND operator<br>
22- find( {$or: [ {First Condition}, {Second Condition} ]} ) -> OR operator<br>
23- db.tours.updateOne({ rating: 4.8 }, { $set: {price: 597}}) -> Update the object with rating 4.8 if more then one object have the same condition it will update the first only updateMany is used to update all the ones that match the condition<br>
24- To completly replace use replaceOne or replaceMany<br>
25- To delete we use deleteMany or deleteOne<br>
26- db.tours.deleteMany({}) to delete all the objects<br>
27- MVC Architecture: Model (Business logic layer) - Controller (Application Logic Layer) - View Layer<br>
![alt text](image-6.png)<br>
28- JWT Lojic<br>
![alt text](image-7.png)<br>
![alt text](image-8.png)<br>
