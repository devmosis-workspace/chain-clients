import { DeploymentID, DeploymentIDSDKType } from "./deployment";
import { GroupSpec, GroupSpecSDKType } from "./groupspec";
import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeployment {
    id?: DeploymentID;
    groups: GroupSpec[];
    version: Uint8Array;
    deposit?: Coin;
    /** Depositor pays for the deposit */
    depositor: string;
}
/** MsgCreateDeployment defines an SDK message for creating deployment */
export interface MsgCreateDeploymentSDKType {
    id?: DeploymentIDSDKType;
    groups: GroupSpecSDKType[];
    version: Uint8Array;
    deposit?: CoinSDKType;
    depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponse {
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgCreateDeploymentResponseSDKType {
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeployment {
    id?: DeploymentID;
    amount?: Coin;
    /** Depositor pays for the deposit */
    depositor: string;
}
/** MsgDepositDeployment deposits more funds into the deposit account */
export interface MsgDepositDeploymentSDKType {
    id?: DeploymentIDSDKType;
    amount?: CoinSDKType;
    depositor: string;
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponse {
}
/** MsgCreateDeploymentResponse defines the Msg/CreateDeployment response type. */
export interface MsgDepositDeploymentResponseSDKType {
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeployment {
    id?: DeploymentID;
    version: Uint8Array;
}
/** MsgUpdateDeployment defines an SDK message for updating deployment */
export interface MsgUpdateDeploymentSDKType {
    id?: DeploymentIDSDKType;
    version: Uint8Array;
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponse {
}
/** MsgUpdateDeploymentResponse defines the Msg/UpdateDeployment response type. */
export interface MsgUpdateDeploymentResponseSDKType {
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeployment {
    id?: DeploymentID;
}
/** MsgCloseDeployment defines an SDK message for closing deployment */
export interface MsgCloseDeploymentSDKType {
    id?: DeploymentIDSDKType;
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponse {
}
/** MsgCloseDeploymentResponse defines the Msg/CloseDeployment response type. */
export interface MsgCloseDeploymentResponseSDKType {
}
export declare const MsgCreateDeployment: {
    encode(message: MsgCreateDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCreateDeployment;
    fromPartial(object: Partial<MsgCreateDeployment>): MsgCreateDeployment;
};
export declare const MsgCreateDeploymentResponse: {
    encode(_: MsgCreateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCreateDeploymentResponse;
    fromPartial(_: Partial<MsgCreateDeploymentResponse>): MsgCreateDeploymentResponse;
};
export declare const MsgDepositDeployment: {
    encode(message: MsgDepositDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgDepositDeployment;
    fromPartial(object: Partial<MsgDepositDeployment>): MsgDepositDeployment;
};
export declare const MsgDepositDeploymentResponse: {
    encode(_: MsgDepositDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgDepositDeploymentResponse;
    fromPartial(_: Partial<MsgDepositDeploymentResponse>): MsgDepositDeploymentResponse;
};
export declare const MsgUpdateDeployment: {
    encode(message: MsgUpdateDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateDeployment;
    fromPartial(object: Partial<MsgUpdateDeployment>): MsgUpdateDeployment;
};
export declare const MsgUpdateDeploymentResponse: {
    encode(_: MsgUpdateDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgUpdateDeploymentResponse;
    fromPartial(_: Partial<MsgUpdateDeploymentResponse>): MsgUpdateDeploymentResponse;
};
export declare const MsgCloseDeployment: {
    encode(message: MsgCloseDeployment, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgCloseDeployment;
    fromPartial(object: Partial<MsgCloseDeployment>): MsgCloseDeployment;
};
export declare const MsgCloseDeploymentResponse: {
    encode(_: MsgCloseDeploymentResponse, writer?: _m0.Writer): _m0.Writer;
    fromJSON(_: any): MsgCloseDeploymentResponse;
    fromPartial(_: Partial<MsgCloseDeploymentResponse>): MsgCloseDeploymentResponse;
};
