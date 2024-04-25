import { Rpc } from "../../../helpers";
import { MsgRegisterClockContract, MsgRegisterClockContractResponse, MsgUnregisterClockContract, MsgUnregisterClockContractResponse, MsgUnjailClockContract, MsgUnjailClockContractResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the Msg service. */
export interface Msg {
    /**
     * RegisterClockContract defines the endpoint for
     * registering a new clock contract.
     */
    registerClockContract(request: MsgRegisterClockContract): Promise<MsgRegisterClockContractResponse>;
    /**
     * UnregisterClockContract defines the endpoint for
     * unregistering a clock contract.
     */
    unregisterClockContract(request: MsgUnregisterClockContract): Promise<MsgUnregisterClockContractResponse>;
    /**
     * UnjailClockContract defines the endpoint for
     * unjailing a clock contract.
     */
    unjailClockContract(request: MsgUnjailClockContract): Promise<MsgUnjailClockContractResponse>;
    /**
     * UpdateParams defines a governance operation for updating the x/clock module
     * parameters. The authority is hard-coded to the x/gov module account.
     *
     * Since: cosmos-sdk 0.47
     */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    registerClockContract(request: MsgRegisterClockContract): Promise<MsgRegisterClockContractResponse>;
    unregisterClockContract(request: MsgUnregisterClockContract): Promise<MsgUnregisterClockContractResponse>;
    unjailClockContract(request: MsgUnjailClockContract): Promise<MsgUnjailClockContractResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
