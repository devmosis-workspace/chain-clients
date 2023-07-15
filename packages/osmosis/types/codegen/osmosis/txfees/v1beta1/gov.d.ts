import { FeeToken, FeeTokenSDKType } from "./feetoken";
import * as _m0 from "protobufjs/minimal";
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposal {
    title: string;
    description: string;
    feetokens: FeeToken[];
}
/**
 * UpdateFeeTokenProposal is a gov Content type for adding new whitelisted fee
 * token(s). It must specify a denom along with gamm pool ID to use as a spot
 * price calculator. It can be used to add new denoms to the whitelist. It can
 * also be used to update the Pool to associate with the denom. If Pool ID is
 * set to 0, it will remove the denom from the whitelisted set.
 */
export interface UpdateFeeTokenProposalSDKType {
    title: string;
    description: string;
    feetokens: FeeTokenSDKType[];
}
export declare const UpdateFeeTokenProposal: {
    encode(message: UpdateFeeTokenProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): UpdateFeeTokenProposal;
    fromPartial(object: Partial<UpdateFeeTokenProposal>): UpdateFeeTokenProposal;
};
