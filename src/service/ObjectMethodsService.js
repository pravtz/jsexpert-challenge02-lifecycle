class ObjectMethodsService {
  getEnhancedObject(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    return {
      ...rawObject,
      valueOf: () => rawObject.age,
      toString: () => rawObject.name
      
    }
  }

  getEnhancedObject2(rawObject) {
    // TODO: return an enhanced object implementing `valueOf` or `toString` depending on the context
    return {
      ...rawObject,
      toString: () => `[name="${rawObject.name}",age=${rawObject.age}]`
    }
  }
  
  //achei super difícil 
  //symbol.toPrimitive é um símbolo que específica uma propriedade com valor função 
  //que é chamada para converter um objeto para um valor primitivo correspondente
  getEnhancedObjectWithoutValueOfOrToString(rawObject) {
    // TODO: return an enhanced object **WITHOUT** implementing `valueOf` nor `toString`.
    // Note: Implementing `toString` and `valueOf` will NOT be allowed in this function.
    return {
      ...rawObject,
      [Symbol.toPrimitive](coercion) { 
        const type = { 
          string: `[name="${rawObject.name}",age=${rawObject.age}]`, 
          number: rawObject.age 
        } 
        return type[coercion] || type.string 
      } 
    }
  }
}

module.exports = ObjectMethodsService;
