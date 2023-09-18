import { BinaryWriter } from "../../../binary";
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorization {
    $typeUrl?: string;
    /** message_type represents the type of the message that is authorized by this DistributionAuthorization. */
    messageType: string;
    /** allowed_list specifies list of addresses that are allowed to execute the distribution messages. */
    allowedList: string[];
}
export interface DistributionAuthorizationProtoMsg {
    typeUrl: "/cosmos.distribution.v1beta1.DistributionAuthorization";
    value: Uint8Array;
}
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorizationAmino {
    /** message_type represents the type of the message that is authorized by this DistributionAuthorization. */
    message_type: string;
    /** allowed_list specifies list of addresses that are allowed to execute the distribution messages. */
    allowed_list: string[];
}
export interface DistributionAuthorizationAminoMsg {
    type: "cosmos-sdk/DistributionAuthorization";
    value: DistributionAuthorizationAmino;
}
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorizationSDKType {
    $typeUrl?: string;
    message_type: string;
    allowed_list: string[];
}
export declare const DistributionAuthorization: {
    typeUrl: string;
    encode(message: DistributionAuthorization, writer?: BinaryWriter): BinaryWriter;
    fromJSON(object: any): DistributionAuthorization;
    fromPartial(object: Partial<DistributionAuthorization>): DistributionAuthorization;
    fromAmino(object: DistributionAuthorizationAmino): DistributionAuthorization;
    toAmino(message: DistributionAuthorization): DistributionAuthorizationAmino;
    fromAminoMsg(object: DistributionAuthorizationAminoMsg): DistributionAuthorization;
    toAminoMsg(message: DistributionAuthorization): DistributionAuthorizationAminoMsg;
    fromProtoMsg(message: DistributionAuthorizationProtoMsg): DistributionAuthorization;
    toProto(message: DistributionAuthorization): Uint8Array;
    toProtoMsg(message: DistributionAuthorization): DistributionAuthorizationProtoMsg;
};
