/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{
	var sueldo=document.getElementById('sueldo').value;
	var resultado;
	sueldo=parseInt(sueldo);
	var porcentaje;

	porcentaje=(sueldo*0.1);
	porcentaje=parseInt(porcentaje)
	resultado=(sueldo+porcentaje);
	document.getElementById('resultado').value=resultado;
}
//FIJARSE BIEN EN ELEMENT Y NO ELEMENTS.