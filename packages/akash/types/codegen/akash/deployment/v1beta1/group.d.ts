import { PlacementRequirements, PlacementRequirementsAmino, PlacementRequirementsSDKType } from "../../base/v1beta1/attribute";
import { ResourceUnits, ResourceUnitsAmino, ResourceUnitsSDKType } from "../../base/v1beta1/resource";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
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
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
    id: GroupID;
}
export interface MsgCloseGroupProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.MsgCloseGroup";
    value: Uint8Array;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupAmino {
    id?: GroupIDAmino;
}
export interface MsgCloseGroupAminoMsg {
    type: "/akash.deployment.v1beta1.MsgCloseGroup";
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
    typeUrl: "/akash.deployment.v1beta1.MsgCloseGroupResponse";
    value: Uint8Array;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseAmino {
}
export interface MsgCloseGroupResponseAminoMsg {
    type: "/akash.deployment.v1beta1.MsgCloseGroupResponse";
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
    typeUrl: "/akash.deployment.v1beta1.MsgPauseGroup";
    value: Uint8Array;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupAmino {
    id?: GroupIDAmino;
}
export interface MsgPauseGroupAminoMsg {
    type: "/akash.deployment.v1beta1.MsgPauseGroup";
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
    typeUrl: "/akash.deployment.v1beta1.MsgPauseGroupResponse";
    value: Uint8Array;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseAmino {
}
export interface MsgPauseGroupResponseAminoMsg {
    type: "/akash.deployment.v1beta1.MsgPauseGroupResponse";
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
    typeUrl: "/akash.deployment.v1beta1.MsgStartGroup";
    value: Uint8Array;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupAmino {
    id?: GroupIDAmino;
}
export interface MsgStartGroupAminoMsg {
    type: "/akash.deployment.v1beta1.MsgStartGroup";
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
    typeUrl: "/akash.deployment.v1beta1.MsgStartGroupResponse";
    value: Uint8Array;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseAmino {
}
export interface MsgStartGroupResponseAminoMsg {
    type: "/akash.deployment.v1beta1.MsgStartGroupResponse";
    value: MsgStartGroupResponseAmino;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseSDKType {
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
    owner: string;
    dseq: bigint;
    gseq: number;
}
export interface GroupIDProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.GroupID";
    value: Uint8Array;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDAmino {
    owner: string;
    dseq: string;
    gseq: number;
}
export interface GroupIDAminoMsg {
    type: "/akash.deployment.v1beta1.GroupID";
    value: GroupIDAmino;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDSDKType {
    owner: string;
    dseq: bigint;
    gseq: number;
}
/** GroupSpec stores group specifications */
export interface GroupSpec {
    name: string;
    requirements: PlacementRequirements;
    resources: Resource[];
}
export interface GroupSpecProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.GroupSpec";
    value: Uint8Array;
}
/** GroupSpec stores group specifications */
export interface GroupSpecAmino {
    name: string;
    requirements?: PlacementRequirementsAmino;
    resources: ResourceAmino[];
}
export interface GroupSpecAminoMsg {
    type: "/akash.deployment.v1beta1.GroupSpec";
    value: GroupSpecAmino;
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
    name: string;
    requirements: PlacementRequirementsSDKType;
    resources: ResourceSDKType[];
}
/** Group stores group id, state and specifications of group */
export interface Group {
    groupId: GroupID;
    state: Group_State;
    groupSpec: GroupSpec;
    createdAt: bigint;
}
export interface GroupProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.Group";
    value: Uint8Array;
}
/** Group stores group id, state and specifications of group */
export interface GroupAmino {
    group_id?: GroupIDAmino;
    state: Group_State;
    group_spec?: GroupSpecAmino;
    created_at: string;
}
export interface GroupAminoMsg {
    type: "/akash.deployment.v1beta1.Group";
    value: GroupAmino;
}
/** Group stores group id, state and specifications of group */
export interface GroupSDKType {
    group_id: GroupIDSDKType;
    state: Group_State;
    group_spec: GroupSpecSDKType;
    created_at: bigint;
}
/** Resource stores unit, total count and price of resource */
export interface Resource {
    resources: ResourceUnits;
    count: number;
    price: Coin;
}
export interface ResourceProtoMsg {
    typeUrl: "/akash.deployment.v1beta1.Resource";
    value: Uint8Array;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceAmino {
    resources?: ResourceUnitsAmino;
    count: number;
    price?: CoinAmino;
}
export interface ResourceAminoMsg {
    type: "/akash.deployment.v1beta1.Resource";
    value: ResourceAmino;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
    resources: ResourceUnitsSDKType;
    count: number;
    price: CoinSDKType;
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
export declare const GroupID: {
    typeUrl: string;
    encode(message: GroupID, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GroupID;
    fromPartial(object: Partial<GroupID>): GroupID;
    fromAmino(object: GroupIDAmino): GroupID;
    toAmino(message: GroupID): GroupIDAmino;
    fromAminoMsg(object: GroupIDAminoMsg): GroupID;
    fromProtoMsg(message: GroupIDProtoMsg): GroupID;
    toProto(message: GroupID): Uint8Array;
    toProtoMsg(message: GroupID): GroupIDProtoMsg;
};
export declare const GroupSpec: {
    typeUrl: string;
    encode(message: GroupSpec, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): GroupSpec;
    fromPartial(object: Partial<GroupSpec>): GroupSpec;
    fromAmino(object: GroupSpecAmino): GroupSpec;
    toAmino(message: GroupSpec): GroupSpecAmino;
    fromAminoMsg(object: GroupSpecAminoMsg): GroupSpec;
    fromProtoMsg(message: GroupSpecProtoMsg): GroupSpec;
    toProto(message: GroupSpec): Uint8Array;
    toProtoMsg(message: GroupSpec): GroupSpecProtoMsg;
};
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
export declare const Resource: {
    typeUrl: string;
    encode(message: Resource, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Resource;
    fromPartial(object: Partial<Resource>): Resource;
    fromAmino(object: ResourceAmino): Resource;
    toAmino(message: Resource): ResourceAmino;
    fromAminoMsg(object: ResourceAminoMsg): Resource;
    fromProtoMsg(message: ResourceProtoMsg): Resource;
    toProto(message: Resource): Uint8Array;
    toProtoMsg(message: Resource): ResourceProtoMsg;
};
