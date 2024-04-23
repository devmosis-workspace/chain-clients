import { Rpc } from "../../helpers";
import { BinaryReader } from "../../binary";
import { MsgCreateSequencer, MsgCreateSequencerResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
  createSequencer(request: MsgCreateSequencer): Promise<MsgCreateSequencerResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.createSequencer = this.createSequencer.bind(this);
  }
  createSequencer(request: MsgCreateSequencer): Promise<MsgCreateSequencerResponse> {
    const data = MsgCreateSequencer.encode(request).finish();
    const promise = this.rpc.request("dymensionxyz.dymension.sequencer.Msg", "CreateSequencer", data);
    return promise.then(data => MsgCreateSequencerResponse.decode(new BinaryReader(data)));
  }
}