import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgCreateAtomicSwap, MsgCreateAtomicSwapResponse, MsgClaimAtomicSwap, MsgClaimAtomicSwapResponse, MsgRefundAtomicSwap, MsgRefundAtomicSwapResponse } from "./tx";
/** Msg defines the bep3 Msg service. */
export interface Msg {
  /** CreateAtomicSwap defines a method for creating an atomic swap */
  createAtomicSwap(request: MsgCreateAtomicSwap): Promise<MsgCreateAtomicSwapResponse>;
  /** ClaimAtomicSwap defines a method for claiming an atomic swap */
  claimAtomicSwap(request: MsgClaimAtomicSwap): Promise<MsgClaimAtomicSwapResponse>;
  /** RefundAtomicSwap defines a method for refunding an atomic swap */
  refundAtomicSwap(request: MsgRefundAtomicSwap): Promise<MsgRefundAtomicSwapResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createAtomicSwap = this.createAtomicSwap.bind(this);
    this.claimAtomicSwap = this.claimAtomicSwap.bind(this);
    this.refundAtomicSwap = this.refundAtomicSwap.bind(this);
  }
  createAtomicSwap(request: MsgCreateAtomicSwap): Promise<MsgCreateAtomicSwapResponse> {
    const data = MsgCreateAtomicSwap.encode(request).finish();
    const promise = this.rpc.request("kava.bep3.v1beta1.Msg", "CreateAtomicSwap", data);
    return promise.then(data => MsgCreateAtomicSwapResponse.decode(new BinaryReader(data)));
  }
  claimAtomicSwap(request: MsgClaimAtomicSwap): Promise<MsgClaimAtomicSwapResponse> {
    const data = MsgClaimAtomicSwap.encode(request).finish();
    const promise = this.rpc.request("kava.bep3.v1beta1.Msg", "ClaimAtomicSwap", data);
    return promise.then(data => MsgClaimAtomicSwapResponse.decode(new BinaryReader(data)));
  }
  refundAtomicSwap(request: MsgRefundAtomicSwap): Promise<MsgRefundAtomicSwapResponse> {
    const data = MsgRefundAtomicSwap.encode(request).finish();
    const promise = this.rpc.request("kava.bep3.v1beta1.Msg", "RefundAtomicSwap", data);
    return promise.then(data => MsgRefundAtomicSwapResponse.decode(new BinaryReader(data)));
  }
}