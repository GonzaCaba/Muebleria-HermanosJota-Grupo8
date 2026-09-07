const formulario = document.querySelector("#Formulario");
const datosFormulario = [];

if (formulario) {
	formulario.addEventListener("submit", (evento) => {
		evento.preventDefault();

		if (!formulario.checkValidity()) {
			formulario.reportValidity();
			return;
		}

		const nombre = document.getElementById("nombre").value;
		const mail = document.getElementById("email").value;
		const mensaje = document.getElementById("mensaje").value;

		datosFormulario.push({ nombre, mail, mensaje });

		let mensajeExito = formulario.querySelector(".mensaje-exito");

		if (!mensajeExito) {
			mensajeExito = document.createElement("p");
			mensajeExito.className = "mensaje-exito";
			mensajeExito.setAttribute("role", "status");
			formulario.appendChild(mensajeExito);
		}

		mensajeExito.textContent =
			"Tu mensaje fue enviado correctamente. Nos pondremos en contacto contigo pronto.";
		formulario.reset();
	});
}
