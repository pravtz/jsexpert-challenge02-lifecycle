class WeirdMathService {
  getWeirdBooleanNumberMath(boolean, number) {
    return boolean + number // operador convert '+' (mais) converte number e boolean para string
  }

  getWeirdStringBooleanMath(string, boolean) {
    return string + boolean
  }

  getWeirdStringBooleanMath2(string, boolean) {
    return string - boolean // operador convert '-' (menos) converte string e boolean para number
  }

  getWeirdStringNumberMath(string, number) {
    return string - number
  }
}

module.exports = WeirdMathService;
