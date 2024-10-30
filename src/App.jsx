// App.jsx
import { useState } from "react";
import "./App.css";

function App() {
  const [description, setDescription] = useState("");
  const [paymentType, setPaymentType] = useState("Check");
  const [cashLBP, setCashLBP] = useState("");
  const [cashUSD, setCashUSD] = useState("");
  const [transferLBP, setTransferLBP] = useState("");
  const [transferUSD, setTransferUSD] = useState("");
  const [checks, setChecks] = useState([{ LBP: "", USD: "" }]);
  const [file, setFile] = useState(null);

  const handleCheckChange = (index, type, value) => {
    const newChecks = [...checks];
    newChecks[index][type] = value;
    setChecks(newChecks);
  };

  const addCheckField = () => {
    setChecks([...checks, { LBP: "", USD: "" }]);
  };

  const removeCheckField = (index) => {
    setChecks(checks.filter((_, i) => i !== index));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleCancel = () => {
    setDescription("");
    setPaymentType("Check");
    setCashLBP("");
    setCashUSD("");
    setTransferLBP("");
    setTransferUSD("");
    setChecks([{ LBP: "", USD: "" }]);
    setFile(null);
  };

  return (
    <div className="pmt-request-screen">
      <h1>Pmt Request Screen</h1>
      <form>
        <div className="main-content">
          <div className="left-side">
            <div className="form-group">
              <label htmlFor="description">Description</label>
              <div>
                <textarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </div>

            <div className="attach-document-section">
              <label htmlFor="attach-document-input">Attach Doc</label>
              <div>
                <button
                  type="button"
                  onClick={() =>
                    document.getElementById("attach-document-input").click()
                  }
                >
                  Attach Document
                </button>
              </div>
              <input
                type="file"
                id="attach-document-input"
                onChange={handleFileChange}
                style={{ display: "none" }}
              />
            </div>
          </div>

          <div className="right-side">
            <div className="payment-type-section">
              <div>
                <label htmlFor="payment-type">Payment Type</label>
                <select
                  id="payment-type"
                  value={paymentType}
                  onChange={(e) => setPaymentType(e.target.value)}
                >
                  <option value="Check">Check</option>
                  <option value="Cash">Cash</option>
                  <option value="Transfer">Transfer</option>
                </select>
              </div>
            </div>

            {paymentType === "Cash" && (
              <div className="cash-section">
                <label>Cash</label>
                <div className="input-group">
                  <label htmlFor="cash-lbp">LBP</label>
                  <input
                    type="number"
                    id="cash-lbp"
                    value={cashLBP}
                    onChange={(e) => setCashLBP(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="cash-usd">USD</label>
                  <input
                    type="number"
                    id="cash-usd"
                    value={cashUSD}
                    onChange={(e) => setCashUSD(e.target.value)}
                  />
                </div>
              </div>
            )}

            {paymentType === "Transfer" && (
              <div className="transfer-section">
                <label>Transfer</label>
                <div className="input-group">
                  <label htmlFor="transfer-lbp">LBP</label>
                  <input
                    type="number"
                    id="transfer-lbp"
                    value={transferLBP}
                    onChange={(e) => setTransferLBP(e.target.value)}
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="transfer-usd">USD</label>
                  <input
                    type="number"
                    id="transfer-usd"
                    value={transferUSD}
                    onChange={(e) => setTransferUSD(e.target.value)}
                  />
                </div>
              </div>
            )}

            {paymentType === "Check" && (
              <div className="check-section">
                {checks.map((check, index) => (
                  <div
                    key={index}
                    className="check-field"
                  >
                    <input
                      type="checkbox"
                      id={`check-${index}`}
                    />
                    <label htmlFor={`check-${index}`}>Check</label>
                    <div className="input-group">
                      <label htmlFor={`check-lbp-${index}`}>LBP</label>
                      <input
                        type="number"
                        id={`check-lbp-${index}`}
                        value={check.LBP}
                        onChange={(e) =>
                          handleCheckChange(index, "LBP", e.target.value)
                        }
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor={`check-usd-${index}`}>USD</label>
                      <input
                        type="number"
                        id={`check-usd-${index}`}
                        value={check.USD}
                        onChange={(e) =>
                          handleCheckChange(index, "USD", e.target.value)
                        }
                      />
                    </div>
                    <button
                      type="button"
                      onClick={() => removeCheckField(index)}
                    >
                      -
                    </button>
                    <button
                      type="button"
                      onClick={addCheckField}
                    >
                      +
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="buttons">
          <button type="submit">Submit</button>
          <button
            type="button"
            onClick={handleCancel}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default App;
