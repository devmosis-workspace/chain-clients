import { BinaryWriter } from "../../../binary";
/** MsgRegisterFeeShare defines a message that registers a FeeShare */
export interface MsgRegisterFeeShare {
    /** contract_address in bech32 format */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same the contract's admin address
     */
    deployerAddress: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the
     * transaction fees
     */
    withdrawerAddress: string;
}
export interface MsgRegisterFeeShareProtoMsg {
    typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShare";
    value: Uint8Array;
}
/** MsgRegisterFeeShare defines a message that registers a FeeShare */
export interface MsgRegisterFeeShareAmino {
    /** contract_address in bech32 format */
    contract_address: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same the contract's admin address
     */
    deployer_address: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the
     * transaction fees
     */
    withdrawer_address: string;
}
export interface MsgRegisterFeeShareAminoMsg {
    type: "/juno.feeshare.v1.MsgRegisterFeeShare";
    value: MsgRegisterFeeShareAmino;
}
/** MsgRegisterFeeShare defines a message that registers a FeeShare */
export interface MsgRegisterFeeShareSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponse {
}
export interface MsgRegisterFeeShareResponseProtoMsg {
    typeUrl: "/juno.feeshare.v1.MsgRegisterFeeShareResponse";
    value: Uint8Array;
}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponseAmino {
}
export interface MsgRegisterFeeShareResponseAminoMsg {
    type: "/juno.feeshare.v1.MsgRegisterFeeShareResponse";
    value: MsgRegisterFeeShareResponseAmino;
}
/** MsgRegisterFeeShareResponse defines the MsgRegisterFeeShare response type */
export interface MsgRegisterFeeShareResponseSDKType {
}
/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */
export interface MsgUpdateFeeShare {
    /** contract_address in bech32 format */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same the contract's admin address
     */
    deployerAddress: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the
     * transaction fees
     */
    withdrawerAddress: string;
}
export interface MsgUpdateFeeShareProtoMsg {
    typeUrl: "/juno.feeshare.v1.MsgUpdateFeeShare";
    value: Uint8Array;
}
/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */
export interface MsgUpdateFeeShareAmino {
    /** contract_address in bech32 format */
    contract_address: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same the contract's admin address
     */
    deployer_address: string;
    /**
     * withdrawer_address is the bech32 address of account receiving the
     * transaction fees
     */
    withdrawer_address: string;
}
export interface MsgUpdateFeeShareAminoMsg {
    type: "/juno.feeshare.v1.MsgUpdateFeeShare";
    value: MsgUpdateFeeShareAmino;
}
/**
 * MsgUpdateFeeShare defines a message that updates the withdrawer address for a
 * registered FeeShare
 */
