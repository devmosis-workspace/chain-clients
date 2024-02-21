import { Rpc } from "../../helpers";
import { MsgCreateGauge, MsgCreateGaugeResponse, MsgAddToGauge, MsgAddToGaugeResponse, MsgCreateGroup, MsgCreateGroupResponse } from "./tx";
export interface Msg {
    createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
    addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
    createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createGauge(request: MsgCreateGauge): Promise<MsgCreateGaugeResponse>;
    addToGauge(request: MsgAddToGauge): Promise<MsgAddToGaugeResponse>;
    createGroup(request: MsgCreateGroup): Promise<MsgCreateGroupResponse>;
}
