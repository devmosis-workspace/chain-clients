import { DeploymentID, DeploymentIDAmino, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecAmino, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinAmino, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
    id: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit: Coin;
    /** Depositor pays for the deposit */
    depositor: string;
}
export interface MsgCreateDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgCreateDeployment";
    value: Uint8Array;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentAmino {
    id?: DeploymentIDAmino;
    groups?: GroupSpecAmino[];
    version?: string;
    deposit?: CoinAmino;
    /** Depositor pays for the deposit */
    depositor?: string;
}
export interface MsgCreateDeploymentAminoMsg {
    type: "/akash.deployment.v1beta2.MsgCreateDeployment";
    value: MsgCreateDeploymentAmino;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
    id: DeploymentIDSDKType;
    groups: GroupSpecSDKType[];
    version: Uint8Array;
    deposit: CoinSDKType;
    depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
}
export interface MsgCreateDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgCreateDeploymentResponse";
    value: Uint8Array;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseAmino {
}
export interface MsgCreateDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta2.MsgCreateDeploymentResponse";
    value: MsgCreateDeploymentResponseAmino;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
    id: DeploymentID;
    amount: Coin;
    /** Depositor pays for the deposit */
    depositor: string;
}
export interface MsgDepositDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgDepositDeployment";
    value: Uint8Array;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentAmino {
    id?: DeploymentIDAmino;
    amount?: CoinAmino;
    /** Depositor pays for the deposit */
    depositor?: string;
}
export interface MsgDepositDeploymentAminoMsg {
    type: "/akash.deployment.v1beta2.MsgDepositDeployment";
    value: MsgDepositDeploymentAmino;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
    id: DeploymentIDSDKType;
    amount: CoinSDKType;
    depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
}
export interface MsgDepositDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgDepositDeploymentResponse";
    value: Uint8Array;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseAmino {
}
export interface MsgDepositDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta2.MsgDepositDeploymentResponse";
    value: MsgDepositDeploymentResponseAmino;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
    id: DeploymentID;
    version: Uint8Array;
}
export interface MsgUpdateDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeployment";
    value: Uint8Array;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentAmino {
    id?: DeploymentIDAmino;
    version?: string;
}
export interface MsgUpdateDeploymentAminoMsg {
    type: "/akash.deployment.v1beta2.MsgUpdateDeployment";
    value: MsgUpdateDeploymentAmino;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
    id: DeploymentIDSDKType;
    version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
}
export interface MsgUpdateDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgUpdateDeploymentResponse";
    value: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseAmino {
}
export interface MsgUpdateDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta2.MsgUpdateDeploymentResponse";
    value: MsgUpdateDeploymentResponseAmino;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
    id: DeploymentID;
}
export interface MsgCloseDeploymentProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseDeployment";
    value: Uint8Array;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentAmino {
    id?: DeploymentIDAmino;
}
export interface MsgCloseDeploymentAminoMsg {
    type: "/akash.deployment.v1beta2.MsgCloseDeployment";
    value: MsgCloseDeploymentAmino;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
    id: DeploymentIDSDKType;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
}
export interface MsgCloseDeploymentResponseProtoMsg {
    typeUrl: "/akash.deployment.v1beta2.MsgCloseDeploymentResponse";
    value: Uint8Array;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseAmino {
}
export interface MsgCloseDeploymentResponseAminoMsg {
    type: "/akash.deployment.v1beta2.MsgCloseDeploymentResponse";
    value: MsgCloseDeploymentResponseAmino;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {
}
export declare const MsgCreateDeployment: {
    typeUrl: string;
    encode(message: MsgCreateDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCreateDeployment;
    fromPartial(object: Partial<MsgCreateDeployment>): MsgCreateDeployment;
    fromAmino(object: MsgCreateDeploymentAmino): MsgCreateDeployment;
    toAmino(message: MsgCreateDeployment): MsgCreateDeploymentAmino;
    fromAminoMsg(object: MsgCreateDeploymentAminoMsg): MsgCreateDeployment;
    fromProtoMsg(message: MsgCreateDeploymentProtoMsg): MsgCreateDeployment;
    toProto(message: MsgCreateDeployment): Uint8Array;
    toProtoMsg(message: MsgCreateDeployment): MsgCreateDeploymentProtoMsg;
};
export declare const MsgCreateDeploymentResponse: {
    typeUrl: string;
    encode(_: MsgCreateDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    fromPartial(_: Partial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse;
    fromAmino(_: MsgCreateDeploymentResponseAmino): MsgCreateDeploymentResponse;
    toAmino(_: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseAmino;
    fromAminoMsg(object: MsgCreateDeploymentResponseAminoMsg): MsgCreateDeploymentResponse;
    fromProtoMsg(message: MsgCreateDeploymentResponseProtoMsg): MsgCreateDeploymentResponse;
    toProto(message: MsgCreateDeploymentResponse): Uint8Array;
    toProtoMsg(message: MsgCreateDeploymentResponse): MsgCreateDeploymentResponseProtoMsg;
};
export declare const MsgDepositDeployment: {
    typeUrl: string;
    encode(message: MsgDepositDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDepositDeployment;
    fromPartial(object: Partial<MsgDepositDeployment>): MsgDepositDeployment;
    fromAmino(object: MsgDepositDeploymentAmino): MsgDepositDeployment;
    toAmino(message: MsgDepositDeployment): MsgDepositDeploymentAmino;
    fromAminoMsg(object: MsgDepositDeploymentAminoMsg): MsgDepositDeployment;
    fromProtoMsg(message: MsgDepositDeploymentProtoMsg): MsgDepositDeployment;
    toProto(message: MsgDepositDeployment): Uint8Array;
    toProtoMsg(message: MsgDepositDeployment): MsgDepositDeploymentProtoMsg;
};
export declare const MsgDepositDeploymentResponse: {
    typeUrl: string;
    encode(_: MsgDepositDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    fromPartial(_: Partial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse;
    fromAmino(_: MsgDepositDeploymentResponseAmino): MsgDepositDeploymentResponse;
    toAmino(_: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseAmino;
    fromAminoMsg(object: MsgDepositDeploymentResponseAminoMsg): MsgDepositDeploymentResponse;
    fromProtoMsg(message: MsgDepositDeploymentResponseProtoMsg): MsgDepositDeploymentResponse;
    toProto(message: MsgDepositDeploymentResponse): Uint8Array;
    toProtoMsg(message: MsgDepositDeploymentResponse): MsgDepositDeploymentResponseProtoMsg;
};
export declare const MsgUpdateDeployment: {
    typeUrl: string;
    encode(message: MsgUpdateDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateDeployment;
    fromPartial(object: Partial<MsgUpdateDeployment>): MsgUpdateDeployment;
    fromAmino(object: MsgUpdateDeploymentAmino): MsgUpdateDeployment;
    toAmino(message: MsgUpdateDeployment): MsgUpdateDeploymentAmino;
    fromAminoMsg(object: MsgUpdateDeploymentAminoMsg): MsgUpdateDeployment;
    fromProtoMsg(message: MsgUpdateDeploymentProtoMsg): MsgUpdateDeployment;
    toProto(message: MsgUpdateDeployment): Uint8Array;
    toProtoMsg(message: MsgUpdateDeployment): MsgUpdateDeploymentProtoMsg;
};
export declare const MsgUpdateDeploymentResponse: {
    typeUrl: string;
    encode(_: MsgUpdateDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    fromPartial(_: Partial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse;
    fromAmino(_: MsgUpdateDeploymentResponseAmino): MsgUpdateDeploymentResponse;
    toAmino(_: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseAmino;
    fromAminoMsg(object: MsgUpdateDeploymentResponseAminoMsg): MsgUpdateDeploymentResponse;
    fromProtoMsg(message: MsgUpdateDeploymentResponseProtoMsg): MsgUpdateDeploymentResponse;
    toProto(message: MsgUpdateDeploymentResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateDeploymentResponse): MsgUpdateDeploymentResponseProtoMsg;
};
export declare const MsgCloseDeployment: {
    typeUrl: string;
    encode(message: MsgCloseDeployment, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCloseDeployment;
    fromPartial(object: Partial<MsgCloseDeployment>): MsgCloseDeployment;
    fromAmino(object: MsgCloseDeploymentAmino): MsgCloseDeployment;
    toAmino(message: MsgCloseDeployment): MsgCloseDeploymentAmino;
    fromAminoMsg(object: MsgCloseDeploymentAminoMsg): MsgCloseDeployment;
    fromProtoMsg(message: MsgCloseDeploymentProtoMsg): MsgCloseDeployment;
    toProto(message: MsgCloseDeployment): Uint8Array;
    toProtoMsg(message: MsgCloseDeployment): MsgCloseDeploymentProtoMsg;
};
export declare const MsgCloseDeploymentResponse: {
    typeUrl: string;
    encode(_: MsgCloseDeploymentResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    fromPartial(_: Partial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse;
    fromAmino(_: MsgCloseDeploymentResponseAmino): MsgCloseDeploymentResponse;
    toAmino(_: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseAmino;
    fromAminoMsg(object: MsgCloseDeploymentResponseAminoMsg): MsgCloseDeploymentResponse;
    fromProtoMsg(message: MsgCloseDeploymentResponseProtoMsg): MsgCloseDeploymentResponse;
    toProto(message: MsgCloseDeploymentResponse): Uint8Array;
    toProtoMsg(message: MsgCloseDeploymentResponse): MsgCloseDeploymentResponseProtoMsg;
};
