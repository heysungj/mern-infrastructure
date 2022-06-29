import { checkToken } from "../../utilities/users-service";

export default function OrderHistoryPage() {
  async function handleCheckToken() {
    const expDate = await checkToken();
    console.log(expDate);
  }
  return (
    <div>
      <h1>Order history page</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </div>
  );
}
