import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSwap, MsgSwapResponse, MsgRedeem, MsgRedeemResponse, MsgGovSetParams, MsgGovSetParamsResponse, MsgGovUpdateRegistry, MsgGovUpdateRegistryResponse } from "./tx";
/** Msg defines the x/metoken module's Msg service. */
export interface Msg {
  /** Swap defines a method for swapping an accepted asset for Index's meToken. */
  swap(request: MsgSwap): Promise<MsgSwapResponse>;
  /** Redeem defines a method for redeeming Index's meToken for an accepted asset. */
  redeem(request: MsgRedeem): Promise<MsgRedeemResponse>;
  /** GovSetParams is used by governance proposals to update parameters. */
  govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse>;
  /**
   * GovUpdateRegistry adds new index to the index registry or
   * updates existing index with new settings.
   */
  govUpdateRegistry(request: MsgGovUpdateRegistry): Promise<MsgGovUpdateRegistryResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.swap = this.swap.bind(this);
    this.redeem = this.redeem.bind(this);
    this.govSetParams = this.govSetParams.bind(this);
    this.govUpdateRegistry = this.govUpdateRegistry.bind(this);
  }
  swap(request: MsgSwap): Promise<MsgSwapResponse> {
    const data = MsgSwap.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Msg", "Swap", data);
    return promise.then(data => MsgSwapResponse.decode(new BinaryReader(data)));
  }
  redeem(request: MsgRedeem): Promise<MsgRedeemResponse> {
    const data = MsgRedeem.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Msg", "Redeem", data);
    return promise.then(data => MsgRedeemResponse.decode(new BinaryReader(data)));
  }
  govSetParams(request: MsgGovSetParams): Promise<MsgGovSetParamsResponse> {
    const data = MsgGovSetParams.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Msg", "GovSetParams", data);
    return promise.then(data => MsgGovSetParamsResponse.decode(new BinaryReader(data)));
  }
  govUpdateRegistry(request: MsgGovUpdateRegistry): Promise<MsgGovUpdateRegistryResponse> {
    const data = MsgGovUpdateRegistry.encode(request).finish();
    const promise = this.rpc.request("umee.metoken.v1.Msg", "GovUpdateRegistry", data);
    return promise.then(data => MsgGovUpdateRegistryResponse.decode(new BinaryReader(data)));
  }
}