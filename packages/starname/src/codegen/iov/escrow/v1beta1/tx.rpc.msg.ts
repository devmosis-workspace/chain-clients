import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateEscrow, MsgCreateEscrowResponse, MsgUpdateEscrow, MsgUpdateEscrowResponse, MsgTransferToEscrow, MsgTransferToEscrowResponse, MsgRefundEscrow, MsgRefundEscrowResponse } from "./tx";
/** Msg defines the escrow Msg service */
export interface Msg {
  /** CreateEscrow defines a method for creating an escrow */
  createEscrow(request: MsgCreateEscrow): Promise<MsgCreateEscrowResponse>;
  /** UpdateEscrow defines a method for updating an escrow */
  updateEscrow(request: MsgUpdateEscrow): Promise<MsgUpdateEscrowResponse>;
  /**
   * TransferToEscrow defines a method for a buyer to transfer funds to the
   * escrow
   */
  transferToEscrow(request: MsgTransferToEscrow): Promise<MsgTransferToEscrowResponse>;
  /**
   * RefundEscrow defines a method for the seller to return the assets locked in
   * the escrow
   */
  refundEscrow(request: MsgRefundEscrow): Promise<MsgRefundEscrowResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createEscrow = this.createEscrow.bind(this);
    this.updateEscrow = this.updateEscrow.bind(this);
    this.transferToEscrow = this.transferToEscrow.bind(this);
    this.refundEscrow = this.refundEscrow.bind(this);
  }
  createEscrow(request: MsgCreateEscrow): Promise<MsgCreateEscrowResponse> {
    const data = MsgCreateEscrow.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.escrow.v1beta1.Msg", "CreateEscrow", data);
    return promise.then(data => MsgCreateEscrowResponse.decode(new _m0.Reader(data)));
  }
  updateEscrow(request: MsgUpdateEscrow): Promise<MsgUpdateEscrowResponse> {
    const data = MsgUpdateEscrow.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.escrow.v1beta1.Msg", "UpdateEscrow", data);
    return promise.then(data => MsgUpdateEscrowResponse.decode(new _m0.Reader(data)));
  }
  transferToEscrow(request: MsgTransferToEscrow): Promise<MsgTransferToEscrowResponse> {
    const data = MsgTransferToEscrow.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.escrow.v1beta1.Msg", "TransferToEscrow", data);
    return promise.then(data => MsgTransferToEscrowResponse.decode(new _m0.Reader(data)));
  }
  refundEscrow(request: MsgRefundEscrow): Promise<MsgRefundEscrowResponse> {
    const data = MsgRefundEscrow.encode(request).finish();
    const promise = this.rpc.request("starnamed.x.escrow.v1beta1.Msg", "RefundEscrow", data);
    return promise.then(data => MsgRefundEscrowResponse.decode(new _m0.Reader(data)));
  }
}