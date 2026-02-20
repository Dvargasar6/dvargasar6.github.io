// Función para cargar los datos desde un archivo externo
async function loadSubjects() {
    const response = await fetch('../Data/subjects.json'); // El archivo con tus datos
    const data = await response.json();
    
    const grid = document.getElementById('main-grid');

    data.semesters.forEach(sem => {
        // 1. Crear el índice del semestre
        const indexBtn = document.createElement('button');
        indexBtn.className = 'folder-index';
        indexBtn.innerText = sem.name;
        grid.appendChild(indexBtn);

        // 2. Crear las materias de ese semestre
        sem.subjects.forEach(subData => {
            const subject = new FolderButton(subData);
            grid.appendChild(subject.render());
        });
    });
}
// Llamar a la función cuando el DOM esté listo
// document.addEventListener('DOMContentLoaded', initGrid);