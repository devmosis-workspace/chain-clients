import { GroupID, GroupIDSDKType } from "./groupid";
import * as _m0 from "protobufjs/minimal";
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
