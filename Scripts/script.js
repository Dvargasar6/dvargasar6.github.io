class SemesterIndex {
    constructor({ semester_number }) {
        this.semester_number = semester_number;
    }
    /**
    @returns {HTMLElement}
    */
    render() {
        const element = document.createElement('button');
        element.classList.add('semester-index');
        element.textContent = `SEMESTRE ${this.semester_number}`;
        element.innerHTML = `<span>${element.textContent}</span>`;
        return element;
    }
}

class FolderButton {
    constructor({
        title,
        credits = 0,
        prerequisite = "",
        subject_code = "",
        category = "", // Puede ser 'if', 'math', 'science', 'physic'
        link = null,
        afterElement = false,
        activateHover = false
    }) {
        this.title = title;
        this.credits = credits;
        this.prerequisite = prerequisite;
        this.subject_code = subject_code;
        this.category = category;
        this.link = link;
        this.afterElement = afterElement;
        this.activateHover = activateHover;
    }

    /**
     * Crea el elemento DOM del botón
     * @returns {HTMLElement}
     */

    render() {
        // Determinate if is a link (<a>) or a button (<button>):
        const tag = this.link ? 'a' : 'button';
        const element = document.createElement(tag);

        // Add classes and attributes:

        element.classList.add('folder-button');
        if (this.category) {
            element.classList.add(this.category);
        }
        if (this.activateHover) {
            element.setAttribute('activate-hover', 'true');
        }
        if (this.afterElement) {
            element.setAttribute('after-element', 'true');
        }
        if (this.link) {
            element.href = this.link;
        }


        element.innerHTML = `
            <span class="row row-1">${this.title}</span>
            <span class="row row-2">
                <span title="Prerrequisito">${this.prerequisite}</span>
                <span title="Número de créditos">${this.credits}</span>
                <span title="Prerrequisito de">${this.subject_code}</span>
            </span>
        `;

        return element;
    }
}

class EmptySpace {
    constructor() {
    }

    /**
    @returns {HTMLElement}
     */
    render() {
        const element = document.createElement('div');
        element.classList.add('empty-space');
        return element;
    }
}

