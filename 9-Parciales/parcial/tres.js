function Mostrar()
{
	var largo;
	var ancho;
	var metrosAlambre;

	largo=document.getElementById('alrgo').value;
	largo=parseInt(largo);
	ancho=document.getElementById('ancho').value;
	ancho=parseInt(ancho);

	metrosAlambre=((largo*2)+(ancho*2))*3;

	alert("usted necesita "+metrosAlambre+" metros de alambre para alambrar 3 pasadas.");

}
