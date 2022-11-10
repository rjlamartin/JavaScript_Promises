/**
 *
 * @returns A promise that is designed to resolve with a list of hobbits, or potentially fail with an failure object. The failure object includes a boolean success property and a string message property.
 */
function getList() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let potentialFail = Math.round(Math.random() * 100) < 10;
      if (potentialFail) {
        reject({ success: false, message: "Failed to get list of hobbits." });
      } else {
        resolve(["Bilbo", "Frodo", "Sam", "Merry", "Pippin"]);
      }
    }, 10);
  });
}

//Select elements

// TODO: If the promise resolves with the list of hobbits
// Render the list of hobbits as list items within the unordered list with id="list" (check the index.html file)

let errorParagraph = document.querySelector("#error");
let ulHobbits = document.querySelector("#list");

getList().then((hobbitsArray) => {
  console.log(hobbitsArray);
  for (const hobbit of hobbitsArray){
    const hobbitLI = document.createElement("li");
    hobbitLI.textContent = hobbit;
    ulHobbits.appendChild(hobbitLI);
  }
}).catch((failureObject) => {
  console.log(failureObject);
  errorParagraph.textContent = `success: ${failureObject.success} message: ${failureObject.message}`;
})



// TODO: If the promise rejects with the failure object
// Display the failure message in the paragraph element with id="error" (check index.html file)

// TODO: Handle the resolved or rejected states of the promise
