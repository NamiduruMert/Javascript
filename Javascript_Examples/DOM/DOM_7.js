const missionList = [
        {
          name: "First Mission",
          value: 1,
        },
        {
          name: "Second Mission",
          value: 2,
        },
        {
          name: "Third Mission",
          value: 3,
        },
        {
          name: "Forth Mission",
          value: 4,
        },
        {
          name: "Fifth Mission",
          value: 5,
        },
      ];

      const baseFragment = document.querySelector(".list-group");

      function MertResult() {
        baseFragment.innerHTML = "";
        for (let i = 0; i < missionList.length; i++) {
          let listGroup = `
        <li class="list-group-item disabled">${missionList[i].value}---${missionList[i].name}</li>`;

          baseFragment.insertAdjacentHTML("beforeend", listGroup);
        }
      }

      MertResult();

      const firstButton = document.querySelector("#firstButton");

      firstButton.addEventListener("click", inputValue);
      firstButton.addEventListener("keypress", function () {
        if (event.key == "Space") {
          firstButton.click();
        }
      });

      function inputValue(event) {
        const inputValue = document.querySelector("#valueInput").value;

        if (inputValue == "") {
          alert("Pleas fill in the blank");
        } else {
          missionList.push({ name: inputValue, value: missionList.length + 1 });
          document.querySelector("#valueInput").value = "";

          MertResult();
          event.preventDefault();
        }
      }