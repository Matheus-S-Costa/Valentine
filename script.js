const inicio = new Date("2024-04-19T18:36:00");

function formatarNumero(numero) {
  return numero.toString().padStart(2, '0');
}

function atualizarContador() {
  const agora = new Date();

  let anos = agora.getFullYear() - inicio.getFullYear();
  let meses = agora.getMonth() - inicio.getMonth();
  let dias = agora.getDate() - inicio.getDate();
  let horas = agora.getHours() - inicio.getHours();
  let minutos = agora.getMinutes() - inicio.getMinutes();
  let segundos = agora.getSeconds() - inicio.getSeconds();

  // Ajustes para valores negativos
  if (segundos < 0) {
    segundos += 60;
    minutos--;
  }

  if (minutos < 0) {
    minutos += 60;
    horas--;
  }

  if (horas < 0) {
    horas += 24;
    dias--;
  }

  if (dias < 0) {
    const ultimoMes = new Date(agora.getFullYear(), agora.getMonth(), 0).getDate();
    dias += ultimoMes;
    meses--;
  }

  if (meses < 0) {
    meses += 12;
    anos--;
  }

  // Atualiza os valores no HTML com dois dígitos
  document.getElementById('anos').textContent = formatarNumero(anos);
  document.getElementById('meses').textContent = formatarNumero(meses);
  document.getElementById('dias').textContent = formatarNumero(dias);
  document.getElementById('horas').textContent = formatarNumero(horas);
  document.getElementById('minutos').textContent = formatarNumero(minutos);
  document.getElementById('segundos').textContent = formatarNumero(segundos);
}

setInterval(atualizarContador, 1000);
atualizarContador();