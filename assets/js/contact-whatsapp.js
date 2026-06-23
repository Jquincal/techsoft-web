(function () {
  var whatsappNumber = "5492615753165";
  var forms = document.querySelectorAll("form[data-whatsapp-form]");
  var productButtons = document.querySelectorAll("[data-whatsapp-product]");

  if (!forms.length && !productButtons.length) {
    return;
  }

  function buildWhatsAppUrl(lines) {
    return (
      "https://wa.me/" +
      whatsappNumber +
      "?text=" +
      encodeURIComponent(lines.join("\n"))
    );
  }

  function fieldValue(form, selector) {
    var field = form.querySelector(selector);
    return field ? field.value.trim() : "";
  }

  function selectedText(form, selector) {
    var field = form.querySelector(selector);

    if (!field || field.selectedIndex <= 0) {
      return "";
    }

    return field.options[field.selectedIndex].text.trim();
  }

  forms.forEach(function (form) {
    form.addEventListener("submit", function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      var source = form.dataset.formSource || "Sitio web";
      var name = fieldValue(form, "#name");
      var email = fieldValue(form, "#email");
      var phone = fieldValue(form, "#phone");
      var company = fieldValue(form, "#company");
      var service = selectedText(form, "#service");
      var budget = selectedText(form, "#budget");
      var message = fieldValue(form, "#message");
      var lines = [
        "Hola, te contacto desde la web de TechSoft.",
        "",
        "Origen: " + source,
        "Nombre: " + name,
        "Email: " + email
      ];

      if (phone) {
        lines.push("Teléfono: " + phone);
      }

      if (company) {
        lines.push("Empresa: " + company);
      }

      if (service) {
        lines.push("Servicio de interés: " + service);
      }

      if (budget) {
        lines.push("Presupuesto estimado: " + budget);
      }

      lines.push("", "Mensaje:", message);

      window.location.href = buildWhatsAppUrl(lines);
    });
  });

  productButtons.forEach(function (button) {
    button.addEventListener("click", function () {
      var productName = button.dataset.whatsappProduct || "un producto";
      var lines = [
        "Hola, te contacto desde la web de TechSoft.",
        "",
        "Origen: Productos",
        "Producto de interés: " + productName,
        "",
        "Quisiera recibir más información."
      ];

      window.location.href = buildWhatsAppUrl(lines);
    });
  });
})();
