import {Usuario} from "./Usuario";
import {Administrador} from "./Administrador";

export interface ILogin
{
    Logar(userObj : Usuario, user : string, password: string) :
    void;
    LogarAdm(userObj : Administrador, user : string, passaword:string, token : number) : void;
}