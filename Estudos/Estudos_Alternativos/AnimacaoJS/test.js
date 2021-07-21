function reajustaValores2(itens, percentual) {
    const itensReajustados = itens.map(itens + percentual);
    console.log("Valor inicial: " +  itens);
    console.log("Valor reajustado: " +  itensReajustados);
  }
  reajustaValores2([15, 20, 25], 0.5);