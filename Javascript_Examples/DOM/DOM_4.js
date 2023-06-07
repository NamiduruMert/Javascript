let baseDiv = document.querySelector(".mycontainer");

const missions = [
  {
    id: "1",
    name: "Mission 1",
    description: "Rate = 5",
  },
  {
    id: "2",
    name: "Mission 2",
    description: "Rate = 4",
  },
  {
    id: "3",
    name: "Mission 3",
    description: "Rate = 3",
  },
  {
    id: "4",
    name: "Mission 4",
    description: "Rate = 2",
  },
  {
    id: "5",
    name: "Mission 5",
    description: "Rate = 1",
  },
];

for (let numbers of missions) {
  let newCheckBox = `<div class="form-check">
        <input
          class="form-check-input"
          type="checkbox"
          value=""
          id="flexCheckDefault-${numbers.id}"
        />
        <label class="form-check-label" for="flexCheckDefault-${numbers.id}">
         ${numbers.name}   --- ${numbers.description}
        </label>
      </div>`;

  baseDiv.insertAdjacentHTML("beforeend", newCheckBox);
}
