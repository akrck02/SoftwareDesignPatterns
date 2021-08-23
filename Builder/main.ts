import { Object, ObjectBuilder } from "./object.ts";

let builder = new ObjectBuilder();
let finalObject: Object;

builder.withName("Ryzen 3700x");
builder.withDescription("The best processor in the world");
builder.withType("CPU");
builder.withId("1");

finalObject = builder.build();

/*Showing the results*/
console.log("\n","PC PART PICKER","\n","-------------------------");
console.log(finalObject);