// const v8 = require("v8"); // soluction of the Thales


class ReferencesService {
  getCounterCopyingReferences(object) {
    const newObject = object
    return newObject
  }

  getCounterWithoutCopyingReferences(object) {
    // return { ...object }; // soluction of the Thales
    let newObject = Object.create(object)
    return newObject
  }

  
  getCounterWithoutDeepCopyingReferences(object) {
    //const newObject = structuredClone(object)
    // return v8.deserialize(v8.serialize(object)); // soluction of the Thales
    const newObject = JSON.parse(JSON.stringify(object))
    return newObject;
  }
  
}

module.exports = ReferencesService;
