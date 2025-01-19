const formElements = document.querySelectorAll(".form-control");
const form = document.querySelector("form");

formElements.forEach((element) => {
	const label = element.firstElementChild;
	const input = element.lastElementChild;
	input.addEventListener("focus", () => {
		label.classList.add("active");
	});
	input.addEventListener("focusout", () => {
		if (input.value) {
			return;
		} else {
			label.classList.remove("active");
		}
	});
});

const passwordInput = document.querySelector("#password");
const confirmPasswordInput = document.querySelector("#confirm-password");

const validatePasswords = () => {
	const password = passwordInput.value;
	const confirmPassword = confirmPasswordInput.value;

	if (confirmPassword === password) {
		confirmPasswordInput.setCustomValidity("");
	} else {
		confirmPasswordInput.setCustomValidity("Passwords do not match.");
	}

	confirmPasswordInput.reportValidity();
};

confirmPasswordInput.addEventListener("input", validatePasswords);

form.addEventListener("submit", (e) => {
	e.preventDefault();

	window.location.replace("https://szidelo.github.io/odin-landing-page/");
});
