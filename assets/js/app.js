function teste() {
  let { PythonShell } = require("python-shell");
  //OBTENDO DADOS
  //var ano = document.getElementById("ano").value;
  //document.getElementById("ano").value = ""

  //var mes = document.getElementById("mes").value;
  //document.getElementById("mes").value = ""

  //var departamento = document.getElementById("departamento").value;
  //document.getElementById("departamento").value = ""

  //var file = document.getElementById("file").value;
  //document.getElementById("file").value = ""

  let options = {
    args: ["pipmofpodsfpfpo"],
  };

  alert("dodlsdksldk")

  PythonShell.run("./_engine/app.py", options, function (err, results) {
    if (err) {
      console.log(err);
      console.log("An error takes places");
    } else {
      console.log(results);
      console.log("Python script finished");
    }
  });
}
