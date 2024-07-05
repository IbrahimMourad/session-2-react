import Button from '../Button';
import Input from '../Input';

export default function Form() {
  return (
    <form>
      <Input placeholder={'First Name'} />
      <Input placeholder={'Last Name'} />
      <Input type={'email'} placeholder={'Email'} />
      <Button text='Submit' />
      <Button text='Reset' type='reset' />
    </form>
  );
}
