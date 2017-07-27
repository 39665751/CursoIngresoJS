function Mostrar()
{
  var importe;
  var importeConIva;

  importe=prompt("ingrese importe");
  importe=parseInt(importe);

  importeConIva=(importe*21/100)+importe;

  document.getElementById('importeFinal').value=importeConIva;
}
