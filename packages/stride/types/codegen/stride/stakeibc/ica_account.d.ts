import * as _m0 from "protobufjs/minimal";
export declare enum ICAAccountType {
    DELEGATION = 0,
    FEE = 1,
    WITHDRAWAL = 2,
    REDEMPTION = 3,
    UNRECOGNIZED = -1
}
export declare const ICAAccountTypeSDKType: typeof ICAAccountType;
export declare function iCAAccountTypeFromJSON(object: any): ICAAccountType;
export declare function iCAAccountTypeToJSON(object: ICAAccountType): string;
export interface ICAAccount {
    address: string;
    target: ICAAccountType;
}
export interface ICAAccountSDKType {
    address: string;
    target: ICAAccountType;
}
export declare const ICAAccount: {
    encode(message: ICAAccount, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ICAAccount;
    fromPartial(object: Partial<ICAAccount>): ICAAccount;
};
