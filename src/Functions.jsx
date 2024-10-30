import { useState } from "react";
const functions = () => {
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
};
