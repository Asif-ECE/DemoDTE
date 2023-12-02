document.addEventListener('DOMContentLoaded', function () {
    function updateStudentList() {
        fetch('/api/student-list')
            .then(response => response.json())
            .then(data => {
                // Update the student list on the page
                var studentListHtml = '<ol>';
                data.forEach(function (student) {
                    studentListHtml += `<li>ID: ${student.id}, Name: ${student.name}, Roll: ${student.roll}</li>`;
                });
                studentListHtml += "</ol>"
                document.getElementById('student-list').innerHTML = studentListHtml;
            })
            .catch(error => {
                console.error('Error fetching student list:', error);
            });
    }

    // Initial load
    updateStudentList();

    // Set up periodic updates (e.g., every 1 seconds)
    setInterval(updateStudentList, 1000);
});


/** 
 * Add below script to index.html to utilize ajax
 * <script src="https://code.jquery.com/jquery-3.6.4.min.js"></script>
$(document).ready(function () {
    function updateStudentList() {
        $.ajax({
            url: '/api/student-list/',  // API endpoint URL
            method: 'GET',
            success: function (data) {
                // Update the student list on the page
                var studentListHtml = '';
                data.forEach(function (student) {
                    studentListHtml += '<div>Name: ' + student.name + ', Roll: ' + student.roll + '</div>';
                });
                $('#student-list').html(studentListHtml);
            },
            error: function (error) {
                console.log('Error fetching student list:', error);
            }
        });
    }

    // Initial load
    updateStudentList();

    // Set up periodic updates (e.g., every 1 seconds)
    setInterval(updateStudentList, 1000);
});
*/