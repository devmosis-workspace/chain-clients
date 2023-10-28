import { Rpc } from "../../../helpers";
import { BinaryReader } from "../../../binary";
import { MsgPayForBlobs, MsgPayForBlobsResponse } from "./tx";
/** Msg defines the blob Msg service. */
export interface Msg {
  /** PayForBlobs allows the user to pay for the inclusion of one or more blobs */
  payForBlobs(request: MsgPayForBlobs): Promise<MsgPayForBlobsResponse>;
}
export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
    this.payForBlobs = this.payForBlobs.bind(this);
  }
  payForBlobs(request: MsgPayForBlobs): Promise<MsgPayForBlobsResponse> {
    const data = MsgPayForBlobs.encode(request).finish();
    const promise = this.rpc.request("celestia.blob.v1.Msg", "PayForBlobs", data);
    return promise.then(data => MsgPayForBlobsResponse.decode(new BinaryReader(data)));
  }
}