import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSwap, MsgSwapResponse, MsgSwapSend, MsgSwapSendResponse } from "./tx";
/** Msg defines the market Msg service. */
export interface Msg {
  /**
   * Swap defines a method for swapping coin from one denom to another
   * denom.
   */
  swap(request: MsgSwap): Promise<MsgSwapResponse>;
  /**
   * SwapSend defines a method for swapping and sending coin from a account to other
   * account.
   */
  swapSend(request: MsgSwapSend): Promise<MsgSwapSendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.swap = this.swap.bind(this);
    this.swapSend = this.swapSend.bind(this);
  }
  swap(request: MsgSwap): Promise<MsgSwapResponse> {
    const data = MsgSwap.encode(request).finish();
    const promise = this.rpc.request("terra.market.v1beta1.Msg", "Swap", data);
    return promise.then(data => MsgSwapResponse.decode(new BinaryReader(data)));
  }
  swapSend(request: MsgSwapSend): Promise<MsgSwapSendResponse> {
    const data = MsgSwapSend.encode(request).finish();
    const promise = this.rpc.request("terra.market.v1beta1.Msg", "SwapSend", data);
    return promise.then(data => MsgSwapSendResponse.decode(new BinaryReader(data)));
  }
}