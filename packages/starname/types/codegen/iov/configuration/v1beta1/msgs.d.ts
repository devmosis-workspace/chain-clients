import { Config, ConfigSDKType, Fees, FeesSDKType } from "./types";
import * as _m0 from "protobufjs/minimal";
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfig {
    /** Signer is the address of the entity who is doing the transaction */
    signer: string;
    /** NewConfiguration contains the new configuration data */
    newConfiguration?: Config;
}
/** MsgUpdateConfig is used to update starname configuration */
export interface MsgUpdateConfigSDKType {
    signer: string;
    new_configuration?: ConfigSDKType;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFees {
    fees?: Fees;
    configurer: string;
}
/**
 * MsgUpdateFees is used to update the starname product fees in the starname
 * module.
 */
export interface MsgUpdateFeesSDKType {
    fees?: FeesSDKType;
    configurer: string;
}
export declare const MsgUpdateConfig: {
    encode(message: MsgUpdateConfig, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateConfig;
    fromPartial(object: Partial<MsgUpdateConfig>): MsgUpdateConfig;
};
export declare const MsgUpdateFees: {
    encode(message: MsgUpdateFees, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): MsgUpdateFees;
    fromPartial(object: Partial<MsgUpdateFees>): MsgUpdateFees;
};
