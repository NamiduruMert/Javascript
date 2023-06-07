document.getElementById("flexCheckDefault").parentElement.remove();

      // const result = document
      //   .getElementById("ulElement")
      //   .children[2].removeAttribute("class");

      const result2 = document
        .getElementById("ulElement")
        .children[2].classList.add("bg-danger");
      const result3 = document
        .getElementById("ulElement")
        .children[2].classList.contains("bg-danger");

      if (result3) {
        console.log("This element have bg-danger class");
      } else {
        console.log("This element have not bg-danger class");
      }

      // if (result3 === true) {
      //   console.log("This item have bg-danger class");
      // } else {
      //   console.log("This item have not bg-danger class");
      // }
      console.log(result3);