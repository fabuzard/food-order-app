import { Formik, Form, Field, ErrorMessage } from "formik";
import { createOrder } from "../api/orders";

const OrderForm = ({ cart }) => {
  return (
    <Formik
      initialValues={{
        email: "",
        name: "",
        street: "",
        postalCode: "",
        city: "",
      }}
      onSubmit={async (values, { resetForm }) => {
        const orderData = {
          items: cart.map((item) => ({
            id: item.id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
          })),
          customer: {
            email: values.email,
            name: values.name,
            street: values.street,
            "postal-code": values.postalCode,
            city: values.city,
          },
        };

        try {
          const response = await createOrder(orderData);
          console.log("Order Response:", response);
          resetForm();
        } catch (error) {
          console.error("Order submission failed:", error);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md mx-auto mt-4">
          <h2 className="text-xl font-semibold mb-4 text-center">Order Details</h2>

          {/* Email */}
          <div className="mb-3">
            <label className="block font-medium mb-1">Email</label>
            <Field
              name="email"
              type="email"
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Name */}
          <div className="mb-3">
            <label className="block font-medium mb-1">Name</label>
            <Field
              name="name"
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Street */}
          <div className="mb-3">
            <label className="block font-medium mb-1">Street</label>
            <Field
              name="street"
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Postal Code */}
          <div className="mb-3">
            <label className="block font-medium mb-1">Postal Code</label>
            <Field
              name="postalCode"
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-300"
            />
          </div>

          {/* City */}
          <div className="mb-4">
            <label className="block font-medium mb-1">City</label>
            <Field
              name="city"
              className="border rounded-md p-2 w-full focus:ring focus:ring-blue-300"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isSubmitting}
            className={`w-full py-2 text-white rounded-md transition-all ${
              isSubmitting
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
          >
            {isSubmitting ? "Submitting..." : "Submit Order"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
