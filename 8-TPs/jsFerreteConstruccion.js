/*2.	Para el departamento de Construcción:
A.	 Mostrar la cantidad de alambre a comprar  si se ingresara el largo y el ancho de un terreno rectangular y se debe alambra con tres hilos de alambre.
B.	Mostrar la cantidad de alambre a comprar  si se ingresara el radio  de un terreno circular y se debe alambra con tres hilos de alambre.
C.	Para hacer un contrapiso de 1m x 1m se necesitan 2 bolsas de cemento y 3 de cal, debemos mostrar cuantas bolsas se necesitan de cada uno para las medidas que nos ingresen.
*/

function Rectangulo () 
{
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var radio=document.getElementById('Radio').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	radio=parseInt(radio);

	var alambre=(largo+largo+ancho+ancho)*3;

	alert(alambre);
}
function Circulo () 
{
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var radio=document.getElementById('Radio').value;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	radio=parseInt(radio);

	var alambre=(radio*2*3.14)*3;

	alert(alambre);
}
function Materiales () 
{
	
	var largo=document.getElementById('Largo').value;
	var ancho=document.getElementById('Ancho').value;
	var radio=document.getElementById('Radio').value;
	var cemento;
	var cal;
	var materiales;
	var superficieR;
	var superficieC;

	largo=parseInt(largo);
	ancho=parseInt(ancho);
	radio=parseInt(radio);

	superficieR=((radio*radio)*3.1416)/2;
	cal=3*superficieR;
	cemento=2*superficieR;
	alert("para el terreno circular se necesitan "+cal+" bolsas decal y "+cemento+" bolsas de cemento.");

	superficieC=largo*ancho;

	cal=3*superficieC;
	cemento=2*superficieC;
	alert("Para el terreno cuadrangular se necesitan "+cal+" bolsas de cal y "+cemento+" bolsas de cemento.");
}