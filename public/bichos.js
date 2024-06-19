document.addEventListener('DOMContentLoaded', function () {
    const animalForm = document.getElementById('animal-form');
    const animalTableBody = document.getElementById('animal-table-body');
  
    animalForm.addEventListener('submit', function (event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value;
      const especie = document.getElementById('especie').value;
      const classificacao = document.getElementById('classificacao').value;
      const descricao = document.getElementById('descricao').value;
  
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${nome}</td>
        <td>${especie}</td>
        <td>${classificacao}</td>
        <td>${descricao}</td>
        <td>
          <button class="btn btn-outline-danger btn-sm" onclick="deleteRow(this)">Deletar</button>
          <button class="btn btn-outline-dark btn-sm" onclick="editRow(this)">Editar</button>
        </td>
      `;
  
      animalTableBody.appendChild(newRow);
      animalForm.reset();
    });
  });
  
  function deleteRow(button) {
    const row = button.closest('tr');
    row.remove();
  }
  
  function editRow(button) {
    const row = button.closest('tr');
    const cells = row.getElementsByTagName('td');
  
    document.getElementById('nome').value = cells[0].textContent;
    document.getElementById('especie').value = cells[1].textContent;
    document.getElementById('classificacao').value = cells[2].textContent;
    document.getElementById('descricao').value = cells[3].textContent;
  
    deleteRow(button);
  }
  