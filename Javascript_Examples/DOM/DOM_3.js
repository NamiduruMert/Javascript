let sonuc;

      sonuc = document.getElementById("listFirstHeader");

      sonuc = document.getElementById("listFirstHeader").children;
      sonuc = document.getElementById("listFirstHeader").children[0];
      sonuc = document.getElementById("listFirstHeader").children[2];
      sonuc = document.getElementById("listFirstHeader").firstElementChild;
      sonuc = document.getElementById("listFirstHeader").lastElementChild;
      sonuc = document.getElementById("listFirstHeader").parentElement;
      sonuc =
        document.getElementById("listFirstHeader").children[2]
          .nextElementSibling;
      sonuc =
        document.getElementById("listFirstHeader").children[2]
          .previousElementSibling;

      document.getElementById("nextExercise").style.textAlign = "center";

      const labels = document.querySelectorAll(".mycontainer label");

      for (let i = 0; i < labels.length; i++) {
        labels[i].innerText = `The ${i + 1}. checkbox`;
      }

      const inputS = document.querySelector(".mycontainer");
      sonuc = inputS.children[0].children[0].checked = "True";
      sonuc = inputS.children[0].nextElementSibling.children[0].checked =
        "True";
      sonuc =
        inputS.children[0].nextElementSibling.nextElementSibling.children[0].checked =
          "True";

      console.log(sonuc);
      //   console.log(sonuc);