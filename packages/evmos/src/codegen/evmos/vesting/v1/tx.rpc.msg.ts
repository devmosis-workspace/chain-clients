import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgCreateClawbackVestingAccount, MsgCreateClawbackVestingAccountResponse, MsgClawback, MsgClawbackResponse, MsgUpdateVestingFunder, MsgUpdateVestingFunderResponse, MsgConvertVestingAccount, MsgConvertVestingAccountResponse } from "./tx";
/** Msg defines the vesting Msg service. */
export interface Msg {
  /**
   * CreateClawbackVestingAccount creats a vesting account that is subject to
   * clawback and the configuration of vesting and lockup schedules.
   */
  createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse>;
  /** Clawback removes the unvested tokens from a ClawbackVestingAccount. */
  clawback(request: MsgClawback): Promise<MsgClawbackResponse>;
  /**
   * UpdateVestingFunder updates the funder address of an existing
   * ClawbackVestingAccount.
   */
  updateVestingFunder(request: MsgUpdateVestingFunder): Promise<MsgUpdateVestingFunderResponse>;
  /** ConvertVestingAccount converts a ClawbackVestingAccount to a Eth account */
  convertVestingAccount(request: MsgConvertVestingAccount): Promise<MsgConvertVestingAccountResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createClawbackVestingAccount = this.createClawbackVestingAccount.bind(this);
    this.clawback = this.clawback.bind(this);
    this.updateVestingFunder = this.updateVestingFunder.bind(this);
    this.convertVestingAccount = this.convertVestingAccount.bind(this);
  }
  createClawbackVestingAccount(request: MsgCreateClawbackVestingAccount): Promise<MsgCreateClawbackVestingAccountResponse> {
    const data = MsgCreateClawbackVestingAccount.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Msg", "CreateClawbackVestingAccount", data);
    return promise.then(data => MsgCreateClawbackVestingAccountResponse.decode(new _m0.Reader(data)));
  }
  clawback(request: MsgClawback): Promise<MsgClawbackResponse> {
    const data = MsgClawback.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Msg", "Clawback", data);
    return promise.then(data => MsgClawbackResponse.decode(new _m0.Reader(data)));
  }
  updateVestingFunder(request: MsgUpdateVestingFunder): Promise<MsgUpdateVestingFunderResponse> {
    const data = MsgUpdateVestingFunder.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Msg", "UpdateVestingFunder", data);
    return promise.then(data => MsgUpdateVestingFunderResponse.decode(new _m0.Reader(data)));
  }
  convertVestingAccount(request: MsgConvertVestingAccount): Promise<MsgConvertVestingAccountResponse> {
    const data = MsgConvertVestingAccount.encode(request).finish();
    const promise = this.rpc.request("evmos.vesting.v1.Msg", "ConvertVestingAccount", data);
    return promise.then(data => MsgConvertVestingAccountResponse.decode(new _m0.Reader(data)));
  }
}