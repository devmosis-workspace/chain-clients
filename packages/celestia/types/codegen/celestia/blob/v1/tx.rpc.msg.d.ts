import { Rpc } from "../../../helpers";
import { MsgPayForBlobs, MsgPayForBlobsResponse } from "./tx";
/** Msg defines the blob Msg service. */
export interface Msg {
    /** PayForBlobs allows the user to pay for the inclusion of one or more blobs */
    payForBlobs(request: MsgPayForBlobs): Promise<MsgPayForBlobsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    payForBlobs(request: MsgPayForBlobs): Promise<MsgPayForBlobsResponse>;
}
