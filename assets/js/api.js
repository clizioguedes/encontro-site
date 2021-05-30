function handleRegister() {
  const name = document.getElementById("name").value;
  const phone = document.getElementById("phone").value;
  const site = true;

  const data = {
    name,
    phone,
    site,
  };

  if (name === "" || phone === "") {
    alert("Ops, Nome e Whatsapp são obrigatórios");
    return;
  }

  if (phone.length === 15) {
    fetch(`https://encontro-api.herokuapp.com/user`, {
      mode: "cors",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(data),
    }).then((res) => {
      alert("Deu tudo certo, entraremos em contato em breve!");
      document.location.reload();
    });
  } else {
    alert(`Ops, Seu whatsapp está inválido`);
    return;
  }
}
