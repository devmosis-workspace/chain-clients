import { GroupID, GroupIDAmino, GroupIDSDKType } from "./groupid";
import { BinaryWriter } from "../../../binary";
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
    id: GroupID;
}
export interface MsgCloseGroupProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseGroup";
    value: Uint8Array;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupAmino {
    id?: GroupIDAmino;
}
export interface MsgCloseGroupAminoMsg {
    type: "/akash.deployment.v1beta2.MsgCloseGroup";
    value: MsgCloseGroupAmino;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupSDKType {
    id: GroupIDSDKType;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {
}
export interface MsgCloseGroupResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseGroupResponse";
    value: Uint8Array;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseAmino {
}
export interface MsgCloseGroupResponseAminoMsg {
    type: "/akash.deployment.v1beta2.MsgCloseGroupResponse";
    value: MsgCloseGroupResponseAmino;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseSDKType {
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
    id: GroupID;
}
export interface MsgPauseGroupProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgPauseGroup";
    value: Uint8Array;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupAmino {
    id?: GroupIDAmino;
}
export interface MsgPauseGroupAminoMsg {
    type: "/akash.deployment.v1beta2.MsgPauseGroup";
    value: MsgPauseGroupAmino;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupSDKType {
    id: GroupIDSDKType;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {
}
export interface MsgPauseGroupResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgPauseGroupResponse";
    value: Uint8Array;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseAmino {
}
export interface MsgPauseGroupResponseAminoMsg {
    type: "/akash.deployment.v1beta2.MsgPauseGroupResponse";
    value: MsgPauseGroupResponseAmino;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseSDKType {
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
    id: GroupID;
}
export interface MsgStartGroupProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgStartGroup";
    value: Uint8Array;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupAmino {
    id?: GroupIDAmino;
}
export interface MsgStartGroupAminoMsg {
    type: "/akash.deployment.v1beta2.MsgStartGroup";
    value: MsgStartGroupAmino;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupSDKType {
    id: GroupIDSDKType;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {
}
export interface MsgStartGroupResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgStartGroupResponse";
    value: Uint8Array;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseAmino {
}
export interface MsgStartGroupResponseAminoMsg {
    type: "/akash.deployment.v1beta2.MsgStartGroupResponse";
    value: MsgStartGroupResponseAmino;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseSDKType {
}
export declare const MsgCloseGroup: {
    typeUrl: string;
    encode(message: MsgCloseGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCloseGroup;
    fromPartial(object: Partial<MsgCloseGroup>): MsgCloseGroup;
    fromAmino(object: MsgCloseGroupAmino): MsgCloseGroup;
    toAmino(message: MsgCloseGroup): MsgCloseGroupAmino;
    fromAminoMsg(object: MsgCloseGroupAminoMsg): MsgCloseGroup;
    fromProtoMsg(message: MsgCloseGroupProtoMsg): MsgCloseGroup;
    toProto(message: MsgCloseGroup): Uint8Array;
    toProtoMsg(message: MsgCloseGroup): MsgCloseGroupProtoMsg;
};
export declare const MsgCloseGroupResponse: {
    typeUrl: string;
    encode(_: MsgCloseGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseGroupResponse;
    fromPartial(_: Partial<MsgCloseGroupResponse>): MsgCloseGroupResponse;
    fromAmino(_: MsgCloseGroupResponseAmino): MsgCloseGroupResponse;
    toAmino(_: MsgCloseGroupResponse): MsgCloseGroupResponseAmino;
    fromAminoMsg(object: MsgCloseGroupResponseAminoMsg): MsgCloseGroupResponse;
    fromProtoMsg(message: MsgCloseGroupResponseProtoMsg): MsgCloseGroupResponse;
    toProto(message: MsgCloseGroupResponse): Uint8Array;
    toProtoMsg(message: MsgCloseGroupResponse): MsgCloseGroupResponseProtoMsg;
};
export declare const MsgPauseGroup: {
    typeUrl: string;
    encode(message: MsgPauseGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPauseGroup;
    fromPartial(object: Partial<MsgPauseGroup>): MsgPauseGroup;
    fromAmino(object: MsgPauseGroupAmino): MsgPauseGroup;
    toAmino(message: MsgPauseGroup): MsgPauseGroupAmino;
    fromAminoMsg(object: MsgPauseGroupAminoMsg): MsgPauseGroup;
    fromProtoMsg(message: MsgPauseGroupProtoMsg): MsgPauseGroup;
    toProto(message: MsgPauseGroup): Uint8Array;
    toProtoMsg(message: MsgPauseGroup): MsgPauseGroupProtoMsg;
};
export declare const MsgPauseGroupResponse: {
    typeUrl: string;
    encode(_: MsgPauseGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPauseGroupResponse;
    fromPartial(_: Partial<MsgPauseGroupResponse>): MsgPauseGroupResponse;
    fromAmino(_: MsgPauseGroupResponseAmino): MsgPauseGroupResponse;
    toAmino(_: MsgPauseGroupResponse): MsgPauseGroupResponseAmino;
    fromAminoMsg(object: MsgPauseGroupResponseAminoMsg): MsgPauseGroupResponse;
    fromProtoMsg(message: MsgPauseGroupResponseProtoMsg): MsgPauseGroupResponse;
    toProto(message: MsgPauseGroupResponse): Uint8Array;
    toProtoMsg(message: MsgPauseGroupResponse): MsgPauseGroupResponseProtoMsg;
};
export declare const MsgStartGroup: {
    typeUrl: string;
    encode(message: MsgStartGroup, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgStartGroup;
    fromPartial(object: Partial<MsgStartGroup>): MsgStartGroup;
    fromAmino(object: MsgStartGroupAmino): MsgStartGroup;
    toAmino(message: MsgStartGroup): MsgStartGroupAmino;
    fromAminoMsg(object: MsgStartGroupAminoMsg): MsgStartGroup;
    fromProtoMsg(message: MsgStartGroupProtoMsg): MsgStartGroup;
    toProto(message: MsgStartGroup): Uint8Array;
    toProtoMsg(message: MsgStartGroup): MsgStartGroupProtoMsg;
};
export declare const MsgStartGroupResponse: {
    typeUrl: string;
    encode(_: MsgStartGroupResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgStartGroupResponse;
    fromPartial(_: Partial<MsgStartGroupResponse>): MsgStartGroupResponse;
    fromAmino(_: MsgStartGroupResponseAmino): MsgStartGroupResponse;
    toAmino(_: MsgStartGroupResponse): MsgStartGroupResponseAmino;
    fromAminoMsg(object: MsgStartGroupResponseAminoMsg): MsgStartGroupResponse;
    fromProtoMsg(message: MsgStartGroupResponseProtoMsg): MsgStartGroupResponse;
    toProto(message: MsgStartGroupResponse): Uint8Array;
    toProtoMsg(message: MsgStartGroupResponse): MsgStartGroupResponseProtoMsg;
};
