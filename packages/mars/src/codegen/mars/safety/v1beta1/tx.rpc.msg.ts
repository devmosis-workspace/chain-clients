import { Rpc } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
import { MsgSafetyFundSpend, MsgSafetyFundSpendResponse } from "./tx";
/** Msg defines the safety module's Msg service */
export interface Msg {
  /**
   * SafetyFundSpend is a governance operation for sending tokens from the
   * safety fund module account to the designated recipient.
   * 
   * NOTE: For now, this is just a copy of the distribution module's
   * `CommunityFundSpend` method. The recipient is expected to be a multisig
   * consisting of trusted community members who are respondible for using the
   * funds appropriately to cover any bad debt.
   * 
   * In the long term, the goal is that the module
   * is able to detect bad debts incurred in the outposts via interchain query,
   * and automatically dispense the appropriate amount of funds, without having
   * to go through the governance process.
   */
  safetyFundSpend(request: MsgSafetyFundSpend): Promise<MsgSafetyFundSpendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.safetyFundSpend = this.safetyFundSpend.bind(this);
  }
  safetyFundSpend(request: MsgSafetyFundSpend): Promise<MsgSafetyFundSpendResponse> {
    const data = MsgSafetyFundSpend.encode(request).finish();
    const promise = this.rpc.request("mars.safety.v1beta1.Msg", "SafetyFundSpend", data);
    return promise.then(data => MsgSafetyFundSpendResponse.decode(new _m0.Reader(data)));
  }
}