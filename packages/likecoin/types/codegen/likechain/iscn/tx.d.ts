import { Long } from "../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface IscnRecord {
    /** Using camelCases to make the record JSON in tx more like general JSON documents */
    recordNotes: string;
    contentFingerprints: string[];
    /** Here, `IscnInput` is JSON encoded bytes */
    stakeholders: Uint8Array[];
    contentMetadata: Uint8Array;
}
export interface IscnRecordSDKType {
    recordNotes: string;
    contentFingerprints: string[];
    stakeholders: Uint8Array[];
    contentMetadata: Uint8Array;
}
export interface MsgCreateIscnRecord {
    from: string;
    record?: IscnRecord;
    nonce: Long;
}
export interface MsgCreateIscnRecordSDKType {
    from: string;
    record?: IscnRecordSDKType;
    nonce: Long;
}
export interface MsgCreateIscnRecordResponse {
    iscnId: string;
    recordIpld: string;
}
export interface MsgCreateIscnRecordResponseSDKType {
    iscn_id: string;
    record_ipld: string;
}
export interface MsgUpdateIscnRecord {
    from: string;
    iscnId: string;
    record?: IscnRecord;
}
export interface MsgUpdateIscnRecordSDKType {
    from: string;
    iscn_id: string;
    record?: IscnRecordSDKType;
}
export interface MsgUpdateIscnRecordResponse {
    iscnId: string;
    recordIpld: string;
}
export interface MsgUpdateIscnRecordResponseSDKType {
    iscn_id: string;
    record_ipld: string;
}
export interface MsgChangeIscnRecordOwnership {
    from: string;
    iscnId: string;
    newOwner: string;
}
export interface MsgChangeIscnRecordOwnershipSDKType {
    from: string;
    iscn_id: string;
    new_owner: string;
}
export interface MsgChangeIscnRecordOwnershipResponse {
}
export interface MsgChangeIscnRecordOwnershipResponseSDKType {
}
export declare const IscnRecord: {
    encode(message: IscnRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): IscnRecord;
    fromPartial(object: Partial<IscnRecord>): IscnRecord;
};
export declare const MsgCreateIscnRecord: {
    encode(message: MsgCreateIscnRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateIscnRecord;
    fromPartial(object: Partial<MsgCreateIscnRecord>): MsgCreateIscnRecord;
};
export declare const MsgCreateIscnRecordResponse: {
    encode(message: MsgCreateIscnRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateIscnRecordResponse;
    fromPartial(object: Partial<MsgCreateIscnRecordResponse>): MsgCreateIscnRecordResponse;
};
export declare const MsgUpdateIscnRecord: {
    encode(message: MsgUpdateIscnRecord, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateIscnRecord;
    fromPartial(object: Partial<MsgUpdateIscnRecord>): MsgUpdateIscnRecord;
};
export declare const MsgUpdateIscnRecordResponse: {
    encode(message: MsgUpdateIscnRecordResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateIscnRecordResponse;
    fromPartial(object: Partial<MsgUpdateIscnRecordResponse>): MsgUpdateIscnRecordResponse;
};
export declare const MsgChangeIscnRecordOwnership: {
    encode(message: MsgChangeIscnRecordOwnership, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgChangeIscnRecordOwnership;
    fromPartial(object: Partial<MsgChangeIscnRecordOwnership>): MsgChangeIscnRecordOwnership;
};
export declare const MsgChangeIscnRecordOwnershipResponse: {
    encode(_: MsgChangeIscnRecordOwnershipResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgChangeIscnRecordOwnershipResponse;
    fromPartial(_: Partial<MsgChangeIscnRecordOwnershipResponse>): MsgChangeIscnRecordOwnershipResponse;
};
