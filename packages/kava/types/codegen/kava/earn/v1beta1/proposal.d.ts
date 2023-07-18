import { Coin, CoinSDKType } from "../../../cosmos/base/v1beta1/coin";
import * as _m0 from "protobufjs/minimal";
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposal {
    title: string;
    description: string;
    amount?: Coin;
}
/** CommunityPoolDepositProposal deposits from the community pool into an earn vault */
export interface CommunityPoolDepositProposalSDKType {
    title: string;
    description: string;
    amount?: CoinSDKType;
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSON {
    title: string;
    description: string;
    amount?: Coin;
    deposit: Coin[];
}
/** CommunityPoolDepositProposalJSON defines a CommunityPoolDepositProposal with a deposit */
export interface CommunityPoolDepositProposalJSONSDKType {
    title: string;
    description: string;
    amount?: CoinSDKType;
    deposit: CoinSDKType[];
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposal {
    title: string;
    description: string;
    amount?: Coin;
}
/** CommunityPoolWithdrawProposal withdraws from an earn vault back to community pool */
export interface CommunityPoolWithdrawProposalSDKType {
    title: string;
    description: string;
    amount?: CoinSDKType;
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSON {
    title: string;
    description: string;
    amount?: Coin;
    deposit: Coin[];
}
/** CommunityPoolWithdrawProposalJSON defines a CommunityPoolWithdrawProposal with a deposit */
export interface CommunityPoolWithdrawProposalJSONSDKType {
    title: string;
    description: string;
    amount?: CoinSDKType;
    deposit: CoinSDKType[];
}
export declare const CommunityPoolDepositProposal: {
    encode(message: CommunityPoolDepositProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommunityPoolDepositProposal;
    fromPartial(object: Partial<CommunityPoolDepositProposal>): CommunityPoolDepositProposal;
};
export declare const CommunityPoolDepositProposalJSON: {
    encode(message: CommunityPoolDepositProposalJSON, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommunityPoolDepositProposalJSON;
    fromPartial(object: Partial<CommunityPoolDepositProposalJSON>): CommunityPoolDepositProposalJSON;
};
export declare const CommunityPoolWithdrawProposal: {
    encode(message: CommunityPoolWithdrawProposal, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommunityPoolWithdrawProposal;
    fromPartial(object: Partial<CommunityPoolWithdrawProposal>): CommunityPoolWithdrawProposal;
};
export declare const CommunityPoolWithdrawProposalJSON: {
    encode(message: CommunityPoolWithdrawProposalJSON, writer?: _m0.Writer): _m0.Writer;
    fromJSON(object: any): CommunityPoolWithdrawProposalJSON;
    fromPartial(object: Partial<CommunityPoolWithdrawProposalJSON>): CommunityPoolWithdrawProposalJSON;
};
