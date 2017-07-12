var eleccionMaquina;
var ContadorDeEmpates=0;
var ContadorDeGanadas=0;
var ContadorDePerdidas=0;

function comenzar()
{
	//Genero el número RANDOM entre 1 y 3
	 	numeroSecreto =Math.floor( Math.random()*3)+1;
		//alert(numeroSecreto);
		switch(numeroSecreto)
		{
			case 1:
				eleccionMaquina="piedra";
				break;
			case 2:
				eleccionMaquina="papel";
				break;
			case 3:
				eleccionMaquina="tijera";
				break;

		}
		//alert(eleccionMaquina);



}//FIN DE LA FUNCIÓN
function piedra()
{
	eleccionHumano="piedra";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("la maquina selecciono: "+eleccionMaquina+" empate.");	
		ContadorDeEmpates++;	
	}
	else if(eleccionMaquina=="tijera")
	{
		alert("la maquina selecciono: "+eleccionMaquina+"  vos ganastes.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("la maquina selecciono: "+eleccionMaquina+" ganó la Maquina.");
		ContadorDePerdidas++;
	}

mostarResultado();

}//FIN DE LA FUNCIÓN
function papel()
{
	eleccionHumano="papel";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("la maquina selecciono: "+eleccionMaquina+" empate.");
		ContadorDeEmpates++;		

	}
	else if(eleccionMaquina=="piedra")
	{
		alert("la maquina selecciono: "+eleccionMaquina+" vos ganastes.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("la maquina selecciono: "+eleccionMaquina+" ganó la Maquina.");
		ContadorDePerdidas++;
	}
mostarResultado();
}//FIN DE LA FUNCIÓN
function tijera()
{
	eleccionHumano="tijera";
	if(eleccionHumano==eleccionMaquina)
	{
		alert("la maquina selecciono: "+eleccionMaquina+" empate.");
		ContadorDeEmpates++;		
	}
	else if(eleccionMaquina=="papel")
	{
		alert("la maquina selecciono: "+eleccionMaquina+" vos ganastes.");
		ContadorDeGanadas++;
	}
	else
	{
		alert("la maquina selecciono: "+eleccionMaquina+" ganó la Maquina.");
		ContadorDePerdidas++;
	}
mostarResultado();
}//FIN DE LA FUNCIÓN

function mostarResultado()
{

document.getElementById('empatadas').value=ContadorDeEmpates + " partidas empatadas.";
document.getElementById('perdidas').value=ContadorDePerdidas + " partidas perdidas.";
document.getElementById('ganadas').value=ContadorDeGanadas + " partidas ganadas.";

comenzar();
}