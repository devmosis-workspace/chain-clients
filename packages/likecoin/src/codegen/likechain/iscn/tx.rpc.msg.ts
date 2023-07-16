import { Rpc } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateIscnRecord, MsgCreateIscnRecordResponse, MsgUpdateIscnRecord, MsgUpdateIscnRecordResponse, MsgChangeIscnRecordOwnership, MsgChangeIscnRecordOwnershipResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
  /** CreateIscnRecord defines a method to create ISCN metadata */
  createIscnRecord(request: MsgCreateIscnRecord): Promise<MsgCreateIscnRecordResponse>;
  /** UpdateIscnRecord defines a method to update existing ISCN metadata */
  updateIscnRecord(request: MsgUpdateIscnRecord): Promise<MsgUpdateIscnRecordResponse>;
  /** ChangeIscnRecordOwnership defines a method to update the ownership of existing ISCN metadata */
  changeIscnRecordOwnership(request: MsgChangeIscnRecordOwnership): Promise<MsgChangeIscnRecordOwnershipResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createIscnRecord = this.createIscnRecord.bind(this);
    this.updateIscnRecord = this.updateIscnRecord.bind(this);
    this.changeIscnRecordOwnership = this.changeIscnRecordOwnership.bind(this);
  }
  createIscnRecord(request: MsgCreateIscnRecord): Promise<MsgCreateIscnRecordResponse> {
    const data = MsgCreateIscnRecord.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Msg", "CreateIscnRecord", data);
    return promise.then(data => MsgCreateIscnRecordResponse.decode(new _m0.Reader(data)));
  }
  updateIscnRecord(request: MsgUpdateIscnRecord): Promise<MsgUpdateIscnRecordResponse> {
    const data = MsgUpdateIscnRecord.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Msg", "UpdateIscnRecord", data);
    return promise.then(data => MsgUpdateIscnRecordResponse.decode(new _m0.Reader(data)));
  }
  changeIscnRecordOwnership(request: MsgChangeIscnRecordOwnership): Promise<MsgChangeIscnRecordOwnershipResponse> {
    const data = MsgChangeIscnRecordOwnership.encode(request).finish();
    const promise = this.rpc.request("likechain.iscn.Msg", "ChangeIscnRecordOwnership", data);
    return promise.then(data => MsgChangeIscnRecordOwnershipResponse.decode(new _m0.Reader(data)));
  }
}