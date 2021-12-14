// var v1 = document.getElementsByClassName("melek");
// v1.addEventListener("click", function () {
//   alert("aslma");
// });

// function affiche() {
//   return document.write(
//     `<h1>le titre de ce document ${window.document.title}</h1>`,
//   );
// }

document.getElementsByTagName("button").addEventListener(
  "click",
  setTimeout(() => {
    document.write(`aslema`);
  }, 3000),
);
