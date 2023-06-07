let sonuc;

      sonuc = document.getElementsByClassName("liElement")[0];
      sonuc = document.getElementsByClassName("liElement")[2];
      sonuc = document.getElementsByClassName("liElement")[4];

      sonuc = document.getElementsByTagName("li")[3];
      sonuc = document.getElementsByTagName("li")[1];
      sonuc = document.getElementsByTagName("li")[0];
      sonuc = document.getElementsByTagName("li");

      for (let i = 0; i < sonuc.length; i++) {
        sonuc[i].style.color = "red";
        sonuc[i].style.fontSize = "30px";
        sonuc[i].style.backgroundColor = "blue";
        sonuc[i].style.display = "block";
        sonuc[i].innerText = `The New Item - ${i + 1}`;
      }

      firstUl = document.getElementById("listSecondHeader");
      sonuc = firstUl.getElementsByTagName("li");

      sonuc = document.querySelectorAll("#listFirstHeader li");

      console.log(sonuc);

      console.log(
        "New Example -------222--------222--------222---------222---------222----------"
      );

      const newItem = document.querySelectorAll("ul li");
      console.log(newItem);
      for (let value of newItem) {
        value.color = "blue";
      }

      newItem.forEach((value, index) => {
        value.innerText = `The new item NAME === Item -${index}`;
      });