export interface MsgUpdateFeeShareSDKType {
    contract_address: string;
    deployer_address: string;
    withdrawer_address: string;
}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponse {
}
export interface MsgUpdateFeeShareResponseProtoMsg {
    typeUrl: "/juno.feeshare.v1.MsgUpdateFeeShareResponse";
    value: Uint8Array;
}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponseAmino {
}
export interface MsgUpdateFeeShareResponseAminoMsg {
    type: "/juno.feeshare.v1.MsgUpdateFeeShareResponse";
    value: MsgUpdateFeeShareResponseAmino;
}
/** MsgUpdateFeeShareResponse defines the MsgUpdateFeeShare response type */
export interface MsgUpdateFeeShareResponseSDKType {
}
/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */
export interface MsgCancelFeeShare {
    /** contract_address in bech32 format */
    contractAddress: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same the contract's admin address
     */
    deployerAddress: string;
}
export interface MsgCancelFeeShareProtoMsg {
    typeUrl: "/juno.feeshare.v1.MsgCancelFeeShare";
    value: Uint8Array;
}
/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */
export interface MsgCancelFeeShareAmino {
    /** contract_address in bech32 format */
    contract_address: string;
    /**
     * deployer_address is the bech32 address of message sender. It must be the
     * same the contract's admin address
     */
    deployer_address: string;
}
export interface MsgCancelFeeShareAminoMsg {
    type: "/juno.feeshare.v1.MsgCancelFeeShare";
    value: MsgCancelFeeShareAmino;
}
/** MsgCancelFeeShare defines a message that cancels a registered FeeShare */
export interface MsgCancelFeeShareSDKType {
    contract_address: string;
    deployer_address: string;
}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponse {
}
export interface MsgCancelFeeShareResponseProtoMsg {
    typeUrl: "/juno.feeshare.v1.MsgCancelFeeShareResponse";
    value: Uint8Array;
}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponseAmino {
}
export interface MsgCancelFeeShareResponseAminoMsg {
    type: "/juno.feeshare.v1.MsgCancelFeeShareResponse";
    value: MsgCancelFeeShareResponseAmino;
}
/** MsgCancelFeeShareResponse defines the MsgCancelFeeShare response type */
export interface MsgCancelFeeShareResponseSDKType {
}
export declare const MsgRegisterFeeShare: {
    typeUrl: string;
    encode(message: MsgRegisterFeeShare, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgRegisterFeeShare;
    fromPartial(object: Partial<MsgRegisterFeeShare>): MsgRegisterFeeShare;
    fromAmino(object: MsgRegisterFeeShareAmino): MsgRegisterFeeShare;
    toAmino(message: MsgRegisterFeeShare): MsgRegisterFeeShareAmino;
    fromAminoMsg(object: MsgRegisterFeeShareAminoMsg): MsgRegisterFeeShare;
    fromProtoMsg(message: MsgRegisterFeeShareProtoMsg): MsgRegisterFeeShare;
    toProto(message: MsgRegisterFeeShare): Uint8Array;
    toProtoMsg(message: MsgRegisterFeeShare): MsgRegisterFeeShareProtoMsg;
};
export declare const MsgRegisterFeeShareResponse: {
    typeUrl: string;
    encode(_: MsgRegisterFeeShareResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgRegisterFeeShareResponse;
    fromPartial(_: Partial<MsgRegisterFeeShareResponse>): MsgRegisterFeeShareResponse;
    fromAmino(_: MsgRegisterFeeShareResponseAmino): MsgRegisterFeeShareResponse;
    toAmino(_: MsgRegisterFeeShareResponse): MsgRegisterFeeShareResponseAmino;
    fromAminoMsg(object: MsgRegisterFeeShareResponseAminoMsg): MsgRegisterFeeShareResponse;
    fromProtoMsg(message: MsgRegisterFeeShareResponseProtoMsg): MsgRegisterFeeShareResponse;
    toProto(message: MsgRegisterFeeShareResponse): Uint8Array;
    toProtoMsg(message: MsgRegisterFeeShareResponse): MsgRegisterFeeShareResponseProtoMsg;
};
export declare const MsgUpdateFeeShare: {
    typeUrl: string;
    encode(message: MsgUpdateFeeShare, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgUpdateFeeShare;
    fromPartial(object: Partial<MsgUpdateFeeShare>): MsgUpdateFeeShare;
    fromAmino(object: MsgUpdateFeeShareAmino): MsgUpdateFeeShare;
    toAmino(message: MsgUpdateFeeShare): MsgUpdateFeeShareAmino;
    fromAminoMsg(object: MsgUpdateFeeShareAminoMsg): MsgUpdateFeeShare;
    fromProtoMsg(message: MsgUpdateFeeShareProtoMsg): MsgUpdateFeeShare;
    toProto(message: MsgUpdateFeeShare): Uint8Array;
    toProtoMsg(message: MsgUpdateFeeShare): MsgUpdateFeeShareProtoMsg;
};
export declare const MsgUpdateFeeShareResponse: {
    typeUrl: string;
    encode(_: MsgUpdateFeeShareResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgUpdateFeeShareResponse;
    fromPartial(_: Partial<MsgUpdateFeeShareResponse>): MsgUpdateFeeShareResponse;
    fromAmino(_: MsgUpdateFeeShareResponseAmino): MsgUpdateFeeShareResponse;
    toAmino(_: MsgUpdateFeeShareResponse): MsgUpdateFeeShareResponseAmino;
    fromAminoMsg(object: MsgUpdateFeeShareResponseAminoMsg): MsgUpdateFeeShareResponse;
    fromProtoMsg(message: MsgUpdateFeeShareResponseProtoMsg): MsgUpdateFeeShareResponse;
    toProto(message: MsgUpdateFeeShareResponse): Uint8Array;
    toProtoMsg(message: MsgUpdateFeeShareResponse): MsgUpdateFeeShareResponseProtoMsg;
};
export declare const MsgCancelFeeShare: {
    typeUrl: string;
    encode(message: MsgCancelFeeShare, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): MsgCancelFeeShare;
    fromPartial(object: Partial<MsgCancelFeeShare>): MsgCancelFeeShare;
    fromAmino(object: MsgCancelFeeShareAmino): MsgCancelFeeShare;
    toAmino(message: MsgCancelFeeShare): MsgCancelFeeShareAmino;
    fromAminoMsg(object: MsgCancelFeeShareAminoMsg): MsgCancelFeeShare;
    fromProtoMsg(message: MsgCancelFeeShareProtoMsg): MsgCancelFeeShare;
    toProto(message: MsgCancelFeeShare): Uint8Array;
    toProtoMsg(message: MsgCancelFeeShare): MsgCancelFeeShareProtoMsg;
};
export declare const MsgCancelFeeShareResponse: {
    typeUrl: string;
    encode(_: MsgCancelFeeShareResponse, writer?: BinaryWriter): BinaryWriter;
    fromJSON(_: any): MsgCancelFeeShareResponse;
    fromPartial(_: Partial<MsgCancelFeeShareResponse>): MsgCancelFeeShareResponse;
    fromAmino(_: MsgCancelFeeShareResponseAmino): MsgCancelFeeShareResponse;
    toAmino(_: MsgCancelFeeShareResponse): MsgCancelFeeShareResponseAmino;
    fromAminoMsg(object: MsgCancelFeeShareResponseAminoMsg): MsgCancelFeeShareResponse;
    fromProtoMsg(message: MsgCancelFeeShareResponseProtoMsg): MsgCancelFeeShareResponse;
    toProto(message: MsgCancelFeeShareResponse): Uint8Array;
    toProtoMsg(message: MsgCancelFeeShareResponse): MsgCancelFeeShareResponseProtoMsg;
};
