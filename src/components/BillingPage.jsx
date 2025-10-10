import { useSelector } from "react-redux";
import { useState } from "react";
import Swal from "sweetalert2";

const BillingPage = () => {
  const carts = useSelector((state) => state.card);
  const subTotal = carts.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const [discount, setDiscount] = useState(0);
  const [inputValue, setInputValue] = useState("");
  const [isApplied, setIsApplied] = useState(false);


  const totalBillings = (subTotal) => {
    let total = subTotal > 0 ? subTotal + 4.99 : 0;
    if (discount > 0) {
      total = total - (total * discount) / 100;
    }
    return total.toFixed(2);
  };

  const handleDiscount = () => {
    const value = parseInt(inputValue);
    if ([10, 20, 30].includes(value)) {
      setDiscount(value);
      setIsApplied(true);
    } else {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Coupon is not available!",
        footer: '<a href="#">Enter the correct coupon.</a>',
      });
      setIsApplied(false);
      setDiscount(0);
    }
  };

  const handleRemoveDiscount = () => {
    setDiscount(0);
    setInputValue("");
    setIsApplied(false);
  };

  return (
    <div className="mt-6 rounded-lg border bg-white p-6 shadow-md md:mt-0">
      {/* Subtotal */}
      <div className="mb-2 flex justify-between">
        <p className="text-gray-700">Subtotal</p>
        <p className="text-gray-700">${subTotal}</p>
      </div>

      {/* Shipping */}
      <div className="flex justify-between">
        <p className="text-gray-700">Shipping</p>
        <p className="text-gray-700">{subTotal > 0 ? "$4.99" : 0}</p>
      </div>

      {/* Discount Info */}
      {isApplied && (
        <div className="flex justify-between text-green-600 mt-2">
          <p className="font-medium">Discount Applied</p>
          <p className="font-medium">-{discount}%</p>
        </div>
      )}

      <hr className="my-4" />

      {/* Total */}
      <div className="flex justify-between">
        <p className="text-lg font-bold">Total</p>
        <div>
          <p className="text-lg font-bold">
            ${subTotal > 0 ? totalBillings(subTotal) : 0} USD
          </p>
          <p className="text-sm text-red-700 leading-[-40px] text-center">
            (including VAT)
          </p>
        </div>
      </div>

      {/* Discount Input */}
      <div className="pt-[15px] flex space-x-2">
        <input
          type="text"
          placeholder="Discount 10/20/30 %"
          className="border py-2 px-4 rounded-md w-full"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          disabled={isApplied} // Apply হলে ইনপুট লক হবে
        />
        {!isApplied ? (
          <button
            className="py-2 px-5 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 cursor-pointer"
            onClick={handleDiscount}
          >
            Apply
          </button>
        ) : (
          <button
            className="py-2 px-5 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 cursor-pointer"
            onClick={handleRemoveDiscount}
          >
            Remove
          </button>
        )}
      </div>

      {/* Success Text */}
      {isApplied && (
        <p className="mt-3 text-sm text-green-700 text-center">
          ✅ Discount of {discount}% applied successfully!
        </p>
      )}

      {/* Checkout */}
      <button className="mt-6 w-full rounded-md bg-blue-500 py-1.5 font-medium text-blue-50 hover:bg-blue-600 cursor-pointer">
        Check out
      </button>
    </div>
  );
};

export default BillingPage;
