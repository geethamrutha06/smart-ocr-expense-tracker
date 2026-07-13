import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

function History() {

  const [expense, setExpense] = useState(null);

  useEffect(() => {

    const data = JSON.parse(
      localStorage.getItem("expense")
    );

    if (data) {
      setExpense(data);
    }

  }, []);

  return (

    <div className="dashboard">

      <Navbar />

      <h1
        style={{
          textAlign: "center",
          marginTop: "30px",
        }}
      >
        Expense History
      </h1>

      <table
        border="1"
        style={{
          width: "90%",
          margin: "30px auto",
          borderCollapse: "collapse",
          background: "white",
        }}
      >
        <thead>

          <tr>

            <th>Merchant</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Category</th>

          </tr>

        </thead>

        <tbody>

          {expense ? (

            <tr>

              <td>{expense.merchant}</td>
              <td>₹{expense.total}</td>
              <td>{expense.date}</td>
              <td>{expense.category}</td>

            </tr>

          ) : (

            <tr>

              <td colSpan="4">
                No Expense Found
              </td>

            </tr>

          )}

        </tbody>

      </table>

    </div>

  );

}

export default History;