let cunt = require("../dbConnect");
let projectCollection;

setTimeout(() => {
  projectCollection = cunt.db().collection("Pets");
});

const insertProjects = (project, callback) => {
  projectCollection.insertOne(project, callback);
};

const getProjects = (callback) => {
  projectCollection.find({}).toArray(callback);
};
// Delete, Search and Update to be done
module.exports = { insertProjects, getProjects };
