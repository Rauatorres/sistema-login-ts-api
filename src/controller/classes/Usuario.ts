import { createHash } from "crypto";
import UsuariosDAO from "../../model/UsuariosDAO";

export default class Usuario{
    nome: string;
    senha: string;
    UsuariosDAO: UsuariosDAO;

    constructor(nome: string, senha: string){
        this.nome = nome;
        this.senha = senha;
        this.UsuariosDAO = new UsuariosDAO();
    }

    async usuarioExiste(){
        const usuarioProcurado = await this.UsuariosDAO.find({nome: this.nome})
        if('nome' in usuarioProcurado){
            return true;
        }
        return false;
    }

    async login(){
        const usuarioExiste = await this.usuarioExiste();
        const senhaHash = createHash('md5').update(this.senha).digest('hex');

        if(!usuarioExiste){
            return { success: false, msg: 'Usuário não encontrado.' };
        }
        const usuarioLogin = await this.UsuariosDAO.find({nome: this.nome, senha: senhaHash});
        if(!('senha' in usuarioLogin) || senhaHash != usuarioLogin.senha){
            return { success: false, msg: 'Senha incorreta.' }
        }
        return { success: true, msg: 'Usuário logado com sucesso!' };
    }

    async cadastrar(){
        let resultado: { success: boolean; msg: string };
        const usuarioExiste = await this.usuarioExiste();

        const senhaHash = createHash('md5').update(this.senha).digest('hex');

        if(usuarioExiste){
            resultado = { success: false, msg: `O usuário de nome '${this.nome}' já existe!` };
        }else{
            await this.UsuariosDAO.insert({nome: this.nome, senha: senhaHash});
            resultado = { success: true, msg: 'Usuário cadastrado com sucesso!' };
        }
        return resultado;
    }
}