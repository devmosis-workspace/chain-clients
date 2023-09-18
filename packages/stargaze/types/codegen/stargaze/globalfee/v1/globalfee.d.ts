import { DecCoin, DecCoinAmino, DecCoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import { BinaryWriter } from "../../../binary";
/** Params holds parameters for the globalfee module. */
export interface Params {
    /** Addresses which are whitelisted to modify the gas free operations */
    privilegedAddresses: string[];
    /** Minimum stores the minimum gas price(s) for all TX on the chain. */
    minimumGasPrices: DecCoin[];
}
export interface ParamsProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.Params";
    value: Uint8Array;
}
/** Params holds parameters for the globalfee module. */
export interface ParamsAmino {
    /** Addresses which are whitelisted to modify the gas free operations */
    privileged_addresses: string[];
    /** Minimum stores the minimum gas price(s) for all TX on the chain. */
    minimum_gas_prices: DecCoinAmino[];
}
export interface ParamsAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.Params";
    value: ParamsAmino;
}
/** Params holds parameters for the globalfee module. */
export interface ParamsSDKType {
    privileged_addresses: string[];
    minimum_gas_prices: DecCoinSDKType[];
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorization {
    /** authorized code ids */
    codeId: bigint;
    /** authorized contract operation methods */
    methods: string[];
}
export interface CodeAuthorizationProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization";
    value: Uint8Array;
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorizationAmino {
    /** authorized code ids */
    code_id: string;
    /** authorized contract operation methods */
    methods: string[];
}
export interface CodeAuthorizationAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.CodeAuthorization";
    value: CodeAuthorizationAmino;
}
/** Configuration for code Ids which can have zero gas operations */
export interface CodeAuthorizationSDKType {
    code_id: bigint;
    methods: string[];
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorization {
    /** authorized contract addresses */
    contractAddress: string;
    /** authorized contract operation methods */
    methods: string[];
}
export interface ContractAuthorizationProtoMsg {
    typeUrl: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization";
    value: Uint8Array;
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorizationAmino {
    /** authorized contract addresses */
    contract_address: string;
    /** authorized contract operation methods */
    methods: string[];
}
export interface ContractAuthorizationAminoMsg {
    type: "/publicawesome.stargaze.globalfee.v1.ContractAuthorization";
    value: ContractAuthorizationAmino;
}
/** Configuration for contract addresses which can have zero gas operations */
export interface ContractAuthorizationSDKType {
    contract_address: string;
    methods: string[];
}
export declare const Params: {
    typeUrl: string;
    encode(message: Params, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): Params;
    fromPartial(object: Partial<Params>): Params;
    fromAmino(object: ParamsAmino): Params;
    toAmino(message: Params): ParamsAmino;
    fromAminoMsg(object: ParamsAminoMsg): Params;
    fromProtoMsg(message: ParamsProtoMsg): Params;
    toProto(message: Params): Uint8Array;
    toProtoMsg(message: Params): ParamsProtoMsg;
};
export declare const CodeAuthorization: {
    typeUrl: string;
    encode(message: CodeAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): CodeAuthorization;
    fromPartial(object: Partial<CodeAuthorization>): CodeAuthorization;
    fromAmino(object: CodeAuthorizationAmino): CodeAuthorization;
    toAmino(message: CodeAuthorization): CodeAuthorizationAmino;
    fromAminoMsg(object: CodeAuthorizationAminoMsg): CodeAuthorization;
    fromProtoMsg(message: CodeAuthorizationProtoMsg): CodeAuthorization;
    toProto(message: CodeAuthorization): Uint8Array;
    toProtoMsg(message: CodeAuthorization): CodeAuthorizationProtoMsg;
};
export declare const ContractAuthorization: {
    typeUrl: string;
    encode(message: ContractAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ContractAuthorization;
    fromPartial(object: Partial<ContractAuthorization>): ContractAuthorization;
    fromAmino(object: ContractAuthorizationAmino): ContractAuthorization;
    toAmino(message: ContractAuthorization): ContractAuthorizationAmino;
    fromAminoMsg(object: ContractAuthorizationAminoMsg): ContractAuthorization;
    fromProtoMsg(message: ContractAuthorizationProtoMsg): ContractAuthorization;
    toProto(message: ContractAuthorization): Uint8Array;
    toProtoMsg(message: ContractAuthorization): ContractAuthorizationProtoMsg;
};
