import {Usuario} from "./Usuario";
import {Administrador} from "./Administrador";
import {Operador} from "./Operador";
import {ICadastro} from "./ICadastro";
import {ILogin} from "./ILogin";

class Sistema implements ICadastro, ILogin
{
    public Logar(userObj: Usuario, user: string, password: string): void 
    {
        if (userObj.VerificarCredenciais(user,password))
        {
            console.log("Usuario Logado!");
        }
        else
        {
            console.log("Credenciais erradas");
        }
    }

    public LogarAdm(userObj : Administrador,use : string, password : string, token : number) : void
    {
        if ( userObj.VerificarCredenciaisAdministrador(use,password, token))
        {
            console.log("Administrador Logado!");
        }
        else
        {
            console.log("Credenciais erradas!");
        }
    }

    public CadastrarUsuario(user : string, password : string, nome : string, 
        sobrenome : string, dataNascimento : string, endereco : string, 
        telefone : string) : Usuario
    {
        return new Usuario(user, password,nome,sobrenome,dataNascimento,endereco,telefone);
    }

    public CadastrarAdministrador(user : string,password : string, nome : string, 
        sobrenome : string, dataNascimento: string, endereco : string, 
        telefone : string) : Administrador
    {
        return new Administrador(user,password, nome, sobrenome, dataNascimento, endereco, telefone);
    }

    public CadastrarOperador(user : string, password : string, nome : string,
        sobrenome : string, dataNascimento : string, endereco : string,
        telefone : string) : Operador
    {
        return new Operador(user,password,nome,sobrenome,dataNascimento,endereco,telefone);
    }

    public Atualizar(userObj : Usuario, endereco :string, telefone : string ) : void
    {
        userObj.AtualizarCadastro(endereco,telefone);
    }
}


let sistema = new Sistema();

let user1 = sistema.CadastrarUsuario("Deisiane", "12345","Rafael", "Nunes", "26/10/1986", "Vila Torres Galvao", "8199999999");
let adm1 = sistema.CadastrarAdministrador("Deisiane","12345","Agatha", "Aguiar", "25/02/2014", "Vila Torres Galvao", "8188888888");
let operador1 = sistema.CadastrarOperador("Neto", "12345", "Moacir", "Goncalves", "11/10/2005", "Vila Torres Galvao", "8144444444");

user1.MostrarDados();
adm1.MostrarDados();
operador1.MostrarDados();

sistema.Logar(user1, "Deisiane", "12345");
sistema.Logar(adm1, "Agatha", "12345");
sistema.Logar(adm1, "Agatha", "12345");
sistema.LogarAdm(adm1,"Agatha","12345", adm1.GetToken());

sistema.Atualizar(user1, "Recife","8122222222");

user1.MostrarDados();

operador1.Operar();
adm1.Administrar();