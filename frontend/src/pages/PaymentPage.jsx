import React, { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { jsPDF } from "jspdf"; // Import jsPDF

const sampleUserDetails = {
  name: "John Doe",
  email: "johndoe@example.com",
  mobile: "+1234567890",
};

const PaymentPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [paymentAmount, setPaymentAmount] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentSuccessful, setPaymentSuccessful] = useState(false);
  const [receiptDetails, setReceiptDetails] = useState(null);

  // Extract details from location.state or use fallback values
  const roomPrice = location.state?.roomPrice || 0;
  const roomName = location.state?.roomName || "N/A"; // Fallback to "N/A" if missing
  const checkInDate = location.state?.checkInDate || "N/A"; // Fallback to "N/A" if missing
  const checkOutDate = location.state?.checkOutDate || "N/A"; // Fallback to "N/A" if missing

  useEffect(() => {
    if (roomPrice) {
      setPaymentAmount(roomPrice);
    }
  }, [roomPrice]);

  const handlePayment = async () => {
    setIsProcessing(true);
    try {
      const paymentStatus = await new Promise((resolve) =>
        setTimeout(() => resolve(Math.random() > 0.2), 3000)
      );
      if (paymentStatus) {
        setPaymentSuccessful(true);
        const bookingId = Math.floor(Math.random() * 1000000);
        setReceiptDetails({
          bookingId,
          roomName,
          checkInDate,
          checkOutDate,
          amountPaid: paymentAmount,
          user: sampleUserDetails,
        });
        toast.success("Payment successful!");
      } else {
        throw new Error("Payment failed");
      }
    } catch (error) {
      toast.error("Payment failed. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const downloadReceipt = () => {
    const doc = new jsPDF();
    doc.setFontSize(20);
    doc.text("Booking Receipt", 14, 20);
    doc.setFontSize(12);
    doc.text(`Booking ID: ${receiptDetails.bookingId}`, 14, 30);
    doc.text(`Customer Name: ${receiptDetails.user.name}`, 14, 40);
    doc.text(`Email: ${receiptDetails.user.email}`, 14, 50);
    doc.text(`Mobile: ${receiptDetails.user.mobile}`, 14, 60);
    doc.text(`Room: ${receiptDetails.roomName}`, 14, 70);
    doc.text(`Check-In Date: ${receiptDetails.checkInDate}`, 14, 80);
    doc.text(`Check-Out Date: ${receiptDetails.checkOutDate}`, 14, 90);
    doc.text(`Amount Paid: Rs. ${receiptDetails.amountPaid}`, 14, 100);
    doc.save("Booking_Receipt.pdf");
  };

  if (paymentSuccessful && receiptDetails) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
        <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
          <h2 className="text-2xl font-bold mb-6 text-green-600 text-center">
            Payment Successful!
          </h2>
          <p className="text-lg text-gray-600 text-center mb-6">
            Your payment has been successfully processed. Below is your booking
            receipt:
          </p>
          <div className="bg-gray-100 p-6 rounded-lg shadow-md mb-6">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">
              Booking Receipt
            </h3>
            <div className="mb-3">
              <p className="text-sm text-gray-700">
                <strong>Booking ID:</strong> #{receiptDetails.bookingId}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Customer Name:</strong> {receiptDetails.user.name}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Email:</strong> {receiptDetails.user.email}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Mobile:</strong> {receiptDetails.user.mobile}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Room:</strong> {receiptDetails.roomName}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Check-In Date:</strong> {receiptDetails.checkInDate}
              </p>
              <p className="text-sm text-gray-700">
                <strong>Check-Out Date:</strong> {receiptDetails.checkOutDate}
              </p>
              <p className="text-lg font-semibold text-gray-900 mt-3">
                <strong>Amount Paid:</strong> Rs. {receiptDetails.amountPaid}
              </p>
            </div>
            <div className="flex justify-between mt-4">
              <button
                onClick={() => navigate("/home")}
                className="py-2 px-4 bg-indigo-600 text-white rounded-lg font-bold text-lg"
              >
                Back to Home
              </button>
              <button
                onClick={downloadReceipt}
                className="py-2 px-4 bg-green-600 text-white rounded-lg font-bold text-lg"
              >
                Download Receipt
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-lg">
        <h2 className="text-2xl font-bold mb-6 text-indigo-600 text-center">
          Complete Your Payment
        </h2>
        {paymentAmount ? (
          <div className="mb-6">
            <div className="flex justify-between text-gray-600 text-lg mb-3">
              <span>Room Price:</span>
              <span>Rs. {paymentAmount}</span>
            </div>
            <div className="flex justify-between text-xl font-semibold text-gray-800 border-t pt-3">
              <span>Total Amount:</span>
              <span>Rs. {paymentAmount}</span>
            </div>
          </div>
        ) : (
          <div className="text-gray-600 text-center">
            Loading payment details...
          </div>
        )}
        <button
          onClick={handlePayment}
          disabled={isProcessing}
          className={`w-full py-3 px-4 ${
            isProcessing ? "bg-gray-400" : "bg-indigo-600 hover:bg-indigo-700"
          } text-white rounded-lg font-bold text-lg`}
        >
          {isProcessing ? "Processing..." : "Pay Now"}
        </button>
      </div>
    </div>
  );
};

export default PaymentPage;
