import { BinaryWriter } from "../../../binary";
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitch {
    sender: string;
}
export interface MsgToggleIbcSwitchProtoMsg {
    typeUrl: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch";
    value: Uint8Array;
}
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitchAmino {
    sender?: string;
}
export interface MsgToggleIbcSwitchAminoMsg {
    type: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitch";
    value: MsgToggleIbcSwitchAmino;
}
/** MsgToggleIbcSwitch represents a message to toggle the emergencybutton status by the defined pauser. */
export interface MsgToggleIbcSwitchSDKType {
    sender: string;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponse {
}
export interface MsgToggleIbcSwitchResponseProtoMsg {
    typeUrl: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitchResponse";
    value: Uint8Array;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponseAmino {
}
export interface MsgToggleIbcSwitchResponseAminoMsg {
    type: "/secret.emergencybutton.v1beta1.MsgToggleIbcSwitchResponse";
    value: MsgToggleIbcSwitchResponseAmino;
}
/** MsgToggleIbcSwitchResponse defines the response type for the toggle. */
export interface MsgToggleIbcSwitchResponseSDKType {
}
export declare const MsgToggleIbcSwitch: {
    typeUrl: string;
    encode(message: MsgToggleIbcSwitch, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgToggleIbcSwitch;
    fromPartial(object: Partial<MsgToggleIbcSwitch>): MsgToggleIbcSwitch;
    fromAmino(object: MsgToggleIbcSwitchAmino): MsgToggleIbcSwitch;
    toAmino(message: MsgToggleIbcSwitch): MsgToggleIbcSwitchAmino;
    fromAminoMsg(object: MsgToggleIbcSwitchAminoMsg): MsgToggleIbcSwitch;
    fromProtoMsg(message: MsgToggleIbcSwitchProtoMsg): MsgToggleIbcSwitch;
    toProto(message: MsgToggleIbcSwitch): Uint8Array;
    toProtoMsg(message: MsgToggleIbcSwitch): MsgToggleIbcSwitchProtoMsg;
};
export declare const MsgToggleIbcSwitchResponse: {
    typeUrl: string;
    encode(_: MsgToggleIbcSwitchResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgToggleIbcSwitchResponse;
    fromPartial(_: Partial<MsgToggleIbcSwitchResponse>): MsgToggleIbcSwitchResponse;
    fromAmino(_: MsgToggleIbcSwitchResponseAmino): MsgToggleIbcSwitchResponse;
    toAmino(_: MsgToggleIbcSwitchResponse): MsgToggleIbcSwitchResponseAmino;
    fromAminoMsg(object: MsgToggleIbcSwitchResponseAminoMsg): MsgToggleIbcSwitchResponse;
    fromProtoMsg(message: MsgToggleIbcSwitchResponseProtoMsg): MsgToggleIbcSwitchResponse;
    toProto(message: MsgToggleIbcSwitchResponse): Uint8Array;
    toProtoMsg(message: MsgToggleIbcSwitchResponse): MsgToggleIbcSwitchResponseProtoMsg;
};
