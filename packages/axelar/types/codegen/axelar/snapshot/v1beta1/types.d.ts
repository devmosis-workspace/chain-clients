import { BinaryWriter } from "../../../binary";
export interface ProxiedValidator {
    validator: Uint8Array;
    proxy: Uint8Array;
    active: boolean;
}
export interface ProxiedValidatorProtoMsg {
    typeUrl: "/axelar.snapshot.v1beta1.ProxiedValidator";
    value: Uint8Array;
}
export interface ProxiedValidatorAmino {
    validator?: string;
    proxy?: string;
    active?: boolean;
}
export interface ProxiedValidatorAminoMsg {
    type: "/axelar.snapshot.v1beta1.ProxiedValidator";
    value: ProxiedValidatorAmino;
}
export interface ProxiedValidatorSDKType {
    validator: Uint8Array;
    proxy: Uint8Array;
    active: boolean;
}
export declare const ProxiedValidator: {
    typeUrl: string;
    encode(message: ProxiedValidator, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): ProxiedValidator;
    fromPartial(object: Partial<ProxiedValidator>): ProxiedValidator;
    fromAmino(object: ProxiedValidatorAmino): ProxiedValidator;
    toAmino(message: ProxiedValidator): ProxiedValidatorAmino;
    fromAminoMsg(object: ProxiedValidatorAminoMsg): ProxiedValidator;
    fromProtoMsg(message: ProxiedValidatorProtoMsg): ProxiedValidator;
    toProto(message: ProxiedValidator): Uint8Array;
    toProtoMsg(message: ProxiedValidator): ProxiedValidatorProtoMsg;
};
