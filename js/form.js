const formulario = document.querySelector("#contact-form");
const datosFormulario = [];

if (formulario) {
	const nombre = document.querySelector("#full-name");
	const email = document.querySelector("#email");
	const telefono = document.querySelector("#phone");
	const asunto = document.querySelector("#subject");
	const mensaje = document.querySelector("#message");
	const formularioExito = document.querySelector("#form-success");
	const reiniciarFormulario = document.querySelector("#reset-form-btn");

	formulario.addEventListener("submit", (evento) => {
		evento.preventDefault();

		if (!formulario.checkValidity()) {
			formulario.reportValidity();
			return;
		}

		datosFormulario.push({
			nombre: nombre.value.trim(),
			email: email.value.trim(),
			telefono: telefono.value.trim(),
			asunto: asunto.value,
			mensaje: mensaje.value.trim(),
		});

		formulario.hidden = true;
		formularioExito.hidden = false;
	});

	reiniciarFormulario?.addEventListener("click", () => {
		formulario.reset();
		formulario.hidden = false;
		formularioExito.hidden = true;
		nombre.focus();
	});
}
