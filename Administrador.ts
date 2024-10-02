import {Usuario} from "./Usuario";

export class Administrador extends Usuario
{
    private _token : number;

    constructor (user:string, password: string, nome: string, sobrenome:string, endereço:string, dataNacimento:string, telefone:string)
    {
        super (user, password, nome, sobrenome, endereço, dataNacimento, telefone)
        this._token = Math.random()*100000;
    }

    public Administrar() : void
    {
        console.log("Administrando software");
    }
    public GetToken() : number
    {
        return this._token;
    }

    public VerificarCredenciaisAdministrador(user : string, passaword : string, token: number) : boolean
    {
        if(this._token == token)
        {
            return super.VerificarCredenciais(user, passaword);
        }
        else 
        {
            return false;
        }
    }
}
