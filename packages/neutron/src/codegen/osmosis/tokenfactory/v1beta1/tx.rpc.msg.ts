import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateDenom, MsgCreateDenomResponse, MsgMint, MsgMintResponse, MsgBurn, MsgBurnResponse, MsgChangeAdmin, MsgChangeAdminResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse>;
  mint(request: MsgMint): Promise<MsgMintResponse>;
  burn(request: MsgBurn): Promise<MsgBurnResponse>;
  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createDenom = this.createDenom.bind(this);
    this.mint = this.mint.bind(this);
    this.burn = this.burn.bind(this);
    this.changeAdmin = this.changeAdmin.bind(this);
  }
  createDenom(request: MsgCreateDenom): Promise<MsgCreateDenomResponse> {
    const data = MsgCreateDenom.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "CreateDenom", data);
    return promise.then(data => MsgCreateDenomResponse.decode(new BinaryReader(data)));
  }
  mint(request: MsgMint): Promise<MsgMintResponse> {
    const data = MsgMint.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Mint", data);
    return promise.then(data => MsgMintResponse.decode(new BinaryReader(data)));
  }
  burn(request: MsgBurn): Promise<MsgBurnResponse> {
    const data = MsgBurn.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "Burn", data);
    return promise.then(data => MsgBurnResponse.decode(new BinaryReader(data)));
  }
  changeAdmin(request: MsgChangeAdmin): Promise<MsgChangeAdminResponse> {
    const data = MsgChangeAdmin.encode(request).finish();
    const promise = this.rpc.request("osmosis.tokenfactory.v1beta1.Msg", "ChangeAdmin", data);
    return promise.then(data => MsgChangeAdminResponse.decode(new BinaryReader(data)));
  }
}