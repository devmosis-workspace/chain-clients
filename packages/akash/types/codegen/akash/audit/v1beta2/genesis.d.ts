import { AuditedAttributes, AuditedAttributesSDKType } from "./audit";
import * as _m0 from "protobufjs/minimal";
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisState {
    attributes: AuditedAttributes[];
}
/** GenesisState defines the basic genesis state used by audit module */
export interface GenesisStateSDKType {
    attributes: AuditedAttributesSDKType[];
}
export declare const GenesisState: {
    encode(message: GenesisState, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): GenesisState;
    fromPartial(object: Partial<GenesisState>): GenesisState;
};
