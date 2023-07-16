import { Rpc } from "../../helpers";
import { MsgCreateIscnRecord, MsgCreateIscnRecordResponse, MsgUpdateIscnRecord, MsgUpdateIscnRecordResponse, MsgChangeIscnRecordOwnership, MsgChangeIscnRecordOwnershipResponse } from "./tx";
/** Msg defines the bank Msg service. */
export interface Msg {
    /** CreateIscnRecord defines a method to create ISCN metadata */
    createIscnRecord(request: MsgCreateIscnRecord): Promise<MsgCreateIscnRecordResponse>;
    /** UpdateIscnRecord defines a method to update existing ISCN metadata */
    updateIscnRecord(request: MsgUpdateIscnRecord): Promise<MsgUpdateIscnRecordResponse>;
    /** ChangeIscnRecordOwnership defines a method to update the ownership of existing ISCN metadata */
    changeIscnRecordOwnership(request: MsgChangeIscnRecordOwnership): Promise<MsgChangeIscnRecordOwnershipResponse>;
}
export declare class MsgClientImpl implements Msg {
    private readonly rpc;
    constructor(rpc: Rpc);
    createIscnRecord(request: MsgCreateIscnRecord): Promise<MsgCreateIscnRecordResponse>;
    updateIscnRecord(request: MsgUpdateIscnRecord): Promise<MsgUpdateIscnRecordResponse>;
    changeIscnRecordOwnership(request: MsgChangeIscnRecordOwnership): Promise<MsgChangeIscnRecordOwnershipResponse>;
}
