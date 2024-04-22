import { GroupID, GroupIDAmino, GroupIDSDKType } from "./groupid";
import { GroupSpec, GroupSpecAmino, GroupSpecSDKType } from "./groupspec";
import { BinaryWriter } from "../../../binary";
/** State is an enum which refers to state of group */
export declare enum Group_State {
    /** invalid - Prefix should start with 0 in enum. So declaring dummy state */
    invalid = 0,
    /** open - GroupOpen denotes state for group open */
    open = 1,
    /** paused - GroupOrdered denotes state for group ordered */
    paused = 2,
    /** insufficient_funds - GroupInsufficientFunds denotes state for group insufficient_funds */
    insufficient_funds = 3,
    /** closed - GroupClosed denotes state for group closed */
    closed = 4,
    UNRECOGNIZED = -1
}
export declare const Group_StateSDKType: typeof Group_State;
export declare const Group_StateAmino: typeof Group_State;
export declare function group_StateFromJSON(object: any): Group_State;
export declare function group_StateToJSON(object: Group_State): string;
/** Group stores group id, state and specifications of group */
export interface Group {
    groupId: GroupID;
    state: Group_State;
    groupSpec: GroupSpec;
    createdAt: bigint;
}
export interface GroupProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.Group";
    value: Uint8Array;
}
/** Group stores group id, state and specifications of group */
export interface GroupAmino {
    group_id?: GroupIDAmino;
    state?: Group_State;
    group_spec?: GroupSpecAmino;
    created_at?: string;
}
export interface GroupAminoMsg {
    type: "/akash.deployment.v1beta2.Group";
    value: GroupAmino;
}
/** Group stores group id, state and specifications of group */
export interface GroupSDKType {
    group_id: GroupIDSDKType;
    state: Group_State;
    group_spec: GroupSpecSDKType;
    created_at: bigint;
}
export declare const Group: {
    typeUrl: string;
    encode(message: Group, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Group;
    fromPartial(object: Partial<Group>): Group;
    fromAmino(object: GroupAmino): Group;
    toAmino(message: Group): GroupAmino;
    fromAminoMsg(object: GroupAminoMsg): Group;
    fromProtoMsg(message: GroupProtoMsg): Group;
    toProto(message: Group): Uint8Array;
    toProtoMsg(message: Group): GroupProtoMsg;
};
