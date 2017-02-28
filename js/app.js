// Hide the full list in preparation to show only 10 with the tabs
const studentItems = $(".student-item");
const studentList = $(".student-list");

// Find number of pages needed
const numberOfStudents = studentItems.length;
const studentsPerPage = 10;
let numberOfPages = Math.ceil(numberOfStudents/studentsPerPage);
console.log("There will be this many pages: " + numberOfPages);

// Add pagination links
let pageContainer = $('.page');
let paginationCode = '<div class="pagination"> <ul>';
for(var i = 1; i <= numberOfPages; i++) {
    paginationCode += '<li><a href="#">' + i + '</a>';
}
paginationCode += '</ul>';
pageContainer.append(paginationCode);

// Create groups of 10 students
let copyStudents = $(".student-item");
let studentGroups = [];
let startIndex = 0;
let endIndex = 10;

for(var i = 0; i < numberOfPages; i++) {
    const newGroup = copyStudents.slice(startIndex, endIndex);
    studentGroups.push(newGroup);
    startIndex += 10;
    endIndex += 10;
}

const paginationListItems = $('.pagination ul li a');

for(var i = 0; i < paginationListItems.length; i++) {
    paginationListItems[i].addEventListener("click", function(e) {

        // Remove active class from other tabs
        for(var i = 0; i < paginationListItems.length; i++) {
            $(paginationListItems[i]).removeClass("active");
        }

        // Make the tab number appear active
        $(this).addClass("active");

        // Since the array starts at 0, then we need to subtract one from the page number
        const index = this.text - 1;
        showStudentSet(index);
    });
}

// To show set based on the page
function showStudentSet(index) {
    studentList.empty();
    const setToShow = studentGroups[index];

    for(var i = 0; i < setToShow.length; i++) {
        studentList.append(setToShow[i]);
    }
}

// Show first ten students on load
showStudentSet(0);