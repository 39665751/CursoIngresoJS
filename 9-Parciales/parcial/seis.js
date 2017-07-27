function Mostrar()
{
	var importeDeVentas;
	var mayorImporte;
	var menorImporte;
	var contador=0;
	var dias=24;

	while(contador<dias)
	{
		importeDeVentas=prompt("ingrese importe de ventas");
		while(importeDeVentas<0)
		{
			importeDeVentas=prompt("ingrese importe de ventas mayor a 0");
		}

		if(contador==0)
		{
			mayorImporte=importeDeVentas;
			menorImporte=importeDeVentas;
		}
		else
		{
				if(importeDeVentas>mayorImporte)
			{
				mayorImporte=importeDeVentas;
			}
			else
			{
				if(importeDeVentas<menorImporte)
				{
					menorImporte=importeDeVentas;					}
				}
			}
		}
		contador++;
	}

	document.write("en 24 dias, la venta mayor fue de "+mayorImporte+", y la venta menor fue de "+menorImporte+".");
}
