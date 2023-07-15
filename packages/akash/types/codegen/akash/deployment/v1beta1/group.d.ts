import { PlacementRequirements, PlacementRequirementsSDKType } from "../../base/v1beta1/attribute";
import { ResourceUnits, ResourceUnitsSDKType } from "../../base/v1beta1/resource";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
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
export declare function group_StateFromJSON(object: any): Group_State;
export declare function group_StateToJSON(object: Group_State): string;
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroup {
    id?: GroupID;
}
/** MsgCloseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgCloseGroupSDKType {
    id?: GroupIDSDKType;
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponse {
}
/** MsgCloseGroupResponse defines the Msg/CloseGroup response type. */
export interface MsgCloseGroupResponseSDKType {
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroup {
    id?: GroupID;
}
/** MsgPauseGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgPauseGroupSDKType {
    id?: GroupIDSDKType;
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponse {
}
/** MsgPauseGroupResponse defines the Msg/PauseGroup response type. */
export interface MsgPauseGroupResponseSDKType {
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroup {
    id?: GroupID;
}
/** MsgStartGroup defines SDK message to close a single Group within a Deployment. */
export interface MsgStartGroupSDKType {
    id?: GroupIDSDKType;
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponse {
}
/** MsgStartGroupResponse defines the Msg/StartGroup response type. */
export interface MsgStartGroupResponseSDKType {
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupID {
    owner: string;
    dseq: Long;
    gseq: number;
}
/** GroupID stores owner, deployment sequence number and group sequence number */
export interface GroupIDSDKType {
    owner: string;
    dseq: Long;
    gseq: number;
}
/** GroupSpec stores group specifications */
export interface GroupSpec {
    name: string;
    requirements?: PlacementRequirements;
    resources: Resource[];
}
/** GroupSpec stores group specifications */
export interface GroupSpecSDKType {
    name: string;
    requirements?: PlacementRequirementsSDKType;
    resources: ResourceSDKType[];
}
/** Group stores group id, state and specifications of group */
export interface Group {
    groupId?: GroupID;
    state: Group_State;
    groupSpec?: GroupSpec;
    createdAt: Long;
}
/** Group stores group id, state and specifications of group */
export interface GroupSDKType {
    group_id?: GroupIDSDKType;
    state: Group_State;
    group_spec?: GroupSpecSDKType;
    created_at: Long;
}
/** Resource stores unit, total count and price of resource */
export interface Resource {
    resources?: ResourceUnits;
    count: number;
    price?: Coin;
}
/** Resource stores unit, total count and price of resource */
export interface ResourceSDKType {
    resources?: ResourceUnitsSDKType;
    count: number;
    price?: CoinSDKType;
}
export declare const MsgCloseGroup: {
    encode(message: MsgCloseGroup, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCloseGroup;
    fromPartial(object: Partial<MsgCloseGroup>): MsgCloseGroup;
};
export declare const MsgCloseGroupResponse: {
    encode(_: MsgCloseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCloseGroupResponse;
    fromPartial(_: Partial<MsgCloseGroupResponse>): MsgCloseGroupResponse;
};
export declare const MsgPauseGroup: {
    encode(message: MsgPauseGroup, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgPauseGroup;
    fromPartial(object: Partial<MsgPauseGroup>): MsgPauseGroup;
};
export declare const MsgPauseGroupResponse: {
    encode(_: MsgPauseGroupResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgPauseGroupResponse;
    fromPartial(_: Partial<MsgPauseGroupResponse>): MsgPauseGroupResponse;
};
export declare const MsgStartGroup: {
    encode(message: MsgStartGroup, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgStartGroup;
    fromPartial(object: Partial<MsgStartGroup>): MsgStartGroup;
};
export declare const MsgStartGroupResponse: {
    encode(_: MsgStartGroupResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgStartGroupResponse;
    fromPartial(_: Partial<MsgStartGroupResponse>): MsgStartGroupResponse;
};
export declare const GroupID: {
    encode(message: GroupID, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GroupID;
    fromPartial(object: Partial<GroupID>): GroupID;
};
export declare const GroupSpec: {
    encode(message: GroupSpec, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GroupSpec;
    fromPartial(object: Partial<GroupSpec>): GroupSpec;
};
export declare const Group: {
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Group;
    fromPartial(object: Partial<Group>): Group;
};
export declare const Resource: {
    encode(message: Resource, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Resource;
    fromPartial(object: Partial<Resource>): Resource;
};
