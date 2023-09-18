import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgIncreaseMintable, MsgIncreaseMintableResponse, MsgDecreaseMintable, MsgDecreaseMintableResponse, MsgRevokeLiquidityProvider, MsgRevokeLiquidityProviderResponse, MsgSetInflation, MsgSetInflationResponse } from "./tx";
export interface Msg {
  increaseMintable(request: MsgIncreaseMintable): Promise<MsgIncreaseMintableResponse>;
  decreaseMintable(request: MsgDecreaseMintable): Promise<MsgDecreaseMintableResponse>;
  revokeLiquidityProvider(request: MsgRevokeLiquidityProvider): Promise<MsgRevokeLiquidityProviderResponse>;
  setInflation(request: MsgSetInflation): Promise<MsgSetInflationResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.increaseMintable = this.increaseMintable.bind(this);
    this.decreaseMintable = this.decreaseMintable.bind(this);
    this.revokeLiquidityProvider = this.revokeLiquidityProvider.bind(this);
    this.setInflation = this.setInflation.bind(this);
  }
  increaseMintable(request: MsgIncreaseMintable): Promise<MsgIncreaseMintableResponse> {
    const data = MsgIncreaseMintable.encode(request).finish();
    const promise = this.rpc.request("em.issuer.v1.Msg", "IncreaseMintable", data);
    return promise.then(data => MsgIncreaseMintableResponse.decode(new BinaryReader(data)));
  }
  decreaseMintable(request: MsgDecreaseMintable): Promise<MsgDecreaseMintableResponse> {
    const data = MsgDecreaseMintable.encode(request).finish();
    const promise = this.rpc.request("em.issuer.v1.Msg", "DecreaseMintable", data);
    return promise.then(data => MsgDecreaseMintableResponse.decode(new BinaryReader(data)));
  }
  revokeLiquidityProvider(request: MsgRevokeLiquidityProvider): Promise<MsgRevokeLiquidityProviderResponse> {
    const data = MsgRevokeLiquidityProvider.encode(request).finish();
    const promise = this.rpc.request("em.issuer.v1.Msg", "RevokeLiquidityProvider", data);
    return promise.then(data => MsgRevokeLiquidityProviderResponse.decode(new BinaryReader(data)));
  }
  setInflation(request: MsgSetInflation): Promise<MsgSetInflationResponse> {
    const data = MsgSetInflation.encode(request).finish();
    const promise = this.rpc.request("em.issuer.v1.Msg", "SetInflation", data);
    return promise.then(data => MsgSetInflationResponse.decode(new BinaryReader(data)));
  }
}