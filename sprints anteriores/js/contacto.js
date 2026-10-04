const formulario = document.querySelector("#contact-form");
const datosFormulario = [];

if (formulario) {
	const nombre = document.querySelector("#full-name");
	const email = document.querySelector("#email");
	const telefono = document.querySelector("#phone");
	const asunto = document.querySelector("#subject");
	const mensaje = document.querySelector("#message");
	const errores = {
		nombre: document.querySelector("#name-error"),
		email: document.querySelector("#email-error"),
		mensaje: document.querySelector("#message-error"),
	};
	const formularioExito = document.querySelector("#form-success");
	const reiniciarFormulario = document.querySelector("#reset-form-btn");

	const actualizarError = (campo, error) => {
		const esInvalido = !campo.validity.valid;
		error.hidden = !esInvalido;
		campo.toggleAttribute("aria-invalid", esInvalido);
	};

	const actualizarErrores = () => {
		actualizarError(nombre, errores.nombre);
		actualizarError(email, errores.email);
		actualizarError(mensaje, errores.mensaje);
	};

	[
		[nombre, errores.nombre],
		[email, errores.email],
		[mensaje, errores.mensaje],
	].forEach(([campo, error]) => {
		campo.addEventListener("input", () => actualizarError(campo, error));
	});

	formulario.addEventListener("submit", (evento) => {
		evento.preventDefault();
		actualizarErrores();

		if (!formulario.checkValidity()) {
			[nombre, email, mensaje].find((campo) => !campo.validity.valid)?.focus();
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
		actualizarErrores();
		formulario.hidden = false;
		formularioExito.hidden = true;
		nombre.focus();
	});
}
