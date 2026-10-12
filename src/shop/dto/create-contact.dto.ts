import { IsEmail, IsNotEmpty, IsString } from "class-validator";


export class CreateContactDto {
  @IsString()
  @IsNotEmpty({ message: 'Name is required' })
  name: string;

  @IsEmail({}, { message: 'Invalid email format' })
  email: string;
}