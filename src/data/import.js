// for the default version
const algoliasearch = require("algoliasearch");

// or just use algoliasearch if you are using a <script> tag
// if you are using AMD module loader, algoliasearch will not be defined in window,
// but in the AMD modules of the page

//Setup the API Client
const client = algoliasearch("MIG150ZYJX", "d18e0d7563d406863fb469d00796266e");
const index = client.initIndex("classes");

const classesJSON = require("./mockdata.json");

//For performance reasons, we recommend you send several records at once instead of one by one.
//If you have many records to index, we recommend you send them in batches.
//Once you’re done, don’t forget to configure relevance settings.

// const records = [{ name: "Tom Cruise" }, { name: "Scarlett Johansson" }];

//import data
//index.addObjects(classesJSON);

//replacing the old record
// index.saveObjects(classesJSON).then(({ objectIDs }) => {
//   console.log(objectIDs);
// });

//updating only a subset of the record
// index.partialUpdateObjects(objects).then(({ objectIDs }) => {
//     console.log(objectIDs);
//   });

//delete records using objectID
index.deleteObjects(["1"]).then(({ objectIDs }) => {
  console.log(objectIDs);
});

// index
//   .saveObjects(classesJSON, {
//     autoGenerateObjectIDIfNotExist: true,
//   })
//   .then(({ objectIDs }) => {
//     console.log(objectIDs);
//   });

// index
//   .setSettings({
//     searchableAttributes: ["name"],
//   })
//   .then(() => {
//     // done
//   });
