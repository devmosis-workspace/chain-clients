import { Rpc } from "../../../../helpers";
import { MsgPromoteToPrivilegedContract, MsgPromoteToPrivilegedContractResponse, MsgDemoteFromPrivilegedContract, MsgDemoteFromPrivilegedContractResponse, MsgUpdateParams, MsgUpdateParamsResponse } from "./tx";
/** Msg defines the alloc Msg service. */
export interface Msg {
    /** PromoteToPrivilegedContract promotes a contract to privileged status. */
    promoteToPrivilegedContract(request: MsgPromoteToPrivilegedContract): Promise<MsgPromoteToPrivilegedContractResponse>;
    /** DemoteFromPrivilegedContract demotes a contract from privileged status. */
    demoteFromPrivilegedContract(request: MsgDemoteFromPrivilegedContract): Promise<MsgDemoteFromPrivilegedContractResponse>;
    /** UpdateParams updates the cron module's parameters. */
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    promoteToPrivilegedContract(request: MsgPromoteToPrivilegedContract): Promise<MsgPromoteToPrivilegedContractResponse>;
    demoteFromPrivilegedContract(request: MsgDemoteFromPrivilegedContract): Promise<MsgDemoteFromPrivilegedContractResponse>;
    updateParams(request: MsgUpdateParams): Promise<MsgUpdateParamsResponse>;
}
