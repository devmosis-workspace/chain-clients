import { Rpc } from "../../../helpers";
import { MsgInvestmint, MsgInvestmintResponse } from "./tx";
export interface Msg {
    investmint(request: MsgInvestmint): Promise<MsgInvestmintResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    investmint(request: MsgInvestmint): Promise<MsgInvestmintResponse>;
}
