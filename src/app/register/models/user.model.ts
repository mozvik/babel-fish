export class User{
  
  name: string | undefined;
  email: string | undefined;
  phone: string | undefined;
  gdpr: boolean | undefined;

  constructor(name: string , email: string , phone: string, gdpr: boolean){
    this.name = name
    this.email = email
    this.phone = phone
    this.gdpr = gdpr
  }
  
}