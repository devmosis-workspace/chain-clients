import { Timestamp, TimestampSDKType } from "../../../google/protobuf/timestamp";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
export declare enum ClassParentType {
    UNKNOWN = 0,
    ISCN = 1,
    ACCOUNT = 2,
    UNRECOGNIZED = -1
}
export declare const ClassParentTypeSDKType: typeof ClassParentType;
export declare function classParentTypeFromJSON(object: any): ClassParentType;
export declare function classParentTypeToJSON(object: ClassParentType): string;
export interface ClassData {
    metadata: Uint8Array;
    parent?: ClassParent;
    config?: ClassConfig;
    blindBoxState?: BlindBoxState;
}
export interface ClassDataSDKType {
    metadata: Uint8Array;
    parent?: ClassParentSDKType;
    config?: ClassConfigSDKType;
    blind_box_state?: BlindBoxStateSDKType;
}
export interface ClassParent {
    type: ClassParentType;
    iscnIdPrefix: string;
    iscnVersionAtMint: Long;
    account: string;
}
export interface ClassParentSDKType {
    type: ClassParentType;
    iscn_id_prefix: string;
    iscn_version_at_mint: Long;
    account: string;
}
export interface MintPeriod {
    startTime?: Timestamp;
    allowedAddresses: string[];
    mintPrice: Long;
}
export interface MintPeriodSDKType {
    start_time?: TimestampSDKType;
    allowed_addresses: string[];
    mint_price: Long;
}
export interface ClassConfig {
    burnable: boolean;
    maxSupply: Long;
    blindBoxConfig?: BlindBoxConfig;
}
export interface ClassConfigSDKType {
    burnable: boolean;
    max_supply: Long;
    blind_box_config?: BlindBoxConfigSDKType;
}
export interface BlindBoxConfig {
    mintPeriods: MintPeriod[];
    revealTime?: Timestamp;
}
export interface BlindBoxConfigSDKType {
    mint_periods: MintPeriodSDKType[];
    reveal_time?: TimestampSDKType;
}
export interface BlindBoxState {
    contentCount: Long;
    toBeRevealed: boolean;
}
export interface BlindBoxStateSDKType {
    content_count: Long;
    to_be_revealed: boolean;
}
export declare const ClassData: {
    encode(message: ClassData, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassData;
    fromPartial(object: Partial<ClassData>): ClassData;
};
export declare const ClassParent: {
    encode(message: ClassParent, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassParent;
    fromPartial(object: Partial<ClassParent>): ClassParent;
};
export declare const MintPeriod: {
    encode(message: MintPeriod, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MintPeriod;
    fromPartial(object: Partial<MintPeriod>): MintPeriod;
};
export declare const ClassConfig: {
    encode(message: ClassConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ClassConfig;
    fromPartial(object: Partial<ClassConfig>): ClassConfig;
};
export declare const BlindBoxConfig: {
    encode(message: BlindBoxConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BlindBoxConfig;
    fromPartial(object: Partial<BlindBoxConfig>): BlindBoxConfig;
};
export declare const BlindBoxState: {
    encode(message: BlindBoxState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): BlindBoxState;
    fromPartial(object: Partial<BlindBoxState>): BlindBoxState;
};
