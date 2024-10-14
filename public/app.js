import { monsterData } from "./modules/mosterData.js";
import { capitalizeFirstLetter } from "./modules/string-utils.js";

const addMonsterForm = document.querySelector("#add-monster-form");
const addMonsterDescriptions = document.querySelector(
	"#add-monster-descriptions"
);
// const editMonsterForm = document.querySelector("#edit-monster-form");

for (const descriptor of monsterData.descriptions) {
	const p = document.createElement("p");
	p.innerHTML = `<p>
	<label
		>${capitalizeFirstLetter(descriptor)}: <br />
		<input
			type="number"
			name="monster-${descriptor}"
			id="add-monster-${descriptor}"
			/></label>
    </p>`;
	addMonsterDescriptions.append(p);
}

const addMonsterColor = document.querySelector("#add-monster-color");
for (const color of monsterData.colors) {
	const colorOption = document.createElement("option");
	colorOption.value = color;
	colorOption.innerText = capitalizeFirstLetter(color);
	addMonsterColor.append(colorOption);
}

const addMonsterType = document.querySelector("#add-monster-type");
for (const type of monsterData.types) {
	const typeOption = document.createElement("option");
	typeOption.value = type;
	typeOption.innerText = capitalizeFirstLetter(type);
	addMonsterType.append(typeOption);
}

addMonsterForm.addEventListener("submit", (e) => {
	e.preventDefault();
	const addMonsterFormData = new FormData(e.target);

	for (const pair of addMonsterFormData.entries()) {
		console.log(pair[0], pair[1]);
	}
	addMonsterForm.reset();
});
