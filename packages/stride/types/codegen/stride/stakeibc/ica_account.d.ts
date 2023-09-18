import { BinaryWriter } from "../../binary";
export declare enum ICAAccountType {
    DELEGATION = 0,
    FEE = 1,
    WITHDRAWAL = 2,
    REDEMPTION = 3,
    UNRECOGNIZED = -1
}
export declare const ICAAccountTypeSDKType: typeof ICAAccountType;
export declare const ICAAccountTypeAmino: typeof ICAAccountType;
export declare function iCAAccountTypeFromJSON(object: any): ICAAccountType;
export declare function iCAAccountTypeToJSON(object: ICAAccountType): string;
export interface ICAAccount {
    address: string;
    target: ICAAccountType;
}
export interface ICAAccountProtoMsg {
    typeUrl: "/stride.stakeibc.ICAAccount";
    value: Uint8Array;
}
export interface ICAAccountAmino {
    address: string;
    target: ICAAccountType;
}
export interface ICAAccountAminoMsg {
    type: "/stride.stakeibc.ICAAccount";
    value: ICAAccountAmino;
}
export interface ICAAccountSDKType {
    address: string;
    target: ICAAccountType;
}
export declare const ICAAccount: {
    typeUrl: string;
    encode(message: ICAAccount, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ICAAccount;
    fromPartial(object: Partial<ICAAccount>): ICAAccount;
    fromAmino(object: ICAAccountAmino): ICAAccount;
    toAmino(message: ICAAccount): ICAAccountAmino;
    fromAminoMsg(object: ICAAccountAminoMsg): ICAAccount;
    fromProtoMsg(message: ICAAccountProtoMsg): ICAAccount;
    toProto(message: ICAAccount): Uint8Array;
    toProtoMsg(message: ICAAccount): ICAAccountProtoMsg;
};
