import { IBCTransferStatus } from "./quota";
import { BinaryWriter } from "../../../binary";
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevert {
    /** failure event type */
    failureType: string;
    /** ibc packet data */
    packet: string;
}
export interface EventBadRevertProtoMsg {
    typeUrl: "/umee.uibc.v1.EventBadRevert";
    value: Uint8Array;
}
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevertAmino {
    /** failure event type */
    failure_type?: string;
    /** ibc packet data */
    packet?: string;
}
export interface EventBadRevertAminoMsg {
    type: "/umee.uibc.v1.EventBadRevert";
    value: EventBadRevertAmino;
}
/** EventBadRevert is emitted on failure of ibc-transfer quota. */
export interface EventBadRevertSDKType {
    failure_type: string;
    packet: string;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatus {
    status: IBCTransferStatus;
}
export interface EventIBCTransferStatusProtoMsg {
    typeUrl: "/umee.uibc.v1.EventIBCTransferStatus";
    value: Uint8Array;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatusAmino {
    status?: IBCTransferStatus;
}
export interface EventIBCTransferStatusAminoMsg {
    type: "/umee.uibc.v1.EventIBCTransferStatus";
    value: EventIBCTransferStatusAmino;
}
/** EventIBCTransferStatus is emitted on quota tracking pause status change. */
export interface EventIBCTransferStatusSDKType {
    status: IBCTransferStatus;
}
/** EventICS20Hooks is emitted on MsgGovToggleICS20Hooks. */
export interface EventICS20Hooks {
    enabled: boolean;
}
export interface EventICS20HooksProtoMsg {
    typeUrl: "/umee.uibc.v1.EventICS20Hooks";
    value: Uint8Array;
}
/** EventICS20Hooks is emitted on MsgGovToggleICS20Hooks. */
export interface EventICS20HooksAmino {
    enabled?: boolean;
}
export interface EventICS20HooksAminoMsg {
    type: "/umee.uibc.v1.EventICS20Hooks";
    value: EventICS20HooksAmino;
}
/** EventICS20Hooks is emitted on MsgGovToggleICS20Hooks. */
export interface EventICS20HooksSDKType {
    enabled: boolean;
}
export declare const EventBadRevert: {
    typeUrl: string;
    encode(message: EventBadRevert, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventBadRevert;
    fromPartial(object: Partial<EventBadRevert>): EventBadRevert;
    fromAmino(object: EventBadRevertAmino): EventBadRevert;
    toAmino(message: EventBadRevert): EventBadRevertAmino;
    fromAminoMsg(object: EventBadRevertAminoMsg): EventBadRevert;
    fromProtoMsg(message: EventBadRevertProtoMsg): EventBadRevert;
    toProto(message: EventBadRevert): Uint8Array;
    toProtoMsg(message: EventBadRevert): EventBadRevertProtoMsg;
};
export declare const EventIBCTransferStatus: {
    typeUrl: string;
    encode(message: EventIBCTransferStatus, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventIBCTransferStatus;
    fromPartial(object: Partial<EventIBCTransferStatus>): EventIBCTransferStatus;
    fromAmino(object: EventIBCTransferStatusAmino): EventIBCTransferStatus;
    toAmino(message: EventIBCTransferStatus): EventIBCTransferStatusAmino;
    fromAminoMsg(object: EventIBCTransferStatusAminoMsg): EventIBCTransferStatus;
    fromProtoMsg(message: EventIBCTransferStatusProtoMsg): EventIBCTransferStatus;
    toProto(message: EventIBCTransferStatus): Uint8Array;
    toProtoMsg(message: EventIBCTransferStatus): EventIBCTransferStatusProtoMsg;
};
export declare const EventICS20Hooks: {
    typeUrl: string;
    encode(message: EventICS20Hooks, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): EventICS20Hooks;
    fromPartial(object: Partial<EventICS20Hooks>): EventICS20Hooks;
    fromAmino(object: EventICS20HooksAmino): EventICS20Hooks;
    toAmino(message: EventICS20Hooks): EventICS20HooksAmino;
    fromAminoMsg(object: EventICS20HooksAminoMsg): EventICS20Hooks;
    fromProtoMsg(message: EventICS20HooksProtoMsg): EventICS20Hooks;
    toProto(message: EventICS20Hooks): Uint8Array;
    toProtoMsg(message: EventICS20Hooks): EventICS20HooksProtoMsg;
};
