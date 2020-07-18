
function SearchBlogs() {
    var input, input2, table, row, data, i, txtValue;
    input = document.getElementById("searchQue");
    input2 = input.value.toLowerCase();
    table = document.getElementById("myBlogs");
    row = table.getElementsByTagName("tr");

    for (i = 0; i < row.length; i++) {
        data = row[i].getElementsByTagName("td")[0];
        if (data) {
            txtValue = data.textContent || data.innerText || data.innerHTML;
            if (txtValue.toLowerCase().indexOf(input2) > -1) {
                row[i].style.display = "";
            } else {
                row[i].style.display = "none";
            }
        }
    }
}