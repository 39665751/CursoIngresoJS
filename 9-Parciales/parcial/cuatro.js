function Mostrar()
{
	var numero1;
	var numero2;
	var numeroFinal;

	numero1=prompt("dame un numero");
	numero1=parseInt(numero1);
	numero2=prompt("dame otro numero");
	numero2=parseInt(numero2);

	if(numero1==numero2)
	{
		numeroFinal=numero1*numero2;
	}
	else
	{
		if(numero1>numero2)
		{
			numeroFinal=numero1-numero2;
		}
		else
		{
			numeroFinal=numero1+numero2;
		}
	}
	document.write("el resultado es "+numeroFinal);
}
