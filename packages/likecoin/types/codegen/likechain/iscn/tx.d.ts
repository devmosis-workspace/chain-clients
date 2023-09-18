import { BinaryWriter } from "../../binary";
export interface IscnRecord {
    /** Using camelCases to make the record JSON in tx more like general JSON documents */
    recordNotes: string;
    contentFingerprints: string[];
    /** Here, `IscnInput` is JSON encoded bytes */
    stakeholders: Uint8Array[];
    contentMetadata: Uint8Array;
}
export interface IscnRecordProtoMsg {
    typeUrl: "/likechain.iscn.IscnRecord";
    value: Uint8Array;
}
export interface IscnRecordAmino {
    /** Using camelCases to make the record JSON in tx more like general JSON documents */
    recordNotes: string;
    contentFingerprints: string[];
    /** Here, `IscnInput` is JSON encoded bytes */
    stakeholders: Uint8Array[];
    contentMetadata: Uint8Array;
}
export interface IscnRecordAminoMsg {
    type: "/likechain.iscn.IscnRecord";
    value: IscnRecordAmino;
}
export interface IscnRecordSDKType {
    recordNotes: string;
    contentFingerprints: string[];
    stakeholders: Uint8Array[];
    contentMetadata: Uint8Array;
}
export interface MsgCreateIscnRecord {
    from: string;
    record: IscnRecord;
    nonce: bigint;
}
export interface MsgCreateIscnRecordProtoMsg {
    typeUrl: "/likechain.iscn.MsgCreateIscnRecord";
    value: Uint8Array;
}
export interface MsgCreateIscnRecordAmino {
    from: string;
    record?: IscnRecordAmino;
    nonce: string;
}
export interface MsgCreateIscnRecordAminoMsg {
    type: "/likechain.iscn.MsgCreateIscnRecord";
    value: MsgCreateIscnRecordAmino;
}
export interface MsgCreateIscnRecordSDKType {
    from: string;
    record: IscnRecordSDKType;
    nonce: bigint;
}
export interface MsgCreateIscnRecordResponse {
    iscnId: string;
    recordIpld: string;
}
export interface MsgCreateIscnRecordResponseProtoMsg {
    typeUrl: "/likechain.iscn.MsgCreateIscnRecordResponse";
    value: Uint8Array;
}
export interface MsgCreateIscnRecordResponseAmino {
    iscn_id: string;
    record_ipld: string;
}
export interface MsgCreateIscnRecordResponseAminoMsg {
    type: "/likechain.iscn.MsgCreateIscnRecordResponse";
    value: MsgCreateIscnRecordResponseAmino;
}
export interface MsgCreateIscnRecordResponseSDKType {
    iscn_id: string;
    record_ipld: string;
}
export interface MsgUpdateIscnRecord {
    from: string;
    iscnId: string;
    record: IscnRecord;
}
export interface MsgUpdateIscnRecordProtoMsg {
    typeUrl: "/likechain.iscn.MsgUpdateIscnRecord";
    value: Uint8Array;
}
export interface MsgUpdateIscnRecordAmino {
    from: string;
    iscn_id: string;
    record?: IscnRecordAmino;
}
export interface MsgUpdateIscnRecordAminoMsg {
    type: "/likechain.iscn.MsgUpdateIscnRecord";
    value: MsgUpdateIscnRecordAmino;
}
export interface MsgUpdateIscnRecordSDKType {
    from: string;
    iscn_id: string;
    record: IscnRecordSDKType;
}
export interface MsgUpdateIscnRecordResponse {
    iscnId: string;
    recordIpld: string;
}
export interface MsgUpdateIscnRecordResponseProtoMsg {
    typeUrl: "/likechain.iscn.MsgUpdateIscnRecordResponse";
    value: Uint8Array;
}
export interface MsgUpdateIscnRecordResponseAmino {
    iscn_id: string;
    record_ipld: string;
}
export interface MsgUpdateIscnRecordResponseAminoMsg {
    type: "/likechain.iscn.MsgUpdateIscnRecordResponse";
    value: MsgUpdateIscnRecordResponseAmino;
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
export interface MsgChangeIscnRecordOwnershipProtoMsg {
    typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnership";
    value: Uint8Array;
}
export interface MsgChangeIscnRecordOwnershipAmino {
    from: string;
    iscn_id: string;
    new_owner: string;
}
export interface MsgChangeIscnRecordOwnershipAminoMsg {
    type: "/likechain.iscn.MsgChangeIscnRecordOwnership";
    value: MsgChangeIscnRecordOwnershipAmino;
}
export interface MsgChangeIscnRecordOwnershipSDKType {
    from: string;
    iscn_id: string;
    new_owner: string;
}
export interface MsgChangeIscnRecordOwnershipResponse {
}
export interface MsgChangeIscnRecordOwnershipResponseProtoMsg {
    typeUrl: "/likechain.iscn.MsgChangeIscnRecordOwnershipResponse";
    value: Uint8Array;
}
export interface MsgChangeIscnRecordOwnershipResponseAmino {
}
export interface MsgChangeIscnRecordOwnershipResponseAminoMsg {
    type: "/likechain.iscn.MsgChangeIscnRecordOwnershipResponse";
    value: MsgChangeIscnRecordOwnershipResponseAmino;
}
export interface MsgChangeIscnRecordOwnershipResponseSDKType {
}
export declare const IscnRecord: {
    typeUrl: string;
    encode(message: IscnRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): IscnRecord;
    fromPartial(object: Partial<IscnRecord>): IscnRecord;
    fromAmino(object: IscnRecordAmino): IscnRecord;
    toAmino(message: IscnRecord): IscnRecordAmino;
    fromAminoMsg(object: IscnRecordAminoMsg): IscnRecord;
    fromProtoMsg(message: IscnRecordProtoMsg): IscnRecord;
    toProto(message: IscnRecord): Uint8Array;
    toProtoMsg(message: IscnRecord): IscnRecordProtoMsg;
};
export declare const MsgCreateIscnRecord: {
    typeUrl: string;
    encode(message: MsgCreateIscnRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateIscnRecord;
    fromPartial(object: Partial<MsgCreateIscnRecord>): MsgCreateIscnRecord;
    fromAmino(object: MsgCreateIscnRecordAmino): MsgCreateIscnRecord;
    toAmino(message: MsgCreateIscnRecord): MsgCreateIscnRecordAmino;
    fromAminoMsg(object: MsgCreateIscnRecordAminoMsg): MsgCreateIscnRecord;
    fromProtoMsg(message: MsgCreateIscnRecordProtoMsg): MsgCreateIscnRecord;
    toProto(message: MsgCreateIscnRecord): Uint8Array;
    toProtoMsg(message: MsgCreateIscnRecord): MsgCreateIscnRecordProtoMsg;
};
export declare const MsgCreateIscnRecordResponse: {
    typeUrl: string;
    encode(message: MsgCreateIscnRecordResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateIscnRecordResponse;
    fromPartial(object: Partial<MsgCreateIscnRecordResponse>): MsgCreateIscnRecordResponse;
    fromAmino(object: MsgCreateIscnRecordResponseAmino): MsgCreateIscnRecordResponse;
    toAmino(message: MsgCreateIscnRecordResponse): MsgCreateIscnRecordResponseAmino;
    fromAminoMsg(object: MsgCreateIscnRecordResponseAminoMsg): MsgCreateIscnRecordResponse;
    fromProtoMsg(message: MsgCreateIscnRecordResponseProtoMsg): MsgCreateIscnRecordResponse;
    toProto(message: MsgCreateIscnRecordResponse): Uint8Array;
    toProtoMsg(message: MsgCreateIscnRecordResponse): MsgCreateIscnRecordResponseProtoMsg;
};
export declare const MsgUpdateIscnRecord: {
    typeUrl: string;
    encode(message: MsgUpdateIscnRecord, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateIscnRecord;
    fromPartial(object: Partial<MsgUpdateIscnRecord>): MsgUpdateIscnRecord;
    fromAmino(object: MsgUpdateIscnRecordAmino): MsgUpdateIscnRecord;
    toAmino(message: MsgUpdateIscnRecord): MsgUpdateIscnRecordAmino;
    fromAminoMsg(object: MsgUpdateIscnRecordAminoMsg): MsgUpdateIscnRecord;
    fromProtoMsg(message: MsgUpdateIscnRecordProtoMsg): MsgUpdateIscnRecord;
    toProto(message: MsgUpdateIscnRecord): Uint8Array;
    toProtoMsg(message: MsgUpdateIscnRecord): MsgUpdateIscnRecordProtoMsg;
};
export declare const MsgUpdateIscnRecordResponse: {
    typeUrl: string;
    encode(message: MsgUpdateIscnRecordResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateIscnRecordResponse;
    fromPartial(object: Partial<MsgUpdateIscnRecordResponse>): MsgUpdateIscnRecordResponse;
    fromAmino(object: MsgUpdateIscnRecordResponseAmino): MsgUpdateIscnRecordResponse;
    toAmino(message: MsgUpdateIscnRecordResponse): MsgUpdateIscnRecordResponseAmino;
    fromAminoMsg(object: MsgUpdateIscnRecordResponseAminoMsg): MsgUpdateIscnRecordResponse;
    fromProtoMsg(message: MsgUpdateIscnRecordResponseProtoMsg): MsgUpdateIscnRecordResponse;
    toProto(message: MsgUpdateIscnRecordResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateIscnRecordResponse): MsgUpdateIscnRecordResponseProtoMsg;
};
export declare const MsgChangeIscnRecordOwnership: {
    typeUrl: string;
    encode(message: MsgChangeIscnRecordOwnership, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgChangeIscnRecordOwnership;
    fromPartial(object: Partial<MsgChangeIscnRecordOwnership>): MsgChangeIscnRecordOwnership;
    fromAmino(object: MsgChangeIscnRecordOwnershipAmino): MsgChangeIscnRecordOwnership;
    toAmino(message: MsgChangeIscnRecordOwnership): MsgChangeIscnRecordOwnershipAmino;
    fromAminoMsg(object: MsgChangeIscnRecordOwnershipAminoMsg): MsgChangeIscnRecordOwnership;
    fromProtoMsg(message: MsgChangeIscnRecordOwnershipProtoMsg): MsgChangeIscnRecordOwnership;
    toProto(message: MsgChangeIscnRecordOwnership): Uint8Array;
    toProtoMsg(message: MsgChangeIscnRecordOwnership): MsgChangeIscnRecordOwnershipProtoMsg;
};
export declare const MsgChangeIscnRecordOwnershipResponse: {
    typeUrl: string;
    encode(_: MsgChangeIscnRecordOwnershipResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgChangeIscnRecordOwnershipResponse;
    fromPartial(_: Partial<MsgChangeIscnRecordOwnershipResponse>): MsgChangeIscnRecordOwnershipResponse;
    fromAmino(_: MsgChangeIscnRecordOwnershipResponseAmino): MsgChangeIscnRecordOwnershipResponse;
    toAmino(_: MsgChangeIscnRecordOwnershipResponse): MsgChangeIscnRecordOwnershipResponseAmino;
    fromAminoMsg(object: MsgChangeIscnRecordOwnershipResponseAminoMsg): MsgChangeIscnRecordOwnershipResponse;
    fromProtoMsg(message: MsgChangeIscnRecordOwnershipResponseProtoMsg): MsgChangeIscnRecordOwnershipResponse;
    toProto(message: MsgChangeIscnRecordOwnershipResponse): Uint8Array;
    toProtoMsg(message: MsgChangeIscnRecordOwnershipResponse): MsgChangeIscnRecordOwnershipResponseProtoMsg;
};
