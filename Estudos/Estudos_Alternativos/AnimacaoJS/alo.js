function reajustaValores1(itens, percentual) {
    console.log("Valor inicial: " +  itens);
    console.log("Valor reajustado: " +  percentual);
  }
  reajustaValores1([15, 20, 25], 0.5);

  

  function reajustaValores3(itens, percentual) {
    const itensReajustados = itens.push(percentual);
    console.log("Valor inicial: " +  itens);
    console.log("Valor reajustado: " +  itensReajustados);
  }
  reajustaValores3([15, 20, 25], 0.5);

  function reajustaValores4(itens, percentual) {
    const ajuste = (item) => (item = item + (item * percentual))
    const itensReajustados = itens.map(ajuste);
    console.log("Valor inicial: " +  itens);
    console.log("Valor reajustado: " +  itensReajustados);
  }
  reajustaValores4([15, 20, 25], 0.5);

  function reajustaValores5(itens, percentual) {
    const itensReajustados = itens.map(itens + percentual);
    console.log("Valor inicial: " +  itens);
    console.log("Valor reajustado: " +  itensReajustados);
  }
  reajustaValores5([15, 20, 25], 0.5);