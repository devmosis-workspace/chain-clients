import { Rpc } from "../helpers";
import { MsgAddSuper, MsgAddSuperResponse, MsgDeleteSuper, MsgDeleteSuperResponse } from "./tx";
/** Msg defines the guardian Msg service */
export interface Msg {
    /** AddSuper defines a method for adding a super account */
    addSuper(request: MsgAddSuper): Promise<MsgAddSuperResponse>;
    /** DeleteSuper defines a method for deleting a super account */
    deleteSuper(request: MsgDeleteSuper): Promise<MsgDeleteSuperResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    addSuper(request: MsgAddSuper): Promise<MsgAddSuperResponse>;
    deleteSuper(request: MsgDeleteSuper): Promise<MsgDeleteSuperResponse>;
}
