import { Formik, Form, Field } from "formik";
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
          const response = await createOrder(orderData); // Use createOrder
          console.log("Order Response:", response);
          resetForm();
        } catch (error) {
          console.error("Order submission failed:", error);
        }
      }}
    >
      {({ isSubmitting }) => (
        <Form className="bg-white p-6 rounded shadow-lg w-1/3">
          <h2 className="text-xl font-bold mb-4">Order Details</h2>

          <label className="block">Email</label>
          <Field name="email" type="email" className="border p-2 w-full" />

          <label className="block mt-2">Name</label>
          <Field name="name" className="border p-2 w-full" />

          <label className="block mt-2">Street</label>
          <Field name="street" className="border p-2 w-full" />

          <label className="block mt-2">Postal Code</label>
          <Field name="postalCode" className="border p-2 w-full" />

          <label className="block mt-2">City</label>
          <Field name="city" className="border p-2 w-full" />

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-500 text-white p-2 rounded mt-4 w-full"
          >
            {isSubmitting ? "Submitting..." : "Submit Order"}
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default OrderForm;
