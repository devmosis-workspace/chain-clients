import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgSubmitClaim, MsgSubmitClaimResponse } from "./messages";
import { MsgGovRemoveProtocolData, MsgGovRemoveProtocolDataResponse } from "./proposals";
/** Msg defines the participationrewards Msg service. */
export interface Msg {
  submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse>;
  /**
   * SignalIntent defines a method for signalling voting intent for one or more
   * validators.
   */
  govRemoveProtocolData(request: MsgGovRemoveProtocolData): Promise<MsgGovRemoveProtocolDataResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.submitClaim = this.submitClaim.bind(this);
    this.govRemoveProtocolData = this.govRemoveProtocolData.bind(this);
  }
  submitClaim(request: MsgSubmitClaim): Promise<MsgSubmitClaimResponse> {
    const data = MsgSubmitClaim.encode(request).finish();
    const promise = this.rpc.request("quicksilver.participationrewards.v1.Msg", "SubmitClaim", data);
    return promise.then(data => MsgSubmitClaimResponse.decode(new BinaryReader(data)));
  }
  govRemoveProtocolData(request: MsgGovRemoveProtocolData): Promise<MsgGovRemoveProtocolDataResponse> {
    const data = MsgGovRemoveProtocolData.encode(request).finish();
    const promise = this.rpc.request("quicksilver.participationrewards.v1.Msg", "GovRemoveProtocolData", data);
    return promise.then(data => MsgGovRemoveProtocolDataResponse.decode(new BinaryReader(data)));
  }
}