class Student {
    constructor () {
        
    }

    renderRegisterStudentButton () {
        document.querySelector("#registration_button_id")
            .addEventListener('click', this.handleRegistrationSubmit.bind(this));
    }   

    handleRegistrationSubmit() {
        const student = this.getStudentInfo();
        this.addStudent(student);
    }

    addStudent(student) {
        if (blog.isUnAuth()) return;
        firebase.database().ref('Students/' + student.id).set(student);
        location.reload();
    }

    deleteStudent(student){
        if (blog.isUnAuth()) return;
        if (!confirm(`Are you sure you want to delete ${student.name}? This action cannot be undone.`)) return;
        firebase.database().ref('Students/' + student.id).remove();
        location.reload();
    }

    renderAssignment(assignment, student) {
        const item = document.querySelector(".assignment").cloneNode(true);
        item.querySelector(".assignmentDeleteButton").style.display = 'block';
        item.querySelector(".assignmentDeleteButton").addEventListener('click', this.deleteAssignment.bind(this, assignment.id, student.id));
        item.querySelector(".assignmentContent").innerHTML = `<b>${assignment.bookletName}</b> completed on <b>${assignment.dateCompleted}</b>`;
        return item;
    }

    renderEditInput (student, item) {
        item.querySelector('.goalEditInput').style.display = 'block';
        item.querySelector('.goalEditSubmitButton').style.display = 'block';
        item.querySelector('.goalEditButton').style.display = 'none';
        item.querySelector('.goalEditSubmitButton').addEventListener('click', this.editInput.bind(this, student, item));
    }

}

const student = new Student();