import { Params, ParamsAmino, ParamsSDKType } from "./cron";
import { BinaryWriter } from "../../../../binary";
/** MsgPromoteToPrivilegedContract defines the Msg/PromoteToPrivilegedContract */
export interface MsgPromoteToPrivilegedContract {
    /**
     * Authority is the address of the governance account or any whitelisted
     * address
     */
    authority: string;
    /** Contract is the bech32 address of the smart contract */
    contract: string;
}
export interface MsgPromoteToPrivilegedContractProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract";
    value: Uint8Array;
}
/** MsgPromoteToPrivilegedContract defines the Msg/PromoteToPrivilegedContract */
export interface MsgPromoteToPrivilegedContractAmino {
    /**
     * Authority is the address of the governance account or any whitelisted
     * address
     */
    authority?: string;
    /** Contract is the bech32 address of the smart contract */
    contract?: string;
}
export interface MsgPromoteToPrivilegedContractAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContract";
    value: MsgPromoteToPrivilegedContractAmino;
}
/** MsgPromoteToPrivilegedContract defines the Msg/PromoteToPrivilegedContract */
export interface MsgPromoteToPrivilegedContractSDKType {
    authority: string;
    contract: string;
}
export interface MsgPromoteToPrivilegedContractResponse {
}
export interface MsgPromoteToPrivilegedContractResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContractResponse";
    value: Uint8Array;
}
export interface MsgPromoteToPrivilegedContractResponseAmino {
}
export interface MsgPromoteToPrivilegedContractResponseAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.MsgPromoteToPrivilegedContractResponse";
    value: MsgPromoteToPrivilegedContractResponseAmino;
}
export interface MsgPromoteToPrivilegedContractResponseSDKType {
}
export interface MsgDemoteFromPrivilegedContract {
    /**
     * Authority is the address of the governance account or any whitelisted
     * address
     */
    authority: string;
    /** Contract is the bech32 address of the smart contract */
    contract: string;
}
export interface MsgDemoteFromPrivilegedContractProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract";
    value: Uint8Array;
}
export interface MsgDemoteFromPrivilegedContractAmino {
    /**
     * Authority is the address of the governance account or any whitelisted
     * address
     */
    authority?: string;
    /** Contract is the bech32 address of the smart contract */
    contract?: string;
}
export interface MsgDemoteFromPrivilegedContractAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContract";
    value: MsgDemoteFromPrivilegedContractAmino;
}
export interface MsgDemoteFromPrivilegedContractSDKType {
    authority: string;
    contract: string;
}
export interface MsgDemoteFromPrivilegedContractResponse {
}
export interface MsgDemoteFromPrivilegedContractResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContractResponse";
    value: Uint8Array;
}
export interface MsgDemoteFromPrivilegedContractResponseAmino {
}
export interface MsgDemoteFromPrivilegedContractResponseAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.MsgDemoteFromPrivilegedContractResponse";
    value: MsgDemoteFromPrivilegedContractResponseAmino;
}
export interface MsgDemoteFromPrivilegedContractResponseSDKType {
}
export interface MsgUpdateParams {
    /** Authority is the address of the governance account. */
    authority: string;
    /** NOTE: All parameters must be supplied. */
    params: Params;
}
export interface MsgUpdateParamsProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.MsgUpdateParams";
    value: Uint8Array;
}
export interface MsgUpdateParamsAmino {
    /** Authority is the address of the governance account. */
    authority?: string;
    /** NOTE: All parameters must be supplied. */
    params?: ParamsAmino;
}
export interface MsgUpdateParamsAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.MsgUpdateParams";
    value: MsgUpdateParamsAmino;
}
export interface MsgUpdateParamsSDKType {
    authority: string;
    params: ParamsSDKType;
}
export interface MsgUpdateParamsResponse {
}
export interface MsgUpdateParamsResponseProtoMsg {
    typeUrl: "/publicawesome.stargaze.cron.v1.MsgUpdateParamsResponse";
    value: Uint8Array;
}
export interface MsgUpdateParamsResponseAmino {
}
export interface MsgUpdateParamsResponseAminoMsg {
    type: "/publicawesome.stargaze.cron.v1.MsgUpdateParamsResponse";
    value: MsgUpdateParamsResponseAmino;
}
export interface MsgUpdateParamsResponseSDKType {
}
export declare const MsgPromoteToPrivilegedContract: {
    typeUrl: string;
    encode(message: MsgPromoteToPrivilegedContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgPromoteToPrivilegedContract;
    fromPartial(object: Partial<MsgPromoteToPrivilegedContract>): MsgPromoteToPrivilegedContract;
    fromAmino(object: MsgPromoteToPrivilegedContractAmino): MsgPromoteToPrivilegedContract;
    toAmino(message: MsgPromoteToPrivilegedContract): MsgPromoteToPrivilegedContractAmino;
    fromAminoMsg(object: MsgPromoteToPrivilegedContractAminoMsg): MsgPromoteToPrivilegedContract;
    fromProtoMsg(message: MsgPromoteToPrivilegedContractProtoMsg): MsgPromoteToPrivilegedContract;
    toProto(message: MsgPromoteToPrivilegedContract): Uint8Array;
    toProtoMsg(message: MsgPromoteToPrivilegedContract): MsgPromoteToPrivilegedContractProtoMsg;
};
export declare const MsgPromoteToPrivilegedContractResponse: {
    typeUrl: string;
    encode(_: MsgPromoteToPrivilegedContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgPromoteToPrivilegedContractResponse;
    fromPartial(_: Partial<MsgPromoteToPrivilegedContractResponse>): MsgPromoteToPrivilegedContractResponse;
    fromAmino(_: MsgPromoteToPrivilegedContractResponseAmino): MsgPromoteToPrivilegedContractResponse;
    toAmino(_: MsgPromoteToPrivilegedContractResponse): MsgPromoteToPrivilegedContractResponseAmino;
    fromAminoMsg(object: MsgPromoteToPrivilegedContractResponseAminoMsg): MsgPromoteToPrivilegedContractResponse;
    fromProtoMsg(message: MsgPromoteToPrivilegedContractResponseProtoMsg): MsgPromoteToPrivilegedContractResponse;
    toProto(message: MsgPromoteToPrivilegedContractResponse): Uint8Array;
    toProtoMsg(message: MsgPromoteToPrivilegedContractResponse): MsgPromoteToPrivilegedContractResponseProtoMsg;
};
export declare const MsgDemoteFromPrivilegedContract: {
    typeUrl: string;
    encode(message: MsgDemoteFromPrivilegedContract, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgDemoteFromPrivilegedContract;
    fromPartial(object: Partial<MsgDemoteFromPrivilegedContract>): MsgDemoteFromPrivilegedContract;
    fromAmino(object: MsgDemoteFromPrivilegedContractAmino): MsgDemoteFromPrivilegedContract;
    toAmino(message: MsgDemoteFromPrivilegedContract): MsgDemoteFromPrivilegedContractAmino;
    fromAminoMsg(object: MsgDemoteFromPrivilegedContractAminoMsg): MsgDemoteFromPrivilegedContract;
    fromProtoMsg(message: MsgDemoteFromPrivilegedContractProtoMsg): MsgDemoteFromPrivilegedContract;
    toProto(message: MsgDemoteFromPrivilegedContract): Uint8Array;
    toProtoMsg(message: MsgDemoteFromPrivilegedContract): MsgDemoteFromPrivilegedContractProtoMsg;
};
export declare const MsgDemoteFromPrivilegedContractResponse: {
    typeUrl: string;
    encode(_: MsgDemoteFromPrivilegedContractResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgDemoteFromPrivilegedContractResponse;
    fromPartial(_: Partial<MsgDemoteFromPrivilegedContractResponse>): MsgDemoteFromPrivilegedContractResponse;
    fromAmino(_: MsgDemoteFromPrivilegedContractResponseAmino): MsgDemoteFromPrivilegedContractResponse;
    toAmino(_: MsgDemoteFromPrivilegedContractResponse): MsgDemoteFromPrivilegedContractResponseAmino;
    fromAminoMsg(object: MsgDemoteFromPrivilegedContractResponseAminoMsg): MsgDemoteFromPrivilegedContractResponse;
    fromProtoMsg(message: MsgDemoteFromPrivilegedContractResponseProtoMsg): MsgDemoteFromPrivilegedContractResponse;
    toProto(message: MsgDemoteFromPrivilegedContractResponse): Uint8Array;
    toProtoMsg(message: MsgDemoteFromPrivilegedContractResponse): MsgDemoteFromPrivilegedContractResponseProtoMsg;
};
export declare const MsgUpdateParams: {
    typeUrl: string;
    encode(message: MsgUpdateParams, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateParams;
    fromPartial(object: Partial<MsgUpdateParams>): MsgUpdateParams;
    fromAmino(object: MsgUpdateParamsAmino): MsgUpdateParams;
    toAmino(message: MsgUpdateParams): MsgUpdateParamsAmino;
    fromAminoMsg(object: MsgUpdateParamsAminoMsg): MsgUpdateParams;
    fromProtoMsg(message: MsgUpdateParamsProtoMsg): MsgUpdateParams;
    toProto(message: MsgUpdateParams): Uint8Array;
    toProtoMsg(message: MsgUpdateParams): MsgUpdateParamsProtoMsg;
};
export declare const MsgUpdateParamsResponse: {
    typeUrl: string;
    encode(_: MsgUpdateParamsResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateParamsResponse;
    fromPartial(_: Partial<MsgUpdateParamsResponse>): MsgUpdateParamsResponse;
    fromAmino(_: MsgUpdateParamsResponseAmino): MsgUpdateParamsResponse;
    toAmino(_: MsgUpdateParamsResponse): MsgUpdateParamsResponseAmino;
    fromAminoMsg(object: MsgUpdateParamsResponseAminoMsg): MsgUpdateParamsResponse;
    fromProtoMsg(message: MsgUpdateParamsResponseProtoMsg): MsgUpdateParamsResponse;
    toProto(message: MsgUpdateParamsResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateParamsResponse): MsgUpdateParamsResponseProtoMsg;
};
