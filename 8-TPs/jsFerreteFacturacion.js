/*1.	Para el departamento de facturación:
A.	Ingresar tres precios de productos y mostrar la suma de los mismos.
B.	Ingresar tres precios de productos y mostrar el promedio de los mismos.
C.	ingresar tres precios de productos  y mostrar precio final (más IVA 21%).
*/
function Sumar () 
{
	var ingresoUno=document.getElementById('PrecioUno').value;
	var ingresoDos=document.getElementById('PrecioDos').value;
	var ingresoTres=document.getElementById('PrecioTres').value;
	

	ingresoUno=parseInt(ingresoUno);
	ingresoDos=parseInt(ingresoDos);
	ingresoTres=parseInt(ingresoTres);

	
	alert(ingresoUno+ingresoDos+ingresoTres);

}
function Promedio () 
{
	var ingresoUno=document.getElementById('PrecioUno').value;
	var ingresoDos=document.getElementById('PrecioDos').value;
	var ingresoTres=document.getElementById('PrecioTres').value;
	var resultado;

	ingresoUno=parseInt(ingresoUno);
	ingresoDos=parseInt(ingresoDos);
	ingresoTres=parseInt(ingresoTres);

	
	resultado=(ingresoUno+ingresoDos+ingresoTres);
	resultado=parseInt(resultado)
	alert(resultado/3);
}
function PrecioFinal () 
{
	var ingresoUno=document.getElementById('PrecioUno').value;
	var ingresoDos=document.getElementById('PrecioDos').value;
	var ingresoTres=document.getElementById('PrecioTres').value;
	var resultado;
	var iva;

	ingresoUno=parseInt(ingresoUno);
	ingresoDos=parseInt(ingresoDos);
	ingresoTres=parseInt(ingresoTres);
	resultado=ingresoUno+ingresoDos+ingresoTres;
	resultado=parseInt(resultado);
	iva=resultado*0.21;
	
	alert(resultado+iva);
}