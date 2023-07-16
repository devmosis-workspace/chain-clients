import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export interface RoyaltyConfigByClass {
    classId: string;
    royaltyConfig?: RoyaltyConfig;
}
export interface RoyaltyConfigByClassSDKType {
    class_id: string;
    royalty_config?: RoyaltyConfigSDKType;
}
export interface RoyaltyConfig {
    rateBasisPoints: Long;
    stakeholders: RoyaltyStakeholder[];
}
export interface RoyaltyConfigSDKType {
    rate_basis_points: Long;
    stakeholders: RoyaltyStakeholderSDKType[];
}
export interface RoyaltyStakeholder {
    account: Uint8Array;
    weight: Long;
}
export interface RoyaltyStakeholderSDKType {
    account: Uint8Array;
    weight: Long;
}
export interface RoyaltyConfigInput {
    rateBasisPoints: Long;
    stakeholders: RoyaltyStakeholderInput[];
}
export interface RoyaltyConfigInputSDKType {
    rate_basis_points: Long;
    stakeholders: RoyaltyStakeholderInputSDKType[];
}
export interface RoyaltyStakeholderInput {
    account: string;
    weight: Long;
}
export interface RoyaltyStakeholderInputSDKType {
    account: string;
    weight: Long;
}
export declare const RoyaltyConfigByClass: {
    encode(message: RoyaltyConfigByClass, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RoyaltyConfigByClass;
    fromPartial(object: Partial<RoyaltyConfigByClass>): RoyaltyConfigByClass;
};
export declare const RoyaltyConfig: {
    encode(message: RoyaltyConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RoyaltyConfig;
    fromPartial(object: Partial<RoyaltyConfig>): RoyaltyConfig;
};
export declare const RoyaltyStakeholder: {
    encode(message: RoyaltyStakeholder, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RoyaltyStakeholder;
    fromPartial(object: Partial<RoyaltyStakeholder>): RoyaltyStakeholder;
};
export declare const RoyaltyConfigInput: {
    encode(message: RoyaltyConfigInput, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RoyaltyConfigInput;
    fromPartial(object: Partial<RoyaltyConfigInput>): RoyaltyConfigInput;
};
export declare const RoyaltyStakeholderInput: {
    encode(message: RoyaltyStakeholderInput, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): RoyaltyStakeholderInput;
    fromPartial(object: Partial<RoyaltyStakeholderInput>): RoyaltyStakeholderInput;
};
