import { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { uploadReceipt } from "../services/api";
import "./UploadBox.css";

function UploadBox() {

  const fileInput = useRef(null);
  const navigate = useNavigate();

  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const chooseFile = () => {
    fileInput.current.click();
  };

  const handleFile = (e) => {

    const file = e.target.files[0];

    if (!file) return;

    setSelectedFile(file);
    setFileName(file.name);
    setImage(URL.createObjectURL(file));
  };

  const extractText = () => {

    if (!selectedFile) return;

    setLoading(true);

    const reader = new FileReader();

    reader.readAsDataURL(selectedFile);

    reader.onloadend = async () => {

      try {

        const base64 = reader.result.split(",")[1];

        const result = await uploadReceipt(base64);

        localStorage.setItem(
          "ocrResult",
          JSON.stringify(result)
        );

        navigate("/ocr-result");

      } catch (err) {

        alert("OCR Failed");

        console.log(err);

      } finally {

        setLoading(false);

      }

    };

  };

  return (

    <div className="upload-box">

      <div className="upload-icon">📤</div>

      <h2>Upload Receipt</h2>

      <p>Upload your receipt image to extract expense details.</p>

      <button
        className="choose-btn"
        onClick={chooseFile}
      >
        Choose File
      </button>

      <input
        type="file"
        accept="image/*"
        hidden
        ref={fileInput}
        onChange={handleFile}
      />

      {fileName && (

        <p className="filename">
          📄 {fileName}
        </p>

      )}

      {image && (

        <div className="preview">

          <img
            src={image}
            alt="Receipt"
            className="preview-image"
          />

          <button
            className="extract-btn"
            onClick={extractText}
          >

            {loading ? "Processing..." : "Extract Text"}

          </button>

        </div>

      )}

    </div>

  );

}

export default UploadBox;