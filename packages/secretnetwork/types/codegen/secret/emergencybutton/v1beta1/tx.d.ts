import * as _m0 from "protobufjs/minimal";
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitch {
    sender: string;
}
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitchSDKType {
    sender: string;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponse {
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponseSDKType {
}
export declare const MsgToggleIbcSwitch: {
    encode(message: MsgToggleIbcSwitch, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgToggleIbcSwitch;
    fromPartial(object: Partial<MsgToggleIbcSwitch>): MsgToggleIbcSwitch;
};
export declare const MsgToggleIbcSwitchResponse: {
    encode(_: MsgToggleIbcSwitchResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgToggleIbcSwitchResponse;
    fromPartial(_: Partial<MsgToggleIbcSwitchResponse>): MsgToggleIbcSwitchResponse;
};
