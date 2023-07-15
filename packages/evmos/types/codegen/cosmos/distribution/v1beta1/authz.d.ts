import * as _m0 from "protobufjs/minimal";
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorization {
    /** message_type represents the type of the message that is authorized by this DistributionAuthorization. */
    messageType: string;
    /** allowed_list specifies list of addresses that are allowed to execute the distribution messages. */
    allowedList: string[];
}
/**
 * DistributionAuthorization defines a grant that can be given to an address to allow them to
 * execute distribution messages on behalf of the granter.
 */
export interface DistributionAuthorizationSDKType {
    message_type: string;
    allowed_list: string[];
}
export declare const DistributionAuthorization: {
    encode(message: DistributionAuthorization, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): DistributionAuthorization;
    fromPartial(object: Partial<DistributionAuthorization>): DistributionAuthorization;
};
