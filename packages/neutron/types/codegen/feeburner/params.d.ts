import { BinaryWriter } from "../binary";
/** Params defines the parameters for the module. */
export interface Params {
    /**
     * Defines Neutron denom, which will be burned during fee processing, any
     * other denom will be sent to Treasury
     */
    neutronDenom: string;
    /** Deprecated in v0.4.4. Is not used anymore */
    reserveAddress: string;
    /** Defines treasury address */
    treasuryAddress: string;
}
export interface ParamsProtoMsg {
    typeUrl: "/neutron.feeburner.Params";
    value: Uint8Array;
}
/** Params defines the parameters for the module. */
export interface ParamsAmino {
    /**
     * Defines Neutron denom, which will be burned during fee processing, any
     * other denom will be sent to Treasury
     */
    neutron_denom: string;
    /** Deprecated in v0.4.4. Is not used anymore */
    reserve_address: string;
    /** Defines treasury address */
    treasury_address: string;
}
export interface ParamsAminoMsg {
    type: "/neutron.feeburner.Params";
    value: ParamsAmino;
}
/** Params defines the parameters for the module. */
export interface ParamsSDKType {
    neutron_denom: string;
    reserve_address: string;
    treasury_address: string;
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
