const expensesList = document.getElementById("expenses-list");

function addExpense() {
  const expenseName = document.getElementById("expense-name").value;
  const expenseAmount = document.getElementById("expense-amount").value;

  if (expenseName && expenseAmount) {
    const expenseItem = document.createElement("div");
    expenseItem.classList.add("expense-item");
    expenseItem.innerHTML = `
            <span>${expenseName}</span>
            <span>$${expenseAmount}</span>
        `;
    expensesList.appendChild(expenseItem);

    document.getElementById("expense-name").value = "";
    document.getElementById("expense-amount").value = "";
  } else {
    alert("Please enter both expense name and amount.");
  }
}
