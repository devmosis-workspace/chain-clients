import { GroupID, GroupIDSDKType } from "./groupid";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
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
export declare const Group: {
    encode(message: Group, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): Group;
    fromPartial(object: Partial<Group>): Group;
};
