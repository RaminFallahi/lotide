const assertEqual = require('../assertEqual');
const head = require("../head");

assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head(["one"]), "one");
assertEqual(head([]), );
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Labs");