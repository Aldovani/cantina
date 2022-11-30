import { IRequest } from "./Request";

export interface ICliente {
  Id: number;
  Nome: string;
  Login: string;
  Senha: string;
  CPF: string | null;
  Pedidos: IRequest[];
}
