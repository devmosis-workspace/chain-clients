import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgClaim, MsgClaimResponse, MsgIncentivePoolSpend, MsgIncentivePoolSpendResponse } from "./messages";
/** Msg defines the airdrop Msg service. */
export interface Msg {
  claim(request: MsgClaim): Promise<MsgClaimResponse>;
  incentivePoolSpend(request: MsgIncentivePoolSpend): Promise<MsgIncentivePoolSpendResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.claim = this.claim.bind(this);
    this.incentivePoolSpend = this.incentivePoolSpend.bind(this);
  }
  claim(request: MsgClaim): Promise<MsgClaimResponse> {
    const data = MsgClaim.encode(request).finish();
    const promise = this.rpc.request("quicksilver.airdrop.v1.Msg", "Claim", data);
    return promise.then(data => MsgClaimResponse.decode(new BinaryReader(data)));
  }
  incentivePoolSpend(request: MsgIncentivePoolSpend): Promise<MsgIncentivePoolSpendResponse> {
    const data = MsgIncentivePoolSpend.encode(request).finish();
    const promise = this.rpc.request("quicksilver.airdrop.v1.Msg", "IncentivePoolSpend", data);
    return promise.then(data => MsgIncentivePoolSpendResponse.decode(new BinaryReader(data)));
  }
}