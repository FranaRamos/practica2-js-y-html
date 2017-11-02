function add() {
	/*estoy tomando el valor de los comentarios, para ello creo una variable*/
	var comments = document.getElementById("comment").value;
	/*indicamos que los comentarios una vez escritos se limpien*/
	document.getElementById("comment").value = "";
	/*creamos un contenedor donde guardemos los coments en el div "cont" vacío y todo lo demás*/
	var newComments = document.createElement("div");
	var cont = document.getElementById("cont");
	/*creando la variable que nos defina al texto de la caja comentarios*/
	var paragraph = document.createElement("p");
		paragraph.classList.add("color");
		/*tomamos el nodo de texto y lo sacamos para insertarlo en el contenedor*/
		var nodoText = document.createTextNode(comments);
		paragraph.appendChild(nodoText);
	/*creando la caja de ticket*/
	var check = document.createElement("input");
		check.type = "checkbox";
	/*creando el corazon*/
	var heart = document.createElement("i");
		heart.classList.add("fa", "fa-heart", "heart");
		/*creando el basurero*/
	var trash = document.createElement("i");
		trash.classList.add("fa", "fa-trash", "trash");

		/*newcomments es el papá de todos los siguientes elementos*/
		newComments.appendChild(paragraph);
		newComments.appendChild(check);
		newComments.appendChild(heart);
		newComments.appendChild(trash);
		cont.appendChild(newComments);

check.addEventListener("click", function() {
	paragraph.classList.toggle("strike-out");
})

trash.addEventListener("click", function() {
	cont.removeChild(newComments);
})

heart.addEventListener("click", function() {
	heart.classList.toggle("red");
})

}

add()