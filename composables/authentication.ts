import { AnyAaaaRecord } from 'dns'

class Authentication {
  public isAuthenticated: boolean = false
  public user: null | {
    email: string
    password: string
    id: string
  } = null

  public login(email: string, password: string): void {
    this.isAuthenticated = true
    this.user = {
      email,
      password,
      id: crypto.randomUUID(),
    }
  }
}

export function useAuthentication() {
  return reactive(new Authentication())
}
