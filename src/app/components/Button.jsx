import { Input } from "./Input";

const Button = () => {
  return (
    <div>
      <Input label="First name" placeholder="Your first name" />
      <Input label="Last name" placeholder="Your last name" />
      <Input label="User name" placeholder="Your user name" />
      {/* <h1>First name *</h1>
      <input type="text" placeholder="Your first name" />
      <h1>Last name *</h1>
      <input type="text" placeholder="Your last name" />
      <h1>Username *</h1>
      <input type="text" placeholder="Your username" /> */}
    </div>
  );
};
export default Button;
