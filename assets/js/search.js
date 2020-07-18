
function SearchCheatSheets() {
    var input, input2, sheet, elements, data, i, txtValue;
    input = document.getElementById("searchQue");
    input2 = input.value.toLowerCase();
    sheet = document.getElementById("myCheatSheets");
    elements = sheet.getElementsByTagName("li");

    for (i = 0; i < elements.length; i++) {
        data = elements[i].getElementsByTagName("p")[0];
        if (data) {
            txtValue = data.textContent || data.innerText || data.innerHTML;
            if (txtValue.toLowerCase().indexOf(input2) > -1) {
                elements[i].style.display = "";
            } else {
                elements[i].style.display = "none";
            }
        }
    }
}