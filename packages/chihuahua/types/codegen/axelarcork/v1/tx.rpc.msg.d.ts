import { Rpc } from "../../helpers";
import { MsgScheduleAxelarCorkRequest, MsgScheduleAxelarCorkResponse, MsgRelayAxelarCorkRequest, MsgRelayAxelarCorkResponse, MsgBumpAxelarCorkGasRequest, MsgBumpAxelarCorkGasResponse, MsgCancelAxelarCorkRequest, MsgCancelAxelarCorkResponse } from "./tx";
/** MsgService defines the msgs that the cork module handles */
export interface Msg {
    scheduleCork(request: MsgScheduleAxelarCorkRequest): Promise<MsgScheduleAxelarCorkResponse>;
    relayCork(request: MsgRelayAxelarCorkRequest): Promise<MsgRelayAxelarCorkResponse>;
    bumpCorkGas(request: MsgBumpAxelarCorkGasRequest): Promise<MsgBumpAxelarCorkGasResponse>;
    cancelScheduledCork(request: MsgCancelAxelarCorkRequest): Promise<MsgCancelAxelarCorkResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    scheduleCork(request: MsgScheduleAxelarCorkRequest): Promise<MsgScheduleAxelarCorkResponse>;
    relayCork(request: MsgRelayAxelarCorkRequest): Promise<MsgRelayAxelarCorkResponse>;
    bumpCorkGas(request: MsgBumpAxelarCorkGasRequest): Promise<MsgBumpAxelarCorkGasResponse>;
    cancelScheduledCork(request: MsgCancelAxelarCorkRequest): Promise<MsgCancelAxelarCorkResponse>;
}
