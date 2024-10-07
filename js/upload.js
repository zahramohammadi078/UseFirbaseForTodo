let uploadBtn = document.querySelector(".upload-btn");
let fileInput = document.querySelector("#file-input");

uploadBtn.addEventListener("click", () => {
  fileInput.click(); 
});

fileInput.addEventListener("change", function(event) {
  let file = event.target.files[0];
  if (file) {
    let reader = new FileReader();
    reader.onload = function(e) {
      try {
        let uploadedData = JSON.parse(e.target.result);
        if (uploadedData) {
          Object.keys(uploadedData).forEach((key) => {
            let todoObj = uploadedData[key];
            todoArray.push(todoObj);
            createTodoItem(todoObj);
            updateTodoInFirebase(todoObj);
          });
          Swal.fire({
            title: "Todos uploaded successfully!",
            icon: "success",
            confirmButtonText: "OK"
          });
        }
      } catch (error) {
        console.error("Error parsing JSON:", error);
        Swal.fire({
          title: "Error in file format",
          icon: "error",
          confirmButtonText: "OK"
        });
      }
    };
    reader.readAsText(file);
  }
});

