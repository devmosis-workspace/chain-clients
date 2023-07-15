import { Params, ParamsSDKType, ValidatorSigningInfo, ValidatorSigningInfoSDKType } from "./slashing";
import { Long } from "../../../helpers";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisState {
    /** params defines all the parameters of the module. */
    params?: Params;
    /**
     * signing_infos represents a map between validator addresses and their
     * signing infos.
     */
    signingInfos: SigningInfo[];
    /**
     * missed_blocks represents a map between validator addresses and their
     * missed blocks.
     */
    missedBlocks: ValidatorMissedBlocks[];
}
/** GenesisState defines the slashing module's genesis state. */
export interface GenesisStateSDKType {
    params?: ParamsSDKType;
    signing_infos: SigningInfoSDKType[];
    missed_blocks: ValidatorMissedBlocksSDKType[];
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfo {
    /** address is the validator address. */
    address: string;
    /** validator_signing_info represents the signing info of this validator. */
    validatorSigningInfo?: ValidatorSigningInfo;
}
/** SigningInfo stores validator signing info of corresponding address. */
export interface SigningInfoSDKType {
    address: string;
    validator_signing_info?: ValidatorSigningInfoSDKType;
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocks {
    /** address is the validator address. */
    address: string;
    /** missed_blocks is an array of missed blocks by the validator. */
    missedBlocks: MissedBlock[];
}
/**
 * ValidatorMissedBlocks contains array of missed blocks of corresponding
 * address.
 */
export interface ValidatorMissedBlocksSDKType {
    address: string;
    missed_blocks: MissedBlockSDKType[];
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlock {
    /** index is the height at which the block was missed. */
    index: Long;
    /** missed is the missed status. */
    missed: boolean;
}
/** MissedBlock contains height and missed status as boolean. */
export interface MissedBlockSDKType {
    index: Long;
    missed: boolean;
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
export declare const SigningInfo: {
    encode(message: SigningInfo, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): SigningInfo;
    fromPartial(object: Partial<SigningInfo>): SigningInfo;
};
export declare const ValidatorMissedBlocks: {
    encode(message: ValidatorMissedBlocks, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): ValidatorMissedBlocks;
    fromPartial(object: Partial<ValidatorMissedBlocks>): ValidatorMissedBlocks;
};
export declare const MissedBlock: {
    encode(message: MissedBlock, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MissedBlock;
    fromPartial(object: Partial<MissedBlock>): MissedBlock;
};
