import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function OCRResult() {
  const navigate = useNavigate();
  const [expense, setExpense] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("ocrResult"));

    if (data) {
      setExpense(data);
    }
  }, []);

  const saveExpense = () => {
    localStorage.setItem(
      "expense",
      JSON.stringify(expense)
    );

    navigate("/history");
  };

  if (!expense) {
    return (
      <h2 style={{ textAlign: "center", marginTop: "100px" }}>
        No OCR Data Found
      </h2>
    );
  }

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div
        style={{
          background: "white",
          padding: "30px",
          borderRadius: "15px",
          width: "450px",
          boxShadow: "0 0 15px rgba(0,0,0,0.2)",
        }}
      >
        <h2 style={{ textAlign: "center" }}>
          OCR Result
        </h2>

        <p>
          <b>Merchant:</b> {expense.merchant}
        </p>

        <p>
          <b>Total:</b> ₹{expense.total}
        </p>

        <p>
          <b>Date:</b> {expense.date}
        </p>

        <p>
          <b>Category:</b> {expense.category}
        </p>

        <p>
          <b>Address:</b> {expense.address}
        </p>

        <h3>Items</h3>

        <ul>
          {expense.items?.map((item, index) => (
            <li key={index}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>

        <button
          onClick={saveExpense}
          style={{
            width: "100%",
            padding: "12px",
            marginTop: "20px",
            cursor: "pointer",
          }}
        >
          Save Expense
        </button>
      </div>
    </div>
  );
}

export default OCRResult;