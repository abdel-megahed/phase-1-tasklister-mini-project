document.addEventListener("DOMContentLoaded", () => {
  // your code here

const form = document.getElementById("#create-task-form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  console.log(e.target.new_task_description.value);
});
})