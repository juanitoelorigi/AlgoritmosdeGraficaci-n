import { addTooltipIcon } from "../IconInfo/Based.mjs";

document.getElementById("inputForm5U2").addEventListener("submit", (event) => {
  event.preventDefault();
  const inputX = document.getElementById("xAYB").value;
  let randomNumbers = inputX.split(" ").map(Number);
  const n = randomNumbers.length;
  const tableBody = document.querySelector("#iterationsTabl5U2 tbody");

  // Limpiar tabla antes de llenar
  tableBody.innerHTML = "";

  // Calcular corridas
  let corridas = 1; // Se empieza en 1 ya que el primer elemento cuenta como primera corrida
  for (let i = 1; i < n; i++) {
    if (
      (randomNumbers[i] > randomNumbers[i - 1] &&
        randomNumbers[i - 1] <= randomNumbers[i - 2]) ||
      (randomNumbers[i] < randomNumbers[i - 1] &&
        randomNumbers[i - 1] >= randomNumbers[i - 2])
    ) {
      corridas++;
    }
  }

  // Cálculo de las fórmulas
  const muCo = (2 * n - 1) / 3;
  const sigmaCo2 = (16 * n - 29) / 90;
  const z0 = Math.abs((corridas - muCo) / Math.sqrt(sigmaCo2));
  const zAlpha2 = 1.96;

  // Mostrar los números y el resultado en la tabla
  randomNumbers.forEach((number, index) => {
    const row = document.createElement("tr");

    // Columna de X
    const xCell = document.createElement("td");
    xCell.innerText = number;
    row.appendChild(xCell);

    // Columna de rechazo
    const rejectionCell = document.createElement("td");
    if (index === 0) {
      rejectionCell.innerText =
        z0 < zAlpha2 ? "✔️ No se rechaza" : "❌ Se rechaza";

      addTooltipIcon(
        rejectionCell,
        `Z0 = ${z0.toFixed(4)} < Z Alpha = ${zAlpha2.toFixed(4)}`
      );
    }
    row.appendChild(rejectionCell);

    tableBody.appendChild(row);
  });

  // Mostrar resultado general en consola (puede ser en pantalla si lo prefieres)
  console.log(
    `Corridas: ${corridas}, MuCo: ${muCo}, SigmaCo^2: ${sigmaCo2}, Z0: ${z0}, Z_alpha/2: ${zAlpha2}`
  );
});