function createGrid() {

    const grid = document.querySelector('.folder-grid');

    const classMap = {
        "FolderButton": FolderButton,
        "SemesterIndex": SemesterIndex,
        "EmptySpace": EmptySpace
    };

    const subjects = [
        // SEMESTRE 1
        { type: "SemesterIndex", semester_number: 1 },
        { type: "FolderButton", title: "Int. a la Ing. Física", credits: 1, category: "if" },
        { type: "FolderButton", title: "Cálculo Diferencial", credits: 4, subject_code: "1", category: "math" },
        { type: "FolderButton", title: "Geometría Vectorial", credits: 4, subject_code: "2", category: "math" },
        { type: "FolderButton", title: "Química General", credits: 3, subject_code: "3", category: "science" },
        { type: "FolderButton", title: "Fund. de Programación", credits: 3, subject_code: "4", category: "science", link: "./Subjects/Programming/programming.html", afterElement: true },
        { type: "EmptySpace" },

        // SEMESTRE 2
        { type: "SemesterIndex", semester_number: 2 },
        { type: "FolderButton", title: "Taller I", credits: 5, prerequisite: "2", subject_code: "5", category: "if" },
        { type: "FolderButton", title: "Cálculo Integral", credits: 4, prerequisite: "1", subject_code: "6", category: "math", link: "./Subjects/Semester_2/integral.html", afterElement: true },
        { type: "FolderButton", title: "Álgebra Lineal", credits: 4, prerequisite: "2", subject_code: "7", category: "math" },
        { type: "FolderButton", title: "Física Mecánica", credits: 4, prerequisite: "1", subject_code: "8", category: "physic" },
        { type: "FolderButton", title: "Inglés I", credits: 3, subject_code: "9" },
        { type: "FolderButton", title: "Libre Elección", credits: 4 },

        // SEMESTRE 3
        { type: "SemesterIndex", semester_number: 3 },
        { type: "FolderButton", title: "Taller II", credits: 5, prerequisite: "5", subject_code: "10", category: "if" },
        { type: "FolderButton", title: "Cálculo en Varias Variables", credits: 4, prerequisite: "6", subject_code: "11", category: "math", link: "./Subjects/Semester_3/varias.html", afterElement: true },
        { type: "FolderButton", title: "Ecuaciones Diferenciales", credits: 4, prerequisite: "6", subject_code: "12", category: "math" },
        { type: "FolderButton", title: "Estadística I", credits: 4, prerequisite: "6", subject_code: "13", category: "math" },
        { type: "FolderButton", title: "Física II", credits: 4, prerequisite: "6,8", subject_code: "14", category: "physic" },
        { type: "EmptySpace" },

        // SEMESTRE 4
        { type: "SemesterIndex", semester_number: 4 },
        { type: "FolderButton", title: "Taller III", credits: 5, prerequisite: "10,14", subject_code: "16", category: "if" },
        { type: "FolderButton", title: "Matemáticas Especiales", credits: 4, prerequisite: "12", subject_code: "17", category: "math" },
        { type: "FolderButton", title: "Física III", credits: 4, prerequisite: "8,12", subject_code: "18", category: "physic" },
        { type: "FolderButton", title: "Termodinámica", credits: 4, prerequisite: "1", category: "physic" },
        { type: "FolderButton", title: "Inglés II", credits: 3, prerequisite: "9", subject_code: "19" },
        { type: "FolderButton", title: "Libre Elección", credits: 4 },

        // SEMESTRE 5
        { type: "SemesterIndex", semester_number: 5 },
        { type: "FolderButton", title: "Taller IV", credits: 5, prerequisite: "16", subject_code: "20", category: "if" },
        { type: "FolderButton", title: "Física Moderna", credits: 4, prerequisite: "18", subject_code: "21", category: "physic" },
        { type: "FolderButton", title: "Int. a la Bioquímica", credits: 3, prerequisite: "3", subject_code: "22", category: "science" },
        { type: "FolderButton", title: "Lab. de Int. Bioquímica", credits: 2, prerequisite: "22", category: "science" },
        { type: "FolderButton", title: "Libre Elección", credits: 4 },
        { type: "EmptySpace" },

        // SEMESTRE 6
        { type: "SemesterIndex", semester_number: 6 },
        { type: "FolderButton", title: "Taller V", credits: 5, prerequisite: "4,20", subject_code: "24", category: "if" },
        { type: "FolderButton", title: "Metrología", credits: 3, prerequisite: "13", category: "if", link: "./Subjects/Semester_6/metrologia.html", afterElement: true },
        { type: "FolderButton", title: "Biofísica", credits: 3, prerequisite: "14,22", category: "physic" },
        { type: "FolderButton", title: "Lab. de Física Moderna", credits: 1, prerequisite: "21", category: "physic" },
        { type: "FolderButton", title: "Libre Elección", credits: 3 },
        { type: "FolderButton", title: "Libre Elección", credits: 4 },

        // SEMESTRE 7
        { type: "SemesterIndex", semester_number: 7 },
        { type: "FolderButton", title: "Optativa Instrumentación", credits: 3, category: "if", link: "./Subjects/Instrumentations/intrumentation.html", afterElement: true },
        { type: "FolderButton", title: "Fund. en Ing. de Materiales", credits: 3, prerequisite: "18,22", category: "if" },
        { type: "FolderButton", title: "Mecánica Cuántica", credits: 3, prerequisite: "17,21", subject_code: "25", category: "physic", link: "./Subjects/Semester_7/cuantica.html", afterElement: true },
        { type: "FolderButton", title: "Optativa Ciencias Básicas", credits: 3, category: "science" },
        { type: "FolderButton", title: "Optativa Administrativa", credits: 3 },
        { type: "EmptySpace" },

        // SEMESTRE 8
        { type: "SemesterIndex", semester_number: 8 },
        { type: "FolderButton", title: "Optativa Instrumentación", credits: 3, category: "if", link: "./Subjects/Instrumentations/intrumentation.html", afterElement: true },
        { type: "FolderButton", title: "Óptica", credits: 3, prerequisite: "17,18", subject_code: "26", category: "physic" },
        { type: "FolderButton", title: "Física de Radiaciones", credits: 3, prerequisite: "17,21", subject_code: "27", category: "physic" },
        { type: "FolderButton", title: "Optativa Ciencias Básicas", credits: 3, category: "science" },
        { type: "FolderButton", title: "Libre Elección", credits: 3 },
        { type: "EmptySpace" },

        // SEMESTRE 9
        { type: "SemesterIndex", semester_number: 9 },
        { type: "FolderButton", title: "Optativa Instrumentación", credits: 3, category: "if", link: "./Subjects/Instrumentations/intrumentation.html", afterElement: true },
        { type: "FolderButton", title: "Estado Sólido", credits: 3, prerequisite: "25", subject_code: "28", category: "physic" },
        { type: "FolderButton", title: "Inglés III", credits: 3, prerequisite: "19", subject_code: "29" },
        { type: "FolderButton", title: "Libre Elección", credits: 4 },
        { type: "FolderButton", title: "Libre Elección", credits: 4 },
        { type: "EmptySpace" },

        // SEMESTRE 10
        { type: "SemesterIndex", semester_number: 10 },
        { type: "FolderButton", title: "Trabajo de Grado", credits: 6, prerequisite: "28", category: "if" },
        { type: "FolderButton", title: "Optativa Administrativa", credits: 3 },
        { type: "FolderButton", title: "Inglés IV", credits: 3, prerequisite: "29" },
        { type: "FolderButton", title: "Libre Elección", credits: 4 },
        { type: "EmptySpace" },
        { type: "EmptySpace" },
        { type: "EmptySpace" }
    ];

    subjects.forEach(item => {
        const ClassConstructor = classMap[item.type];
        if (ClassConstructor) {
            const instance = new ClassConstructor(item);
            grid.appendChild(instance.render());
        } else {
            console.warn(`Unknown class type: ${item.type}`);
        }
    });

}

createGrid();