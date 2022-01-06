class StatementsService {
  getReturnBasedOnStatement(condition1, condition2) {
    return condition1 || condition2 // retorna o primeiro que for true
  }

  getReturnBasedOnStatement2(condition1, condition2) {
    return condition1 && condition2 // retorna o último 
  }

  getReturnBasedOnStatement3(condition1, condition2, condition3) {
    return condition1 && condition2 || condition3  // && tem maior precedencia do que o ||
  }

  getReturnBasedOnStatement4(condition1, condition2, condition3) {
    return condition1 && condition2 && condition3
  }
}

module.exports = StatementsService;
